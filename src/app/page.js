'use client';

import styles from "./page.module.css";
import Bar from "./components/bar-array.js";
import MoveButton from './components/move-button.js'
import { useRef, useState } from "react";

export function Board() {
  const [chaserPosition, setChaserPosition] = useState(1);
  let [playerPosition, setPlayerPosition] = useState(3);
  let [startingBidPosition, setStartingBidPosition] = useState(3);
  const highBid = useRef(null);
  const midBid = useRef(null);
  const lowBid = useRef(null);

  const [bars, setBars] = useState([
    { id: 1, playerOccupied: false, chaserOccupied: false, isInput: false, startingBid: false, ref: '' },
    { id: 2, playerOccupied: false, chaserOccupied: false, isInput: true, startingBid: false, ref: highBid },
    { id: 3, playerOccupied: false, chaserOccupied: false, isInput: true, startingBid: false, ref: midBid },
    { id: 4, playerOccupied: false, chaserOccupied: false, isInput: true, startingBid: false, ref: lowBid },
    { id: 5, playerOccupied: false, chaserOccupied: false, isInput: false, startingBid: false, ref: '' },
    { id: 6, playerOccupied: false, chaserOccupied: false, isInput: false, startingBid: false, ref:'' },
    { id: 7, playerOccupied: false, chaserOccupied: false, isInput: false, startingBid: false, ref: '' }
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
    console.log()
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
    midBid.input.value= '';
    lowBid.input.value = '';
    console.log(highBid.startingBid);
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
      <main className={styles.main}>
        {bars.map((bar, index) => (
          <Bar key={(index)} barID={(bar.id)} isPlayerOccupied={(bar.playerOccupied)} isChaserOccupied={(bar.chaserOccupied)} isInput={(bar.isInput)} startingBid={(bar.startingBid)} ref={(bar.ref)} />
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