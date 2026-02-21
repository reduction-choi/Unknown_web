import React, { useState, useEffect } from "react";
import Board from "./Board";
import Selection from "./Selection";
import SelectTurn from "./SelectTurn";
import axios from "axios";
import { socket } from "./socket";
import Loading from "./Loading";

function App() {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("player");
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
      await axios.post("https://unknown-backend-baac.onrender.com/login", {
        username,
        role
      });

      socket.connect();
      socket.emit("join", { username, role });

      setLoggedIn(true);
      setLoading(false);
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
  if (loading) {
    return (
      <Loading username={username}></Loading>
    )
  }
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
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: role === "player" ? "column" : "row", // ✅ 추가
        padding: "20px",
        boxSizing: "border-box",
        marginTop: "20px" // ✅ 2번 수정 (위 여백)
      }}
    >
      {/* LEFT PANEL */}
      <div
        style={{
          flex: role === "admin" ? 1.4 : "none",  // ✅ player일 때 flex 제거
          paddingRight: role === "admin" ? "20px" : "0px",
          overflowY: "auto"
        }}
      >{role === "player" && gameState && (
        <h3 style={{
          marginBottom: "10px",
          fontSize: "26px",
          fontWeight: "bold",
          color: "black",
          textAlign: "center",      // ✅ 가운데 정렬
          width: "100%"             // ✅ 전체 너비 사용
        }}>
          Turn: {gameState.turn}
        </h3>
      )}
        {role === "admin" && gameState && (
          <div>
            <h3>Turn: {gameState.turn}</h3>
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

            <SelectTurn
              players={gameState.players}
              onTurnSelect={handleTurnSelect}
            />
            {selectedCell && <h2>({selectedCell.coordinate[0]}, {selectedCell.coordinate[1]})</h2>}
          </div>
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

      {/* RIGHT PANEL (BOARD) */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: role === "player" ? "10px" : "0px" // ✅ player일 때만 약간 띄움
        }}
      >
        {gameState && (
          <Board
            board={gameState.board}
            players={gameState.players}
            onCellClick={handleCellClick}
          />
        )}
      </div>
    </div>
  );
}

export default App;
