'use client';

import styles from ".././page.module.css";
import { useState } from "react";
import updateBidValue from '.././page.js'

export default function Bar({barID, isPlayerOccupied, isChaserOccupied, isInput, startingBid, value }) {
  const style = isPlayerOccupied ? styles.wonQuestion : styles.currentQuestion && isChaserOccupied ? styles.chaser : styles.currentQuestion && startingBid ? styles.startingBid : styles.currentQuestion;

  return (
    <input className={style} value={value} readOnly></input>
  );
}