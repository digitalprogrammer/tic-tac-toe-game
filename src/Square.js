const Square = ({grid, handleClick}) =>
{
    return(
        <div className="board">
            {grid.map((item, index) =>
            {
                if(item === "")
                {
                    return(
                        <div onClick={() => handleClick(index)} className="square" key={index}>
                            {item}
                        </div>
                    )
                }else{
                    return(
                        <div className="square clicked" key={index}>
                            {item}
                        </div>
                    )
                }
              
            })}
        </div>
    )
}

export default Square