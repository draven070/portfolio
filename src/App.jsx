import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Awards from './components/Awards';

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Awards />
    </div>
  );
}

export default App;