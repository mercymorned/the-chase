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
  const [bars, setBars] = useState([
    { id: 'bar1', barNumber: 1},
    { id: 'bar2', barNumber: 2},
    { id: 'bar3', barNumber: 3},
    { id: 'bar4', barNumber: 4},
    { id: 'bar5', barNumber: 5},
    { id: 'bar6', barNumber: 6}
  ]);

  const {barNumber, setBarNumber} = useBarContext(bars);

  return (
    bars.map((bar, setBarNumber) =>
      <Bar key={(bar.id)} barID={(bar.id)} barNumber={(bar.barNumber)} />
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