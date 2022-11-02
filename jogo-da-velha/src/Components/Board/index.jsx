import Square from '../Square'
import { useState } from 'react'
import '../../App.css'


const Board = () => {

  const [xIsNext, setXIsNext] = useState(true);

  const [ squares , setSquares ] = useState(Array(9).fill(null));

  const calculateWinner = (squares) =>{
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for(let i = 0 ; i < lines.length;i++){
      const [a,b,c] = lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a];
      }
    }
    return null;
  }

  const verifyValuesNull = ()=>{
    let current = 0;
    squares.forEach((element)=>{
      if(element === "X" || element ==="O"){
         current++
      }
    })
    return current
  }

  const handleClick = (value) => {
      const currentSquares = squares.slice();
      
      if(calculateWinner(squares) || squares[value]){
          return;
      }
 
      currentSquares[value] = xIsNext ? 'X' : 'O';

      setSquares(currentSquares);
      setXIsNext(!xIsNext);
  }

  const renderSquare = (i) => {
      return <Square value={squares[i]} onClick={()=> handleClick(i)}/>
  }

  const winner  = calculateWinner(squares) ;

  const verifySquares = verifyValuesNull() === 9 ? "Empatou" : `Proximo Jogador : ${xIsNext ? "X" : "O"}`;
  console.log(squares)

  return (
    <div className="App">

      <div className='status'>
        {
            winner ?
                  `Venceu : ${winner}`
                      :
                   verifySquares
        }
      </div>

      <div className='board-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>

      <div className='board-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>

      <div className='board-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      
      <div>
        <button
          onClick={()=>setSquares(Array(9).fill(null))}> 
            Resetar
        </button>
      </div>
    </div>
  )
}

export default Board