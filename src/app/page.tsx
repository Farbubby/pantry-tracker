import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center gap-8 lg:px-16 md:px-8 px-4 pb-8">
        <div className="text-orange-400 font-bold text-5xl">Pantry Pandas</div>
        <div className="text-muted-foreground max-w-lg flex flex-col gap-2">
          <div>
            Need help with managing your pantry items? You came to the right
            place! Let us help you efficiently keep track of your pantry items
            and manage them. Sign up an account to begin using the product or
            sign in if you alreay have an account.
          </div>
          <div>
            We will be adding more features such as camera and image support to
            adding items and leveraging AI to suggest you recipes based on the
            items currently in your pantry. Stay tuned for more!
          </div>
        </div>
        <div className="flex flex-row gap-8">
          <Link href="/sign-up">
            <Button
              variant={"ghost"}
              className="text-orange-400 border border-gray-800 hover:bg-orange-400 hover:text-black">
              Sign up
            </Button>
          </Link>
          <Link href="/sign-in">
            <Button
              variant={"ghost"}
              className="text-orange-400 border border-gray-800 hover:bg-orange-400 hover:text-black">
              Sign in
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
