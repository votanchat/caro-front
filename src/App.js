import React, { useState } from "react";

import Board from "./component/Board";
import "./index.css";

export default function App() {
  var length = 16;
  var d = 5;
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
  const [squares, setSquares] = useState(createArrays(length));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner,setWinner] = useState(null)
  const handleClick = i => {
    if (winner || squares[i[0]][i[1]]) {
      return;
    }
    squares[i[0]][i[1]] = xIsNext ? "X" : "O";
    setSquares(squares);
    setWinner(checkWinner(squares,i,d));
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

function checkWinner(squares, i, d)
{
  if( checkCol(squares, i, d) || checkRow(squares, i, d) || checkDiagonal1(squares, i, d) ||  checkDiagonal2(squares, i, d))
    return squares[i[0]][i[1]];
  return null;
}

function checkRow(squares, i, d)
{
  var [x, y] = i;
  var length =squares.length;
  var count = 1;
  for(i = y+1; i < y+d && i < length;i++){
    if (squares[x][i] === squares[x][y]) {
      count++;
    }
    else
      break;
  }
  for(i = y-1; i > y-d  && i >= 0; i--){
    if (squares[x][i] === squares[x][y] && count < d) {
      count++;
    }
    else
      break;
  }
  if (count === d)
    return true;
  
  return false;
}
function checkCol(squares, i, d)
{
  var [x, y] = i;
  var length = squares.length;
  var count = 1;
  for(i = x+1; i < x+d && i < length; i++){
    if (squares[i][y] === squares[x][y]) {
      count++;
    }
    else
      break;
  }
  for(i = x-1; i > x-d && i >= 0; i--){
    if (squares[i][y] === squares[x][y] && count < d) {
      count++;
    }
    else
      break;
  }
  if (count === d)
    return true;
  
  return false;
}
function checkDiagonal1(squares, i, d){
  var [x, y] = i;
  var length = squares.length;
  var count = 1;
  var j;
  for(i = x+1 , j = y+1; i < x+d && i < length && j < length; i++, j++){
    if (squares[i][j] === squares[x][y]) {
      count++;
    }
    else
      break;
  }
  for(i = x-1, j = y-1; i > x-d && i >= 0 && j >= 0; i--, j--){
    if (squares[i][j] === squares[x][y]) {
      count++;
    }
    else
      break;
  }
  if (count === d)
    return true;
  
  return false;
}
function checkDiagonal2(squares, i, d){
  var [x, y] = i;
  var length = squares.length;
  var count = 1;
  var j;
  for(i = x+1 , j = y-1; i < x+d && i < length && j >=0; i++, j--){
    if (squares[i][j] === squares[x][y]) {
      count++;
    }
    else
      break;
  }
  for(i = x-1, j = y+1; i > x-d && i >= 0 && j < length; i--, j++){
    if (squares[i][j] === squares[x][y]) {
      count++;
    }
    else
      break;
  }
  if (count === d)
    return true;
  
  return false;
}