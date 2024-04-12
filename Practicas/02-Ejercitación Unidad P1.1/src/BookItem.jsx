import React from 'react'

function BookItem({bookTitle,bookAuthor,bookRating,pageCount,imageUrl}) {
  return (
    <h1>{bookTitle} por {bookAuthor}<br/>Rating: {bookRating}<br/>{pageCount} Pages<br/><img src={imageUrl} alt="" srcset="" /><hr /></h1>
  )
}

export default BookItem
