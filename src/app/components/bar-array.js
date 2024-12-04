'use client';

import styles from ".././page.module.css";

export default function Bar({barID, isOccupied}) {
  const style = isOccupied ? styles.wonQuestion : styles.currentQuestion;

  return (
    <div className={style}>{barID}</div>
  );
}