// import getSearchParams from "../utilities/getSearchParams";
import makeRequest from "../utilities/makeRequest";
import { game } from "~/types/types";
import GameColumn from "../components/home/gameColumn";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function SearchPage({ searchParams }: Props) {
  const searchTerm = searchParams;

  const resultGames: game[] = await makeRequest({
    endpoint: "/games",
    requestBody: `fields name, cover.url, first_release_date; search "${searchTerm["q"]}"; limit 50; where version_parent = null;`,
    getCover: false,
  });

  console.log("results: ", resultGames);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-xl font-bold">
        Search Results for "{searchTerm["q"]}":
      </h1>
      <div className="">
        <GameColumn games={resultGames} />
      </div>
    </div>
  );
}
