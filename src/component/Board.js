import React from "react";

import Square from "./Square";

export default function Board({ squares, onClick }) {  
  const renderSquares1 = () => {
    let board = [];
    for(let i = 0; i < squares.length; i++){
      let row = [];
      for(let j= 0; j < squares.length; j++){
        let coor = [i,j];
        row.push(<Square value={squares[i][j]} key={'key'+i+j} onClick={() => onClick(coor)} />)
      }
    board.push(<div className="board-row" key={i}>{row}</div>)
    }
    return board;
  }

  return (
    <div>
      {renderSquares1()}
    </div>
  );
}