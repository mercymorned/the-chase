// 'use client';
// import { useState, useRef } from "react";

// import styles from ".././page.module.css";
// import { Board, barRef, bars } from ".././page.js";
// import Bar from "./bar-array";

// export default function StartButton() {
//     const [style, setStyle] = useState(styles.currentQuestion);

//     const changeStyle = () => {
//     setStyle(styles.currentQuestion);
//       if (style === styles.wonQuestion) setStyle(styles.chaser);
//       else setStyle(styles.wonQuestion);
//     };
  
//     return (
//       <button className={styles.button} onClick={() =>changeStyle(barOne)}>Click Me</button>
//     );
//   }