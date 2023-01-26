import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { News } from '../../types';

const NewsCard: React.FC<News> = (props) => {
  const {
    description, url, title, thumbnail
  } = props;

  return (
    <Card style={{ width: '400px' }} className="m-3">
      <Card.Img variant="top" style={{ height: '200px' }} src={thumbnail} />
      <Card.Body>
        <Card.Title style={{
          height: '3rem',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical'
          }}>
          {title}
        </Card.Title>
        <Card.Text style={{
          height: '6rem',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: 4,
          WebkitBoxOrient: 'vertical'
          }}>
          {description}
        </Card.Text>
        <Button variant="link" href={url} target="_blank">Read more</Button>
      </Card.Body>
    </Card>
  )
}

export default NewsCard;
