import React, { useState } from "react";
import { postPlayer } from "../services";
import { Link } from "react-router-dom";

export default function Player() {
  const [name, setName] = useState("");

  function handleSubmit() {
    return postPlayer({ name }).then((data) => {
      if (data.success) {
        setName(data.name);
        console.log("Uspesna registracija");
      } else console.log(data, "Neuspesna registracija");
    });
  }

  return (
    <div className="register">
      <p>If you want to play Tic-Tac-Toe game register here:</p>

      <input
        type="text"
        className="input"
        placeholder="Enter your name"
        required
        onInput={(e) => {
          setName(e.target.value);
        }}
      />
      <Link to="/profile">
        <input
          className="btn"
          type="submit"
          value="Registruj se"
          onClick={(e) => {
            handleSubmit();
          }}
        />
      </Link>
    </div>
  );
}
