import { calculateWinner } from "./CalculateWinner";
import { Square } from "./Square";
import { useState } from "react";


export  function Board({isx,squares,handlerGame}) {
  
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
    handlerGame(nextSquares);
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