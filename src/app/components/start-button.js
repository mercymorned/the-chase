'use client';
import { useState, useRef } from "react";

import styles from ".././page.module.css";
import {Board, barRef} from ".././page.js";
import {Bar, changeStyle} from './bar-array';

export default function ChangeBar1(bar1) {

    const [style, setStyle] = useState(styles.currentQuestion);
  
    const changeStyle = (bar1) => {
      console.log('changing'+ {bar1});
      if (style !== styles.currentQuestion) setStyle(styles.currentQuestion);
      if (style === styles.wonQuestion) setStyle(styles.chaser);
      else setStyle(styles.wonQuestion);
    };
  
    return (
      <button className={styles.button} onClick={changeStyle}>Click Me</button>
    );
  }