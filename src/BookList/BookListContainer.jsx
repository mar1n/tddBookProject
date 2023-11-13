import React, { useState, useEffect } from "react";
import BookList from "./BookList";
import { useRemoteService } from "../hooks";
import SearchBox from "./SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks, setSearchTerm } from "../redux/actions/actions";

import {createSelector } from 'reselect'

const bookListSelector = createSelector([
  state => state.books,
  state => state.loading,
  state => state.error,
], (books, loading, error) => ({ books, loading, error }));

const BookListContainer = () => {
    const [term, setTerm] = useState('');
  const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchBooks(term))
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [term, dispatch]);
  
    const onSearch = (event) => {
      console.log('event')
      dispatch(setSearchTerm(event.target.value));
      dispatch(fetchBooks())
    };

    const { books, loading, error } = useSelector(bookListSelector)
    return (<>
      <SearchBox term={term} onSearch={onSearch} />
      <BookList books={books} loading={loading} error={error}/>
    </>);
  }
export default BookListContainer;