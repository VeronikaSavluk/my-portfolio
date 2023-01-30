import React from 'react';
import About from './About';
import TechSkills from './TechSkills';
import logo from '../image/logo.png';
import '../App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Veronika Savluk</h1>
        <p>Full Stack Developer</p>
      </header>
      <About/>
      <TechSkills/>
    </div>
  );
}

export default App;
