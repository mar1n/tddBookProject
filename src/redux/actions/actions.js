import axios from "axios";
import * as types from "./types";

export const fetchBooks = (term) => {
  return (dispatch, getState) => {
    dispatch({ type: types.FETCH_BOOKS_PENDING });
    const state = getState();
    return axios
      .get(`http://localhost:8080/books?q=${term || ''}`)
      .then((res) => {
        dispatch({ type: types.FETCH_BOOKS_SUCCESS, books: res.data });
      })
      .catch((err) => {
        dispatch({ type: types.FETCH_BOOKS_FAILED, err: err.message });
      });
  };
};

export const setSearchTerm = (term) => {
  return { type: types.SET_SEARCH_TERM, term };
};
