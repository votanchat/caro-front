import React, { useState } from "react";

import Board from "./component/Board";
import "./index.css";

export default function App() {
  const createArrays = nums => {
    var squares = [];
    for(let i = 0; i < nums; i++){
      squares[i] = [];
      for(let j= 0; j<nums; j++){
        squares[i][j] = null;
      }
    }

    return squares;
  }
  const [squares, setSquares] = useState(createArrays(16));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner,setWinner] = useState(null)
  const handleClick = i => {
    if (winner || squares[i[0]][i[1]]) {
      return;
    }
    squares[i[0]][i[1]] = xIsNext ? "X" : "O";
    setSquares(squares);
    setWinner(checkWinner(squares,i));
    setXIsNext(!xIsNext);
  };

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={squares} onClick={i => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{status}</div>
      </div>
    </div>
  );
}

function checkWinner(squares,i) {
  if(i[0] === 1 && i[1] === 1){
    return squares[i[0]][i[1]];
  }
  return null;
}