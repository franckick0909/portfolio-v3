export const navLinks = [
  {
    id: "Accueil",
    name: "Accueil",
    href: "/",
  },
  {
    id: "Projets",
    name: "Projets",
    href: "/projets",
  },
  {
    id: "À propos",
    name: "À propos",
    href: "/about",
  },
  {
    id: "Services",
    name: "Services",
    href: "/services",
  },
  {
    id: "Tarifs",
    name: "Tarifs",
    href: "/tarifs",
  },
  {
    id: "Contact",
    name: "Contact",
    href: "/contact",
  },
];

import { SiMalt } from "react-icons/si";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";
export const socialLinks = [
  {
    id: "LinkedIn",
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/franck-chapelon/",
    icon: FaLinkedinIn,
  },
  {
    id: "GitHub",
    name: "GitHub",
    href: "https://github.com/franck-chapelon",
    icon: FaGithub,
  },
  {
    id: "Instagram",
    name: "Instagram",
    href: "https://www.instagram.com/franck.chapelon/",
    icon: FaInstagram,
  },
  {
    id: "Facebook",
    name: "Facebook",
    href: "https://www.facebook.com/franck.chapelon",
    icon: FaFacebookF,
  },
  {
    id: "X",
    name: "X",
    href: "https://x.com/franck_chapelon",
    icon: FaXTwitter,
  },
  {
    id: "Malt",
    name: "Malt",
    href: "https://www.malt.fr/profile/franckchapelon",
    icon: SiMalt,
  },
];

export const projectsData = [
  {
    id: "01",
    name: "ANGEL-TATTOO",
    link: "/projets/all_projets/angel_tattoo",
    site: "https://angel-tattoo.netlify.app",
    coverImage: "/projets/tattoo/tattoo1.jpg",
    traitBg: "bg-green-500",
    title1: "Exploration",
    subtitle1: "Créer et itérer",
    description1_1:
      "Template de site landing page sur le tatouage, avec des animations et des effets graphiques. Le site est responsive et a été développé avec Next.js, Tailwind et Framer Motion. Il contient des animations de boutons, de slides et des effets de hover. Ce site est un template, il peut être utilisé pour n'importe quelle entreprise de tatouage, il suffit de changer les images et les textes.",
    description1_2:
      "Il contient une page d'accueil, le studio, la galerie d'image de chaque artiste, les tarifs, l'équipe, les derniers projets réalisés, une page de commentaires, et une page de contact. Ce template est un excellent point de départ pour une entreprise de tatouage, qui souhaite présenter son travail de manière professionnelle et attrayante. Le site peut évidemment être amélioré, il est parfait pour une entreprise de tatouage qui souhaite se faire connaître.",
    title2: "Conception de sites Web",
    subtitle2: "Créer une landing page dynamique",
    description2_1:
      "J'ai créé une landing page dynamique avec Next.js, Tailwind et Framer Motion. J'ai utilisé des animations de boutons, de slides et des effets de hover. J'ai aussi utilisé des images de fond, des couleurs et des polices de caractères pour créer une landing page attrayante et dynamique.",
    description2_2:
      "J'ai aussi utilisé des images de fond, des couleurs et des polices de caractères pour créer une landing page attrayante et dynamique.",
    title3: "Développement",
    subtitle3: "et... lancer",
    description3_1:
      "En ce qui concerne le développement, j'ai créé le site Web à l'aide de Nextjs et Framer motion. Il sagissait dun processus relativement transparent dans lequel j'ai ajouté des interactions, construit la structure pour la landing page et veillé à ce que le site soit complètement réactif et optimisé pour les mobiles.",
    description3_2: "",
    images: [
      {
        src: "/projets/tattoo/tattoo1.png",
        alt: "Description 1",
        width: 1440,
        height: 824,
        size: "full",
      },
      {
        src: "/projets/tattoo/tattoo2.png",
        alt: "Page produit optimisée",
        width: 1440,
        height: 824,
        size: "large",
      },
      {
        src: "/projets/tattoo/tattoo3.png",
        alt: "Processus de paiement simplifié",
        width: 1440,
        height: 824,
        size: "medium",
      },
      {
        src: "/projets/tattoo/tattoo4.png",
        alt: "Page produit optimisée",
        width: 1440,
        height: 824,
        size: "small",
      },
      {
        src: "/projets/tattoo/tattoo5.png",
        alt: "Processus de paiement simplifié",
        width: 1400,
        height: 800,
        size: "medium",
      },
      {
        src: "/projets/tattoo/tattoo6.png",
        alt: "Page d'accueil du site e-commerce",
        width: 1440,
        height: 824,
        size: "medium",
      },
      {
        src: "/projets/tattoo/tattoo7.png",
        alt: "Page produit optimisée",
        width: 1440,
        height: 824,
        size: "medium",
      },
      {
        src: "/projets/tattoo/tattoo8.png",
        alt: "Page produit optimisée",
        width: 1440,
        height: 824,
        size: "medium",
      },
      {
        src: "/projets/tattoo/tattoo9.png",
        alt: "Page produit optimisée",
        width: 1440,
        height: 824,
        size: "medium",
      },
      {
        src: "/projets/tattoo/tattoo10.png",
        alt: "Page produit optimisée",
        width: 1440,
        height: 824,
        size: "medium",
      },
      {
        src: "/projets/tattoo/tattoo11.png",
        alt: "Page produit optimisée",
        width: 1440,
        height: 824,
        size: "medium",
      },
    ],
    subtitle:
      "Template de site landing page, avec des animations et des effets graphiques.",
    stacks: ["Next.js", "Tailwind", "Framer Motion"],
    clientName: "ANGEL-TATTOO",
    projectDate: "Septembre 2024",
    category: "Branding, Design, Web",
    github: "https://github.com/franckick0909/angel-tattoo",
  },
  {
    id: "02",
    name: "MoviesDB",
    link: "/projets/all_projets/projet_dbMovies",
    site: "https://franckick0909.github.io/NetPrime2/",
    coverImage: "/projets/bdMovies/alien1.webp",
    traitBg: "bg-orange-500",
    title1: "Exploration",
    subtitle1: "Créer et itérer",
    description1_1:
      "Template de site landing page sur le tatouage, avec des animations et des effets graphiques. Le site est responsive et a été développé avec Next.js, Tailwind et Framer Motion. Il contient des animations de boutons, de slides et des effets de hover. Ce site est un template, il peut être utilisé pour n'importe quelle entreprise de tatouage, il suffit de changer les images et les textes.",
    description1_2:
      "Il contient une page d'accueil, le studio, la galerie d'image de chaque artiste, les tarifs, l'équipe, les derniers projets réalisés, une page de commentaires, et une page de contact. Ce template est un excellent point de départ pour une entreprise de tatouage, qui souhaite présenter son travail de manière professionnelle et attrayante. Le site peut évidemment être amélioré, il est parfait pour une entreprise de tatouage qui souhaite se faire connaître.",
    title2: "Conception de sites Web",
    subtitle2: "Créer une landing page dynamique",
    description2_1:
      "J'ai créé une landing page dynamique avec Next.js, Tailwind et Framer Motion. J'ai utilisé des animations de boutons, de slides et des effets de hover. J'ai aussi utilisé des images de fond, des couleurs et des polices de caractères pour créer une landing page attrayante et dynamique.",
    description2_2:
      "J'ai aussi utilisé des images de fond, des couleurs et des polices de caractères pour créer une landing page attrayante et dynamique.",
    title3: "Développement",
    subtitle3: "et... lancer",
    description3_1:
      "En ce qui concerne le développement, j'ai créé le site Web à l'aide de Nextjs et Framer motion. Il sagissait dun processus relativement transparent dans lequel j'ai ajouté des interactions, construit la structure pour la landing page et veillé à ce que le site soit complètement réactif et optimisé pour les mobiles.",
    description3_2: "",
    images: [
      {
        src: "/projets/tattoo/tattoo1.png",
        alt: "Description 1",
        width: 1440,
        height: 824,
        size: "full",
      },
      {
        src: "/projets/tattoo/tattoo2.png",
        alt: "Page produit optimisée",
        width: 1440,
        height: 824,
        size: "large",
      },
      {
        src: "/projets/tattoo/tattoo3.png",
        alt: "Processus de paiement simplifié",
        width: 1440,
        height: 824,
        size: "medium",
      },
      {
        src: "/projets/tattoo/tattoo4.png",
        alt: "Page produit optimisée",
        width: 1440,
        height: 824,
        size: "small",
      },
      {
        src: "/projets/tattoo/tattoo5.png",
        alt: "Processus de paiement simplifié",
        width: 1400,
        height: 800,
        size: "medium",
      },
      {
        src: "/projets/tattoo/tattoo6.png",
        alt: "Page d'accueil du site e-commerce",
        width: 1440,
        height: 824,
        size: "medium",
      },
      {
        src: "/projets/tattoo/tattoo7.png",
        alt: "Page produit optimisée",
        width: 1440,
        height: 824,
        size: "medium",
      },
      {
        src: "/projets/tattoo/tattoo8.png",
        alt: "Page produit optimisée",
        width: 1440,
        height: 824,
        size: "medium",
      },
      {
        src: "/projets/tattoo/tattoo9.png",
        alt: "Page produit optimisée",
        width: 1440,
        height: 824,
        size: "medium",
      },
      {
        src: "/projets/tattoo/tattoo10.png",
        alt: "Page produit optimisée",
        width: 1440,
        height: 824,
        size: "medium",
      },
      {
        src: "/projets/tattoo/tattoo11.png",
        alt: "Page produit optimisée",
        width: 1440,
        height: 824,
        size: "medium",
      },
    ],
    subtitle:
      "Site personnel réalisé pour m'entraîner sur React, avec API Rest, react-router et SASS.",
    stacks: ["React", "API Rest", "react-router", "SASS"],
    clientName: "Site Personnel",
    projectDate: "février 2024",
    category: "Free, Design, Web",
    github: "https://franckick0909.github.io/NetPrime2/",
  },
];
