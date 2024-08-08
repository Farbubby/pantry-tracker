import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
        <div className="flex flex-row gap-4 w-full justify-end items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="bg-gray-950 text-orange-400 border border-gray-800 hover:bg-orange-400 hover:text-black">
                Open
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-gray-950 text-orange-400 border border-gray-800">
              <DropdownMenuLabel>{user.email}</DropdownMenuLabel>
              <DropdownMenuSeparator className="border border-gray-800" />
              <DropdownMenuItem className="focus:bg-orange-400">
                <form action={signOutAction} className="w-full h-full">
                  <button className="w-full text-left font-bold">Logout</button>
                </form>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </>
  );
}
