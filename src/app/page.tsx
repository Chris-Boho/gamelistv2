import Showcase from "./components/home/showcase";
import Header from "./components/other/header";
import makeRequest from "./utilities/makeRequest";
import { game } from "~/types/types";
import GameColumn from "./components/home/gameColumn";

export default async function HomePage() {
  const showcaseGames: game[] = await makeRequest({
    endpoint: "/games",
    requestBody:
      "fields name, cover.url, summary, aggregated_rating; limit 10; where aggregated_rating > 90 & aggregated_rating_count > 10;",
    getCover: true,
  });

  const curTime = Math.floor(new Date().getTime() / 1000);
  const thirtyDays = curTime + 2592000;

  const releasingGames: game[] = await makeRequest({
    endpoint: "/games",
    requestBody: `fields cover.url, name, first_release_date, category; limit 10; where first_release_date > ${curTime} & first_release_date < ${thirtyDays} & cover!=null & category = 0; sort first_release_date asc;`,
    getCover: true,
  });

  const followedGames: game[] = await makeRequest({
    endpoint: "/games",
    requestBody:
      "fields name, cover.url, follows, hypes, first_release_date; limit 10; where follows > 800; sort follows desc;",
    getCover: true,
  });

  console.log("Followd Games: ", followedGames);

  return (
    <main>
      <div>
        <div className="mt-10 flex flex-col items-center justify-center">
          <div className="space-y-4">
            <Header text="Highly Rated Games" />
            <Showcase games={showcaseGames} />
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center justify-center sm:flex-row sm:space-x-2">
        <div className="">
          <Header text="Coming Soon" />
          <GameColumn games={releasingGames} />
        </div>
        <div className="-ml-16 sm:ml-0">
          <Header text="Most Followed" />
          <GameColumn games={followedGames} />
        </div>
      </div>
    </main>
  );
}
