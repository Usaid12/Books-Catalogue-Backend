import './App.css';
import BookCard from './components/BookCard';
import Greet from './components/Greet';
import Header from './components/Header';
const backgroundImage='https://www.lifewire.com/thmb/DLbW5ikKQ57uxqc8ojMvLJnAuJ4=/3122x3192/filters:fill(auto,1)/GettyImages-4799940351-565a0cb55f9b5835e464905e.jpg'

function App() {
  return (
    <div className="App overflow-x-hidden h-screen bg-no-repeat"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: 'cover', 
      }}>
      <Header/>
      <Greet/>
      <BookCard/>
    </div>
  );
}

export default App;
