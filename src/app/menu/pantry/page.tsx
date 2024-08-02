import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Search from "@/app/menu/pantry/search";

export default async function Home() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    console.log("no user");
    redirect("/sign-in");
  }

  return (
    <>
      <Search />
    </>
  );
}
