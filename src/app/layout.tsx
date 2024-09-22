import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from 'next/font/google';
import "./globals.css";
import Nav from "@/components/Nav";
import Header from "@/components/Header";


const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans"
});

export const metadata: Metadata = {
  title: "PIEAS E-Gaming Club",
  description: "A society of gamers at PIEAS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} antialiased`}
      >
        {/* NavBar and Headers */}
        <div className="hidden xl:block">
          <Nav />
        </div>
        <div className="block xl:hidden">
          <Header />
        </div>

        {children}
      </body>
    </html>
  );
}
