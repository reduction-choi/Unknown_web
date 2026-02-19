import React, { useState, useEffect } from "react";
import Board from "./Board";
import axios from "axios";
import { socket } from "./socket";

function App() {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("player");
  const [loggedIn, setLoggedIn] = useState(false);

  const [gameState, setGameState] = useState(null);
  const [players, setPlayers] = useState([]);
  const [watchers, setWatchers] = useState([]);

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

    socket.on("users_update", (data) => {
      setPlayers(data.players);
      setWatchers(data.watchers);
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

      <h3>Players</h3>
      <ul>
        {players.map((p, i) => (
          <li key={i}>{p.username}</li>
        ))}
      </ul>

      <h3>Watchers</h3>
      <ul>
        {watchers.map((w, i) => (
          <li key={i}>{w.username}</li>
        ))}
      </ul>

      {gameState && (
        <Board
          board={gameState.board}
          players={gameState.players}
        />
      )}

      {role === "player" && (
        <button onClick={makeMove}>Make Move</button>
      )}
    </div>
  );
}

export default App;
