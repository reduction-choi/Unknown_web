import React from "react";

function Selection({
  players,
  selectedImage,
  selectedPlayer,
  onImageSelect,
  onPlayerSelect,
  onConfirm
}) {
  const images = Array.from({ length: 24 }, (_, i) => i + 1);

  return (
    <div style={{ marginTop: "20px" }}>

      {/* IMAGE GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 80px)",
          gap: "10px"
        }}
      >
        {images.map((num) => (
          <img
            key={num}
            src={require(`../images/${num}.png`)}
            alt={`img-${num}`}
            onClick={() => onImageSelect(num)}
            style={{
              width: "80px",
              height: "80px",
              objectFit: "cover",
              border:
                selectedImage === num
                  ? "3px solid red"
                  : "1px solid black",
              cursor: "pointer"
            }}
          />
        ))}

        {/* X option */}
        <img
          key={0}
          src="/images/X.png"
          alt="remove"
          onClick={() => onImageSelect(0)}
          style={{
            width: "80px",
            height: "80px",
            objectFit: "cover",
            border:
              selectedImage === 0
                ? "3px solid red"
                : "1px solid black",
            cursor: "pointer"
          }}
        />
      </div>

      {/* PLAYER SELECTION */}
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          gap: "10px"
        }}
      >
        {players.map((player) => (
          <div
            key={player.username}
            onClick={() => onPlayerSelect(player.username)}
            style={{
              padding: "10px",
              border:
                selectedPlayer === player.username
                  ? "3px solid blue"
                  : "1px solid black",
              cursor: "pointer"
            }}
          >
            🎲 {player.username}
          </div>
        ))}
      </div>

      {/* CONFIRM BUTTON */}
      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontWeight: "bold",
          cursor:
            selectedImage !== null && selectedPlayer
              ? "pointer"
              : "not-allowed",
          opacity:
            selectedImage !== null && selectedPlayer
              ? 1
              : 0.5
        }}
        disabled={selectedImage === null || !selectedPlayer}
        onClick={onConfirm}
      >
        Make Move
      </button>
    </div>
  );
}

export default Selection;