import React from "react";
import { game } from "~/types/types";
import { FaStar } from "react-icons/fa6";
import Link from "next/link";

type Props = {
  game: game;
};

export default function GameHero({ game }: Props) {
  return (
    <div
      className="hero rounded-lg bg-slate-300 px-10 pb-4 sm:max-h-80 sm:pb-0"
      id="gh"
    >
      <div className="hero-content h-auto max-w-full flex-col px-8 sm:flex-row">
        <img
          src={game.cover?.url.replace("t_original", "t_cover_big")}
          className="h-auto max-w-full rounded-lg shadow-xl"
          style={{
            maxWidth: "100%",
            maxHeight: "280px",
            width: "auto",
            height: "auto",
          }}
        />
        <div className="flex-grow">
          <p className="line-clamp-1 text-xl font-bold sm:line-clamp-none sm:pb-4">
            {game.name}
          </p>
          <p className="line-clamp-3 overflow-hidden overflow-ellipsis sm:line-clamp-5">
            {game.summary}
          </p>
          <div className="mt-4 flex items-center">
            <button className="btn btn-info shadow-lg">
              <Link key={game.id} href={`/game/${game.id}`}>
                Read More
              </Link>
            </button>
            <kbd className="kbd kbd-lg ml-auto bg-info">
              {Math.floor(game.aggregated_rating!)} <FaStar className="ml-1" />
            </kbd>
          </div>
        </div>
      </div>
    </div>
  );
}
