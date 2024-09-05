import React from "react";
import Image from "next/image";
import {img1, img5} from "@/public/images";
import Button from "@/app/component/element/Button";

const AboutFoundation = () => {
  return (
    <section className="py-16 relative bg-white lg:ml-20 lg:mr-16">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-60 md:gap-28 items-center">
        <div className="grid justify-center gap-11 items-center px-4 md:mx-24 lg:mx-0 text-center lg:text-left">
          <h3 className="text-secondary font-black text-3xl ">
            About Our Foundation
          </h3>
          <h2 className="text-4xl md:text-5xl xl:text-6xl  font-black">
            We Are On A Mission To Help Children
          </h2>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
          p Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputat
          <Button
            className="bg-secondary mx-auto lg:mx-0   w-fit"
            id={"donate-button"}
          >
            Donate
          </Button>
        </div>
        <div className="relative mx-9 md:mx-[104px] lg:mx-0 ">
          <div className=" absolute right-0">
            <Image
              src={img1}
              alt="Foundation Image 1"
              className="w-56 md:w-[400px] lg:w-56 xl:w-[400px]"
            />
          </div>
          <div className="w-52 h-40 md:h-[264px]  md:w-[400px] lg:w-52 lg:h-40  bg-light-green absolute top-28 md:top-48 right-20 md:right-32 lg:top-28 lg:right-20 xl:h-[264px]  xl:w-[400px] xl:top-48 xl:right-32 "></div>
          <div className="w-52 h-72 md:h-[488px] lg:h-72 xl:h-[488px] "></div>
          <div className=" absolute right-24 bottom-0 md:right-36 lg:right-24 xl:right-36">
            <Image
              src={img5}
              alt="Foundation Image 2"
              className="w-64  md:w-[455px] lg:w-64  xl:w-[455px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFoundation;
