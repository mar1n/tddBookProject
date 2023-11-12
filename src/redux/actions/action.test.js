import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { setSearchTerm, fetchBooks } from "./actions";
import axios from "axios";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("BookListContainer related actions", () => {
  test("Sets the search keyword", () => {
    const term = "";
    const expected = {
      type: "SET_SEARCH_TERM",
      term,
    };
    const action = setSearchTerm(term);
    expect(action).toEqual(expected);
  });
  test("Fetches data successfully", () => {
    const books = [
      { id: 1, name: "Refactoring" },
      { id: 2, name: "Domain-driven design" },
    ];

    axios.get = jest.fn().mockImplementation(() => Promise.resolve({ data: books}));

    const expectedActions = [
        { type: 'FETCH_BOOKS_PENDING'},
        { type: 'FETCH_BOOKS_SUCCESS', books}
    ];

    const store = mockStore({ books: [] });

    return store.dispatch(fetchBooks('')).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
    })
  });
  test('Fetch data with error ', () => {
    axios.get = jest.fn().mockImplementation(() => Promise.reject({ message: 'Something went wrong'}))

    const expectedActions = [
        { type: 'FETCH_BOOKS_PENDING'},
        { type: 'FETCH_BOOKS_FAILED', err: 'Something went wrong'}
    ]
    const store = mockStore({ books: [] });

    return store.dispatch(fetchBooks('')).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
    })
  });
});
