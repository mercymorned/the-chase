'use client';
import { useState } from "react";

import styles from ".././page.module.css";
import useBarContext from "./bar-id-context";

export default function Bar({barNumber}) {
    const [style, setStyle] = useState(styles.currentQuestion);
  
    const changeStyle = () => {
      console.log(barNumber);
      if (style !== styles.currentQuestion) setStyle(styles.currentQuestion);
      if (style === styles.wonQuestion) setStyle(styles.chaser);
      else setStyle(styles.wonQuestion);
    };
  
    return (
    <div className={style} onClick={changeStyle}> {barNumber}
    </div>
    );
  }