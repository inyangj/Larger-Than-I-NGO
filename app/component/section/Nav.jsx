"use client";
import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { menu, close, logo } from "@/public/icons";

const Nav = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  const [redirectToDonate, setRedirectToDonate] = useState(false);
    const [redirectToGallery, setRedirectToGallery] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleSideNav = () => {
    setShowSideNav((prev) => !prev);
  };

   const handleVolunteerClick = () => {
     window.open(
       "https://docs.google.com/forms/d/e/1FAIpQLSdULR-9XA1BY8E8xKZiqTfGANTIpTlGLX7fP0X7Moo5LD2CgA/viewform?usp=sf_link",
       "_blank",
       "noopener,noreferrer"
     );
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

 const scrollToGallery = (e) => {
   e.preventDefault();

   if (showSideNav) toggleSideNav();

   if (typeof window !== "undefined") {
     const gallerySection = document.getElementById("gallery-section");

     if (!gallerySection) {
       setRedirectToGallery(true);
       router.push("/");
     } else {
       gallerySection.scrollIntoView({ behavior: "smooth" });
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

  useEffect(() => {
    if (redirectToGallery) {
      const checkGallerySection = () => {
        const gallerySection = document.getElementById("gallery-section");

        if (gallerySection) {
          gallerySection.scrollIntoView({ behavior: "smooth" });
        } else {
          requestAnimationFrame(checkGallerySection);
        }
      };

      checkGallerySection();
    }
  }, [redirectToGallery]);

  const handleClick = () => {
    handleVolunteerClick();
    toggleSideNav();
  };

  const isEventRoute = pathname.startsWith("/events");

  return (
    <nav
      className={`md:text-xl ${
        pathname === "/" ? "" : "bg-black bg-opacity-50"
      }  ${isEventRoute ? "md:px-9 px-4 lg:px-[100px]" : ""}`}
    >
      <div
        className={`flex justify-between items-center ${
          isEventRoute ? "py-4" : "p-4"
        } `}
      >
        <div>
          <Image src={logo} alt="logo" width={100} height={100} />
        </div>

        <ul className="hidden lg:flex items-center  text-white gap-4">
          <li
            className={`hover:text-primary cursor-pointer ${
              pathname === "/" ? "text-primary" : ""
            }`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`hover:text-primary cursor-pointer ${
              pathname === "/about" ? "text-primary" : ""
            }`}
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className={`hover:text-primary cursor-pointer`}
            onClick={scrollToDonate}
          >
            Donate
          </li>
          <li
            onClick={scrollToGallery}
            className={`hover:text-primary cursor-pointer ${
              pathname === "/gallery" ? "text-primary" : ""
            }`}
          >
            Gallery
          </li>
          <li
            className={`hover:text-primary cursor-pointer ${
              isEventRoute ? "text-primary" : ""
            }`}
          >
            <Link href="/events">Events</Link>
          </li>
          <li
            className={`hover:text-primary cursor-pointer ${
              pathname === "/contact" ? "text-primary" : ""
            }`}
            onClick={handleVolunteerClick}
          >
            Contact
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
          className="fixed inset-0 bg-black bg-opacity-90 z-40"
          onClick={toggleSideNav}
        >
          <div
            className={`fixed top-0 right-0 w-full h-full sm:w-96 z-50 ${
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
                onClick={scrollToGallery}
                className={`hover:text-primary ${
                  pathname === "/gallery" ? "text-primary" : ""
                }`}
              >
                Gallery
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
                onClick={handleClick}
              >
                Contact
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
