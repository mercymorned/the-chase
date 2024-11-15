'use client';

import styles from ".././page.module.css";
import StartButton from '.././components/start-button.js'
import AdvancePlayerButton from '.././components/advance-player-button.js';
import AdvanceChaserButton from '.././components/advance-chaser-button.js'
import { useState } from "react";

function Bar({value}) {
  const [style, setStyle] = useState(styles.currentQuestion);

  const changeStyle = () => {
    if (style !== styles.currentQuestion) setStyle(styles.currentQuestion);
    else setStyle(styles.wonQuestion);
  };


  return (
  <div className={style}>
    <button className={styles.button} onClick={changeStyle}>Click Me</button>
  </div>
  );
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
      <StartButton /> <AdvancePlayerButton /> <AdvanceChaserButton />
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
