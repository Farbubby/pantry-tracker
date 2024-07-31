import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import SignIn from "./sign-in";

export default async function Home() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/pantry");
  }

  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center gap-4">
        <SignIn />
      </div>
    </>
  );
}
