"use client";

import React, { useEffect, useState } from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { logo } from "@/utils";
import { navLists } from "@/constants";
import { cn } from "@/lib/utils";

const MobileNavbar = () => {
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

  return (
    <section className="sm:hidden block fixed w-full z-50">
      <Sheet>
        <div
          className={cn(
            scrolling ? "bg-white text-primary" : "",
            "px-10 py-4 flex w-full justify-end"
          )}
        >
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
        </div>
        <SheetContent
          side={"left"}
          className=" flex items-center justify-center flex-col"
        >
          <SheetClose asChild>
            <Link href={"/"}>
              <Image src={logo} height={100} width={100} alt="Logo" />
            </Link>
          </SheetClose>
          <div className="flex items-center justify-center flex-col gap-4">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {navLists.map((link) => (
                  <SheetClose asChild key={link}>
                    <Link href={`/#${link}`}>{link}</Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNavbar;
