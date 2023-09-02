import './App.css';
import BookListContainer from './BookListContainer';
import { Route, Routes } from "react-router-dom";
import BookDetailContainer from "./BookDetailContainer";

function App() {
  return (
    <div className="App">
      <h2 data-test="heading" >Bookish</h2>
      <BookListContainer />
      <Routes>
        <Route exact path="/" component={BookListContainer} />
        <Route path='/books/:id' component={BookDetailContainer} />
      </Routes>
    </div>
  );
}

export default App;
