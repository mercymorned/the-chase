'use client';

import styles from ".././page.module.css";
import { useState } from "react";

export default function Bar({barID, isPlayerOccupied, isChaserOccupied, isInput}) {
  const style = isPlayerOccupied ? styles.wonQuestion : styles.currentQuestion && isChaserOccupied ? styles.chaser : styles.currentQuestion && isInput ? styles.inputBar : styles.currentQuestion;

  const [startingBid, setStartingBid] = useState('');

  const bidOnChange = (e) => {
    setStartingBid(e.target.value);
  }

  return (
    <input className={style} value={startingBid} onChange={ bidOnChange }></input>
  );
}