"use client";
import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { menu, close, logo } from "@/public/icons";

const Nav = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  const [redirectToDonate, setRedirectToDonate] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleSideNav = () => {
    setShowSideNav((prev) => !prev);
  };

 const scrollToDonate = (e) => {
   e.preventDefault();

   if (showSideNav) toggleSideNav();

   if (typeof window !== "undefined") {
     const donateButton = document.getElementById("donate-button");

     if (!donateButton) {
       setRedirectToDonate(true);
       router.push("/"); 
     } else {
      
       donateButton.scrollIntoView({ behavior: "smooth" });
     }
   }
 };

 useEffect(() => {
   if (redirectToDonate) {
     const checkDonateButton = () => {
       const homeDonateButton = document.getElementById("donate-button");

       if (homeDonateButton) {
         homeDonateButton.scrollIntoView({ behavior: "smooth" });
       } else {
         
         requestAnimationFrame(checkDonateButton);
       }
     };

     
     checkDonateButton();
   }
 }, [redirectToDonate]);

  const isEventRoute = pathname.startsWith("/events");

  return (
    <nav
      className={`md:text-xl bg-black bg-opacity-50 ${
        isEventRoute ? "md:px-9 px-4 lg:px-[100px]" : ""
      }`}
    >
      <div
        className={`flex justify-between items-center ${
          isEventRoute ? "py-4" : "p-4"
        } `}
      >
        <div>
          <Image src={logo} alt="logo" width={100} height={100} />
        </div>

        <ul className="hidden lg:flex items-center text-white gap-4">
          <li
            className={`hover:text-primary ${
              pathname === "/" ? "text-primary" : ""
            }`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`hover:text-primary ${
              pathname === "/about" ? "text-primary" : ""
            }`}
          >
            <Link href="/about">About</Link>
          </li>
          <li className={`hover:text-primary`} onClick={scrollToDonate}>
            Donate
          </li>
          <li
            className={`hover:text-primary ${
              pathname === "/gallery" ? "text-primary" : ""
            }`}
          >
            <Link href="/gallery">Gallery</Link>
          </li>
          <li
            className={`hover:text-primary ${
              isEventRoute ? "text-primary" : ""
            }`}
          >
            <Link href="/events">Events</Link>
          </li>
          <li
            className={`hover:text-primary ${
              pathname === "/contact" ? "text-primary" : ""
            }`}
          >
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        <button
          className="lg:hidden z-20"
          onClick={toggleSideNav}
          aria-label="Toggle menu"
        >
          <Image src={menu} alt="menu" width={35} height={35} />
        </button>
      </div>

      {showSideNav && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSideNav}
        >
          <div
            className={`fixed top-0 right-0 w-80 h-full sm:w-96 z-50 ${
              isEventRoute ? "px-4" : "px-6"
            }  grid`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-4"
              onClick={toggleSideNav}
              aria-label="Close menu"
            >
              <Image src={close} alt="close" width={35} height={35} />
            </button>
            <div aria-hidden="true"></div>
            <ul className="flex flex-col text-white items-center gap-8 text-xl">
              <li
                className={`hover:text-primary ${
                  pathname === "/" ? "text-primary" : ""
                }`}
              >
                <Link href="/" onClick={toggleSideNav}>
                  Home
                </Link>
              </li>
              <li
                className={`hover:text-primary ${
                  pathname === "/about" ? "text-primary" : ""
                }`}
              >
                <Link href="/about" onClick={toggleSideNav}>
                  About
                </Link>
              </li>
              <li className={`hover:text-primary`} onClick={scrollToDonate}>
                Donate
              </li>
              <li
                className={`hover:text-primary ${
                  pathname === "/gallery" ? "text-primary" : ""
                }`}
              >
                <Link href="/gallery" onClick={toggleSideNav}>
                  Gallery
                </Link>
              </li>
              <li
                className={`hover:text-primary ${
                  isEventRoute ? "text-primary" : ""
                }`}
              >
                <Link href="/events" onClick={toggleSideNav}>
                  Events
                </Link>
              </li>
              <li
                className={`hover:text-primary ${
                  pathname === "/contact" ? "text-primary" : ""
                }`}
              >
                <Link href="/contact" onClick={toggleSideNav}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
