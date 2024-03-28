"use client";
import { useState } from "react";
import { FaList } from "react-icons/fa";
import { api } from "~/trpc/react";

export default function CreateList() {
  const utils = api.useUtils();
  const [name, setName] = useState("");

  const createList = api.list.createList.useMutation({
    onSuccess: () => {
      // Invalidates the cached list. This forces the list to refresh on the UI.
      utils.list.getLists.invalidate();
      setName("");
    },
  });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    createList.mutate({ name });
    const closeModal = (
      document.getElementById("my_modal_5") as HTMLDialogElement
    ).close();
    closeModal;
  }

  return (
    <>
      <button
        className="btn btn-info"
        onClick={() =>
          (
            document.getElementById("my_modal_5") as HTMLDialogElement
          ).showModal()
        }
      >
        <FaList />
        <p className="text-base">Create List</p>
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Title for New List:</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              placeholder="Type here"
              className="input input-bordered input-info mr-4 mt-4 w-full max-w-xs"
              onChange={(e) => setName(e.target.value)}
            />
            <button className="btn btn-info">Submit</button>
          </form>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-error">Close</button>
            </form>
            <form method="dialog" className="modal-backdrop">
              <button>close modal</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
