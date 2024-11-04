import Image from "next/image";
import styles from "./page.module.css";

function Square() {
  return <div className={styles.square}></div>
}

function InputSquare() {
  return <div className={styles.square}><input className={styles.squareinput}></input></div>
}

export default function HomePage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <div className={styles.squares}>
          <Square />
          <InputSquare />
          <InputSquare />
          <InputSquare />
          <Square />
          <Square />
          <Square />
        </div>

      </main>
      <footer className={styles.footer}>
      <p>A place for me to put the buttons maybe.</p>
      </footer>
    </div>
  );
}
