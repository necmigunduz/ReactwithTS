import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsToCircle } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <h1 className="border bg-dark rounded text-white">Hello</h1>
      <FontAwesomeIcon icon={faArrowsToCircle} size="2x"/>
    </div>
  );
}

export default App;
