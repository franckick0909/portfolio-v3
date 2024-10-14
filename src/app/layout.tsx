import { siteMetadata } from "@/app/metadata";
import Header from "@/components/header";
import {
  Marcellus,
  Inter,
  Pinyon_Script,
} from "next/font/google";
import "./globals.css";
import { ReactLenis } from "@/components/Utils/lenis";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: 'swap',
  preload: true,
});
const pinyonScript = Pinyon_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pinyon-script",
  display: "swap",
  preload: true,
});
const marcellus = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-marcellus",
  display: "swap",
  preload: true,
});

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <ReactLenis root>
        <body
          className={` ${inter.variable} ${pinyonScript.variable} ${marcellus.variable} antialiased relative`}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex flex-col min-h-screen">
            {children}
          </main>
          <Footer />
        </div>
      </body>
      </ReactLenis>
    </html>
  );
}
