import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context";

const Navbar = () => {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);
  console.log(searchParam);

  return (
    <nav>
      <div className=" flex items-center justify-center gap-20 bg-yellow-300 rounded-2xl p-2">
        <h1 className="flex items-center text-6xl font-extrabold text-red-800">
          <NavLink to={"/"} className={"hover:text-red-700 duration-300"}>
            FOOD
          </NavLink>
          <span className="bg-blue-100 ml-4 mb-2 text-white-400 text-6xl font-extrabold me-2 px-2.5 py-0.5 rounded-sm dark:bg-white-400 dark:text-cyan-800 mt-2 ms-2 mr-4">
            RECIPE
          </span>
          <h1 className="flex items-center text-6xl font-extrabold text-red-800">
            <NavLink to={"/"} className={"hover:text-red-700 duration-300"}>
              APP
            </NavLink>
          </h1>
        </h1>
        <span className="italic text-2xl text-black-400">
          {" "}
          Delicious Recipes at Your Fingertips!
        </span>
      </div>

      <header class="text-gray-600 body-font ml-30 mt-5">
        <div class=" container mx-auto flex gap-4 flex-wrap p-5 flex-col md:flex-row">
          <form onSubmit={handleSubmit} class="max-w-md mx-auto">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>

            <div class="relative ">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                name="search"
                value={searchParam}
                onChange={(event) => {
                  setSearchParam(event.target.value);
                }}
                id="default-search"
                class="block w-100 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Food"
                required
              />
              <button
                type="submit"
                class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>

          <ul className="flex flex-wrap justify-end gap-4 mt-3">
            <li>
              <NavLink
                to={"/"}
                className={
                  "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/Favourites"}
                className={
                  "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                }
              >
                Favourites
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
