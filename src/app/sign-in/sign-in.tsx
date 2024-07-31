"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { signInAction } from "@/server/auth/sign-in";
import { useFormState } from "react-dom";

export default function SignUp() {
  const [state, signIn] = useFormState(signInAction, null);
  return (
    <>
      <div className="text-orange-400 font-bold">Sign in!</div>
      <form
        action={signIn}
        className="flex flex-col gap-4 w-full max-w-96"
        noValidate>
        {state?.error && (
          <div className="text-sm text-red-500">{state.error}</div>
        )}
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
          Sign in
        </Button>
      </form>
      <div className="text-white">
        Do not have an account?{" "}
        <span className="font-bold text-orange-500 hover:underline">
          <a href="/sign-up">Sign up</a>
        </span>
      </div>
    </>
  );
}
