import './App.css';
import Navbar from './components/Navbar';
import Shop from './components/Shop';

function App() {
  return (
    <div className="App">
      <h1> Hello word</h1>
      <Navbar />
      <div className='container'>
        <Shop />
      </div>
    </div>
  );
}

export default App;
