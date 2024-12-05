'use client';

import styles from "./page.module.css";
import Bar from "./components/bar-array.js";
import MoveButton from './components/move-button.js'
import { useState } from "react";

export function Board() {
  const [chaserPosition, setChaserPosition] = useState(1);
  const [playerPosition, setPlayerPosition] = useState(4);//TODO: change this to something like playerStartingBid variable based on inputs

  const [bars, setBars] = useState([
    { id: 1, playerOccupied: false, chaserOccupied: false, isInput: false, isStartingBid: false },
    { id: 2, playerOccupied: false, chaserOccupied: false, isInput: true, isStartingBid: false },
    { id: 3, playerOccupied: false, chaserOccupied: false, isInput: true, isStartingBid: false },
    { id: 4, playerOccupied: false, chaserOccupied: false, isInput: true, isStartingBid: false },
    { id: 5, playerOccupied: false, chaserOccupied: false, isInput: false, isStartingBid: false },
    { id: 6, playerOccupied: false, chaserOccupied: false, isInput: false, isStartingBid: false },
    { id: 7, playerOccupied: false, chaserOccupied: false, isInput: false, isStartingBid: false }
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
          <Bar key={(index)} barID={(bar.id)} isPlayerOccupied={(bar.playerOccupied)} isChaserOccupied={(bar.chaserOccupied)} isInput={(bar.isInput)} isStartingBid={(bar.isStartingBid)} />
        ))}
      </main>
      <footer className={styles.footer}>
        <MoveButton label="Advance player" onClickEvent={advancePlayer} />
        <MoveButton label="Advance chaser" onClickEvent={advanceChaser} />
      </footer>
    </div>
  );                   
}

export default function HomePage() {

  return (
          <Board />
  );
}