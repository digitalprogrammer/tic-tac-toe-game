import { useState } from 'react';
import './App.css';
import EndGame from './EndGame';
import Square from './Square'

const INITIAL = ""
const XPlayer = "X"
const OPlayer = "O"
const winConditions = 
[
  [0,1,2], [3,4,5], [6,7,8], [0,3,6],
  [1,4,7], [2,5,8], [0,4,8], [2,4,6]
]

function App() {
  
  const [grid, setGrid] = useState(Array(9).fill(INITIAL))
  const [player, setPlayer] = useState(false)
  const [gameFinnished, setGameFinnished] = useState(false)
  const [draw, setDraw] = useState(false)
  const [winCount, setWinCount] = useState({X:0,  O:0})


  const gameOver = () =>
  {
    if(gameFinnished)
        return

    for(let i = 0; i < 8; i++)
    {
      if(
        grid[winConditions[i][0]] === XPlayer &&
        grid[winConditions[i][1]] === XPlayer &&
        grid[winConditions[i][2]] === XPlayer
      ){
        setGameFinnished(true)
        setWinCount({...winCount, X:winCount.X+1})
        return
      }
    }

    for(let i = 0; i < 8; i++)
    {
      if(
        grid[winConditions[i][0]] === OPlayer &&
        grid[winConditions[i][1]] === OPlayer &&
        grid[winConditions[i][2]] === OPlayer
      ){
        setGameFinnished(true)
        setWinCount({...winCount, O:winCount.O+1})

        return
      }
    }

    if(!grid.includes(INITIAL))
    {
      setDraw(true)
      setGameFinnished(true)
    }
  }
  
  const handleClick = (id) =>
  {
    setGrid(
      grid.map((item, index)=>
      {
        if(index === id)
        {
          if(player)
          return XPlayer
          else
          return OPlayer
        }
        else
        {
          return item
        }
        
      })
      )
      setPlayer(!player)
  }
  gameOver()

  const restartGame = () =>
  {
    setGrid(Array(9).fill(INITIAL))
    setDraw(false)
    setGameFinnished(false)
    setPlayer(false)
  }

  const clearHistory = () =>
  {
    setWinCount({X:0,  O:0})
    restartGame()
  }

  return (
    <div className="App">
      {gameFinnished && <EndGame 
                            restartGame={restartGame}
                            player={player}
                            draw={draw}
                            winCount={winCount}
                            clearHistory={clearHistory}
                            />}
      <Square handleClick={handleClick} grid={grid}/>
    </div>
  );
}

export default App;
