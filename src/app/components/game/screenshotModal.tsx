import { useState } from "react";

type Props = {
  src: string;
  id: number;
};

export default function ScreenshotModal({ src, id }: Props) {
  return (
    <div className="flex items-center justify-center">
      <button
        onClick={() =>
          (
            document.getElementById(`my_modal_2_${id}`) as HTMLDialogElement
          ).showModal()
        }
      >
        <img
          src={src}
          className="rounded-lg border border-black"
          style={{
            maxWidth: "100%",
            maxHeight: "433px",
            width: "auto",
            height: "auto",
          }}
        />
      </button>
      <dialog id={`my_modal_2_${id}`} className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="text-lg font-bold">Media!</h3>
          <div className="flex items-center justify-center">
            <img
              src={src.replace("t_original", "t_screenshot_huge")}
              className="rounded-lg"
            />
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button></button>
        </form>
      </dialog>
    </div>
  );
}
