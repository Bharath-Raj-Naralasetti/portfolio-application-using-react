import React from 'react';
import Header from './components/headers/header';
import './App.css';
import Home from './components/home/Home';
import About from './components/About/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollUP from './components/scrollup/ScrollUP';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Header/>
      <main className='main'>
        <Home/>
        <About/>
        <Skills/>
        <Qualification/>
        <Portfolio/>
        <Contact/>
        </main>
        <Footer/>
        <ScrollUP/>
    </div>
  );
}

export default App;
