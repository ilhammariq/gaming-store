import React, { Component } from "react";
import GamePopComponent from "../components/home/GamePopComponent";
import GamesComponent from "../components/home/GamesComponent";
import Jumbotron from "../components/home/Jumbotron";

export default class Home extends Component {
  render() {
    return (
      <div className="py-8">
        <div className="max-w-screen-lg mx-auto px-2 sm:px-6 lg:px-8">
          <Jumbotron />
          <GamePopComponent />
          <GamesComponent />
        </div>
      </div>
    );
  }
}
