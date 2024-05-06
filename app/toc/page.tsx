
import Link from "next/link";


const tocItems = [
  {
    name: "Aeons",
    href: "/aeons",
  },
  {
    name: "Blitzball",
    href: "/blitzball",
  },
  {
    name: "Characters",
    href: "/characters",
  },
  {
    name: "Culture",
    href: "/culture",
  },
  {
    name: "Equipment",
    href: "/equipment",
  },
  {
    name: "Locations",
    href: "/locations",
  },
  {
    name: "Maesters",
    href: "/maesters",
  },
  {
    name: "Military",
    href: "/military",
  },
  {
    name: "Races",
    href: "/races",
  },
  {
    name: "Religion",
    href: "/religion",
  },

  {
    name: "Scripts",
    href: "/scripts",
  },
  {
    name: "Summoners",
    href: "/summoners",
  },
  {
    name: "Technology",
    href: "/technology",
  },
  {
    name: "Temples",
    href: "/temples",
  },
  {
    name: "Travel Agencies",
    href: "/travel-agencies",
  },
  {
    name: "Walkthrough",
    href: "/walkthrough",
  },
];
export default function TOC() {
  return (

      <ul className="grid grid-col md:grid-rows-4 md:grid-flow-col gap-x-20 gap-y-4 text-center">
        {tocItems.map((item, index) => (
          <li key={index}>
            <Link href={item.href} className="hover:text-fuchsia-500">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

  );
}
