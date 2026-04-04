import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tiara & Siddiq | The Editorial Union",
  description: "Landing page undangan pernikahan editorial untuk Tiara dan Siddiq.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
