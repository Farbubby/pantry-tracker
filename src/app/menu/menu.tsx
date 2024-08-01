import Navbar from "@/components/navbar";
import Option from "@/components/option";

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
            <Option
              title="Add item?"
              description="Want to add an item to your pantry?"
              buttonText1="Enter item"
              buttonText2="Take a picture"
            />
            <Option
              title="Remove item?"
              description="Want to remove an item from your pantry?"
              buttonText1="Remove"
            />
            <Option
              title="Update item?"
              description="Want to update an item in your pantry?"
              buttonText1="Update"
            />
            <Option
              title="Need recipes?"
              description="Want to find recipes based on your pantry?"
              buttonText1="Cook!"
            />
          </div>
        </div>
      </div>
    </>
  );
}
