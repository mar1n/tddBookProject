import './App.css';
import BookListContainer from './BookListContainer';

function App() {
  return (
    <div className="App">
      <h2 data-test="heading" >Bookish</h2>
      <BookListContainer />
    </div>
  );
}

export default App;
