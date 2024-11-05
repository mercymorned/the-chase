'use client';

export default function AdvanceChaserButton() {
    function handleClick() {
        //determine if this is the first round, if so starting position is readct id ":R1bt7:"
        
        //find the current position of the chaser (react id for this bar)
        //calculate the next position (react id+1 from current id)
        //change state of starting bar (from red with arrows to dark red)
        //change state of new bar (from blue to red with indicators)
        //set new position as current 
    }

    return <button onClick={handleClick}>Advance Chaser</button>;
}