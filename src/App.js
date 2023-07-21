import './App.css';
import Footer from './components/Footer';
import NavTop from './components/NavTop';

function App() {
  return (
    <div className="App">
      <div>
      <NavTop/>
      </div>
      <div className='content'></div>
      <Footer/>
    </div>
  );
}

export default App;
