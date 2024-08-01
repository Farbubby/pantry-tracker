import { signOutAction } from "@/server/auth/sign-out";

export default function Navbar() {
  return (
    <>
      <nav className="bg-gray-950 px-8 border-b border-gray-800 h-14 flex flex-row items-center">
        <div className="flex flex-row gap-4 w-full justify-end">
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
