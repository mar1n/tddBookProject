import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2 data-test="heading" >Bookish</h2>
      <div data-test="book-list">
        <div className="book-item">Robin Hood</div>
        <div className="book-item">Robinson Crusoe</div>
      </div>
    </div>
  );
}

export default App;
