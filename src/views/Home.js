import React, { Component } from "react";
import FooterComponent from "../components/home/FooterComponent";
import GamePopComponent from "../components/home/GamePopComponent";
import GamesComponent from "../components/home/GamesComponent";
import Jumbotron from "../components/home/JumbotronBannerComponent";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron />
        <div className="max-w-screen-lg mx-auto px-2 sm:px-6 lg:px-8">
          <GamePopComponent />
          <GamesComponent />
        </div>
        <FooterComponent />
      </div>
    );
  }
}
