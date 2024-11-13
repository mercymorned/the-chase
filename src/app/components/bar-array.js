'use client';
import { useState } from "react";

import styles from ".././page.module.css";
import {Board, barRef} from ".././page.js"

export default function Bar({barRef}) {
    const [style, setStyle] = useState(styles.currentQuestion);
  
    const changeStyle = () => {
      console.log(barRef);
      if (style !== styles.currentQuestion) setStyle(styles.currentQuestion);
      if (style === styles.wonQuestion) setStyle(styles.chaser);
      else setStyle(styles.wonQuestion);
    };
  
  
    return (
    <div className={style} onClick={changeStyle}>
      {/* <button className={styles.button} onClick={changeSelected}>Click Me</button> */}
    </div>
    );
  }