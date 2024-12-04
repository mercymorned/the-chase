'use client';

import styles from ".././page.module.css";

export default function Bar({barID, isPlayerOccupied, isChaserOccupied}) {
  // const style = isPlayerOccupied ? styles.wonQuestion : styles.currentQuestion && isChaserOccupied ? styles.chaser : styles.currentQuestion;

  // const style = (
  //   isPlayerOccupied ? styles.wonQuestion :
  //   isChaserOccupied ? styles.chaser :
  //   (isPlayerOccupied && isChaserOccupied) ? styles.chaser :
  //   styles.currentQuestion
  // );

  const style = (isPlayerOccupied ? styles.wonQuestion : styles.currentQuestion && isChaserOccupied ? styles.chaser : styles.currentQuestion && (isPlayerOccupied || isChaserOccupied) ? styles.chaser : styles.currentQuestion && styles.currentQuestion);

  return (
    <div className={style}>{barID}</div>
  );
}