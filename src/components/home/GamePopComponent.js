import React, { Component } from "react";
import CardGame from "../common/CardGame";

const dataGamePopuler = [
  {
    no: 1,
    nameGame: "Mobile Legend",
    imgGame: "https://wallpapercave.com/wp/wp4400888.png",
    slugGame: "mobile-legend",
    promotionGame: "Diskon Hingga 22% OFF!",
  },
  {
    no: 2,
    nameGame: "Free Fire",
    imgGame: "https://wallpapercave.com/wp/wp3144352.jpg",
    slugGame: "free-fire",
    promotionGame: "Manfaat eksklusif！",
  },
  {
    no: 3,
    nameGame: "Genshin Impact",
    imgGame: "https://wallpapercave.com/wp/wp9330474.jpg",
    slugGame: "genshin-impact",
    promotionGame: "Penawaran hebat. Bonus melimpah.",
  },
  {
    no: 4,
    nameGame: "PUBG Mobile",
    imgGame: "https://wallpapercave.com/wp/wp7795888.jpg",
    slugGame: "pubg-mobile",
    promotionGame: "Extra UC hingga 35%!",
  },
  // {
  //   no: 5,
  //   nameGame: "LOL Wild Rift",
  //   imgGame: "https://mobilegamestore.id/assets/img/1648398643lol logo.png",
  //   slugGame: "lol-wild-rift",
  // },
];

export default class GamePopComponent extends Component {
  render() {
    return (
      <div className="pt-6">
        <h2 className="mb-3 text-white font-bold text-xl md:text-3xl pl-1 md:pl-2 lg:pl-0">
          Populer
        </h2>
        <div className="container my-3 mx-auto">
          <div className="flex flex-wrap -mx-1 lg:-mx-4 justify-center">
            {dataGamePopuler.map((pop) => (
              <div
                key={pop.no}
                className="my-2 px-1 w-1/2 md:w-1/2 md:px-2 lg:my-4 lg:px-3 lg:w-1/2"
              >
                <CardGame
                  typeCard="populer"
                  imgGame={pop.imgGame}
                  nameGame={pop.nameGame}
                  slugGame={pop.slugGame}
                  promotionGame={pop.promotionGame}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
