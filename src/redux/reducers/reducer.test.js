import reducer from "./reducer";
import * as types from "../actions/types";

describe("Reducer", () => {
  test("Show loading when request is sent", () => {
    const initState = { loading: false };
    const action = { type: types.FETCH_BOOKS_PENDING };
    const state = reducer(initState, action);
    
    expect(state.loading).toBeTruthy();
  });
  test("Add books to state when request succeccful", () => {
    const books = [
      { id: 1, name: "Refactoring" },
      { id: 2, name: "Domain-driven design" },
    ];

    const action = {
        type: types.FETCH_BOOKS_SUCCESS,
        books
    }

    const state = reducer([], action);
    expect(state.books).toBe(books);
  });
});
