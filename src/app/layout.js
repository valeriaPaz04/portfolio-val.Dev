import "./globals.css";
import { Syne, DM_Sans } from "next/font/google";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const dm_sans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "val.Dev | Portfolio of Valeria Paz",
  description: "Portafolio de Valeria Paz Arana",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${dm_sans.variable}`}>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}