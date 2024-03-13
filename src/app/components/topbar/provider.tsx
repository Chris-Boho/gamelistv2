"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";

type Props = {
  children: React.ReactNode;
};

export default function Provider({ children }: Props) {
  console.log("session provider");
  return <SessionProvider>{children}</SessionProvider>;
}
