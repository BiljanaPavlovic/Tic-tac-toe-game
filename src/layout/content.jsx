import React from "react";
import Player from "../components/player";
import Profile from "../components/profile";
import { Switch, Route, Link } from "react-router-dom";
import Board from "../components/board";

export default function Content() {
  return (
    <div>
      <Link to="/register">
        <button className="btn">Click to register</button>
      </Link>
      <br />
      <img
        src="./img/tic-tac-toe.png"
        alt="tic-logo"
        width="200px"
        height="200px"
      />

      <Switch>
        <Route path="/register" component={Player} />
        <Route path="/profile" component={Profile} />
        <Route path="/board/:id" component={Board} />
      </Switch>
    </div>
  );
}
