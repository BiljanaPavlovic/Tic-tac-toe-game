import React, { useState, useEffect } from "react";
import {
  joinGame,
  markTile,
  restart,
  leaveGame,
  leaveSeat,
} from "../socketServices";
import { Link } from "react-router-dom";

const initialData = {
  isPlaying: false,
  matrix: {
    "0": 0,
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0,
    "6": 0,
    "7": 0,
    "8": 0,
  },
};

export default function Board({ match }) {
  const [game, setGame] = useState(initialData);
  const boardId = match.params.id;

  useEffect(() => {
    joinGame(boardId, setGame, game);
    return () => leaveGame(boardId);
  }, [boardId]);

  return (
    <div>
      <button className="btn" onClick={() => restart(boardId)}>
        Restart
      </button>
      <Link to="/">
        <button className="btn">Leave</button>
      </Link>
      <button className="btn" onClick={() => leaveSeat(boardId)}>
        Leave seat
      </button>

      <div className="table">
        {Object.keys(game.matrix).map((key) => {
          return (
            <div
              className="polje"
              onClick={() => {
                markTile(boardId, key, setGame, game.isPlaying);
              }}
              key={key}
            >
              {game.matrix[key] === 0 ? (
                " "
              ) : game.matrix[key] === 1 ? (
                <img src="/img/icons8-x-64.png" alt="X" />
              ) : (
                <img src="/img/icons8-o-64.png" alt="O" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
