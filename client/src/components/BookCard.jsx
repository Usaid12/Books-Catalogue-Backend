import React, { useEffect, useState } from 'react';
import { Card, } from 'react-bootstrap';
import axios from "axios"

const BookCard = () => {
  
  const [books,setBooks]=useState([])
  useEffect(()=>{
    const getBooks=async()=>{
      const url="http://localhost:5000"
      try {
        const data=await axios.get(url)
        console.log(data.data.data)
        setBooks(data.data.data)
      } catch (error) {
        
      }
    }
    getBooks()
  },[])


  return (
    <><div className='flex gap-6'>
      {books.map((book)=>(
        <Card style={{  margin: '10px' }} className='w-[22rem] ' key={book._id}>
      <Card.Img variant="top" src={book.books.image} className='h-[22rem]'  />
      <Card.Body className='h-full'>
        <Card.Text className='fst-italic md:text-lg  capitalize text-sm'>
          <strong  className='px-2  '>Title:</strong>{book.books.title}
          <br />
          <strong  className='px-2  '>Author:</strong>{book.books.author}
          <br />
          <strong className='px-2  '>Genre:</strong>{book.books.genre}
          <br />
          <strong className='px-2  '>Description:</strong>{book.books.description}
        </Card.Text>
      </Card.Body>
    </Card>
      ))}
    
    </div>
    </>
  )
}

export default BookCard;
