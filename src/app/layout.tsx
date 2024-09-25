import type { Metadata } from "next";
import {
  Marcellus,
  Berkshire_Swash,
  Inter,
  Luxurious_Script,
  Pinyon_Script,
  Quintessential,

} from "next/font/google";
import "./globals.css";

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

const quintessential = Quintessential({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-quintessential",
  display: "swap",
});

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-marcellus",
  display: "swap",
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
        className={` ${inter.variable} ${berkshireSwash.variable} ${pinyonScript.variable}  ${luxuriousScript.variable} ${marcellus.variable} ${quintessential.variable} antialiased relative`}
      >
        <div className="relative min-h-screen w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
