import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Pagination from 'react-bootstrap/Pagination';

import NewsCard from '../NewsCard';
import Search from '../Search';

import { NewsListProps, NewsListState, SearchForm } from '../../types'

const NewsList: React.FC<NewsListProps> = ({ getNews }) => {
  const [state, setState] = useState<NewsListState>({
    query: '',
    pageNumber: 1,
    pages: 0,
    news: [],
  });
  const [loading, setLoading] = useState(false);
  const [pagination, setPages] = useState<Array<number>>([])

  async function updateNews(query: string, pageNumber: number) {
    setLoading(true);

    try {
      const data = await getNews(query, pageNumber);
      setState({
        news: data.news,
        pages: data.pages,
        pageNumber,
        query,
        error: ''
      });
      syncPagination(pageNumber, data.pages);
    } catch (e) {
      let error = 'Error retrieving news';

      if (typeof e === 'string') {
        error = e;
      } else if (e instanceof Error) {
        error = e.message;
      }
      setState({ ...state, error });
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  function onSearch(value: SearchForm) {
    return updateNews(value.query, 1);
  }

  function onPageClick(page: number) {
    return updateNews(state.query, page);
  }

  function syncPagination(pageNumber: number, totalPages: number) {
    let pages: Array<number> = [];
    // On first page
    if (pageNumber === 1) {
      for (let page = pageNumber; page <= totalPages && pages.length < 3; page++) {
        pages.push(page);
      }
    } else if (pageNumber === totalPages) { // On last page
      for (let page = pageNumber; page > 1 && pages.length < 3; page--) {
        pages.push(page);
      }
      pages.reverse();
    } else {
      pages = [pageNumber -1, pageNumber, pageNumber + 1];
    }
    console.log(pageNumber, totalPages, pages);
    setPages(pages);
  }

  return (
    <Container>
      <Search onSearch={onSearch} loading={loading}/>
      { state.news.length > 0 && (
        <Container>
          {/* Adicionar outro loader sobre as notícias */}
          <Container fluid className="d-flex justify-content-center flex-wrap">
            { state.news.map((news) => (<NewsCard {...news} key={news.id}/>)) }
          </Container>

          { state.pages > 1 && (
            <Pagination className="justify-content-center">
              <Pagination.First
                disabled={state.pageNumber === 1}
                onClick={() => onPageClick(1)}
              />
              <Pagination.Prev
                disabled={state.pageNumber === 1}
                onClick={() => onPageClick(state.pageNumber - 1)}
              />

              { pagination.map((page, index) => (
                <Pagination.Item
                  key={index}
                  active={state.pageNumber === page}
                  onClick={() => onPageClick(page)}
                >
                  {page}
                </Pagination.Item>
              ))}

              <Pagination.Next
                disabled={state.pageNumber === state.pages}
                onClick={() => onPageClick(state.pageNumber + 1)}
              />
              <Pagination.Last
                disabled={state.pageNumber === state.pages}
                onClick={() => onPageClick(state.pages)}
              />
            </Pagination>
          )}

        </Container>
      )}

    </Container>
  )
}

export default NewsList;
