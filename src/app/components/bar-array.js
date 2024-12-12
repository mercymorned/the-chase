'use client';

import styles from ".././page.module.css";
import { useState } from "react";
import updateBidValue from '.././page.js'

export default function Bar({barID, isPlayerOccupied, isChaserOccupied, isInput, startingBid }) {
  const style = isPlayerOccupied ? styles.wonQuestion : styles.currentQuestion && isChaserOccupied ? styles.chaser : styles.currentQuestion && isInput ? styles.inputBar : styles.currentQuestion && startingBid ? styles.startingBid : styles.currentQuestion;

  let [bidEnteredAmount, setBidEnteredAmount] = useState('');

  const bidOnChange = (e) => {
    setBidEnteredAmount(e.target.value);
  }

  return (
    <input className={style} value={bidEnteredAmount} onChange={ bidOnChange } ></input>
  );
}