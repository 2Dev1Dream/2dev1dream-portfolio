import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import NavbarDemo from "@/components/Navbar";
import Footer from "@/components/Footer.js"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "2Dev1Dream",
  description: "Portfolio et projets de 2Dev1Dream",
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


        <Footer />
      </body>
    </html>
  );
}
