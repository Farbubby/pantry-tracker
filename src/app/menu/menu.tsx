import AddCard from "@/components/add-card";
import RecipeGenCard from "@/components/recipe-gen-card";
import SearchCard from "@/components/search-card";

export default function Menu() {
  return (
    <>
      <div className="text-white h-full mt-20 flex flex-col items-center gap-12">
        <h1 className="text-4xl text-orange-400 font-bold">
          Welcome to Pantry Pandas!
        </h1>
        <div className="flex flex-row gap-10">
          <div className="sm:grid lg:grid-cols-4 sm:grid-col-2 gap-4 flex flex-col">
            <AddCard />
            <RecipeGenCard />
            <SearchCard />
          </div>
        </div>
      </div>
    </>
  );
}
