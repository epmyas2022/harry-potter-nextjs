"use client";
import Logo from "./Logo";
import { useTransitionRouter } from "next-view-transitions";
import { useTransitionAnimate } from "@/hooks/useAnimate";
function NavBar() {
  const router = useTransitionRouter();
  const { slideInOut } = useTransitionAnimate();

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    e.preventDefault();
    router.push(path, {
      onTransitionReady: slideInOut,
    });
  };
  return (
    <nav className="bg-black p-4 flex-wrap flex w-full justify-between items-center">
      <Logo />

      <ul className="flex space-x-4 text-white font-bold">
        <li>
          <a
            className="cursor-pointer"
            onClick={(e) => handleNavigation(e, "/")}
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="cursor-pointer"
            onClick={(e) => handleNavigation(e, "/characters")}
          >
            Characters
          </a>
        </li>
        <li>
          <a
            className="cursor-pointer"
            onClick={(e) => handleNavigation(e, "/spells")}
          >
            Spells
          </a>
        </li>
        <li>
          <a
            className="cursor-pointer"
            onClick={(e) => handleNavigation(e, "/potions")}
          >
            Potions
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
