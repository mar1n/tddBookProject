import React from "react";

const BookList = ({loading, error, books}) => {
  if(loading) {
    return <p>LOADING...</p>
  }
  if(error) {
    return <p>ERROR...</p>
  }
  return (
    <div data-test='book-list'>
      {books.map((book) => {
        return (
          <div className='book-item' key={book.id}>
            <h2 className='book-title'  data-testid="title-item">{book.name}</h2>
            <a href={`/books/${book.id}`}>View Details</a>
          </div>
        );
      })}
    </div>
  );
};

export default BookList;
