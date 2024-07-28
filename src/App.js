import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Rect from './components/Rect';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Homeend from './components/Homeend';
import './assets/styles/App.css';  // Add some basic styling

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Rect />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <Homeend />
      <Footer />
    </div>
  );
}

export default App;
