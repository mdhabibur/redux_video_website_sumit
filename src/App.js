import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Video from './pages/Video';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>

      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/videos/:videoId' element={<Video />} />
      </Routes>

      <Footer />

    </Router>

  );
}

export default App;
