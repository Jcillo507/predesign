import React from 'react';
import { useInView } from "react-intersection-observer";


import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Info from './components/Info'


import './css/main.css';

const App = ()=> {
  const [ref, inView] = useInView({
    threshold: 0,
  });
  return (
    <div className={"App"+ " "+ (inView?"dark":"light")}>
      <Header />
      <Hero />
      <Info />
      <Skills />
      <div className="test" ref={ref}>
      <Projects />
      </div>
      <Contact />
    </div>
  );
}

export default App;
