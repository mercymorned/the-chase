'use client';

import styles from "./page.module.css";
import Bar from "./components/bar-array.js";
import InputBar from "./components/input-bar.js";
import StartButton from './components/start-button.js'
// import AdvancePlayerButton from './components/advance-player-button.js';
import AdvanceChaserButton from './components/advance-chaser-button.js'
import { useState } from "react";

function Board() {
  const bars = [
    { id: 1},
    { id: 2},
    { id: 3},
    { id: 4},
    { id: 5},
    { id: 6},
    { id: 7}
  ];
  
  return bars.map(bar =>
      <Bar key={(bar.id)} id={(bar.id)} />
  );                   
}

function AdvancePlayerButton() {

  function handleClick() {
    const [style, setStyle] = useState(styles.currentQuestion);
  
    const changeStyle = () => {
      if (style !== styles.currentQuestion) setStyle(styles.currentQuestion);
      else setStyle(styles.wonQuestion);
    };

  }

  return <button className={styles.button} onClick={handleClick}>Advance Player 1</button>;
}

export default function HomePage() {

  return (
    <div className={styles.page}>
      <main className={styles.main}>

          <Board />

      </main>
      <footer className={styles.footer}>
        <StartButton /> <AdvancePlayerButton /> <AdvanceChaserButton />
      </footer>
    </div>
  );
}
