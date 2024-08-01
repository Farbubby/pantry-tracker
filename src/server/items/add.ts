import { createClient } from "@/utils/supabase/server";
import { z } from "zod";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const AddItemSchema = z.object({
  name: z.string().min(1, "Name is required"),
  quantity: z.number().int().min(1, "Quantity is required"),
});

export async function addItemAction(_: unknown, formData: FormData) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  const userInput = Object.fromEntries(formData.entries());
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

  return revalidatePath("/pantry", "page");
}
