import logo from './logo.svg';
import './App.css';
import BookList from './BookList';

function App() {
  const books = [{ name: "Refactoring"}, { name: "Domain-driven design"}]
  return (
    <div className="App">
      <h2 data-test="heading" >Bookish</h2>
      <BookList books={books} />
    </div>
  );
}

export default App;
