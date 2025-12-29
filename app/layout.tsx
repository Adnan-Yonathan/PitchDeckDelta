import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Delta Sports Pitch Deck",
  description: "Interactive pitch deck for Delta Sports",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
