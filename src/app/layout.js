import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import NavbarDemo from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "2Dev1Dream Portfolio",
  description: "Portfolio de Maël et James",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Navbar */}
        <NavbarDemo />
        
        {/* Page Content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
