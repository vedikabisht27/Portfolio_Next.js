import { Playfair_Display, Plus_Jakarta_Sans, Lora } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import FloatingDots from "./components/FloatingDots";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-heading",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});

export const metadata = {
  title: "Vedika Bisht | Portfolio",
  description: "Portfolio of Vedika Bisht, MCA Student & Aspiring Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable} ${lora.variable}`}>
      <body className="antialiased relative font-body">
        <FloatingDots />
        <Navigation />
        <main className="relative z-10 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
