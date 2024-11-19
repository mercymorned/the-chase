'use client';

import styles from "./page.module.css";
import Bar from "./components/bar-array.js";
import InputBar from "./components/input-bar.js";
import StartButton from './components/start-button.js'
import AdvancePlayerButton from './components/advance-player-button.js';
import AdvanceChaserButton from './components/advance-chaser-button.js'
import useBoardContext from './context.js'
import { useState, useRef } from "react";

export function Board() {
  const barRef = useRef(0);
  const bars = [
    { id: 1},
    { id: 2},
    { id: 3},
    { id: 4},
    { id: 5},
    { id: 6}
  ];
  
  return (
    bars.map(bar =>
      <Bar key={(bar.id)} id={(bar.id)} barRef={(bar.id)} />
  ));                   
}

export default function HomePage() {
  const { name, setName } = useBoardContext();

  return (
    <div className={styles.page}>
      <main className={styles.main}>

          <Board />
          {name}

      </main>
      <footer className={styles.footer}>
        <StartButton /> <AdvancePlayerButton />
      </footer>
    </div>
  );
}
