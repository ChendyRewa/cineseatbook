import type { Metadata } from "next";
import { AxeInit } from "@/components/axe-init";
// @ts-expect-error Next.js loads global CSS at build time.
import "./globals.css";

export const metadata: Metadata = {
  title: "CineSeatBook",
  description: "Book a seat at the cinema.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AxeInit />
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <header className="site-header">
          <span className="brand">CineSeatBook</span>
        </header>
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
