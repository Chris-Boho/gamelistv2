import Link from "next/link";
import { getCurrentUser } from "~/server/session";
import Logout from "./logout";
import SearchBar from "./searchBar";
import Theme_Toggle from "./theme_toggle";

export default async function Navbar() {
  const user = await getCurrentUser();
  return (
    <>
      <header
        className="w-full border-b-4 border-blue-700 bg-gradient-to-b from-sky-400 to-blue-600 p-4"
        id="hd1"
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            VG-List
          </Link>
          <ul className="flex items-center justify-items-center space-x-4">
            <li className="flex flex-row">
              <div className="">
                <SearchBar />
              </div>
            </li>
            <li>
              <Link href="/FAQ">FAQ</Link>
            </li>
            <li>
              <Theme_Toggle />
            </li>
            {user?.name ? (
              <Logout />
            ) : (
              <li>
                <Link href="/api/auth/signin" className="hover:underline">
                  Login
                </Link>
              </li>
            )}
            <li>
              {user ? (
                <Link href={`/user/${user.id}`}>
                  <img
                    src={user.image!}
                    className="h-10 w-10 rounded-full bg-gray-300"
                  />
                </Link>
              ) : (
                <div className="h-10 w-10 rounded-full bg-gray-300"></div>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
