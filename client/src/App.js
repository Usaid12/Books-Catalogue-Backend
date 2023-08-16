import './App.css';
import Book_card from './components/Book_card';
import Greet from './components/Greet';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header/>
      <Greet/>
      <Book_card/>
    </div>
  );
}

export default App;
