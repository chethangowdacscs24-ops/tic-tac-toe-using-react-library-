import { useState } from "react";

function Square({value,handler}){
  
  return <button className="square" onClick={handler}>
    {value}
  </button>;
}
const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
function calculateWinner(squares) {
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function Board() {
  const [squares,setSquares]= useState(Array(9).fill(null))
  const [isx,setIsx]= useState(true);
  let winner=calculateWinner(squares);
  const Status=()=>{
    if(winner!=null)return <h2>{winner} IS THE WINNER</h2>
    else{
      return <h3>NEXT PLAYER IS: {isx?"X":"O"}</h3>
    }
  }
 
  const handleClick=(val)=>{
    if(winner!=null)return;
    const nextSquares = squares.slice();
    if(!nextSquares[val]){
    nextSquares[val] = isx?'X':'O';
    setIsx(!isx);
    setSquares(nextSquares);
  }}
  return   <>
  <Status/>
  <div className="board-row">
    <Square value={squares[0]} handler={()=>handleClick(0)}/>
    <Square value={squares[1]} handler={()=>handleClick(1)}/>
    <Square value={squares[2]} handler={()=>handleClick(2)}/>
  </div>
  <div className="board-row">
  <Square value={squares[3]} handler={()=>handleClick(3)}/>
    <Square value={squares[4]} handler={()=>handleClick(4)}/>
    <Square value={squares[5]} handler={()=>handleClick(5)}/>
  </div>
  <div className="board-row">
  <Square value={squares[6]} handler={()=>handleClick(6)}/>
    <Square value={squares[7]} handler={()=>handleClick(7)}/>
    <Square value={squares[8]} handler={()=>handleClick(8)}/>
  </div>
</>;
}
