import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { signOutAction } from "@/server/sign-out";

export default async function Home() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <>
      <div className="text-white">Pantry page</div>
      <form action={signOutAction}>
        <button className="text-white">Log out</button>
      </form>
    </>
  );
}
