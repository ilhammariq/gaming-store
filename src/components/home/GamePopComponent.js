import React, { Component } from "react";
import CardGame from "../common/CardGame";

const dataGamePopuler = [
  {
    no: 1,
    nameGame: "Mobile Legend",
    imgGame:
      "https://play-lh.googleusercontent.com/ha1vofCWS5lFhVe0gabwIetwjT4fUY5d6iDOP10KWRwnXci8lWI3ClxrqjoRuPZidg=s180-rw",
    slugGame: "mobile-legend",
  },
  {
    no: 2,
    nameGame: "Free Fire",
    imgGame:
      "https://play-lh.googleusercontent.com/cw0x8EiZYDwL6x4XKKXDmfQsFDYKO4Q6xIfiyPOvgIjHCpe41QAM_rl4y0dLu0SJOdM=s180-rw",
    slugGame: "free-fire",
  },
  {
    no: 3,
    nameGame: "Genshin Impact",
    imgGame: "https://mobilegamestore.id/assets/img/1648228117genshin.jpg",
    slugGame: "genshin-impact",
  },
  {
    no: 4,
    nameGame: "PUBG Mobile",
    imgGame: "https://mobilegamestore.id/assets/img/1648439208pubgm .jpg",
    slugGame: "pubg-mobile",
  },
  {
    no: 5,
    nameGame: "LOL Wild Rift",
    imgGame: "https://mobilegamestore.id/assets/img/1648398643lol logo.png",
    slugGame: "lol-wild-rift",
  },
];

export default class GamePopComponent extends Component {
  render() {
    return (
      <div className="pt-6">
        <h2 className="mb-3 text-white font-bold text-xl md:text-3xl pl-1 md:pl-2 lg:pl-0">
          Populer
        </h2>
        <div className="container my-4 mx-auto">
          <div className="flex flex-wrap -mx-1 lg:-mx-4 justify-center">
            {dataGamePopuler.map((pop) => (
              <div
                key={pop.no}
                className="my-2 h-100 px-1 w-1/4 md:w-1/4 md:px-2 lg:my-4 lg:px-3 lg:w-1/5"
              >
                <CardGame
                  imgGame={pop.imgGame}
                  nameGame={pop.nameGame}
                  slugGame={pop.slugGame}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
