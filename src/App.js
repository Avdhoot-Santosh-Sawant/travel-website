import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Places from './components/places/Places';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import PlaceDetail from './components/places detail/PlaceDetail';

function App() {
  return (
    <div className="App">
{/*this comment added  */}
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/places' element={<Places />} />
          <Route exact path='/places/:id' element={<PlaceDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
