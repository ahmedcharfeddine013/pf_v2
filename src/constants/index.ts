import html from "../../public/assests/html-1.svg";
import css from "../../public/assests/css-3.svg";
import tailwind from "../../public/assests/tailwind-css-2.svg";
import bootstrap from "../../public/assests/bootstrap-4.svg";
import js from "../../public/assests/logo-javascript.svg";
import ts from "../../public/assests/typescript.svg";
import react from "../../public/assests/react-2.svg";
import next from "../../public/assests/next-js.svg";
import material from "../../public/assests/material-ui-1.svg";
import prisma from "../../public/assests/prisma-4.svg";
import node from "../../public/assests/nodejs-3.svg";
import mongo from "../../public/assests/mongodb-icon-1.svg";
import netfix_clone from "../../public/projects/netflix.jpg";
import threepo from "../../public/projects/threepo.png";
import pf2 from "../../public/projects/pf.png";
import iphone from "../../public/projects/iphone.png";
import hb from "../../public/projects/horizon_banking.png";
import ld from "../../public/projects/live_docs.png";
import bgr from "../../public/projects/bgr.png";
import eh from "../../public/projects/energyhive.png";

export const navLists = ["Home", "About Me", "Skills", "Projects"];

export const skillsList = [
  {
    name: "HTML5",
    img: html,
  },
  {
    name: "CSS3",
    img: css,
  },
  {
    name: "Tailwind Css",
    img: tailwind,
  },
  {
    name: "Bootstrap",
    img: bootstrap,
  },
  {
    name: "Javascript",
    img: js,
  },
  {
    name: "Typescript",
    img: ts,
  },
  {
    name: "React",
    img: react,
  },
  {
    name: "Next Js",
    img: next,
  },
  {
    name: "Material UI",
    img: material,
  },
  {
    name: "Prisma",
    img: prisma,
  },
  {
    name: "Node Js",
    img: node,
  },
  {
    name: "Mongo DB",
    img: mongo,
  },
];

export const projectsList = [
  {
    id: "6",
    name: "Horizon Banking",
    description:
      "Built with Next.js, Horizon is a financial SaaS platform that connects to multiple bank accounts, displays transactions in real-time, allows users to transfer money to other platform users, and manages their finances altogether.",
    imagePath: hb,
    githubLink: "https://github.com/ahmedcharfeddine013/banking_web_app",
    status: "notcompleted",
    liveLink: "",
  },
  {
    id: "7",
    name: "Live Docs",
    description:
      "Built with Next.js to handle the user interface, Liveblocks for real-time features and styled with TailwindCSS, LiveDocs is a clone of Goole Docs. The primary goal is to demonstrate the developer's skills in realtime enviroment that creates a lasting impact.",
    imagePath: ld,
    githubLink: "https://github.com/ahmedcharfeddine013/live_docs",
    status: "notcompleted",
    liveLink: "",
  },
  {
    id: "8",
    name: "Energyhive",
    description:
      "This project was part of a hackaton where me and my team got the 4th place, i was responsible for designing the website and developing it.",
    imagePath: eh,
    githubLink: "https://github.com/ahmedcharfeddine013/dione_energy",
    status: "notcompleted",
    liveLink:
      "https://energyhive-44sew1ndq-ahmedcharfeddine013s-projects.vercel.app/",
  },
  {
    id: "9",
    name: "BGR",
    description:
      "BGR is a personal SAAS project where i wanted to make photo editor website and currently still working on it.",
    imagePath: bgr,
    githubLink: "https://github.com/ahmedcharfeddine013/bg-remover",
    status: "notcompleted",
    liveLink: "",
  },
  {
    id: "1",
    name: "Nextflix Clone",
    description:
      "In this Project i have tried to test my experience in real project and Just decided to make this Netflix UI.",
    imagePath: netfix_clone,
    githubLink: "https://github.com/ahmedcharfeddine013/Netflix-Clone",
    status: "completed",
    liveLink: "",
  },
  {
    id: "3",
    name: "Iphone 15 Showcase",
    description:
      "This portfolio was made using Next Js for development. It's nothing but a simple pleasing portfolio. I have used several technologies such as tailwind css, ShadCn UI, ... This Project is open to be used as a template for easier work.",
    imagePath: iphone,
    githubLink: "https://github.com/ahmedcharfeddine013/iphone",
    status: "completed",
    liveLink: "",
  },
  {
    id: "4",
    name: "Threepo",
    description:
      "This portfolio was made using Next Js for development. It's nothing but a simple pleasing portfolio. I have used several technologies such as tailwind css, ShadCn UI, ... This Project is open to be used as a template for easier work.",
    imagePath: threepo,
    githubLink: "https://github.com/ahmedcharfeddine013/movie_catalog_synexoo",
    status: "In Progress",
    liveLink: "https://movie-catalog-synexoo.vercel.app/",
  },

  {
    id: "5",
    name: "Portfolio Project v2",
    description:
      "This portfolio was made using Next Js for development. It's nothing but a simple pleasing portfolio. I have used several technologies such as tailwind css, ShadCn UI, ... This Project is open to be used as a template for easier work.",
    imagePath: pf2,
    githubLink: "https://github.com/ahmedcharfeddine013/pf_v2",
    status: "completed",
    liveLink: "",
  },
];
