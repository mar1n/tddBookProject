import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import BookList from './BookList';
import axios from 'axios';

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get('http://localhost:8080/books');
      console.log('res', res);
      console.log('res.data', res.data);
      setBooks(res.data);
    }
    fetchBooks();
  }, [])
  return (
    <div className="App">
      <h2 data-test="heading" >Bookish</h2>
      <BookList books={books} />
    </div>
  );
}

export default App;
