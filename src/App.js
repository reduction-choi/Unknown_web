import React, { useState, useEffect } from "react";
import Board from "./Board";
import Selection from "./Selection";
import axios from "axios";
import { socket } from "./socket";

function App() {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("player");
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedCell, setSelectedCell] = useState(null);
  const [cellImages, setCellImages] = useState({});
  const [gameState, setGameState] = useState(null);
  const handleCellClick = (cell) => {
    console.log("Clicked:", cell);
    setSelectedCell(cell);
  };
  const handleImageSelect = (imageNumber) => {
    if (!selectedCell) return;

    const key = `${selectedCell.coordinate[0]}-${selectedCell.coordinate[1]}`;

    setCellImages((prev) => ({
      ...prev,
      [key]: imageNumber
    }));

    setSelectedCell(null); // close selection after choosing
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

  const makeMove = () => {
    socket.emit("make_move", { example: "move" });
  };

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
              value="watcher"
              checked={role === "watcher"}
              onChange={(e) => setRole(e.target.value)}
            />
            Watcher
          </label>
        </div>

        <button onClick={handleLogin}>Join</button>
      </div>
    );
  }

  return (
    <div style={{ padding: 40 }}>
      <h2>Logged in as {username}</h2>
      <h3>Role: {role}</h3>

      {gameState && (
        <Board
          board={gameState.board}
          players={gameState.players}
          onCellClick={handleCellClick}
          cellImages={cellImages}
        />
      )}
      {selectedCell && (
        <Selection onSelect={handleImageSelect} />
      )}
      {role === "player" && (
        <button onClick={makeMove}>Make Move</button>
      )}
    </div>
  );
}

export default App;
