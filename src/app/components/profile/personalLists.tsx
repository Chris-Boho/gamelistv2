import { user } from "~/types/types";
import CreateList from "./createList";
import Header from "../other/header";

type Props = {
  user: user;
};

export default function PersonalList({ user }: Props) {
  return (
    <div className="p-4">
      <Header text="Personal Lists" />
      <div className="mt-4">
        <CreateList user={user} />
      </div>
      {user.lists ? (
        <div className="w-4xl collapse bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Click me to show/hide content
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      ) : (
        <p>you dont have lists</p>
      )}
      <div></div>
    </div>
  );
}
