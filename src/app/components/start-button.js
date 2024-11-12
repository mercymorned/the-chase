'use client';
import { useState } from "react";

import styles from ".././page.module.css";
import Bar from ".././components/bar-array";

export default function ChangeBar1() {
    const [style, setStyle] = useState(styles.currentQuestion);

  
    const changeStyle = () => { 
    setStyle(styles.currentQuestion);
      if (style === styles.wonQuestion) setStyle(styles.chaser);
      else setStyle(styles.wonQuestion);
    };
  
  
    return (
      <button className={styles.button} onClick={changeStyle}>Click Me</button>
    );
  }