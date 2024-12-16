'use client';

import styles from "./page.module.css";
import Bar from "./components/bar-array.js";
import MoveButton from './components/move-button.js'
import { useRef, useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export function Board() {
  const [chaserPosition, setChaserPosition] = useState(1);
  let [playerPosition, setPlayerPosition] = useState(3);
  let [startingBidPosition, setStartingBidPosition] = useState(3);

  const [bars, setBars] = useState([
    { id: 1, playerOccupied: false, chaserOccupied: false, isInput: false, startingBid: false, value: '' },
    { id: 2, playerOccupied: false, chaserOccupied: false, isInput: true, startingBid: false, value: 10 },
    { id: 3, playerOccupied: false, chaserOccupied: false, isInput: true, startingBid: false, value: 5 },
    { id: 4, playerOccupied: false, chaserOccupied: false, isInput: true, startingBid: false, value: 1 },
    { id: 5, playerOccupied: false, chaserOccupied: false, isInput: false, startingBid: false, value: '' },
    { id: 6, playerOccupied: false, chaserOccupied: false, isInput: false, startingBid: false, value: '' },
    { id: 7, playerOccupied: false, chaserOccupied: false, isInput: false, startingBid: false, value: '' }
  ]);

  const updatePlayerBars = (position, newOccupied) => {
    setBars(prevBars => {
      return prevBars.map(bar =>
        bar.id === position ? { ...bar, playerOccupied: newOccupied } : bar && (bar.id === position -1) ? { ...bar, playerOccupied: false } : bar
      );
    });
  };

  const updateChaserBars = (position, newOccupied) => {
    setBars(prevBars => {
      return prevBars.map(bar =>
        bar.id === position ? { ...bar, chaserOccupied: newOccupied, playerOccupied: false } : bar
      );
    });
  };

  const setAsStartingBidBar = (position, newOccupied) => {
    setBars(prevBars => {
      return prevBars.map(bar => 
        bar.id === position ? { ...bar, startingBid: newOccupied, isInput: false } : bar && bar.id !== position ? { ...bar, value: '' } : bar
    );
    });
  };

  const advancePlayer = () => {
    updatePlayerBars(playerPosition, true);
    setPlayerPosition(playerPosition + 1);
  };

  const advanceChaser = () => {
    updateChaserBars(chaserPosition, true);
    setChaserPosition(chaserPosition + 1);
  };
  
  const selectHighBid = () => {
    updatePlayerBars(playerPosition, false);
    setPlayerPosition(playerPosition - 1);
    setAsStartingBidBar((startingBidPosition - 1), true);
    setStartingBidPosition(startingBidPosition - 1);
  };

  const selectMiddleBid = () => {
    updatePlayerBars(playerPosition, false);
    setPlayerPosition(playerPosition);
    setAsStartingBidBar((startingBidPosition), true);
    setStartingBidPosition(startingBidPosition);
  };

  const selectLowBid = () => {
    updatePlayerBars(playerPosition, false);
    setPlayerPosition(playerPosition + 1);
    setAsStartingBidBar((startingBidPosition + 1), true);
    setStartingBidPosition(startingBidPosition + 1);
  };



  return (
    <div className={styles.page}>
      <header className={styles.header}>
      <div>Welcome to The Chase!</div>
      </header>
      <main className={styles.main}>
        {bars.map((bar, index) => (
          <Bar key={(index)} barID={(bar.id)} isPlayerOccupied={(bar.playerOccupied)} isChaserOccupied={(bar.chaserOccupied)} isInput={(bar.isInput)} startingBid={(bar.startingBid)} value={(bar.value)} />
        ))}
      </main>
      <footer className={styles.footer}>
        <MoveButton label="Start with High Bid" onClickEvent={selectHighBid} />
        <MoveButton label="Start with Middle Bid" onClickEvent={selectMiddleBid} />
        <MoveButton label="Start with Low Bid" onClickEvent={selectLowBid} />
        <MoveButton label="Advance Player" onClickEvent={advancePlayer} />
        <MoveButton label="Advance Chaser" onClickEvent={advanceChaser} />
      </footer>
    </div>
  );                   
}

export default function HomePage() {

  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you ready to go Head to Head with the Chaser?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" sx={{ whiteSpace: "pre-wrap" }}>
          <InfoOutlinedIcon fontSize="small" /> To get started, enter your high, middle, and low bid amounts into the input bars. Once the team have decided their bid, click the corresponding button to start the game from that bid position.<br/>&nbsp;<br/>

          <InfoOutlinedIcon fontSize="small" /> When the player gets a question correct, click Advance Player to award them space on the board.<br/>&nbsp;<br/>

          <InfoOutlinedIcon fontSize="small" /> When the Chaser gets a question correct, click the Advance Chaser button to move their position down the board.<br/>&nbsp;<br/>

          <InfoOutlinedIcon fontSize="small" /> When the Chaser catches up to the player, Game Over!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            PLAY
          </Button>
        </DialogActions>
      </Dialog>
      <Board />
    </>
  );
}