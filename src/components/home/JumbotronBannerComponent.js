import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default class Jumbotron extends Component {
  render() {
    return (
      <div className="max-w-screen-lg mx-auto">
        <Swiper
          className="h-full"
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          slidesPerView={1}
          effect={"fade"}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, EffectFade, Pagination]}
        >
          <SwiperSlide>
            <img
              src="http://api.gamestoreindonesia.com/media/1-min-f3fd.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="http://api.gamestoreindonesia.com/media/2-min-b66f.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }
}
