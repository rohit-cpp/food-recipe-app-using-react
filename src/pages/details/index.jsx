import React, { useContext, useEffect } from "react";
import { data, useParams } from "react-router";
import { GlobalContext } from "../../components/context";

const Details = () => {
  const { id } = useParams();
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    favoritesList,
    handleAddToFavorite,
  } = useContext(GlobalContext);

  console.log(id);

  useEffect(() => {
    async function getRecipeDetails() {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();
      console.log(data);
      if (data?.data) {
        setRecipeDetailsData(data?.data);
      }
    }
    getRecipeDetails();
  }, []);

  return (
    <div>
      <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
        <div className="row-start-2 lg:row-start-auto">
          <div className="h-96 overflow-hidden rounded-xl group">
            <img
              src={recipeDetailsData?.recipe?.image_url}
              className="w-full h-full object-cover block group-hover:scale-105 duration-300"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-sm text-5xl text-cyan-700 font-medium ">
            {recipeDetailsData?.recipe?.publisher}
          </span>
          <h3 className="font-bold text-2xl truncate text-black mb-2">
            {recipeDetailsData?.recipe?.title}
          </h3>
          <div>
            <button
              onClick={() => handleAddToFavorite(recipeDetailsData?.recipe)}
              className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-bold rounded-lg text-sm px-5 py-4 text-center me-2 mb-8 cursor-pointer"
            >
              {favoritesList &&
              favoritesList.length > 0 &&
              favoritesList.findIndex(
                (item) => item.id === recipeDetailsData?.recipe?.id
              ) !== -1
                ? "Remove from Favorites"
                : " Add to Favorites"}
            </button>
          </div>
          <div>
            <span className="text-6xl font-semibold text-yellow-400">
              Ingredients:
            </span>
            <ul className="flex flex-col gap-3 mt-6">
              {recipeDetailsData?.recipe?.ingredients.map((ingredient) => (
                <li>
                  <span className="font-bold text-xl truncate text-black">
                    {ingredient.quantity} {"   "}
                    {ingredient.unit}
                  </span>
                  <span className="font-bold text-xl truncate text-black">
                    {"   "} {ingredient.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
