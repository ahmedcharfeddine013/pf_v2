"use client";

import { logo } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";
import { navLists } from "../constants/index";

const Navbar = () => {
  useGSAP(() => {
    gsap.to("#logo", { opacity: 1, y: 0 });
    gsap.to(".sectionLink", { opacity: 1, x: 0, stagger: 0.1, delay: 0.5 });
  }, []);
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <Image
          id="logo"
          src={logo}
          alt="AC"
          width={34}
          height={34}
          className="opacity-0 -translate-y-6"
        />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="sectionLink px-5 text-sm cursor-pointer translate-x-40 opacity-0 text-gray hover:text-primary transition-all"
            >
              {nav}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
