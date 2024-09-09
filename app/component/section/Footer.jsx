"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {location, phone, mail} from "@/public/icons"

const Footer = () => {
    const [redirectToDonate, setRedirectToDonate] = useState(false);
    const router = useRouter();
   const scrollToDonate = (e) => {
     e.preventDefault();

   

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
  return (
    <footer className="bg-black text-[#D8D5D5] py-10 md:py-20 lg:py-16">
      <div className="container mx-auto px-4 md:px-14 lg:px-32 xl:px-36 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
        {/* About Us */}
        <div>
          <h3 className="text-[25px] xl:text-[35px] font-light mb-3  inline-block">
            About Us
          </h3>
          <div className="w-20 h-0  mb-11 border-secondary border"></div>
          <p>
            Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus.
          </p>
        </div>

        {/* Site Links */}
        <div>
          <h3 className="text-[25px] xl:text-[35px] font-light mb-3  inline-block">
            Site Links
          </h3>
          <div className="w-24 h-0  mb-6 border-secondary border"></div>
          <ul className="space-y-2">
            <li className="hover:text-primary">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-primary">
              <Link href="/about">About</Link>
            </li>
            <li className={`hover:text-primary`} onClick={scrollToDonate}>
              Donate
            </li>
            <li className="hover:text-primary">
              <Link href="/gallery">Gallery</Link>
            </li>
            <li className="hover:text-primary">
              <Link href="/events">Events</Link>
            </li>
            <li className="hover:text-primary">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Have a Question? */}
        <div>
          <h3 className="text-[25px] xl:text-[35px] font-light  mb-3   inline-block">
            Have a Question?
          </h3>
          <div className="w-28 h-0 md:w-40 mb-11 border-secondary border"></div>
          <ul className=" space-y-10">
            <li className="flex items-center">
              <Image
                src={location}
                alt="Location"
                width={24}
                height={24}
                className="mr-2"
              />
              <span>
                203 Fake St. Mountain View, San Francisco, California, USA
              </span>
            </li>
            <li className="flex items-center">
              <Image
                src={phone}
                alt="Phone"
                width={24}
                height={24}
                className="mr-2"
              />
              <span>+234 808 9582717</span>
            </li>
            <li className="flex items-center">
              <Image
                src={mail}
                alt="Email"
                width={24}
                height={24}
                className="mr-2"
              />
              <span>example@example.com</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
