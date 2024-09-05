import React from "react";
import Nav from "../component/section/Nav";
import WhatWeDo from "./component/WhatWeDo";
import AboutFoundation from "./component/Foundation";
import TeamSection from "./component/Team";
import SponsorsSection from "./component/Sponsors";

const AboutUs = () => {
  return (
    <section className=" pb-16 bg-white">
      <Nav />
      <section className="h-[323px]"></section>

      <section>
        <div className="grid justify-center">
          <h2 className="text-4xl md:text-6xl font-black mb-4">About Us</h2>
          <div className="border-b-4 border-green-500 w-24  mb-8"></div>
        </div>
        <div className="h-[561px]"></div>
      </section>

      <section className="">
        <WhatWeDo />
      </section>

      <section>
        <AboutFoundation />
      </section>
      <section>
        {/* Dark Background Vision */}
        <div className="bg-black text-white p-9 md:py-44 lg:px-24 lg:py-28">
          <div className="xl:max-w-[1023px]">
            <h3 className="text-secondary font-black text-2xl mb-7">
              Our Vision
            </h3>
            <h2 className="text-4xl font-black mb-8 lg:w-[700px]">
              We make sure to have inclusive care for children with special
              needs
            </h2>
            <p className="text-xl font-medium lg:w-[776px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              ullamcorper venenatis felis, vitae aliquet nunc dignissim sit
              amet. Duis finibus, lectus vel ultricies efficitur, odio tortor
              aliquam lacus, et tincidunt arcu orci non nisl.
            </p>
          </div>
        </div>

        {/* Light Background Vision */}
        <div className="bg-yellow-100 text-right p-9 md:py-44 lg:px-24 lg:py-28 grid justify-end">
          <h3 className="text-light-green font-black text-2xl mb-7">
            Our Vision
          </h3>
          <h2 className="text-4xl font-black mb-8 lg:w-[700px] place-self-end">
            We make sure to have inclusive care for children with special needs
          </h2>
          <p className="text-xl font-medium lg:w-[776px] place-self-end">
            Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
        </div>
      </section>
      <section>
        <TeamSection />
      </section>
      <section>
        <SponsorsSection />
      </section>
    </section>
  );
};

export default AboutUs;
