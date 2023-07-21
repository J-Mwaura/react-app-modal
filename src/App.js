import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import NavTop from './components/NavTop';

function App() {
  return (
    <div className="App">
      <div>
      <NavTop/>
      </div>
      <div className='content'>
        <Home/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
