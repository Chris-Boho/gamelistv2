import { game } from "~/types/types";
import SmallHeader from "../other/smallHeader";

type Props = {
  game: game;
};

export default function SmallDetails({ game }: Props) {
  return (
    <div className="ml-4 sm:ml-0">
      <div className="flex flex-col">
        <div className="my-2">
          <SmallHeader text="Release Date" />
        </div>
        <div className="flex flex-wrap sm:max-w-xs">
          <p className="font-bold">
            {new Date(
              Number(game.first_release_date) * 1000,
            ).toLocaleDateString()}
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="my-2">
          <SmallHeader text="Developer" />
        </div>
        <div className="flex flex-wrap sm:max-w-xs">
          {game.involved_companies!.map((companies, index) => (
            <p
              key={index}
              className="badge badge-info mb-2 mr-2 line-clamp-1 overflow-hidden text-clip font-bold shadow-xl"
            >
              {companies.company.name}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="my-2">
          <SmallHeader text="Platforms" />
        </div>
        <div className="flex flex-wrap sm:max-w-xs">
          {game.platforms!.map((platform, index) => (
            <p
              key={index}
              className="badge badge-info mb-2 mr-2 font-bold shadow-xl"
            >
              {platform.name}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="my-2">
          <SmallHeader text="Genres" />
        </div>
        <div className="flex flex-wrap sm:max-w-xs">
          {game.genres!.map((genre, index) => (
            <p
              key={index}
              className="badge badge-info mb-2 mr-2 font-bold shadow-xl"
            >
              {genre.name}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="my-2">
          <SmallHeader text="Game Modes" />
        </div>
        <div className="flex flex-wrap sm:max-w-xs">
          {game.game_modes!.map((game_mode, index) => (
            <p
              key={index}
              className="badge badge-info mb-2 mr-2 font-bold shadow-xl"
            >
              {game_mode.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
