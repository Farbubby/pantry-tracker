"use server";

import { createClient } from "@/utils/supabase/server";
import { z } from "zod";
import { redirect } from "next/navigation";

const SignInSchema = z.object({
  email: z.string().min(1, "Email is required").email(),
  password: z.string().min(1, "Password is required"),
});

export async function signInAction(_: unknown, formData: FormData) {
  const supabase = createClient();

  const userInput = Object.fromEntries(formData.entries());
  const parsed = SignInSchema.safeParse(userInput);

  if (!parsed.success) {
    const error = parsed.error.flatten();

    return {
      fieldError: {
        email: error.fieldErrors.email?.[0],
        password: error.fieldErrors.password?.[0],
      },
    };
  }

  const { email, password } = parsed.data;

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return { error: error.message };
  }

  redirect("/menu");
}
