"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function signOutAction() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return;
  }

  const { error } = await supabase.auth.signOut();

  if (error) {
    return {
      error: error.message,
    };
  }

  return redirect("/sign-in");
}
