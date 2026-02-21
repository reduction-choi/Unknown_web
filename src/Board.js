import React from "react";

function Board({ board, players, onCellClick }) {
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
          (p) => {
            return p.dicePosition &&
            p.dicePosition[0] === cell.coordinate[0] &&
            p.dicePosition[1] === cell.coordinate[1];
      });

        return (
          <div
            key={index}
            onClick={() => onCellClick(cell)}
            style={{
              width: 40,
              height: 40,
              backgroundColor:
                cell.color === "blank" ? "#eee" : cell.color,
              border: "1px solid black",
              fontSize: "10px",
              position: "relative",
              cursor: "pointer"
            }}
          >
            {cell.number !== 0 && (
              <div style={{ fontSize: "8px" }}>
                {cell.number}
              </div>
            )}
            {playerOnCell && playerOnCell.diceState !== 0 && (
              <img
                src={require(`../images/${playerOnCell.diceState}.png`)}
                alt="selected"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            )}
            {playerOnCell && playerOnCell.diceState !== 0 && (
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
