import "./App.css";
import BookListContainer from "./BookListContainer";
import { Route, Routes } from "react-router-dom";
import BookDetailContainer from "./BookDetailContainer";
import { BrowserRouter as Router } from "react-router-dom";
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
