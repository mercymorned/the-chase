'use client';
import { useState, useRef } from "react";

import styles from ".././page.module.css";
import {Board, barRef} from ".././page.js";

export default function ChangeBar1({barRef}) {

    const [style, setStyle] = useState(styles.currentQuestion);

    const changeStyle = () => { 
      console.log(barRef)
    setStyle(styles.currentQuestion);
      if (style === styles.wonQuestion) setStyle(styles.chaser);
      else setStyle(styles.wonQuestion);
    };
  
  
    return (
      <button className={styles.button} onClick={changeStyle}>Click Me</button>
    );
  }