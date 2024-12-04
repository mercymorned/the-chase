'use client';

import styles from ".././page.module.css";

export default function ChangeBar1({label, onClickEvent}) {
  return (
    <button className={styles.button} onClick={onClickEvent}>{label}</button>
  );
}
