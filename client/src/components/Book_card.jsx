import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Book_card = () => {
  return (
    <Card style={{ width: '25rem', margin: '10px' }}>
      <Card.Img variant="top" src='bg_pic.jpg'  />
      <Card.Body>
        <Card.Title className='fst-italic'>Card</Card.Title>
        <Card.Text className='fst-italic'>
          <strong >Title:</strong>Title
          <br />
          <strong >Author:</strong>Author
          <br />
          <strong>Genre:</strong>Genre
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Book_card;
