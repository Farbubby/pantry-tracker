import { signOutAction } from "@/server/auth/sign-out";
import { createClient } from "@/utils/supabase/server";

export default async function Navbar() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  return (
    <>
      <nav className="bg-gray-950 px-8 border-b border-gray-800 h-14 flex flex-row fixed w-full top-0">
        <div className="flex flex-row gap-4 w-full justify-between items-center">
          <h1 className="text-lg text-white">Welcome, {user.email}!</h1>
          <form action={signOutAction}>
            <button className="text-white hover:text-orange-400 duration-200">
              Logout
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}
