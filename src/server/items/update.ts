"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const UpdateItemSchema = z.object({
  quantity: z.number().int().min(1, "Quantity must be greater than 0"),
});

export async function updateItemAction(
  name: string,
  _: unknown,
  formData: FormData
) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  const userInput = {
    quantity: parseInt(formData.get("quantity") as string),
  };

  const parsed = UpdateItemSchema.safeParse(userInput);

  if (!parsed.success) {
    const error = parsed.error.flatten();

    return {
      fieldError: {
        quantity: error.fieldErrors.quantity?.[0],
      },
    };
  }

  const { quantity } = parsed.data;

  if (quantity < 1) {
    return {
      fieldError: {
        quantity: "Quantity must be greater than 0",
      },
    };
  }

  const { error } = await supabase
    .from("pantry")
    .update({ quantity })
    .eq("uuid", user.id)
    .eq("name", name);

  if (error) {
    return { error: error.message };
  }

  return revalidatePath("/menu/pantry");
}
