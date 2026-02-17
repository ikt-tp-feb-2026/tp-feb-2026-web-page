import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Assembly from './pages/Assembly';
import Usage from './pages/Usage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assembly" element={<Assembly />} />
        <Route path="/usage"element={<Usage />} />
      </Routes>
      <footer className="App-footer">
        <p>&copy; 2026 DIY Braille Printer Project</p>
      </footer>
    </div>
  );
}

export default App;
