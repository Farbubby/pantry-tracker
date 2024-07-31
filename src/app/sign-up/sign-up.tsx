"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { signUpAction } from "@/server/auth/sign-up";
import { useFormState } from "react-dom";

export default function SignUp() {
  const [state, signUp] = useFormState(signUpAction, null);
  return (
    <>
      <div className="text-orange-400 font-bold">Sign up!</div>
      <form
        action={signUp}
        className="flex flex-col gap-4 w-full max-w-96"
        noValidate>
        <div className="flex flex-col gap-1">
          <Label htmlFor="email" className="text-orange-500 text-sm">
            Email
          </Label>
          <Input
            name="email"
            id="email"
            type="email"
            placeholder="Email"
            className="bg-white text-black px-2 py-1 rounded-lg"
          />
          {state?.fieldError?.email && (
            <div className="text-sm text-red-500">{state.fieldError.email}</div>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="email" className="text-orange-500 text-sm">
            Password
          </Label>
          <Input
            name="password"
            id="password"
            type="password"
            placeholder="Password"
            className="bg-white text-black px-2 py-1 rounded-lg"
          />
          {state?.fieldError?.password && (
            <div className="text-sm text-red-500">
              {state.fieldError.password}
            </div>
          )}
        </div>
        <Button type="submit" className="bg-orange-500 hover:text-orange-500">
          Sign Up
        </Button>
      </form>
      <div className="text-white">
        Already have an account?{" "}
        <span className="font-bold text-orange-500 hover:underline">
          <a href="/sign-in">Sign in</a>
        </span>
      </div>
    </>
  );
}
