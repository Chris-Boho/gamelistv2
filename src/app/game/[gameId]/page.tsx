import makeRequest from "~/app/utilities/makeRequest";
import { game } from "~/types/types";
import GameTop from "~/app/components/game/gameTop";
import GameMedia from "~/app/components/game/gameMedia";
import Header from "~/app/components/other/header";

type Props = {
  params: {
    gameId: string;
  };
};

export default async function GamePage({ params }: Props) {
  const thisGame: game[] = await makeRequest({
    endpoint: "/games",
    requestBody: `fields id, name, cover.url, genres.name, game_modes.name, summary, storyline, platforms.name, artworks.url, screenshots.url, rating, aggregated_rating, first_release_date, involved_companies.company.name; where id = ${params.gameId};`,
    getCover: true,
  });

  if (thisGame[0]) {
    return (
      <div className="">
        <GameTop game={thisGame[0]} />
        <div className="flex flex-col items-center justify-center">
          <div className="mt-6">
            <div className="divider"></div>
            <div>
              <Header text="Screenshots" />
            </div>
            {thisGame[0].screenshots && (
              <GameMedia media={thisGame[0].screenshots} />
            )}
          </div>
        </div>
        {thisGame[0].artworks && (
          <div className="flex flex-col items-center justify-center">
            <div className="mt-6">
              <div>
                <Header text="Artworks" />
              </div>
              <GameMedia media={thisGame[0].artworks} />
            </div>
          </div>
        )}
      </div>
    );
  }
}
