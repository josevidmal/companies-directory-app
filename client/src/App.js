import React from 'react';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div id="company-app">
      <Header />
      <main id="main-container" className="containers">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;