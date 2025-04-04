import React from "react";
import { Link } from "react-router";

const RecipeItem = ({ item }) => {
  return (
    <div>
      <div className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-4 border-4 rounded-2xl border-teal-300 pb-9">
        <div className="h-50 flex justify-center overflow-hidden items-center rounded-xl">
          <img
            src={item?.image_url}
            alt="recipe item"
            className="block w-full"
          />
        </div>
        <div>
          <span className="text-2xl text-cyan-700 font-bold">
            {item?.publisher}
          </span>
          <h3 className="font-bold text-xl truncate text-black mb-6">
            {item?.title}
          </h3>
          <Link
            to={`/recipe-item/${item?.id}`}
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Click to Get Recipe
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeItem;
