'use client';
import { useState } from "react";

import styles from ".././page.module.css";

export default function Bar({barID}) {
    const [style, setStyle] = useState(styles.currentQuestion);
  
    const changeStyle = () => {
      console.log(barID);
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