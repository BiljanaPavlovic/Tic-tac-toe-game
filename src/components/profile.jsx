import React, { useState } from "react";
import { createBoard, getBoards } from "../services";
import { Link } from "react-router-dom";

export default function Profile() {
  const [boards, setBoards] = useState([]);

  const allBoards = () => {
    getBoards().then((res) => setBoards(res.data));
  };

  return (
    <div className="profile">
      <h3>Hello Player</h3>
      <button className="btn" onClick={createBoard}>
        Create board
      </button>
      <button className="btn" onClick={allBoards}>
        All boards
      </button>
      <div className="all-boards">
        {boards.map((board) => (
          <p className="boards-links" key={board.id}>
            <Link to={`/board/${board.id}`}>
              {board.id} - {board.players}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
}
