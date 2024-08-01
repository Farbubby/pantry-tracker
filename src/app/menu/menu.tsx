import AddCard from "@/components/add-card";
import UpdateCard from "@/components/update-card";
import RemoveCard from "@/components/remove-card";
import RecipeGenCard from "@/components/recipe-gen-card";
import StatsCard from "@/components/stats-card";

export default function Menu() {
  return (
    <>
      <div className="text-white h-full mt-20 flex flex-col items-center gap-12">
        <h1 className="text-4xl text-orange-400 font-bold">
          Welcome to Pantry Pandas!
        </h1>
        <div className="flex flex-row gap-10">
          <div className="grid grid-cols-4 gap-4">
            <StatsCard />
            <AddCard />
            <UpdateCard />
            <RemoveCard />
            <RecipeGenCard />
          </div>
        </div>
      </div>
    </>
  );
}
