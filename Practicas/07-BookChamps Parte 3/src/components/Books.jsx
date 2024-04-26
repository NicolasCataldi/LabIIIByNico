/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from 'react'

function Books({BookItem,books}) {
  return (
    <div className="d-flex justify-content-center flex-wrap">
        
    {books.length > 0 ? (
      books.map((book) => 
        <BookItem
        title={book.bookTitle}
        author={book.bookAuthor}
        rating={book.bookRating}
        pages={book.pageCount}
        imageUrl={book.imageUrl}
      />
      )
    ) : (<h2>No tienes libros todavia!</h2>)}

      
    </div>
  )
}

export default Books