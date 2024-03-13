import { game } from "~/types/types";
import Link from "next/link";

type Props = {
  games: game[];
};

export default function GameColumn({ games }: Props) {
  return (
    <div className="">
      <ul>
        {games.map((game: game) => (
          <li className="py-4" key={game.id}>
            <div className="flex">
              <img src={game.cover?.url} width="50px" height="50px" />
              <div>
                <p className="ml-4 text-blue-500 hover:underline">
                  <Link key={game.id} href={`/game/${game.id}`}>
                    {game.name}
                  </Link>
                </p>
                <p className="ml-4 text-gray-400">
                  {new Date(
                    Number(game.first_release_date) * 1000,
                  ).toLocaleDateString()}
                  {game.follows !== undefined && (
                    <span className="ml-2 text-gray-400">
                      ({game.follows} follows)
                    </span>
                  )}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
