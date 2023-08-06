"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import NavItem from "./NavItem";
import MobileNavItem from "./MobileNavItem";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "API Auth",
    path: "/api/auth/signin",
  },
  {
    title: "Custom Auth",
    path: "/auth/signin",
  },

];

const navbarMetaData = {
  title: "Create Next App",
};

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const handleMenu = () => {
    if (navbar === true) {
      setNavbar(!navbar);
      document.body.style.overflow = "unset";
    } else {
      setNavbar(!navbar);
      document.body.style.overflow = "hidden";
    }
  };

  const handleWindowResize = () => {
    setNavbar(false);
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    // Add event listener when the component mounts
    window.addEventListener("resize", handleWindowResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <nav className="w-full bg-gray-500 px-5 text-white ">
        <div className="flex justify-between md:py-5 md:flex md:justify-around md:align-middle ">
          <div className="flex justify-between items-center">
            <Link href="/">
              <h2 className="text-2xl font-bold md:5pl:5 py-4 md:py-0">
                {navbarMetaData.title}
              </h2>
            </Link>
          </div>

          {/* Phone */}
          <div className="md:hidden py-4">
            <button className="py-3 rounded-md" onClick={() => handleMenu()}>
              {navbar ? (
                <div>
                  <Image src="/cross.svg" width={25} height={25} alt="close"   className="invert"/>
                </div>
              ) : (
                <Image src="/menu.svg" width={25} height={25} alt="menu" className="invert"/>
              )}
            </button>
          </div>

          {/* pc nav */}
          <div className="hidden md:block">
            <ul className="flex">
              {navLinks.map((link, index) => (
                <NavItem key={index} href={link.path}>
                  {link.title}
                </NavItem>
              ))}
            </ul>
          </div>
        </div>
        {navbar === true ? (
          <div className={` md block ${navbar ? "block" : "hidden"}`}>
            <ul className="md:h-auto md:flex mt-8 h-screen">
              {navLinks.map((link, index) => (
                <MobileNavItem key={index} href={link.path}>
                  {link.title}
                </MobileNavItem>
              ))}
            </ul>
          </div>
        ) : null}
      </nav>
    </>
  );
}

export default Navbar;
