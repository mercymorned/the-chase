'use client';

import styles from ".././page.module.css";
import StartButton from '../components/move-button.js'
import { Board } from "../page";

export default function HomePage() {

  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <StartButton label="Advance player" onClickEvent={advancePlayer} />
      <StartButton label="Advance chaser" onClickEvent={advanceChaser} />
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
