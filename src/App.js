import React, { useState, useEffect } from "react";
import Board from "./Board";
import Selection from "./Selection";
import SelectTurn from "./SelectTurn";
import axios from "axios";
import { socket } from "./socket";

function App() {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("player");
  const [gameplaying, setGamePlaying] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedCell, setSelectedCell] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [gameState, setGameState] = useState(null);
  const handleCellClick = (cell) => {
    setSelectedCell(cell);
    setSelectedImage(null);
    setSelectedPlayer(null);
  };
  const handleGameStart = () => {
    setGamePlaying((prev) => {
      return !prev;
    })
    socket.emit("gameStart");
  }
  const handleTurnSelect = (user) => {
    socket.emit("turn", user);
  }
  const handleConfirmMove = () => {
    if (!selectedCell || selectedImage === null || !selectedPlayer) {
      return;
    }
    // Update local board state
    // setCellImages((prev) => ({
    //   ...prev,
    //   [key]: selectedImage
    // }));

    // Optional: emit to backend
    socket.emit("move", {
      cell: selectedCell.coordinate,
      image: selectedImage,
      player: selectedPlayer
    });

    // Reset UI
    setSelectedCell(null);
    setSelectedImage(null);
    setSelectedPlayer(null);
  };
  const handleLogin = async () => {
    try {
      await axios.post("https://animated-space-goldfish-g999xg4qjp5hpp9g-3001.app.github.dev/login", {
        username,
        role
      });

      socket.connect();
      socket.emit("join", { username, role });

      setLoggedIn(true);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    socket.on("game_state", (state) => {
      console.log(state);
      setGameState(state);
    });

    return () => {
      socket.off("game_state");
      socket.off("users_update");
    };
  }, []);

  if (!loggedIn) {
    return (
      <div style={{ padding: 40 }}>
        <h2>Login</h2>

        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <div>
          <label>
            <input
              type="radio"
              value="player"
              checked={role === "player"}
              onChange={(e) => setRole(e.target.value)}
            />
            Player
          </label>

          <label>
            <input
              type="radio"
              value="admin"
              checked={role === "admin"}
              onChange={(e) => setRole(e.target.value)}
            />
            Admin
          </label>
        </div>

        <button onClick={handleLogin}>Join</button>
      </div>
    );
  }

  return (
    <div style={{ padding: 40 }}>
      <h2>Logged in as {username}</h2>
      {gameState && <h3>Turn: {gameState.turn}</h3>}
      {role === "admin" && gameState && (
        <div>
        <h2>{gameplaying ? "게임 중" : "시작 전"}</h2>
        <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontWeight: "bold",
          cursor: "pointer"
        }}
        onClick={handleGameStart}
      >
        게임 시작/정지
      </button>
      <SelectTurn players={gameState.players} onTurnSelect={handleTurnSelect}/>
      </div>
      )}
      {gameState && (
        <Board
          board={gameState.board}
          players={gameState.players}
          onCellClick={handleCellClick}
        />
      )}
      {role === "admin" && selectedCell && (
        <Selection
          players={gameState.players}
          selectedImage={selectedImage}
          selectedPlayer={selectedPlayer}
          onImageSelect={setSelectedImage}
          onPlayerSelect={setSelectedPlayer}
          onConfirm={handleConfirmMove}
        />
      )}
    </div>
  );
}

export default App;
