'use client';

import styles from "./page.module.css";
import Bar from "./components/bar.js";
import InputBar from "./components/input-bar.js";
import StartButton from './components/start-button.js'
import AdvancePlayerButton from './components/advance-player-button.js';
import AdvanceChaserButton from './components/advance-chaser-button.js'
import { useState } from "react";

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
