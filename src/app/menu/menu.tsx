import Navbar from "@/components/navbar";
import Option from "@/components/option";
import AddCard from "@/components/add-card";
import UpdateCard from "@/components/update-card";
import RemoveCard from "@/components/remove-card";
import RecipeGenCard from "@/components/recipe-gen-card";

export default function Menu() {
  return (
    <>
      <Navbar />
      <div className="text-white h-full mt-20 flex flex-col items-center gap-12">
        <h1 className="text-4xl text-orange-400 font-bold">
          Welcome to Pantry Pandas!
        </h1>
        <div className="flex flex-row gap-10">
          <div className="grid grid-cols-4 gap-4">
            <div className="text-orange-400 border border-gray-800 row-span-2 col-span-2 py-8 px-12 flex flex-col justify-between">
              <div className="flex flex-row justify-between">
                <div className="text-center flex flex-col gap-2">
                  <div>Number of items</div>
                  <div className="text-2xl font-bold">420</div>
                </div>
                <div className="text-center flex flex-col gap-2">
                  <div>Quantity in the pantry</div>
                  <div className="text-2xl font-bold">420</div>
                </div>
              </div>
              <div className="text-orange-400 flex flex-row justify-end">
                <div>View pantry</div>
              </div>
            </div>
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
