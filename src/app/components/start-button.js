'use client';
import { useState, useRef } from "react";

import styles from ".././page.module.css";
import barRef from ".././page.js";

export default function ChangeBar1() {

    const barOne = barRef.bar1;
    const [style, setStyle] = useState(styles.currentQuestion);
  
    const changeStyle = (barOne) => {
      console.log('changing'+ barOne);
      if (style !== styles.currentQuestion) setStyle(styles.currentQuestion);
      if (style === styles.wonQuestion) setStyle(styles.chaser);
      else setStyle(styles.wonQuestion);
    };
  
    return (
      <button className={styles.button} onClick={changeStyle}>Click Me</button>
    );
  }