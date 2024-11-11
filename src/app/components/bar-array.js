'use client';
import { useState } from "react";

import styles from ".././page.module.css";

export default function Bar({id}) {
    const [style, setStyle] = useState(styles.currentQuestion);
    const [selected, setSelected] = useState('')
  
    const changeStyle = () => {
      console.log({id});
      if (style !== styles.currentQuestion) setStyle(styles.currentQuestion);
      if (style === styles.wonQuestion) setStyle(styles.chaser);
      else setStyle(styles.wonQuestion);
    };

    const changeSelected = () => {
      console.log('bar ' + {id} + ' active!')
    };
  
  
    return (
    <div className={style} onClick={changeStyle}> {id}
      {/* <button className={styles.button} onClick={changeSelected}>Click Me</button> */}
    </div>
    );
  }