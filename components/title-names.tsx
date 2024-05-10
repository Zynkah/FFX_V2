'use client';

import { usePathname } from "next/navigation";

export function TitleNames() {
  const pathname = usePathname();
  const titles: { [key: string]: string } = {
    "/": "",
    "/aeons": "Aeons",
    "/agencies": "Agencies",
    "/blitzball": "Blitzball",
    "/characters": "Characters",
    "/creator-links": "Creator Links",
    "/equipment": "Equipment",
    "/locations": "Locations",
    "/maesters": "Maesters",
    "/military": "Military",
    "/races": "Races & Creatures",
    "/religion": "Religion",
    "/scripts": "Scripts",
    "/summoners": "Summoners",
    "/technology": "Technology",
    "/temples": "Temples",
    "/toc": "Table of Contents",
    "/valefor": "Valefor",
    "/walkthrough": "Walkthrough",
  };

  return <h1 className="text-4xl">{titles[pathname]}</h1>;
}
