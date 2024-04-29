"use client";

interface BasicPageLayoutProps {
    title: string;
    children: React.ReactNode;
}

export default function BasicPageLayout({title, children}: BasicPageLayoutProps) {
  return (
    <main className="flex min-h-screen flex-col items-center lg:w-3/4 lg:mx-auto">
          <h1 className="text-6xl">{title}</h1>
          <div className="my-8 mx-auto">{children}</div>
    </main>
  );
}
