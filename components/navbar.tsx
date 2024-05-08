"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./mode-toggle";
import { useState } from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

export function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavItemClick = () => {
    setIsNavOpen(false);
  };

  return (
    <div className="z-10 sticky top-0 md:p-2 p-6 bg-background dark:bg-background border-b-[0.1rem] shadow-lg">
      <Button variant='ghost' size='sm'
        className="absolute left-2 top-1 border-none shadow-none hover:scale-110 md:hidden bg-transparent  text-black dark:bg-background dark:text-white"
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        <Menu size={40} />
      </Button>
      <div className="absolute left-5 hidden md:block">
        <Link href="/" passHref>
          <Image
            priority
            src="/images/logo2.png"
            height={44}
            width={60}
            alt="FFX Logo"
            className="cursor-pointer hover:opacity-80 transition-opacity duration-200 ease-in-out rounded-lg"
          />
        </Link>
      </div>
      <NavigationMenu
        className={`mx-auto mobile-nav-content ${isNavOpen ? "open" : ""}`}
      >
        <NavigationMenuList className="mobile-menu-list border md:border-none rounded-lg gap-4 bg-background p-4 md:p-0">

            <NavigationMenuItem>
              <Link href="/characters" legacyBehavior passHref>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  onClick={handleNavItemClick}
                >
                  Characters
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
  
          <NavigationMenuItem>
            <NavigationMenuTrigger>Culture</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <ListItem href="/races" title="Races">
                  The variety of races that exist in the world. Includes
                  Humanoids, Demi-Humans and Creatures.
                </ListItem>
                <ListItem href="/scripts" title="Scripts">
                  Details on the unique Scripts. Includes Sprian, Al Bhed and
                  Yevon scripts.
                </ListItem>
                <ListItem href="/religion" title="Religion">
                  Information on the Yevon religion. Includes Maesters,
                  Summoners and Aeons.
                </ListItem>
                <ListItem href="/military" title="Military">
                  Crusaders, Guardians, Warrior Monks, Crimson Squad and Chocobo
                  Knights.
                </ListItem>
                <ListItem href="/technology" title="Technology">
                  Vehicles, Machina, Currency, Fire Arms and Hand Held items
                  that can be used to take control of the world.
                </ListItem>
                <ListItem href="/blitzball" title="Blitzball">
                  The sport that unites everyone in Spira and helps the people
                  forget about the never ending doom of Sin.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/locations" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Locations
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/equipment" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Equipment
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/walkthrough" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Walkthrough
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="absolute right-5 top-1 md:top-2">
        <ModeToggle />
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-md leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
