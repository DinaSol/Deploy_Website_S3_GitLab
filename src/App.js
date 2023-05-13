import React from 'react';
import logo from './gitlab.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://github.com/DinaSol"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello From Dina, here is my Github account!
        </a>
      </header>
    </div>
  );
}

export default App;
