import React from "react";

function Board({ board, players }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(13, 40px)",
        gap: "2px"
      }}
    >
      {board.flat().map((cell, index) => {
        const playerOnCell = players.find(
          (p) =>
            p.dicePosition[0] === cell.coordinate[0] &&
            p.dicePosition[1] === cell.coordinate[1]
        );

        return (
          <div
            key={index}
            style={{
              width: 40,
              height: 40,
              backgroundColor:
                cell.color === "blank" ? "#eee" : cell.color,
              border: "1px solid black",
              fontSize: "10px",
              position: "relative"
            }}
          >
            {cell.number !== 0 && (
              <div style={{ fontSize: "8px" }}>
                {cell.number}
              </div>
            )}

            {playerOnCell && (
              <div
                style={{
                  position: "absolute",
                  bottom: 2,
                  right: 2,
                  fontSize: "10px",
                  fontWeight: "bold"
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
