import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import ItemCard from "@/components/item-card";

export default async function Home() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    console.log("no user");
    redirect("/sign-in");
  }

  const { data, error } = await supabase
    .from("pantry")
    .select()
    .eq("uuid", user.id);

  if (error) {
    return <div>{error.message}</div>;
  }

  if (data && data.length === 0) {
    return (
      <div>
        Your pantry is empty! go back to the menu if you would like to add
        something to your pantry
      </div>
    );
  }

  return (
    <>
      <div className="mt-20 flex flex-wrap gap-4 w-full items-center">
        {data.map((item: { id: string; name: string; quantity: number }) => (
          <ItemCard key={item.id} name={item.name} quantity={item.quantity} />
        ))}
      </div>
    </>
  );
}
