"use client";

import React, { useState } from "react";
import { game } from "~/types/types";
import Link from "next/link";
import Header from "../other/header";
import SmallHeader from "../other/smallHeader";
import ScreenshotModal from "./screenshotModal";
import { Navigation, FreeMode, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

type Props = {
  media: { id: number; url: string }[];
};

export default function GameMedia({ media }: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="mt-8 flex flex-col items-center justify-center rounded bg-slate-300 p-8">
      <div className="max-w-80 sm:max-w-3xl">
        <Swiper
          style={
            {
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            } as React.CSSProperties
          }
          spaceBetween={10}
          centeredSlides={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Thumbs]}
          className="mySwiper2"
        >
          {media &&
            media.map((item, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center"
              >
                <ScreenshotModal
                  src={item.url.replace("t_thumb", "t_original")}
                  id={item.id}
                />
              </SwiperSlide>
            ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          navigation={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper mt-4 rounded bg-slate-400"
        >
          {media &&
            media.map((item, index) => (
              <SwiperSlide key={index} className="p-4">
                <img
                  src={item.url.replace("t_thumb", "t_original")}
                  className="rounded-lg border border-black"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "200px",
                    width: "auto",
                    height: "auto",
                  }}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}
