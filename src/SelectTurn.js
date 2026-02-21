import React from "react";

function SelectTurn({ players, onTurnSelect }) {
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
                {players.map((p) => (
                    <button
                        onClick={() => onTurnSelect(p.username)}
                    >
                        {p.username}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default SelectTurn;