import React from "react";

type Props = {
  text: string;
};

export default function SmallHeader({ text }: Props) {
  return (
    <div className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
      {text}
    </div>
  );
}
