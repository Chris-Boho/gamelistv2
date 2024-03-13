"use client";

import React from "react";
import { signOut } from "next-auth/react";
import { FaSignOutAlt } from "react-icons/fa";

type Props = {};

export default function Logout({}: Props) {
  return (
    <div>
      <button
        className="flex flex-row items-center justify-center space-x-2 hover:underline"
        onClick={() => signOut()}
      >
        <FaSignOutAlt />
        <p>Logout</p>
      </button>
    </div>
  );
}
