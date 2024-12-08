'use client';

import styles from "./page.module.css";
import Bar from "./components/bar-array.js";
import MoveButton from './components/move-button.js'
import { useRef, useState } from "react";

export function Board() {
  const [chaserPosition, setChaserPosition] = useState(1);
  let [playerPosition, setPlayerPosition] = useState(3);
  let [startingBidPosition, setStartingBidPosition] = useState(3);

  const [bars, setBars] = useState([
    { id: 1, playerOccupied: false, chaserOccupied: false, isInput: false, startingBid: false },
    { id: 2, playerOccupied: false, chaserOccupied: false, isInput: true, startingBid: false },
    { id: 3, playerOccupied: false, chaserOccupied: false, isInput: true, startingBid: false },
    { id: 4, playerOccupied: false, chaserOccupied: false, isInput: true, startingBid: false },
    { id: 5, playerOccupied: false, chaserOccupied: false, isInput: false, startingBid: false },
    { id: 6, playerOccupied: false, chaserOccupied: false, isInput: false, startingBid: false },
    { id: 7, playerOccupied: false, chaserOccupied: false, isInput: false, startingBid: false }
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

  const setAsStartingBidBar = (position, newOccupied) => {
    setBars(prevBars => {
      return prevBars.map(bar =>
        bar.id === position ? { ...bar, startingBid: newOccupied } : bar
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
  
  const selectHighBid = () => {
    updatePlayerBars(playerPosition, false);
    setPlayerPosition(playerPosition - 1);
    setAsStartingBidBar((startingBidPosition - 1), true);
    setStartingBidPosition(startingBidPosition - 1);
  };

  const selectMiddleBid = () => {
    updatePlayerBars(playerPosition, false);
    setPlayerPosition(playerPosition);
    setAsStartingBidBar((startingBidPosition), true);
    setStartingBidPosition(startingBidPosition);
  };

  const selectLowBid = () => {
    updatePlayerBars(playerPosition, false);
    setPlayerPosition(playerPosition + 1);
    setAsStartingBidBar((startingBidPosition + 1), true);
    setStartingBidPosition(startingBidPosition + 1);
  };



  return (
    <div className={styles.page}>
      <header className={styles.header}>
      <div>Welcome to The Chase!</div>
      </header>
      <main className={styles.main}>
        {bars.map((bar, index) => (
          <Bar key={(index)} barID={(bar.id)} isPlayerOccupied={(bar.playerOccupied)} isChaserOccupied={(bar.chaserOccupied)} isInput={(bar.isInput)} startingBid={(bar.startingBid)} />
        ))}
      </main>
      <footer className={styles.footer}>
        <MoveButton label="Start with High Bid" onClickEvent={selectHighBid} />
        <MoveButton label="Start with Middle Bid" onClickEvent={selectMiddleBid} />
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