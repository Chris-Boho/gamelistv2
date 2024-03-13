import { game } from "~/types/types";
import makeRequest from "./makeRequest";

type Props = {
  games: game[];
};

export default function getCovers({ games }: Props) {
  games.forEach((game: game) => {
    if (game.cover && game.cover.url) {
      var big_cover_url = game.cover.url.replace("t_thumb", "t_original");
      big_cover_url = big_cover_url.replace(".jpg", ".png");
      game.cover.url = big_cover_url;
    }
  });

  return games;
}
