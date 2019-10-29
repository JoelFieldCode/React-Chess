import React from 'react';
import ChessBoard from './components/ChessBoard';
import LeftNav from './components/LeftNav';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-content">
        {/* <LeftNav /> */}
        <ChessBoard />
      </div>
    </div>
  );
}

export default App;
