import React, { useRef, useState } from 'react'
import '../styles/App.css';
const App = () => {

  return (
    <div id="main">
      <section>
        <h1 className='seconds-elapsed'>Stopwatch Time</h1>
        <section className='buttons'>
          <button className="start-btn">START</button>
          <button className="stop-btn">STOP</button>
          <button className="lap-btn">LAP</button>
          <button className="reset-btn">RESET</button>
        </section>
      </section>
      <section className='lap-section'>
        <h2>Laps</h2>
        <section className='laps'>
          <p>lap</p>
          <p>lap</p>
          <p>lap</p>
        </section>
      </section>
    </div>
  )
}


export default App;
