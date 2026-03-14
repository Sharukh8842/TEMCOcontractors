import type { Metadata } from "next";
import { Inter, Montserrat, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroller from "@/components/SmoothScroller";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TEMCO Contracting | Building Trust, Delivering Excellence",
  description: "High-end architectural and infrastructure portfolio for TEMCO Contracting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} ${outfit.variable}`}>
      <body className="antialiased bg-charcoal text-cream font-secondary selection:bg-orange selection:text-white">
        <SmoothScroller>
          <CustomCursor />
          {children}
        </SmoothScroller>
      </body>
    </html>
  );
}
