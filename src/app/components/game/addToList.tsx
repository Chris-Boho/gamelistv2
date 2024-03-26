"use client";

import { FaList } from "react-icons/fa";
import { api } from "~/trpc/react";
import { user, list, game } from "~/types/types";

type Props = {
  game: game;
};

export default function AddToList({ game }: Props) {
  const userLists = api.list.getLists.useQuery();
  const userListLength = userLists.data?.length;

  const checkGame = api.list.isGameInList.useQuery({
    gameId: String(game.id),
  });

  console.log("checked game: ", checkGame);

  return (
    <div>
      <details className="dropdown">
        <summary className="btn btn-info m-1 mt-4">
          <FaList />
          <p>Add to list</p>
        </summary>
        <ul className="menu dropdown-content z-[1] w-52 rounded-box border bg-base-100 p-2 shadow">
          {userLists.data && userListLength! > 0 ? (
            userLists.data.map((list: list) => (
              <li key={list.id}>
                <a>{list.name}</a>
              </li>
            ))
          ) : (
            <p>You don't have lists...</p>
          )}
        </ul>
      </details>
    </div>
  );
}
