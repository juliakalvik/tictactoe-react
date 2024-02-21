
import './App.css'
import { useState } from 'react'

export function Square() {
  const [value, setValue] = useState(null)

  function handleClick() {
    setValue('X');
  }
  
  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

export function Board() {

  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ])

  const handleOnSquareClick = (squareNumber) => {
    console.log("handleOnSquareClick");

    const newSquares = [...squares];
    console.log("xIsNewxt BEFORE", xIsNext);
    if (xIsNext) {
      newSquares[squareNumber] = "X";
    } else {
      newSquares[squareNumber] = "O";
    }
    
    setSquares(newSquares);
    setXIsNext(!xIsNext);
    console.log("xIsNext AFTER", xIsNext);
  };


  return<>
   <div className="row">
        <Square onSquareClick={() => handleOnSquareClick(0)} value={squares[0]}/>
        <Square onSquareClick={() => handleOnSquareClick(0)} value={squares[1]}/>
        <Square onSquareClick={() => handleOnSquareClick(0)} value={squares[2]}/>
      </div>
      <div className="row">
        <Square onSquareClick={() => handleOnSquareClick(0)} value={squares[3]}/>
        <Square onSquareClick={() => handleOnSquareClick(0)} value={squares[4]}/>
        <Square onSquareClick={() => handleOnSquareClick(0)} value={squares[5]}/>
      </div>
      <div className="row">
        <Square onSquareClick={() => handleOnSquareClick(0)} value={squares[6]}/>
        <Square onSquareClick={() => handleOnSquareClick(0)} value={squares[7]}/>
        <Square onSquareClick={() => handleOnSquareClick(0)} value={squares[8]}/>
      </div>
   
  </>




}

function App() {
  return <Board />;
 
  
}

export default App
