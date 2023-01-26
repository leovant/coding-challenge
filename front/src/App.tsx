import React from 'react';

import Container from 'react-bootstrap/Container';

import NewsList from './components/NewsList';

import { getNews } from './services/news';

const App: React.FC = () => {
  return (
    <Container className="p-3">
      <Container className="p-5 mb-4 bg-light rounded-3">
        <h1 className="header">
          News Search
        </h1>
      </Container>
      <Container className="p-5 mb-4">
        <NewsList getNews={ getNews }/>
      </Container>
    </Container>
  )
}

export default App;
