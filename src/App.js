import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import BookDetails from './components/BookDetails';
import Content from './components/Content';
import Books from './components/Books'

function App() {
  return (
    <div className="App">
      <Header/>
      <img src={logo} className="App-logo" alt="logo" />
      <BookDetails/>
      <Books/>
      <Content/>
     
    </div>
  );
}

export default App;
