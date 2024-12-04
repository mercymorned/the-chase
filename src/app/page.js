'use client';

import styles from "./page.module.css";
import Bar from "./components/bar-array.js";
import StartButton from './components/start-button.js'
import { useState } from "react";

export function Board() {
  const [chaserPosition, setChaserPosition] = useState(1);
  const [playerPosition, setPlayerPosition] = useState(4);

  const [bars, setBars] = useState([
    { id: 1, playerOccupied: false, chaserOccupied: true},
    { id: 2, playerOccupied: false, chaserOccupied: false },
    { id: 3, playerOccupied: true, chaserOccupied: false },
    { id: 4, playerOccupied: false, chaserOccupied: false },
    { id: 5, playerOccupied: false, chaserOccupied: false },
    { id: 6, playerOccupied: false, chaserOccupied: false }
  ]);

  const updatePlayerBars = (position, newOccupied) => {
    setBars(prevBars => {
      return prevBars.map(bar =>
        bar.id === position ? { ...bar, playerOccupied: newOccupied } : bar
      );
    });
  };

  const updateChaserBars = (position, newOccupied) => {
    setBars(prevBars => {
      return prevBars.map(bar =>
        bar.id === position ? { ...bar, chaserOccupied: newOccupied, playerOccupied: false } : bar
      );
    });
  };

  const advancePlayer = () => {
    updatePlayerBars(playerPosition, true);
    setPlayerPosition(playerPosition + 1);
  };

  const advanceChaser = () => {
    updateChaserBars(chaserPosition, true);
    setChaserPosition(chaserPosition + 1);
  };


  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {bars.map((bar, index) => (
          <Bar key={(index)} barID={(bar.id)} isPlayerOccupied={(bar.playerOccupied)} isChaserOccupied={(bar.chaserOccupied)} />
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