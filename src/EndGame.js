const EndGame = ({restartGame, player, draw, winCount, clearHistory}) =>
{
    return(
        <div className="end-game-screen">
            {!draw && <span className="win-text">{player ? "O Won" : "X Won"}</span>}
            {draw && <span className="win-text">Draw Game!</span>}
            <span className="win-history">X's Wins: {winCount.X}<br/> O's Wins: {winCount.O}</span>
            <button className="btn" onClick={restartGame}>Restart Game</button>
            <button className="btn" onClick={clearHistory}>Clear History</button>
        </div>
    )
}

export default EndGame