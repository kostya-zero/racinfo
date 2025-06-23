"use client";

import HoverLink from "@/components/HoverLink";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className={"w-full flex flex-row items-end justify-between"}>
      <h1 className={"text-5xl text-stone-200 font-rokkitt font-bold"}>
        Racinfo
      </h1>
      <nav className={"flex flex-row items-center gap-4 mb-2"}>
        <HoverLink
          href={"/"}
          className={`hover:text-stone-50  transition duration-200 ${
            pathname === "/" ? "text-stone-50" : "text-stone-500"
          }`}
        >
          Home
        </HoverLink>
        <HoverLink
          href={"/protocol"}
          className={`hover:text-stone-50  transition duration-200 ${
            pathname === "/protocol" ? "text-stone-50" : "text-stone-500"
          }`}
        >
          Protocol
        </HoverLink>
        <HoverLink
          href={"/projects"}
          className={`hover:text-stone-50  transition duration-200 ${
            pathname === "/projects" ? "text-stone-50" : "text-stone-500"
          }`}
        >
          Projects
        </HoverLink>
      </nav>
    </header>
  );
}
