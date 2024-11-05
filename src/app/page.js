'use client';

import styles from "./page.module.css";
import StartButton from './start-button.js'
import AdvancePlayerButton from './advance-player-button.js';
import AdvanceChaserButton from './advance-chaser-button.js'
import { useState } from "react";

function Bar({value}) {
  return <div className={styles.square}></div>
}

function InputBar() {
  return <div className={styles.square}><input className={styles.squareinput}></input></div>
}

function Board() {
  return (
    <div className={styles.squares}>
    <Bar value={1} />
    <Bar value={2} />
    <Bar value={3} />
    <Bar value={4} />
    <Bar value={5} />
    <Bar value={6} />
    <Bar value={7} />
  </div>
  );
}

export default function HomePage() {

  return (
    <div className={styles.page}>
      <main className={styles.main}>

          <Board />

      </main>
      <footer className={styles.footer}>
        <StartButton /> <AdvancePlayerButton /> <AdvanceChaserButton />
      </footer>
    </div>
  );
}
