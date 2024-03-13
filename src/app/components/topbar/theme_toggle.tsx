"use client";

import { useState, useEffect } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

type Props = {};

export default function Theme_Toggle() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  // initially set the theme and "listen" for changes to apply them to the HTML tag
  useEffect(() => {
    document.querySelector("html")!.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <label className="swap swap-rotate pt-2">
      <input onClick={toggleTheme} type="checkbox" />
      <div className="swap-on">
        <MdOutlineDarkMode />
      </div>
      <div className="swap-off">
        <MdOutlineLightMode />
      </div>
    </label>
  );
}
