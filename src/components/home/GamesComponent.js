import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CardGame from "../common/CardGame";
import { Pagination } from "swiper";

import "swiper/css/pagination";

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
  {
    no: 6,
    nameGame: "Ragnarok X",
    imgGame:
      "https://media.gold.razer.com/goldweb/content/catalogs/gold/ragnarok-x-next-generation/attachment/GUYTE6BVGEZF6UTBM5XGC4TPNNMA====.jpg",
  },
  {
    no: 7,
    nameGame: "Arena of Valor",
    imgGame: "https://ourastore.com/assets/img/1649760863AOV.png",
  },
  {
    no: 8,
    nameGame: "Valorant",
    imgGame:
      "https://media.gold.razer.com/goldweb/content/catalogs/gold/valorant/attachment/GUYTE6BVGEZF6VTBNRXXEYLOOQ======.jpg",
  },
  {
    no: 9,
    nameGame: "COD Mobile",
    imgGame: "https://telegra.ph/file/b5b87817a98a77e3fd0f7.png",
  },
];

export default class GamesComponent extends Component {
  render() {
    return (
      <div className="py-6">
        <h2 className="mb-3 text-white font-bold text-xl md:text-3xl lg:text-3xl pl-1 md:pl-2 lg:pl-0">
          Games
        </h2>
        <div className="container my-4 mx-auto">
          <div className="flex flex-wrap -mx-1 lg:-mx-4 px-2 md:px-3 lg:my-4 lg:px-4">
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
                paddingBottom: "50px",
              }}
              loop={true}
              pagination={{
                clickable: true,
              }}
              slidesPerView={"4"}
              spaceBetween={10}
              breakpoints={{
                640: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 30,
                },
              }}
              modules={[Pagination]}
            >
              {dataGamePopuler.map((pop) => (
                <SwiperSlide key={pop.no} className="my-2">
                  <CardGame imgGame={pop.imgGame} nameGame={pop.nameGame} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    );
  }
}
