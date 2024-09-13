import type { Metadata } from "next";
import {
  Allura,
  Berkshire_Swash,
  Inter,
  Luxurious_Script,
  Pinyon_Script,
  Sawarabi_Mincho,
} from "next/font/google";
import Header from "../components/header";
import "./globals.css";

const sawarabiMincho = Sawarabi_Mincho({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-sawarabi-mincho",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});
const berkshireSwash = Berkshire_Swash({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-berkshire-swash",
  display: "swap",
});
const pinyonScript = Pinyon_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pinyon-script",
  display: "swap",
});

const luxuriousScript = Luxurious_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-luxurious-script",
  display: "swap",
});

const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-allura",
});

export const metadata: Metadata = {
  title: "Franck Chapelon",
  description:
    "Franck Chapelon est un freelance designer graphique basé en Aquitaine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${sawarabiMincho.variable} ${inter.variable} ${berkshireSwash.variable} ${pinyonScript.variable}  ${luxuriousScript.variable} ${allura.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
