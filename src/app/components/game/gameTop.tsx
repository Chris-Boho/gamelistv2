import { game } from "~/types/types";
import Header from "../other/header";
import SmallHeader from "../other/smallHeader";
import SmallDetails from "./smallDetails";
import GameRatings from "./gameRatings";

type Props = {
  game: game;
};

export default function GameTop({ game }: Props) {
  console.log("Game Props: ", game);
  if (game && game.genres) {
    return (
      <div className="mt-8 flex flex-col items-center justify-center ">
        <div className="">
          <div className="ml-2 sm:ml-0">
            <Header text={`${game.name}`} />
          </div>
          <div className="divider"></div>
          <div className="max-w-3xl overflow-hidden md:flex">
            <div className="md:flex-shrink-0">
              <div className="flex items-center justify-center">
                <img
                  className="mx-2 max-w-96 rounded-lg border object-cover shadow-lg sm:mx-0 sm:h-auto sm:w-full sm:max-w-xs"
                  src={game.cover?.url}
                  alt="Game Cover"
                />
              </div>
              <div className="">
                <SmallDetails game={game} />
              </div>
            </div>
            <div className="sm:ml-16">
              <GameRatings game={game} />
              <div className="mx-4 sm:mx-0">
                <div className="">
                  <SmallHeader text="Description" />
                  <p className="mt-2">{game.summary}</p>
                </div>
                {game.storyline && (
                  <div className="pt-4">
                    <SmallHeader text="Storyline" />
                    <p className="mt-2">{game.storyline}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Error Loading Page</div>;
  }
}
