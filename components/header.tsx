import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";


export default function Header() {
  return (
    <header className="my-10">
      <Link href="/" passHref>
        <Image
          priority
          src="/images/logo.jpg"
          height={600}
          width={390}
          alt="FFX Logo"
          className="mx-auto rounded-lg"
        />
      </Link>
      <h1 className="text-center text-4xl font-bold mb-8">Final Fantasy X</h1>
      <Separator />
    </header>
  );
}
