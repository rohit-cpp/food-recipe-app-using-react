import React, { useContext } from "react";
import { GlobalContext } from "../../components/context";
import RecipeItem from "../../components/recipe-Item";

const Home = () => {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading)
    return (
      <div className="lg:text-6xl text-xl text-center text-black font-extrabold">
        Loading Data... Please wait,{" "}
      </div>
    );
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing to Show. Please Search something
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
