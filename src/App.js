import React from 'react';

import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Info from './components/Info'


import './css/main.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Info />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
