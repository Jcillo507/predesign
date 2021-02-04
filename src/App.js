import React from 'react';

import Header from './components/Header'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Info from './components/Info'


import './css/main.css';

function App() {
  return (
    <div className="App">
    <Header/>
      {/* <main>
        <Intro/>
        <Info />
        <Projects/>
        <Skills/>
        <Contact />
      </main> */}
    </div>
  );
}

export default App;
