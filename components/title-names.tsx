"use client";

import { usePathname } from "next/navigation";

export function TitleNames() {
  const pathname = usePathname();
  return (
    <>
      {pathname === "/" && <h1> </h1>}
      {pathname === "/aeons" && <h1 className="text-4xl">Aeons</h1>}
      {pathname === "/agencies" && <h1 className="text-4xl">Agencies</h1>}
      {pathname === "/blitzball" && <h1 className="text-4xl">Blitzball</h1>}
      {pathname === "/characters" && <h1 className="text-4xl">Characters</h1>}
      {pathname === "/creator-links" && (
        <h1 className="text-4xl">Creator Links</h1>
      )}
      {pathname === "/equipment" && <h1 className="text-4xl">Equipment</h1>}
      {pathname === "/locations" && <h1 className="text-4xl">Locations</h1>}
      {pathname === "/maesters" && <h1 className="text-4xl">Maesters</h1>}
      {pathname === "/military" && <h1 className="text-4xl">Military</h1>}
      {pathname === "/races" && <h1 className="text-4xl">Races & Creatures</h1>}
      {pathname === "/religion" && <h1 className="text-4xl">Religion</h1>}
      {pathname === "/scripts" && <h1 className="text-4xl">Scripts</h1>}
      {pathname === "/summoners" && <h1 className="text-4xl">Summoners</h1>}
      {pathname === "/technology" && <h1 className="text-4xl">Technology</h1>}
      {pathname === "/temples" && <h1 className="text-4xl">Temples</h1>}
      {pathname === "/toc" && <h1 className="text-4xl">Table of Contents</h1>}
      {pathname === "/valefor" && <h1 className="text-4xl">Valefor</h1>}
      {pathname === "/walkthrough" && <h1 className="text-4xl">Walkthrough</h1>}
    </>
  );
}
