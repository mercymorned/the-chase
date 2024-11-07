'use client';

import styles from ".././page.module.css";

export default function AdvancePlayerButton() {
    function handleClick() {
        
        //determine if this is the first round, if so starting position is readct id ":R4bt7:"
        
        //find the current position of the player (react id for this bar)
        //calculate the next position (react id+1 from current id)
        //change state of starting bar (from dark blue to turquoise)
        //change state of new bar (dark blue, with indicators)
        //set new position as current 
    }

    return <button className={styles.button} onClick={handleClick}>Advance Player 1</button>;
}