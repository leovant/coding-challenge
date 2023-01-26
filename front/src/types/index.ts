export interface News {
  body: string;
  description: string;
  id: string;
  imageUrl: string;
  title: string;
  thumbnail: string;
  url: string;
}

export interface SearchForm {
  query: string;
}

export interface SearchProps {
  onSearch: (data: SearchForm) => void;
  loading: boolean;
}

export interface NewsListProps {
  getNews: (q: string, pageNumber: number) => Promise<NewsData>;
}

export interface NewsListState {
  news: Array<News>;
  pageNumber: number;
  pages: number;
  query: string;
  error?: string;
}

export interface NewsError {
  message?: string;
}

export interface NewsBody {
  totalCount: number;
  values: Array<News>;
}

export interface NewsData {
  news: Array<News>;
  pages: number;
}
