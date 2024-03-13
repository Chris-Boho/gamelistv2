// "use client";
import { createRef, useState } from "react";
import { FaList } from "react-icons/fa";
import { db } from "~/server/db";
import { user } from "~/types/types";

type Props = {
  user: user;
};

export default function CreateList({ user }: Props) {
  // const [newList, setNewList] = useState("");
  const newList = createRef();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("Submit: ", newList);
    // const entry = await db.list
    //   .create({
    //     data: {
    //       name: newList,
    //       Owner: {
    //         connect: {
    //           id: user.id,
    //         },
    //       },
    //     },
    //   })
    //   .catch((error) => console.error(error));

    // setNewList("");
  }

  return (
    <>
      <button
        className="btn"
        onClick={() =>
          (
            document.getElementById("my_modal_5") as HTMLDialogElement
          ).showModal()
        }
      >
        <FaList />
        <p>Create List</p>
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Title for New List:</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-info mr-4 mt-4 w-full max-w-xs"
              // onChange={(e) => setNewList(e.target.value)}
            />
            <button className="btn btn-info">Submit</button>
          </form>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-error">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
