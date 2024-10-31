import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <div className={styles.squares}>
          <div id="sq0" className={styles.square}></div>
          <div id="sq1" className={styles.square}>
            <input id="sq1_i" class="squareinput"></input>
          </div>
          <div id="sq2" className={styles.square}>
          <input id="sq2_i" class="squareinput"></input>
          </div>
          <div id="sq3" className={styles.square}>
            <input id="sq3_i" class="squareinput"></input>
          </div>
          <div id="sq4" className={styles.square}></div>
          <div id="sq5" className={styles.square}></div>
          <div id="sq6" className={styles.square}></div>
        </div>

        <div className={styles.ctas}>
        </div>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
