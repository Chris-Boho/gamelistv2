import React from "react";

type Props = {
  text: string;
};

export default function Header({ text }: Props) {
  return (
    <h1 className="text-xl font-black">
      <div className="relative inline-block">
        <span className="relative z-10">{text}</span>
        <span
          className={`absolute bottom-0 left-0 h-1 w-1/2 rounded bg-blue-500`}
        ></span>
      </div>
    </h1>
  );
}
