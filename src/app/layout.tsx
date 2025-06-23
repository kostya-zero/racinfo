import type { Metadata } from "next";
import { Geist, Rokkitt } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const rokkitt = Rokkitt({
  variable: "--font-rokkitt",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Racinfo",
  description: "A website related to Real Address Chat protocol.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${rokkitt.variable} bg-stone-900 font-geist antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
