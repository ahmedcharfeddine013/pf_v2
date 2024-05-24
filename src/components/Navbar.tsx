import { logo } from "@/utils";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <Image src={logo} alt="AC" width={34} height={34} />
      </nav>
    </header>
  );
};

export default Navbar;
