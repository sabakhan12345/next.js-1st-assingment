"use client";
import Image from "next/image";
import logo from "@/images/magnum-img.jpg";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const toggleMenu = (): void => {
    const menu = document.getElementById("mobile-menu");
    if (menu) {
      menu.classList.toggle("hidden");
    }
  };

  return (
    <div>
      <nav className="bg-pink-400 w-[100%] h-[100px] mt-0 flex items-center justify-between p-5">
        <div>
          <Image
            src={logo}
            alt="logo"
            className="w-[90px] h-[90px] m-4 mb-[-40px] flex flex-row rounded-full border-4 border-pink-400 md:w-[120px] md:h-[120px]"
          />
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex text-2xl justify-evenly items-center list-none">
          <Link href={"/"} className="font-serif text-white m-1 p-2">
            HOME
          </Link>
          <Link href={"/about"} className="font-serif text-white m-1 p-2">
            ABOUT
          </Link>
          <Link href={"/flavour"} className="font-serif text-white m-1 p-2">
            FLAVOURS
          </Link>
          <Link href={"/pricing"} className="font-serif text-white m-1 p-2">
            PRICING
          </Link>
          <Link href={"/contact"} className="font-serif text-white m-1 p-2">
            CONTACT
          </Link>
        </div>
        {/* Hamburger Menu Icon */}
        <GiHamburgerMenu
          className="flex text-white my-3 mx-5 items-center text-2xl md:hidden"
          onClick={toggleMenu}
        />
      </nav>
      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className=" bg-pink-400 text-white  flex flex-col text-2xl items-center p-4 hover:cursor-pointer md:hidden  "
      >
        <Link href={"/"} className="font-serif m-2 p-2  " onClick={toggleMenu}>
          HOME
        </Link>
        <Link href={"/about"} className="font-serif m-2 p-2" onClick={toggleMenu}>
          ABOUT
        </Link>
        <Link href={"/flavour"} className="font-serif m-2 p-2" onClick={toggleMenu}>
          FLAVOURS
        </Link>
        <Link href={"/pricing"} className="font-serif m-2 p-2" onClick={toggleMenu}>
          PRICING
        </Link>
        <Link href={"/contact"} className="font-serif m-2 p-2" onClick={toggleMenu}>
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
