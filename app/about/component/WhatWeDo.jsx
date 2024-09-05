import React from "react";
import Image from "next/image";
import {prevent, advocate, intervene} from "@/public/icons"

const WhatWeDo = () => {
  const services = [
    {
      title: "Prevention",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      icon: prevent,
      bgColor: "bg-white",
    },
    {
      title: "Intervention",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      icon: intervene,
      bgColor: "bg-yellow-100",
    },
    {
      title: "Advocacy",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      icon: advocate,
      bgColor: "bg-white",
    },
  ];

  return (
    <section className="py-16  text-center">
      <h3 className="text-secondary font-semibold mb-4">What We Do</h3>
      <h2 className="text-4xl md:text-6xl font-black px-[70px] xl:px-[300px] mb-24">
        We Are On A Mission To Ensure...
      </h2>
      <div className="container mx-auto md:px-[202px] lg:px-[57px] grid grid-cols-1 lg:grid-cols-3 gap-[100px]">
        {services.map((service, index) => (
          <div key={index} className={`px-9 pb-5 hover:bg-[#FFF7DD] `}>
            <Image
              src={service.icon}
              alt={service.title}
              width={50}
              height={50}
              className="mb-4 mx-auto"
            />
            <h4 className="text-xl font-bold mb-4">{service.title}</h4>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
