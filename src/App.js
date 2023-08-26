import logo from './logo.svg';
import './App.css';

const renderBooks = (books) => {
  return <div data-test="book-list">
        {
          books.map((item) => {
            return <div className="book-item"><h2 className="title">{item.name}</h2></div>
          })
        }
      </div>
}

function App() {
  const books = [{ name: "Refactoring"}, { name: "Domain-driven design"}]
  return (
    <div className="App">
      <h2 data-test="heading" >Bookish</h2>
      {
        renderBooks(books)
      }
    </div>
  );
}

export default App;
