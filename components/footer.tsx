import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full p-2 bg-background dark:bg-background border-t-[0.1rem] flex justify-end gap-10">
      <Link href="/blog">Blog</Link>
      <Link href="/toc">Table of Contents</Link>
      <Link href="/creator-links">Creator Links</Link>
    </footer>
  );
}
