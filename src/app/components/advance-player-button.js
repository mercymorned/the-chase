'use client';

import { useState } from "react";
import styles from '.././page.module.css';
import Board from '.././page.js';

export default function AdvancePlayerButton() {
    const [style, setStyle] = useState(styles.currentQuestion);
    let bars = Board()
    console.log(bars)

  
    const changeStyle = () => {
      if (style !== styles.currentQuestion) setStyle(styles.currentQuestion);
      else setStyle(styles.wonQuestion);
    };


  return <button className={styles.button} onClick={changeStyle}>Advance Player 1</button>;
}