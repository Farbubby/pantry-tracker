"use server";

import { createClient } from "@/utils/supabase/server";
import { z } from "zod";
import { redirect } from "next/navigation";

const SignUpSchema = z.object({
  email: z.string().min(1, "Email is required").email(),
  password: z
    .string()
    .min(1, "Password is required")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character"
    ),
});

export async function signUpAction(_: unknown, formData: FormData) {
  const supabase = createClient();

  const userInput = Object.fromEntries(formData.entries());
  const parsed = SignUpSchema.safeParse(userInput);

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

  const { error } = await supabase.auth.signUp({ email, password });

  if (error) {
    return { error: error.message };
  }

  return redirect("/sign-in");
}
