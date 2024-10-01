export const navLinks = [
  {
    id: "Hero",
    name: "Accueil",
    href: "/#accueil",
  },
  {
    id: "Projets",
    name: "Projets",
    href: "/#projets",
  },
  {
    id: "À propos",
    name: "À propos",
    href: "/#à propos",
  },
  {
    id: "Services",
    name: "Services",
    href: "/#services",
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
      },
      {
        src: "/projets/tattoo/tattoo2.png",
        alt: "Page produit optimisée",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/tattoo/tattoo3.png",
        alt: "Processus de paiement simplifié",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/tattoo/tattoo4.png",
        alt: "Page produit optimisée",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/tattoo/tattoo5.png",
        alt: "Processus de paiement simplifié",
        width: 1400,
        height: 800,
      },
      {
        src: "/projets/tattoo/tattoo6.png",
        alt: "Page d'accueil du site e-commerce",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/tattoo/tattoo7.png",
        alt: "Page produit optimisée",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/tattoo/tattoo8.png",
        alt: "Page produit optimisée",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/tattoo/tattoo9.png",
        alt: "Page produit optimisée",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/tattoo/tattoo10.png",
        alt: "Page produit optimisée",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/tattoo/tattoo11.png",
        alt: "Page produit optimisée",
        width: 1440,
        height: 824,
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
    link: "/projets/all_projets/dbMovies",
    site: "https://franckick0909.github.io/NetPrime2/",
    coverImage: "/projets/bdMovies/alien1.webp",
    traitBg: "bg-red-500",
    title1: "Exploration",
    subtitle1: "Créer et itérer",
    description1_1:
      "Exercice de développement web réalisé avec React, API Rest, react-router et SASS. Introduire les concepts de base de React et de l'architecture Flux.",
    description1_2:
      "Ce site permet de rechercher des films et des séries, de voir les détails d'un film ou d'une série, et de voir les détails d'un film ou d'une série.",
    title2: "Conception de sites Web",
    subtitle2: "Créer une application statique",
    description2_1:
      "J'ai créé une application statique avec React, API Rest, react-router et SASS. J'ai utilisé des animations de boutons, de slides et des effets de hover. J'ai aussi utilisé des images de fond, des couleurs et des polices de caractères pour créer une landing page attrayante et dynamique.",
    description2_2:
      "",
    title3: "Développement",
    subtitle3: "et... lancer",
    description3_1:
      "En ce qui concerne le développement, j'ai créé le site Web à l'aide de React. Il sagissait dun processus relativement transparent dans lequel j'ai ajouté des interactions, construit la structure et veillé à ce que le site soit complètement réactif.",
    description3_2: "",
    images: [
      {
        src: "/projets/bdMovies/db1.png",
        alt: "Description 1",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/bdMovies/db2.png",
        alt: "Page produit optimisée",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/bdMovies/db3.png",
        alt: "Processus de paiement simplifié",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/bdMovies/db4.png",
        alt: "Page produit optimisée",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/bdMovies/db5.png",
        alt: "Processus de paiement simplifié",
        width: 1400,
        height: 800,
      },
      {
        src: "/projets/bdMovies/db6.png",
        alt: "Page d'accueil du site e-commerce",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/bdMovies/db7.png",
        alt: "Page produit optimisée",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/bdMovies/db8.png",
        alt: "Page produit optimisée",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/bdMovies/db9.png",
        alt: "Page produit optimisée",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/bdMovies/db10.png",
        alt: "Page produit optimisée",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/bdMovies/db11.png",
        alt: "Page produit optimisée",
        width: 1440,
        height: 824,
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
  {
    id: "03",
    name: "Portfolio v2",
    link: "/projets/all_projets/portfoliov2",
    site: "https://franckick0909.github.io/NetPrime2/",
    coverImage: "/projets/portfoliov2/oeil.jpg",
    traitBg: "bg-black",
    title1: "Exploration",
    subtitle1: "Créer et itérer",
    description1_1:
      "Exercice de développement web réalisé avec React, API Rest, react-router et SASS. Introduire les concepts de base de React et de l'architecture Flux.",
    description1_2:
      "Ce site permet de rechercher des films et des séries, de voir les détails d'un film ou d'une série, et de voir les détails d'un film ou d'une série.",
    title2: "Conception de sites Web",
    subtitle2: "Créer une application statique",
    description2_1:
      "J'ai créé une application statique avec React, API Rest, react-router et SASS. J'ai utilisé des animations de boutons, de slides et des effets de hover. J'ai aussi utilisé des images de fond, des couleurs et des polices de caractères pour créer une landing page attrayante et dynamique.",
    description2_2:
      "",
    title3: "Développement",
    subtitle3: "et... lancer",
    description3_1:
      "En ce qui concerne le développement, j'ai créé le site Web à l'aide de React. Il sagissait dun processus relativement transparent dans lequel j'ai ajouté des interactions, construit la structure et veillé à ce que le site soit complètement réactif.",
    description3_2: "",
    images: [
      {
        src: "/projets/portfoliov2/portfolio1.png",
        alt: "Description 1",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/portfoliov2/portfolio2.png",
        alt: "Page produit optimisée",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/portfoliov2/portfolio3.png",
        alt: "Processus de paiement simplifié",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/portfoliov2/portfolio4.png",
        alt: "Page produit optimisée",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/portfoliov2/portfolio5.png",
        alt: "Processus de paiement simplifié",
        width: 1400,
        height: 800,
      },
      {
        src: "/projets/portfoliov2/portfolio6.png",
        alt: "Page d'accueil du site e-commerce",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/portfoliov2/portfolio7.png",
        alt: "Page produit optimisée",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/portfoliov2/portfolio8.png",
        alt: "Page produit optimisée",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/portfoliov2/portfolio9.png",
        alt: "Page produit optimisée",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/portfoliov2/portfolio10.png",
        alt: "Page produit optimisée",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/portfoliov2/portfolio11.png",
        alt: "Page produit optimisée",
        width: 1440,
        height: 824,
      },
    ],
    subtitle:
      "Site portfolio réalisé pour présenter mes projets et me faire recruter.",
    stacks: ["Next.js", "Tailwind", "Framer Motion"],
    clientName: "Site Portfolio",
    projectDate: "août 2024",
    category: "Free, Design, Web",
    github: "https://github.com/franckick0909/portfolioV2",
  },
  {
    id: "04",
    name: "Sophie Bluel Architecte d'intérieur",
    link: "/projets/all_projets/sophie_bluel",
    site: "https://github.com/franckick0909/Portfolio-architecte-Sophie-Bluel",
    coverImage: "/projets/sophiebluel/appartement-paris-v.png",
    traitBg: "bg-black",
    title1: "Exploration",
    subtitle1: "Créer et itérer",
    description1_1:
      "Exercice de développement web réalisé avec React, API Rest, react-router et SASS. Introduire les concepts de base de React et de l'architecture Flux.",
    description1_2:
      "Ce site permet de rechercher des films et des séries, de voir les détails d'un film ou d'une série, et de voir les détails d'un film ou d'une série.",
    title2: "Conception de sites Web",
    subtitle2: "Créer une application statique",
    description2_1:
      "J'ai créé une application statique avec React, API Rest, react-router et SASS. J'ai utilisé des animations de boutons, de slides et des effets de hover. J'ai aussi utilisé des images de fond, des couleurs et des polices de caractères pour créer une landing page attrayante et dynamique.",
    description2_2:
      "",
    title3: "Développement",
    subtitle3: "et... lancer",
    description3_1:
      "En ce qui concerne le développement, j'ai créé le site Web à l'aide de React. Il sagissait dun processus relativement transparent dans lequel j'ai ajouté des interactions, construit la structure et veillé à ce que le site soit complètement réactif.",
    description3_2: "",
    images: [
      {
        src: "/projets/sophiebluel/sophie-bluel.png",
        alt: "Description 1",
        width: 948,
        height: 710,
      },
      {
        src: "/projets/sophiebluel/le-coteau-cassis.png",
        alt: "Page produit optimisée",
        width: 608,
        height: 814,
      },
      {
        src: "/projets/sophiebluel/appartement-paris-v.png",
        alt: "Processus de paiement simplifié",
        width: 948,
        height: 710,
      },
      {
        src: "/projets/sophiebluel/appartement-paris-xviii.png",
        alt: "Page produit optimisée",
        width: 608,
        height: 814,
      },
      {
        src: "/projets/sophiebluel/restaurant-sushisen-londres.png",
        alt: "Processus de paiement simplifié",
        width: 608,
        height: 814,
      },
      {
        src: "/projets/sophiebluel/appartement-paris-x.png",
        alt: "Page d'accueil du site e-commerce",
        width: 608,
        height: 814,
      },
      {
        src: "/projets/sophiebluel/bar-lullaby-paris.png",
        alt: "Page produit optimisée",
        width: 608,
        height: 814,
      },
      {
        src: "/projets/sophiebluel/la-balisiere.png",
        alt: "Page produit optimisée",
        width: 608,
        height: 814,
      },
      {
        src: "/projets/sophiebluel/structures-thermopolis.png",
        alt: "Page produit optimisée",
        width: 608,
        height: 814,
      },
      {
        src: "/projets/sophiebluel/villa-ferneze.png",
        alt: "Page produit optimisée",
        width: 608,
        height: 814,
      },
      {
        src: "/projets/sophiebluel/img1.png",
        alt: "Page produit optimisée",
        width: 608,
        height: 814,
      },
    ],
    subtitle:
      "Conception du site portfolio d'un architecte d'intérieur.",
    stacks: ["HTML", "CSS", "SASS", "JavaScript"],
    clientName: "Site Portfolio",
    projectDate: "septembre 2023",
    category: "Portfolio, Page de connexion admin, Ajout et de suppression de médias",
    github: "https://github.com/franckick0909/portfolioV2",
  },
];



export const dataServices = [
  {
    id: "01",
    title: "Image de marque",
    description: "Je crée des systèmes d'identité cohérents pour votre marque ou votre événement. Cela implique des recherches et une stratégie afin de créer un langage visuel et un style de communication cohérents.",
  },
  {
    id: "02",
    title: "Conception de sites Web",
    description: "Un site Web est un incontournable pour toute marque, il sera le lieu privilégié où les gens pourront en savoir plus sur ce que vous faites, donc un design qui s'engage dans sa narration change la donne.",
  },
  {
    id: "03",
    title: "Next.js",
    description: "En utilisant Next.js, je suis en mesure de créer des sites Web visuellement attrayants, interactifs, adaptés aux mobiles, optimisés pour les moteurs de recherche et facilement modifiables afin qu'ils puissent évoluer avec vous.",
  },
];

export const accordionItems1 = [
  {
    title: 'Quels services proposez-vous ?',
    content:
      "Je propose des services de création de design, de développement de sites web sur mesure, et je m'occupe également du déploiement en production de votre site internet.",
  },
  {
    title: 'Quel est votre approche pour concevoir un site web ?',
    content:
      "Je commence par écouter les besoins de votre marque et de vos clients, puis je crée un design qui répond à ces besoins. Je travaille également sur l'expérience utilisateur pour garantir que le site est facile à utiliser et à naviguer.",
  },
  {
    title: 'Comment gérez-vous la maintenance de votre site web ?',
    content:
      'Je propose des services de maintenance de site web, y compris la mise à jour du contenu, la correction de bugs et la résolution de problèmes de performance.',
  },
  {
    title: "Quel type de site web proposez-vous ?",
    content:
      "Je propose des sites web sur mesure, y compris des sites vitrines, des sites e-commerce, des sites de portfolio",
  },
]

export const accordionItems2 = [
  {
    title: "Combien de temps faut-il pour développer un site web ?",
    content:
      "Le temps de développement d'un site web varie en fonction de la complexité du projet et des besoins spécifiques du client. Je travaille de manière agile pour garantir un développement rapide et efficace.",
  },
  {
    title: "Quel est votre processus de développement de site web ?",
    content:
      "Je commence par écouter les besoins de votre marque et de vos clients, puis je crée un design qui répond à ces besoins. Je travaille également sur l'expérience utilisateur pour garantir que le site est facile à utiliser et à naviger.",
  },
  {
    title: "Comment gérez-vous la maintenance de votre site web ?",
    content:
      "Je propose des services de maintenance de site web, y compris la mise à jour du contenu, la correction de bugs et la résolution de problèmes de performance.",
  },
  {
    title: "Faites-vous le référencement naturel (SEO) ?",
    content:
      "Oui, je travaille sur l'optimisation pour les moteurs de recherche (SEO) pour garantir que votre site est visible et accessible aux gens.",
  },
]