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
    id: "Services",
    name: "Services",
    href: "/#services",
  },
  {
    id: "Tarifs",
    name: "Tarifs",
    href: "/#tarifs",
  },
  {
    id: "À propos",
    name: "À propos",
    href: "/#a_propos",
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
    coverImage: "/projets/tattoo/covertattoo.webp",
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
        src: "/projets/tattoo/tattoo1.webp",
        alt: "Page d'accueil du site.",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/tattoo/tattoo2.webp",
        alt: "Page dédiée au studio.",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/tattoo/tattoo3.webp",
        alt: "Page dédiée à la galerie d'images de chaque artiste.",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/tattoo/tattoo4.webp",
        alt: "Galerie d'images de chaque artiste.",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/tattoo/tattoo5.webp",
        alt: "Page dédiée à l'équipe du studio.",
        width: 1400,
        height: 800,
      },
      {
        src: "/projets/tattoo/tattoo6.webp",
        alt: "Page dédiée à chaque artiste.",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/tattoo/tattoo7.webp",
        alt: "Tattoo récent.",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/tattoo/tattoo8.webp",
        alt: "Testimonial",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/tattoo/tattoo9.webp",
        alt: "Page dédiée aux réseaux sociaux de l'équipe",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/tattoo/tattoo10.webp",
        alt: "Page contact, avec un formulaire de contact.",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/tattoo/tattoo11.webp",
        alt: "Page dédiée à la map et le pied de page du site.",
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
        src: "/projets/bdMovies/db1.webp",
        alt: "Page d'accueil du site, avec un slider de films.",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/bdMovies/db2.webp",
        alt: "Page d'accueil du site, avec un slider de films.",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/bdMovies/db3.webp",
        alt: "Page dédiée à la sélection de films.",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/bdMovies/db4.webp",
        alt: "Page dédiée à la sélection de séries.",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/bdMovies/db5.webp",
        alt: "Page dédiée à la sélection de genres de films.",
        width: 1400,
        height: 800,
      },
      {
        src: "/projets/bdMovies/db6.webp",
        alt: "Recherche de film ou série par titre.",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/bdMovies/db7.webp",
        alt: "La recherche de film et série peuvent se faire sur la même page.",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/bdMovies/db8.webp",
        alt: "Page dédiée aux descriptions de films ou séries.",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/bdMovies/db9.webp",
        alt: "Page description, noms des acteurs, et vidéo des bandes annonces.",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/bdMovies/db10.webp",
        alt: "Page description, noms et photos des acteurs, et images du film ou série.",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/bdMovies/db11.webp",
        alt: "Page description, synopsis, note et date de sortie, etc...",
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
    coverImage: "/projets/portfoliov2/oeil.webp",
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
        src: "/projets/portfoliov2/portfolio1.webp",
        alt: "Page d'accueil du site portfolio.",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/portfoliov2/portfolio2.webp",
        alt: "Bas du site portfolio, avec des animations.",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/portfoliov2/portfolio3.webp",
        alt: "Page dédiée aux projets.",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/portfoliov2/portfolio4.webp",
        alt: "Une animation de défilement de projets au scroll.",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/portfoliov2/portfolio5.webp",
        alt: "Page dédiée à ma personne.",
        width: 1400,
        height: 800,
      },
      {
        src: "/projets/portfoliov2/portfolio6.webp",
        alt: "Page dédiée à mes compétences.",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/portfoliov2/portfolio7.webp",
        alt: "Timeline de mes expériences professionnelles.",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/portfoliov2/portfolio8.webp",
        alt: "Page dédiée à mes services.",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/portfoliov2/portfolio9.webp",
        alt: "Page tarifs proposés.",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/portfoliov2/portfolio10.webp",
        alt: "Page contact, avec un formulaire de contact.",
        width: 1440,
        height: 824,
      },
      {
        src: "/projets/portfoliov2/portfolio11.webp",
        alt: "Animation de page.",
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
    name: "Sophie Bluel",
    link: "/projets/all_projets/sophie_bluel",
    site: "https://github.com/franckick0909/Portfolio-architecte-Sophie-Bluel",
    coverImage: "/projets/sophiebluel/sophie1.png",
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
        src: "/projets/sophiebluel/sophie2.png",
        alt: "Affichage de tous les projets",
        width: 841,
        height: 824,
      },
      {
        src: "/projets/sophiebluel/sophie3.webp",
        alt: "le-coteau-cassis",
        width: 608,
        height: 814,
      },
      {
        src: "/projets/sophiebluel/sophie13.png",
        alt: "appartement-paris-v",
        width: 948,
        height: 710,
      },
      {
        src: "/projets/sophiebluel/sophie5.webp",
        alt: "appartement-paris-xviii",
        width: 608,
        height: 814,
      },
      {
        src: "/projets/sophiebluel/sophie4.png",
        alt: "Page d'authentification admin",
        width: 1920,
        height: 909,
      },
      {
        src: "/projets/sophiebluel/sophie7.png",
        alt: "Page d'accueil du site après connexion admin réussie",
        width: 722,
        height: 813,
      },
      {
        src: "/projets/sophiebluel/sophie8.webp",
        alt: "bar-lullaby-paris",
        width: 608,
        height: 814,
      },
      {
        src: "/projets/sophiebluel/sophie9.webp",
        alt: "la-balisiere",
        width: 608,
        height: 814,
      },
      {
        src: "/projets/sophiebluel/sophie10.png",
        alt: "Modale ajout ou suppression de projet",
        width: 1920,
        height: 913,
      },
      {
        src: "/projets/sophiebluel/sophie11.webp",
        alt: "Nouvelle modale de confirmation de suppression de projet",
        width: 846,
        height: 829,
      },
      {
        src: "/projets/sophiebluel/sophie12.webp",
        alt: "Modale ajout de projet par titre et catégorie",
        width: 846,
        height: 829,
      },
    ],
    subtitle:
      "Conception du site portfolio d'un architecte d'intérieur.",
    stacks: ["HTML", "CSS", "SASS", "JavaScript"],
    clientName: "Site Portfolio, Admin, Ajout et de suppression de médias",
    projectDate: "septembre 2023",
    category: "Portfolio, Page de connexion admin, Ajout et de suppression de médias",
    github: "https://github.com/franckick0909/Portfolio-architecte-Sophie-Bluel",
  },
  {
    id: "05",
    name: "Kasa",
    link: "/projets/all_projets/kasa",
    site: "https://franckick0909.github.io/kasa-react/",
    coverImage: "/projets/kasa/kasa1.webp",
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
        src: "/projets/kasa/kasa2.webp",
        alt: "Agence de location de vacances",
        width: 1100,
        height: 434,
      },
      {
        src: "/projets/kasa/kasa3.webp",
        alt: "Page 'A propos' de l'agence, avec les valeurs de l'entreprise.",
        width: 2136,
        height: 1263,
      },
      {
        src: "/projets/kasa/kasa4.webp",
        alt: "Une des pages de logement de l'agence, complète avec photo, description, équipements et hébergeur, en étant sur mobile.",
        width: 375,
        height: 812,
      },
      {
        src: "/projets/kasa/kasa5.webp",
        alt: "Une des pages de logement de l'agence, complète avec photo, description, équipements et hébergeur, en étant sur pc.",
        width: 1288,
        height: 1008,
      },
      {
        src: "/projets/kasa/kasa6.webp",
        alt: "Location d'un logement",
        width: 1240,
        height: 829,
      },
      {
        src: "/projets/kasa/kasa7.webp",
        alt: "Location d'un logement",
        width: 1240,
        height: 829,
      },
      {
        src: "/projets/kasa/kasa8.webp",
        alt: "Location d'un logement",
        width: 1240,
        height: 829,
      },
      {
        src: "/projets/kasa/kasa9.webp",
        alt: "Location d'un logement",
        width: 1240,
        height: 829,
      },
      {
        src: "/projets/kasa/kasa10.webp",
        alt: "Location d'un logement",
        width: 1240,
        height: 829,
      },
      {
        src: "/projets/kasa/kasa11.webp",
        alt: "Une des pages de logement de l'agence, complète avec photo, description, équipements et hébergeur, en étant sur pc.",
        width: 1240,
        height: 829,
      },
      {
        src: "/projets/kasa/kasa12.webp",
        alt: "Location d'un logement",
        width: 1240,
        height: 829,
      },
    ],
    subtitle:
      "Site de location de vacances réalisé avec React, API Rest, react-router et SASS.",
    stacks: ["React", "API Rest", "react-router", "SASS"],
    clientName: "Site de location de vacances",
    projectDate: "Novembre 2023",
    category: "Site de location de vacances",
    github: "https://github.com/franckick0909/kasa-react",
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
    title: "Qu'est ce qu'un site vitrine ?",
    content:
      "Un site vitrine est un site web conçu pour présenter les produits, services ou l'image de marque d'une entreprise sans inclure de fonctionnalités trop avancées. Le but est de donner des informations de base sur l'entreprise, de promouvoir les produits ou services, et de collecter des informations de contact des visiteurs.",
  },
  {
    title: "Qu'est ce que des cookies ?",
    content:
      "Les cookies sont des fichiers texte stockés sur votre ordinateur lorsque vous naviguez sur un site web. Ils sont utilisés pour collecter des informations sur votre navigation, comme les pages que vous avez visitées, les liens que vous avez cliqués, et les informations que vous avez fournies lors de formulaires.",
  },
  {
    title: "Faites-vous le référencement naturel (SEO) ?",
    content:
      "Oui, je travaille sur l'optimisation pour les moteurs de recherche (SEO) pour garantir que votre site est visible et accessible aux gens.",
  },
]


export const dataAbout = {
  title: "Un peu plus sur moi.",
  subtitle1: "Qui suis-je",
  description1: "Je m'appelle Franck Chapelon et je suis un développeur web passionné. Je crée des expériences web uniques et engageantes.",
  subtitle2: "Ce que je fais.",
  description2: "Je suis développeur indépendant à temps plein. Bien que je me spécialise dans la création d'identités de marque et de sites Web, j'aime la variété et j'aime relever des défis créatifs uniques. Si vous voulez faire une différence ou réimaginer le monde dans lequel nous vivons, j'aimerais en faire partie.",
  subtitle3: "D'où je viens.",
  description3: "J'ai grandi dans un village de l'Essonne (91), dans un environnement calme et naturel. J'ai toujours été attiré par les nouvelles technologies et j'ai décidé de suivre cette voie. J'ai appris à programmer en autodidacte et avec la formation OpenClassrooms et j'ai travaillé sur des projets personnels pour améliorer mes compétences.",
  subtitle4: "Pourquoi le design ?",
  description4: "Je crois que le design a un impact réel et tangible sur le monde et joue un rôle énorme (quoique parfois subtil) dans la façon dont les gens comprennent les problèmes, les personnes et les produits. J'aime le design parce que je pense qu'il rend le monde plus beau et plus connecté.",
  subtitle5: "Quand pouvons-nous discuter ?",
  description5: "Tout de suite, je réponds généralement dans la journée, alors n'hésitez pas à me contacter en cliquant sur le bouton ci-dessous.",
}

export const pricingPlans = [
  {
    name: "Basic",
    description:
      "Commencez avec les outils essentiels pour booster votre présence en ligne.",
    monthlyPrice: "999€",
    dayPrice: "139€",
    link: "https://github.com/ansub/syntaxUI",
    features: [
      "Stratégie SEO & Recommandations",
      "Analyse des concurrents pour vous démarquer",
      "Une page ou 4 pages max",
      "Blogs et réseaux sociaux SEO optimisés",
      "Formulaire de contact",
      "Site web responsive",
      "Nom de domaine + hébergement (1 an)",
      "Support et maintenance",
    ],
  },
  {
    name: "Professional",
    description:
      "Débloquez des fonctionnalités améliorées et du contenu premium pour booster votre entreprise.",
    monthlyPrice: "1499€",
    dayPrice: "159€",
    link: "https://github.com/ansub/syntaxUI",
    features: [
      "Tout dans le plan de base",
      "Design sur mesure",
      "Jusqu'à 10 pages",
      "Support premium",
      "Formulaire de contact personnalisé",
      "Formulaire d'inscription",
      "Formulaire de validation",
      "Site web responsive",
      "Nom de domaine + hébergement (1 an)",
    ],
  },
  {
    name: "Premium",
    description:
      "Profitez de toutes les fonctionnalités de notre plan professionnel et plus encore.",
    monthlyPrice: "2499€",
    dayPrice: "249€",
    link: "https://github.com/ansub/syntaxUI",
    features: [
      "Tout dans le plan professionnel",
      "Obtenez des blogs premium illimités",
      "Pages illimitées",
      "Ajoutez votre propre clé de modèle AI",
      "Support premium & sessions de formation",
    ],
  },
];