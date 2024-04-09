import React from 'react'

function Books({BookItem,books}) {
  return (
    <div className="d-flex justify-content-center flex-wrap">
        
      {books.map((book) => 
        <BookItem
        title={book.bookTitle}
        author={book.bookAuthor}
        rating={book.bookRating}
        pages={book.pageCount}
        imageUrl={book.imageUrl}
      />
      )}
    </div>
  )
}

export default Books