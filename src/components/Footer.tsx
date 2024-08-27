import React from "react";
import { Copyright } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-5 space-x-1 flex items-center justify-center border-2">
      <Copyright />
      <h1 className="font-light">
        Developer and designed by
        <span className="text-primary font-bold text-lg">
          {" "}
          Ahmed Charfeddine
        </span>
      </h1>
    </footer>
  );
};

export default Footer;
