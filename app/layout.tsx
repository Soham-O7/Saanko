import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saanko | The Bridge between Tradition and Modernity",
  description:
    "Discover traditional and contemporary ethnic wear for men, women, kids, and the whole family at Saanko.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="site-layout">
          <Navbar />

          <div className="site-content">
            {children}
          </div>

          <Footer />
        </div>
      </body>
    </html>
  );
}