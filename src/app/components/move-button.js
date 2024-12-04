'use client';

import styles from ".././page.module.css";

export default function ChangePosition({label, onClickEvent}) {
  return (
    <button className={styles.button} onClick={onClickEvent}>{label}</button>
  );
}
