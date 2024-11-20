'use client';

import styles from "./page.module.css";
import Bar from "./components/bar-array.js";
import InputBar from "./components/input-bar.js";
// import StartButton from './components/start-button.js'
import AdvancePlayerButton from './components/advance-player-button.js';
import AdvanceChaserButton from './components/advance-chaser-button.js'
import useBoardContext from './context.js'
import { useState, useRef, forwardRef } from "react";

export function Board() {
  const bars =[
    { id: 'bar1'},
    { id: 'bar2'},
    { id: 'bar3'},
    { id: 'bar4'},
    { id: 'bar5'},
    { id: 'bar6'}
  ];
  
  return (
    bars.map(bar =>
      <Bar key={(bar.id)} id={(bar.id)} />
  ));                   
}

function StartButton() {

  const seeBarID = () => {
    console.log('hi');
  }
  // const [style, setStyle] = useState(styles.currentQuestion);

  // const changeStyle = () => {
  // setStyle(styles.currentQuestion);
  //   if (style === styles.wonQuestion) setStyle(styles.chaser);
  //   else setStyle(styles.wonQuestion);
  // };

  return (
    <button className={styles.button} onClick={seeBarID}>Click Me</button>
  );
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
