'use client';

import styles from "./page.module.css";
import StartButton from './start-button.js'
import AdvancePlayerButton from './advance-player-button.js';
import AdvanceChaserButton from './advance-chaser-button.js'
import { useState } from "react";
import { useId } from "react";

function Bar({value}) {
  const id = useId();
  return <div className={styles.square} id={id}></div>
}

function InputBar() {
  const id = useId();
  return <div className={styles.square} id={id}><input className={styles.squareinput}></input></div>
}

export default function HomePage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <div className={styles.squares}>
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
        </div>

      </main>
      <footer className={styles.footer}>
        <StartButton /> <AdvancePlayerButton /> <AdvanceChaserButton />
      </footer>
    </div>
  );
}
