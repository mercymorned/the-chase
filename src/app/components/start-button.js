'use client';
import { useState } from "react";

import styles from ".././page.module.css";


export default function ChangeBar1() {

    const [style, setStyle] = useState(styles.currentQuestion);
  
    const changeStyle = () => {
      if (style !== styles.currentQuestion) setStyle(styles.currentQuestion);
      if (style === styles.wonQuestion) setStyle(styles.chaser);
      else setStyle(styles.wonQuestion);
    };
  
    return (
      <button className={styles.button} onClick={changeStyle}>Click Me</button>
    );
  }
