import React from 'react';

import Header from './components/Header/'
import Intro from './components/Intro/'
import Projects from './components/Projects/'
import Skills from './components/Skills/'
import Contact from './components/Contact/'

import './App.css';

function App() {
  return (
    <div className="App">
      <header>
    <Header/>
      </header>
      <main>
        <Intro/>
        <Projects/>
        <Skills/>
        <Contact />
      </main>
    </div>
  );
}

export default App;
