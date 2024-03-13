"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";

type Props = {};

export default function SearchBar({}: Props) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("query:", query);
    router.push(`/search?q=${query}`);
    setQuery("");
  }

  return (
    <form
      className="flex flex-row items-center justify-center"
      onSubmit={handleSubmit}
    >
      <div className="block sm:hidden">
        <FaSearch />
      </div>
      <label className="input input-bordered flex items-center">
        <input
          type="text"
          value={query}
          placeholder="Search Here..."
          className="ml-2 hidden sm:block"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">
          <FaSearch />
        </button>
      </label>
    </form>
  );
}
