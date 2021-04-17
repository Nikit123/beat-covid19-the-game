import React from 'react';
import './App.css';
import covid from './content/covid.svg';
import GameArea from './gameplay/GameArea.js'

function App() {
  return (
    <div className="App">
      <div className="Header">
        <div className="row">
          <div className="col-sm-4" style={{ marginTop: "1%" }}>
            <img src={covid} className="Header-logo" alt="covid" />
          </div>
          <div className="col-sm-4" style={{ color: "cadetblue", marginTop: "1%" }}><h1>Beat COVID-19 (The Game)</h1></div>
          <div className="col-sm-4" style={{ marginTop: "1%" }}>
            <img src={covid} className="Header-logo" alt="covid" />
          </div>
        </div>
      </div>
      <div className="Game-body" >
        <GameArea />
      </div>
    </div>
  );
}

export default App;
