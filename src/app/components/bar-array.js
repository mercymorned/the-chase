'use client';

import styles from ".././page.module.css";

export default function Bar({barID, isPlayerOccupied, isChaserOccupied}) {
  const style = isPlayerOccupied ? styles.wonQuestion : styles.currentQuestion && isChaserOccupied ? styles.chaser : styles.currentQuestion;

  return (
    <div className={style}>{barID}</div>
  );
}