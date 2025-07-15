import { LogOut, Moon, PersonStanding, Settings, Sun } from "lucide-react";
import { Button } from "../ui/button";
import { SidebarTrigger } from "../ui/sidebar";
import { useAppDispatch } from "../../store/hooks";
import { toggleDarkMode } from "../../store/ui-slice/theme-slice";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useTheme } from "@/hooks/useTheme";

const Header = () => {
  const dispatch = useAppDispatch();
  /////darkmode
  // const darkMode = useAppSelector((state) => state.theme.theme);
  // useEffect(() => {
  //   const savedMode = localStorage.getItem("theme") as "light" | "dark" | null;
  //   if (savedMode === "dark" || savedMode === "light") {
  //     dispatch(setDarkMode(savedMode));
  //   } else {
  //     // If no saved preference, check system preference
  //     const systemPrefersDark = window.matchMedia(
  //       "(prefers-color-scheme: dark)"
  //     ).matches;
  //     const defaultMode = systemPrefersDark ? "dark" : "light";
  //     dispatch(setDarkMode(defaultMode));
  //     localStorage.setItem("theme", defaultMode);
  //   }
  // }, [dispatch]);
  const darkMode = useTheme();
  return (
    <header className="flex items-center justify-between px-4 py-3 shadow-md">
      <SidebarTrigger />
      <div className="flex flex-1 justify-end">
        <button className=" size-10" onClick={() => dispatch(toggleDarkMode())}>
          {darkMode === "dark" ? (
            <Sun className="w-5 h-5 text-yellow-500 " />
          ) : (
            <Moon className="w-5 h-5 text-gray-800 " />
          )}
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="cursor-pointer outline-none border-none bg-transparent"
            >
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuLabel>
              Michael Jordan <br /> <span>michealjordan@gmail.com</span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <PersonStanding />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogOut />
              <span className="text-red-400 ">Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
