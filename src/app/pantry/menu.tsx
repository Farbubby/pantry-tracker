import Navbar from "@/components/navbar";
import Option from "@/components/option";

export default function Menu() {
  return (
    <>
      <Navbar />
      <div className="text-white h-full mt-20 flex flex-col items-center gap-12">
        <h1 className="text-4xl text-orange-400">Welcome to Pantry Pandas!</h1>
        <div className="flex flex-row gap-4">
          <Option
            title="Add"
            description="Want to add an item to your pantry?"
            buttonText="Yes please!"
          />
          <Option
            title="Remove"
            description="Want to remove an item from your pantry?"
            buttonText="Yes please!"
          />
          <Option
            title="Need recipes?"
            description="Want to find recipes based on your pantry?"
            buttonText="Yes please!"
          />
        </div>
      </div>
    </>
  );
}
