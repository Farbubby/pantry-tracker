import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function deleteItemAction(_: unknown, name: string) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  const { error } = await supabase
    .from("pantry")
    .delete()
    .eq("name", name)
    .eq("uuid", user.id);

  if (error) {
    return { error: error.message };
  }

  return revalidatePath("/pantry", "page");
}
