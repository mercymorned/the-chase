'use client';
import { useState } from "react";

import styles from ".././page.module.css";

export default function Bar({value}) {
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