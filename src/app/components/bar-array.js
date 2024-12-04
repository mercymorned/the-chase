'use client';
import { useState } from "react";

import styles from ".././page.module.css";
import useBarContext from "./bar-id-context";
// import barNumber from "../page.js"

export default function Bar({barID}) {
    const {barNumber, setBarNumber} = useBarContext();
    const [style, setStyle] = useState(styles.currentQuestion);
  
    const changeStyle = () => {
      console.log(barNumber);
      if (style !== styles.currentQuestion) setStyle(styles.currentQuestion);
      if (style === styles.wonQuestion) setStyle(styles.chaser);
      else setStyle(styles.wonQuestion);
    };
  
    return (
    <div className={style} onClick={changeStyle}> {barID}
    </div>
    );
  }