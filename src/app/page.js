'use client';

import styles from "./page.module.css";
import Bar from "./components/bar-array.js";
import StartButton from './components/start-button.js'
import { useState } from "react";

export function Board() {
  const [chaserPosition, setChaserPosition] = useState(1);
  const [playerPosition, setPlayerPosition] = useState(4);

  const [bars, setBars] = useState([
    { id: 1, occupied: false},
    { id: 2, occupied: false},
    { id: 3, occupied: true },
    { id: 4, occupied: false },
    { id: 5, occupied: false },
    { id: 6, occupied: false }
  ]);

  const updatePlayerBars = (position, newOccupied) => {
    setBars(prevBars => {
      return prevBars.map(bar =>
        bar.id === position ? { ...bar, occupied: newOccupied } : bar
      );
    });
  };

  const advancePlayer = () => {
    updatePlayerBars(playerPosition, true);
    setPlayerPosition(playerPosition + 1);
  };

  const advanceChaser = () => {
    updatePlayerBars(chaserPosition, true);
    setChaserPosition(chaserPosition + 1);
  };


  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {bars.map((bar, index) => (
          <Bar key={(index)} barID={(bar.id)} isOccupied={(bar.occupied)} />
        ))}
      </main>
      <footer className={styles.footer}>
        <StartButton label="Advance player" onClickEvent={advancePlayer} />
        <StartButton label="Advance chaser" onClickEvent={advanceChaser} />
      </footer>
    </div>
  );                   
}

export default function HomePage() {

  return (
          <Board />
  );
}