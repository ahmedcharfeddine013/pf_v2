"use client";

import { logo } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { navLists } from "../constants/index";
import Link from "next/link";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else setScrolling(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useGSAP(() => {
    gsap.to("#logo", { opacity: 1, y: 0 });
    gsap.to(".sectionLink", { opacity: 1, x: 0, stagger: 0.1, delay: 0.5 });
  }, []);
  return (
    <header
      className={`${
        scrolling ? "bg-white text-primary" : "text-white"
      } w-full sm:flex py-5 sm:px-10 px-5 hidden transition  bg-transparent fixed justify-between items-center z-50`}
    >
      <nav className="flex w-full screen-max-width  items-center justify-center">
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
            <Link
              href={`#${nav}`}
              key={nav}
              className="sectionLink px-5 text-sm cursor-pointer translate-x-40 opacity-0 text-gray hover:text-primary transition-all"
            >
              {nav}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
