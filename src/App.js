
import './App.css';
import Partner from './components/sponsor/Partner';
import Footer from './components/footer/Footer';
import Places from './components/places/Places';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Home />
      <Places />
      <Partner />
      <Footer />
    </div>
  );
}

export default App;
