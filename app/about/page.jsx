import React from "react";
import Nav from "../component/section/Nav";
import AboutFoundation from "./component/Foundation";
import TeamSection from "./component/Team";
import SponsorsSection from "./component/Sponsors";
import TabbedSection from "./component/TabbedSecton";

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
        <TabbedSection />
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
              To ensure that children from age 0- 12 years with physical, mental
              and sensory challenges overcome stigmatization and other unhealthy
              socio- cultural beliefs that are inimical to their growth to live
              up to their full potentials and be fully integrated into the
              society.
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
            To make available relevant resources and services, such as
            adequate/early diagnosis, special health care provisions,
            educational services and advocacy programmes, to meet the special
            needs of children with challenges.
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
