import http from './http';
import { NewsBody, NewsData } from '../types';

export async function getNews(q: string, pageNumber: number): Promise<NewsData> {
  const params = {
    q,
    pageNumber,
    pageSize: 10,
  };

  const response = await http.get<NewsBody>('/news', { params });

  const { values, totalCount } = response.data;

  return {
    news: values,
    pages: Math.ceil(totalCount / params.pageSize),
  };
}

const NewsService = {
  getNews
};

export default NewsService;
