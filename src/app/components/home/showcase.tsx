"use client";

import { game } from "~/types/types";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import GameHero from "./gameHero";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Props = {
  games: game[];
};

export default function Showcase({ games }: Props) {
  return (
    <div className="flex max-w-80 sm:max-w-4xl">
      <Swiper
        cssMode={true}
        spaceBetween={8}
        navigation={true}
        pagination={true}
        mousewheel={false}
        keyboard={false}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className=""
      >
        {games.map((game) => (
          <SwiperSlide key={game.id} className="">
            <GameHero game={game} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
