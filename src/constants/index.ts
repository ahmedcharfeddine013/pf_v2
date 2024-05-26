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
import express from "../../public/assests/express-109.svg";
import mongo from "../../public/assests/mongodb-icon-1.svg";
import netfix_clone from "../../public/projects/netflix.jpg";
import pf from "../../public/projects/portfolio.png";
import threepo from "../../public/projects/threepo.png";
import pf2 from "../../public/projects/pf.png";
import iphone from "../../public/projects/iphone.png";

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

export const projectsLiist = [
  {
    id: "1",
    name: "Nextflix Clone",
    description:
      "In this Project i have tried to test my experience in real project and Just decided to make this Netflix UI.",
    imagePath: netfix_clone,
    githubLink: "https://github.com/ahmedcharfeddine013/Netflix-Clone",
  },
  {
    id: "2",
    name: "Portfolio Project",
    description:
      "This portfolio was made using Next Js for development. It's nothing but a simple pleasing portfolio. I have used several technologies such as tailwind css, ShadCn UI, ... This Project is open to be used as a template for easier work.",
    imagePath: pf,
    githubLink:
      "https://github.com/ahmedcharfeddine013/portfolio_ahmed_charfeddine",
  },
  {
    id: "3",
    name: "Iphone 15 Showcase",
    description:
      "This portfolio was made using Next Js for development. It's nothing but a simple pleasing portfolio. I have used several technologies such as tailwind css, ShadCn UI, ... This Project is open to be used as a template for easier work.",
    imagePath: iphone,
    githubLink: "https://github.com/ahmedcharfeddine013/iphone",
  },
  {
    id: "4",
    name: "Threepo",
    description:
      "This portfolio was made using Next Js for development. It's nothing but a simple pleasing portfolio. I have used several technologies such as tailwind css, ShadCn UI, ... This Project is open to be used as a template for easier work.",
    imagePath: threepo,
    githubLink: "https://github.com/ahmedcharfeddine013/movie_catalog_synexoo",
  },
  {
    id: "5",
    name: "Portfolio Project v2",
    description:
      "This portfolio was made using Next Js for development. It's nothing but a simple pleasing portfolio. I have used several technologies such as tailwind css, ShadCn UI, ... This Project is open to be used as a template for easier work.",
    imagePath: pf2,
    githubLink: "https://github.com/ahmedcharfeddine013/pf_v2",
  },
];
