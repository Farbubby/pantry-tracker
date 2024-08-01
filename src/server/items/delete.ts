"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const DeleteItemSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .regex(/^[A-Za-z]+$/, "No special characters or numbers allowed"),
});

export async function deleteItemAction(_: unknown, formData: FormData) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  const userInput = Object.fromEntries(formData.entries());
  const parsed = DeleteItemSchema.safeParse(userInput);

  if (!parsed.success) {
    const error = parsed.error.flatten();

    return {
      fieldError: {
        name: error.fieldErrors.name?.[0],
      },
    };
  }

  const { name } = parsed.data;

  const { data } = await supabase
    .from("pantry")
    .select()
    .eq("name", name)
    .eq("uuid", user.id);

  if (!(data && data.length > 0)) {
    return {
      fieldError: {
        name: "Item not found",
      },
    };
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
