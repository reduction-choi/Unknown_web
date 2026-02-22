import React from "react";

function Board({ board, players, onCellClick }) {

  const boardSize = "min(90vw, 900px)";   // 화면 너비의 90%
  const cellSize =  "calc(min(90vw, 900px) / 13)";
  return (
    <div
      style={{
        display: "grid",
        width: boardSize,
        height: boardSize,
        gridTemplateColumns: `repeat(13, ${cellSize})`,
        gridTemplateRows: `repeat(13, ${cellSize})`
      }}
    >
      {board.flat().map((cell, index) => {
        const playerOnCell = players.find(
          (p) =>
            p.dicePosition &&
            p.dicePosition[0] === cell.coordinate[0] &&
            p.dicePosition[1] === cell.coordinate[1]
        );

        return (
          <div
            key={index}
            onClick={() => onCellClick(cell)}
            style={{
              width: "100%",
              height: "100%",
              backgroundColor:
                cell.color === "blank" ? "#eee" : cell.color,
              border: "1px solid black",
              position: "relative",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {/* PLAYER IMAGE (background layer) */}
            {playerOnCell && playerOnCell.diceState !== 0 && (
              <img
                src={require(`./images/${playerOnCell.diceState}.png`)}
                alt="selected"
                style={{
                  position: "absolute",
                  width: "80%",        // ⬅ shrink image
                  height: "80%",
                  objectFit: "contain",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)", // ⬅ perfectly center
                  zIndex: 1
                }}
              />
            )}

            {/* NUMBER (always on top) */}
            {cell.number !== 0 && (
              <div
                style={{
                  position: "absolute",
                  zIndex: 2,                // ⬅ critical
                  fontSize: "26px",
                  fontWeight: "bold",
                  color: "white",
                  textShadow: "2px 2px 4px black"
                }}
              >
                {cell.number === 1000 ? "G" : cell.number}
              </div>
            )}

            {/* PLAYER NAME (topmost small label) */}
            {playerOnCell && playerOnCell.diceState !== 0 && (
              <div
                style={{
                  position: "absolute",
                  bottom: 2,
                  right: 4,
                  fontSize: "11px",
                  fontWeight: "bold",
                  zIndex: 3,
                  color: "white",
                  textShadow: "1px 1px 3px black"
                }}
              >
                🎲 {playerOnCell.username}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Board;