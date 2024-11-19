'use client';
import { useState, useRef } from "react";

import styles from ".././page.module.css";
import { Board, bars, barRef } from ".././page.js";
import Bar from "./bar-array";

export default function ChangeBar1() {

    // const [style, setStyle] = useState(styles.currentQuestion);

    // const changeStyle = () => { 
    // setStyle(styles.currentQuestion);
    //   if (style === styles.wonQuestion) setStyle(styles.chaser);
    //   else setStyle(styles.wonQuestion);
    // };

    const targetBar = () => {
    };
  
  
    return (
      <button className={styles.button} onClick={targetBar}>Click Me</button>
    );
  }