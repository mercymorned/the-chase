'use client';

import styles from "./page.module.css";
import AdvancePlayerButton from './advance-player-button.js';
import { useState } from "react";
import { useId } from "react";

function Square({value}) {
  const id = useId();
  return <div className={styles.square} id={id}></div>
}

function InputSquare() {
  return <div className={styles.square}><input className={styles.squareinput}></input></div>
}

function playerAdvance() {

}

export default function HomePage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <div className={styles.squares}>
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
        </div>

      </main>
      <footer className={styles.footer}>
      <AdvancePlayerButton />
      </footer>
    </div>
  );
}
