import React from "react";

const BookList = ({books}) => {
  return (
    <div data-test='book-list'>
      {books.map((item) => {
        return (
          <div className='book-item'>
            <h2 className='title'>{item.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default BookList;
