import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Sedan } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { TitleNames } from "@/components/title-names";

const sedan = Sedan({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Final Fantasy X",
  description: "Final Fantasy X Wiki Verson 2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sedan.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <Header />
          <main className="flex min-h-screen flex-col items-center lg:w-3/4 lg:mx-auto">
            <TitleNames />
            <div className="my-8">{children}</div>
          </main>
          <SpeedInsights />
          <Analytics />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
