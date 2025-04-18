import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';

import Contact from './pages/Contact'; // Fixed import
import Services from './pages/services';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <main className="site-main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact />} /> {/* Fixed route */}
        
      </Routes>
      
      </main><About /><Services/><Contact />
      <Footer />
    </Router>
  );
}

export default App;
