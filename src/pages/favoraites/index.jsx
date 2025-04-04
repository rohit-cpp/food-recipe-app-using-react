import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../../components/context";
import RecipeItem from "../../components/recipe-Item";
const Favourites = () => {
  const { favoritesList } = useContext(GlobalContext);
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing is Added in Favorites{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default Favourites;
