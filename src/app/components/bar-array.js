'use client';

import styles from ".././page.module.css";

export default function Bar({barID, isPlayerOccupied, isChaserOccupied, isInput}) {
  const style = isPlayerOccupied ? styles.wonQuestion : styles.currentQuestion && isChaserOccupied ? styles.chaser : styles.currentQuestion && isInput ? styles.inputBar : styles.currentQuestion;

  return (
    <input className={style}></input>
  );
}