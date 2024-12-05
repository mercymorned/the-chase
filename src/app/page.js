'use client';

import styles from "./page.module.css";
import Bar from "./components/bar-array.js";
import MoveButton from './components/move-button.js'
import { useState } from "react";

export function Board() {
  const [chaserPosition, setChaserPosition] = useState(1);
  let [playerPosition, setPlayerPosition] = useState(3);

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
    console.log()
  };

  const advanceChaser = () => {
    updateChaserBars(chaserPosition, true);
    setChaserPosition(chaserPosition + 1);
  };
  
  const selectHighBid = () => {
    updatePlayerBars(playerPosition, false);
    setPlayerPosition(playerPosition - 1);
  };

  const selectLowBid = () => {
    updatePlayerBars(playerPosition, false);
    setPlayerPosition(playerPosition + 1);
  };


  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {bars.map((bar, index) => (
          <Bar key={(index)} barID={(bar.id)} isPlayerOccupied={(bar.playerOccupied)} isChaserOccupied={(bar.chaserOccupied)} isInput={(bar.isInput)} isStartingBid={(bar.isStartingBid)} />
        ))}
      </main>
      <footer className={styles.footer}>
        <MoveButton label="Start with High Bid" onClickEvent={selectHighBid} />
        <MoveButton label="Start with Low Bid" onClickEvent={selectLowBid} />
        <MoveButton label="Advance Player" onClickEvent={advancePlayer} />
        <MoveButton label="Advance Chaser" onClickEvent={advanceChaser} />
      </footer>
    </div>
  );                   
}

export default function HomePage() {

  return (
          <Board />
  );
}