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
      {books.map((item, index) => {
        return (
          <div className='book-item' key={item.id}>
            <h2 className='title'  data-testid="title-item">{item.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default BookList;
