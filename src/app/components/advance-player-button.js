'use client';

import { useState, useContext } from "react";
import styles from '.././page.module.css';
import useBoardContext from '.././context.js';


export default function AdvancePlayerButton() {
  const { name, setName } = useBoardContext();

  return (
      <button className={styles.button} onClick={({name}) => setName('Sash')}>Update Context</button>
);
}