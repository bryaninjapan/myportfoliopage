import type { Metadata } from "next";
import { Cinzel, IM_Fell_English, Uncial_Antiqua } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const imFellEnglish = IM_Fell_English({
  variable: "--font-medieval",
  subsets: ["latin"],
  weight: ["400"],
});

const uncialAntiqua = Uncial_Antiqua({
  variable: "--font-rune",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio - Stone tablet collection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${imFellEnglish.variable} ${uncialAntiqua.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
