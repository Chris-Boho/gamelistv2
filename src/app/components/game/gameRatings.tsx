import { game } from "~/types/types";

type Props = {
  game: game;
};

export default function GameRatings({ game }: Props) {
  return (
    <div className="mt-2 flex items-center justify-center sm:mt-0">
      <div
        className="mb-4 flex w-11/12 justify-between rounded-lg bg-slate-300 p-4 sm:w-full"
        id="rating"
      >
        <div className="flex flex-col">
          <p> IGDB Rating: </p>
          <div
            className="radial-progress border-4 border-info bg-info text-3xl font-bold text-info-content"
            style={
              {
                "--value": game.rating ? Math.floor(game.rating!) : "0px",
                "--thickness": "4px",
              } as React.CSSProperties
            }
            role="progressbar"
          >
            {game.rating ? Math.floor(game.rating!) : "N/A"}
          </div>
        </div>
        <div className="ml-auto flex flex-col">
          <p> Critic Rating: </p>
          <div
            className="radial-progress border-4 border-info bg-info text-3xl font-bold text-info-content"
            style={
              {
                "--value": game.aggregated_rating
                  ? Math.floor(game.aggregated_rating!)
                  : "0px",
                "--thickness": "4px",
              } as React.CSSProperties
            }
            role="progressbar"
          >
            {game.aggregated_rating
              ? Math.floor(game.aggregated_rating!)
              : "N/A"}
          </div>
        </div>
      </div>
    </div>
  );
}
