import { useState } from "react";
import { calculateWinner } from "./CalculateWinner";
import { Square } from "./Square";
import { Board } from "./Board";


export default function Game(){
  const [isx,setIsx]= useState(true);
  const [history,setHistory]= useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const handPlay=(nextSquares)=>{
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
        setIsx(!isx);
  }
  const jumpInto=(move)=>{
    setCurrentMove(move);
    setIsx(move%2 ===0);

  }
  const moves= history.map((squares,move)=>{
    let discription;
    if(move>0){
      discription ="move to step #" + move;
    }
    else{
      discription="Go to start #" ;
    }
    return (
      <li key ={move} >
        <button onClick={() => jumpInto(move)}>{discription}<br/></button>
      </li>
    );
  })
  return (
    <div className="game">
      <div className="game-board">
        <Board isx={isx} squares={currentSquares} handlerGame={handPlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}