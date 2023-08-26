import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2 data-test="heading" >Bookish</h2>
      <div data-test="book-list">
        <div className="book-item"><h2 className="title">Refactoring</h2></div>
        <div className="book-item"><h2 className="title">Domain-driven design</h2></div>
      </div>
    </div>
  );
}

export default App;
