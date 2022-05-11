import React, { Component } from "react";
import CardGame from "../common/CardGame";

const dataGamePopuler = [
  {
    no: 1,
    nameGame: "Mobile Legend",
    imgGame:
      "https://play-lh.googleusercontent.com/ha1vofCWS5lFhVe0gabwIetwjT4fUY5d6iDOP10KWRwnXci8lWI3ClxrqjoRuPZidg=s180-rw",
  },
  {
    no: 2,
    nameGame: "Free Fire",
    imgGame:
      "https://play-lh.googleusercontent.com/cw0x8EiZYDwL6x4XKKXDmfQsFDYKO4Q6xIfiyPOvgIjHCpe41QAM_rl4y0dLu0SJOdM=s180-rw",
  },
  {
    no: 3,
    nameGame: "Genshin Impact",
    imgGame: "https://mobilegamestore.id/assets/img/1648228117genshin.jpg",
  },
  {
    no: 4,
    nameGame: "PUBG Mobile",
    imgGame: "https://mobilegamestore.id/assets/img/1648439208pubgm .jpg",
  },
  {
    no: 5,
    nameGame: "LOL Wild Rift",
    imgGame: "https://mobilegamestore.id/assets/img/1648398643lol logo.png",
  },
];

export default class GamePopComponent extends Component {
  render() {
    return (
      <div className="py-6">
        <h2 className="mb-3 text-white font-bold text-3xl">Populer</h2>
        <div className="container my-4 mx-auto">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            {dataGamePopuler.map((pop) => (
              <CardGame
                key={pop.no}
                imgGame={pop.imgGame}
                nameGame={pop.nameGame}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
