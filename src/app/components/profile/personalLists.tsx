"use client";

import { user, list } from "~/types/types";
import CreateList from "./createList";
import Header from "../other/header";
import { api } from "~/trpc/react";

type Props = {
  user: user;
};

export default function PersonalList({ user }: Props) {
  const userLists = api.list.getLists.useQuery();
  const ListGames = api.list.getGames.useQuery();

  const userListLength = userLists.data?.length;

  return (
    <div className="p-4">
      <Header text="Personal Lists" />
      <div className="mt-4">
        <CreateList user={user} />
      </div>
      {userLists.data && userListLength! > 0 ? (
        userLists.data.map((list: list) => (
          <div
            className="w-4xl collapse collapse-arrow my-4 bg-base-200"
            key={list.id}
          >
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              {list.name}
            </div>
            <div className="collapse-content">
              {list.games ? (
                <p>{list.games[0]?.name}not empty</p>
              ) : (
                <p>Empty</p>
              )}
            </div>
          </div>
        ))
      ) : (
        <p>you dont have lists</p>
      )}
      <div></div>
    </div>
  );
}
