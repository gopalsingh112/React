import React from 'react';
import logo from './logo.svg';
import './App.css';

import Greet from './components/Greet';
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Counter/>
        <Message />
        <p>
          Hello Gopal Singh How are you?
          <Hello />
          <Greet name = "Gopal Singh" heroName="Shaktiman"/> 
          <button>Action</button> 
          <Greet name = "Anil Singh" />  
          
          <Welcome name = "Sunil Singh" heroName = "Tiktok" />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
