// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pradeep — Product Designer",
  description:
    "Pradeep — a Product Designer helping early-stage startups grow through a holistic, user-centered approach to design.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      {/* Light theme: white background, near-black text */}
      <body className="bg-background text-foreground font-sans antialiased">
        {children}
      </body>
    </html>
  );
}