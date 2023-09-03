import "./App.css";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import BookListContainer from "./BookList/BookListContainer";
import BookDetailContainer from "./BookDetails/BookDetailContainer";

function App() {
  return (
    <Router>
      <div className='App'>
        <h2 data-test='heading'>Bookish</h2>
        <BookListContainer />
        <Routes>
          <Route exact path='/' component={BookListContainer} />
          <Route path='/books/:id' component={BookDetailContainer} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
