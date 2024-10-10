import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: "Franck Chapelon",
  description: "Franck Chapelon est un freelance designer graphique basé en Aquitaine.",
  keywords: ["design graphique", "freelance", "Aquitaine"],
  authors: [{ name: "Franck Chapelon" }],
  creator: "Franck Chapelon",
  metadataBase: new URL("https://www.franckchapelon.com"),
  alternates: {
    canonical: "/",
    languages: {
      'fr-FR': '/fr',
      'en-US': '/en',
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.franckchapelon.com",
    siteName: "Franck Chapelon Design",
    title: "Franck Chapelon - Designer Graphique",
    description: "Portfolio et services de Franck Chapelon, designer graphique freelance en Aquitaine",
    images: [
      {
        url: "https://www.franckchapelon.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Franck Chapelon Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@FranckChapelon",
    creator: "@FranckChapelon",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "votre_code_de_verification_google",
    yahoo: "votre_code_de_verification_yahoo",
  },
  other: {
    "pinterest-rich-pin": "true",
  },
};