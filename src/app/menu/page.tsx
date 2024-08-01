import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Menu from "./menu";

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
      <Menu />
    </>
  );
}
