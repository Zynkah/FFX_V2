"use client";

import { usePathname } from "next/navigation";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
 const pathname = usePathname();

  return (
    <header className="my-10">
      <Link href="/" passHref>
        <Image
          priority
          src="/images/logo.jpg"
          height={pathname === "/" ? 600 : 300} 
          width={pathname === "/" ? 390 : 195} 
          alt="FFX Logo"
          className="mx-auto rounded-lg w-auto h-auto"
        />
      </Link>
      <h1 className="text-center text-6xl mb-8">Final Fantasy X</h1>
    </header>
  );
}
