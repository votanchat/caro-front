import React from "react";

export default function Square({ onClick, value }) {
  var x;
  if(value === 'O')
    x = <span style={{color: "red"}}>{value}</span>;
  else
    x = <span style={{color: "black"}}>{value}</span>;
  return (
   <button className="square" onClick={onClick}>
     {x}
   </button>
 );
}