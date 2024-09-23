import React from "react";
import Image from "next/image";
import {arise, tvc, nta, rhythm, down, sterling, glory, svcc, fed, uni, light} from "@/public/icons"

const sponsors = [
  { src: arise, alt: "Arise News" },
  { src: tvc, alt: "TVC" },
  { src: nta, alt: "NTA" },
  { src: rhythm, alt: "Rhythm FM" },
  { src: uni, alt: "Lagos State" },
  { src: down, alt: "Down Syndrome" },
  { src: sterling, alt: "Sterling" },
  { src: glory, alt: "Glory FM" },
  { src: fed, alt: "Medical" },
  { src: svcc, alt: "SVCC" },
  { src: light, alt: "THE LIGHT QUADRUPLE FOUNDATION" },
];

const SponsorsSection = () => {
  return (
    <section className="py-16 mt-44 text-center bg-white">
      <h3 className="text-green-500 font-semibold mb-4">Our Sponsors</h3>
      <h2 className="text-3xl font-bold mb-44 lg:mb-40">Meet Our Sponsors</h2>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 justify-center items-center">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image
              src={sponsor.src}
              alt={sponsor.alt}
              width={150}
              height={100}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SponsorsSection;
