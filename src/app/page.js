'use client';

import styles from "./page.module.css";
import Bar from "./components/bar-array.js";
import InputBar from "./components/input-bar.js";
import StartButton from './components/start-button.js'
import AdvancePlayerButton from './components/advance-player-button.js';
import AdvanceChaserButton from './components/advance-chaser-button.js'
import useBarContext from './components/bar-id-context.js'
import { useState } from "react";

export function Board() {
  const { barNumber, setBarNumber } = useBarContext();

  const bars = [
    { id: 'bar1'},
    { id: 'bar2'},
    { id: 'bar3'},
    { id: 'bar4'},
    { id: 'bar5'},
    { id: 'bar6'}
  ];

  return (
    bars.map((bar, index) =>
      <Bar key={(index)} barID={(bar.id)} barNumber={(bar.id)} />
  ));                   
}

export default function HomePage() {

  return (
    <div className={styles.page}>
      <main className={styles.main}>

          <Board />

      </main>
      <footer className={styles.footer}>
        <StartButton />
      </footer>
    </div>
  );
}