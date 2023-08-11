import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  videv,
  foreach,
  groceryBud,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "A propos",
  },
  {
    id: "work",
    title: "Mon expérience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Développeur Web",
    icon: web,
  },
  {
    title: "React Développeur",
    icon: mobile,
  },
  {
    title: "Développeur Backend",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Formation Développeur web et web mobile",
    company_name: "Foreach Academy",
    icon: foreach,
    iconBg: "#383E56",
    date: "Avril 2023 - Aujourd'hui",
    points: [
      "Apprentisage du Html,Css,Javascript.",
      "Cours de UX/UI design, découverte de Figma et ces fonctions",
      "Back end: Node.js, express, sql et leurs librairies.",
      "Découverte et apprentissage de React/React-router",
      "Framework Css: Boostrap, Tailwindcss, Styled-component",
    ],
  },
  {
    title: "Formation De ViDev",
    company_name: "Vi Dev",
    icon: videv,
    iconBg: "#E6DEDD",
    date: "Août 2023 - Aujourd'hui",
    points: [
      "Apprendre React en entreprise.",
      "React: Les hooks,Cycles de vie, Custom hooks, Réusabilité, Best practices.",
      "Styled-components: Styling localisé, Desing system, Animation react, Sass/Scss.",
      "Context: Global state, Management, Best practices, Optimisation de performance.",
      "React-router: Navigation, Routing, Dynamic pages, Action, Loader etc...",
      "Firebase: Firestore CRUD, No sql Database, Real-time DB, Authentification, Cloud storage.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Grocery Bud",
    description:
      "Création d'une liste de courses réalisé en React/express avec systeme de login et authentification via token.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express js",
        color: "green-text-gradient",
      },
      {
        name: "react-router",
        color: "pink-text-gradient",
      },
    ],
    image: groceryBud,
    source_code_link: "https://github.com/jasonrenau/React-groceryBud",
  },
];

export { services, technologies, experiences, testimonials, projects };
