"use server";

import { createClient } from "@/utils/supabase/server";
import { z } from "zod";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const AddItemSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .regex(/^[A-Za-z]+$/, "No special characters or numbers allowed"),
  quantity: z.number().int().min(1, "Quantity must be greater than 0"),
});

export async function addItemAction(formData: FormData) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  const userInput = {
    name: formData.get("name") as string,
    quantity: parseInt(formData.get("quantity") as string),
  };

  const parsed = AddItemSchema.safeParse(userInput);

  if (!parsed.success) {
    const error = parsed.error.flatten();

    return {
      fieldError: {
        name: error.fieldErrors.name?.[0],
        quantity: error.fieldErrors.quantity?.[0],
      },
    };
  }

  const { name, quantity } = parsed.data;

  if (quantity < 1) {
    return {
      fieldError: {
        quantity: "Quantity must be greater than 0",
      },
    };
  }

  const { data } = await supabase
    .from("pantry")
    .select()
    .eq("name", name)
    .eq("uuid", user.id);

  if (data && data.length > 0) {
    return {
      fieldError: {
        name: "Item already exists",
      },
    };
  }

  const { error } = await supabase
    .from("pantry")
    .insert({
      uuid: user.id,
      name,
      quantity,
    })
    .select();

  if (error) {
    return { error: error.message };
  }

  return { success: "Item added successfully" };
}
