import Navbar from "@/components/navbar";
import Option from "@/components/option";

export default function Menu() {
  return (
    <>
      <Navbar />
      <div className="text-white h-fill mt-20 flex flex-row justify-center gap-4">
        <Option
          title="Add"
          description="Want to add something to your pantry?"
          buttonText="Yes please!"
        />
        <Option
          title="Remove"
          description="Want to remove something from your pantry?"
          buttonText="Yes please!"
        />
      </div>
    </>
  );
}
