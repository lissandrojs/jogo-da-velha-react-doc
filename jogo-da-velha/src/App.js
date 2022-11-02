// import { useState } from 'react'
import './App.css'
import './index.css'
import Board from './Components/Board'


const App = () => {

  // const [status, setStatus] = useState('Next player: X');

  // const [history ,setHistory] = useState([{squares: Array(9).fill(null),
  // }])

  return (
    <div className="game">
      <div className='game-board'>
        <Board/>
      </div>
      <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
    </div>
  )
}

export default App