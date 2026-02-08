import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "bigguybobby — Web3 Grant Portfolio",
  description: "Smart contract security researcher & full-stack Web3 builder. 4 projects, 36 tests, 4 deployed contracts.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white antialiased">{children}</body>
    </html>
  );
}
