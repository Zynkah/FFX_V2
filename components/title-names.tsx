"use client";

import { usePathname } from "next/navigation";

export function TitleNames() {
  const pathname = usePathname();
  return (
    <>
      {pathname === "/" && <h1> </h1>}
      {pathname === "/blitzball" && <h1 className="text-6xl">Blitzball</h1>}
      {pathname === "/characters" && <h1 className="text-6xl">Characters</h1>}
      {pathname === "/creator-links" && (
        <h1 className="text-6xl">Creator Links</h1>
      )}
      {pathname === "/equipment" && <h1 className="text-6xl">Equipment</h1>}
      {pathname === "/locations" && <h1 className="text-6xl">Locations</h1>}
      {pathname === "/maesters" && <h1 className="text-6xl">Maesters</h1>}
      {pathname === "/military" && <h1 className="text-6xl">Military</h1>}
      {pathname === "/races" && <h1 className="text-6xl">Races & Creatures</h1>}
      {pathname === "/religion" && <h1 className="text-6xl">Religion</h1>}
      {pathname === "/scripts" && <h1 className="text-6xl">Scripts</h1>}
      {pathname === "/summoners" && <h1 className="text-6xl">Summoners</h1>}
      {pathname === "/technology" && <h1 className="text-6xl">Technology</h1>}
      {pathname === "/temples" && <h1 className="text-6xl">Temples</h1>}
      {pathname === "/toc" && <h1 className="text-6xl">Table of Contents</h1>}
      {pathname === "/walkthrough" && <h1 className="text-6xl">Walkthrough</h1>}
    </>
  );
}
