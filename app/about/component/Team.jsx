import React from "react";
import Image from "next/image";
import {kemi, chiefson, dokun, doubra, elizabeth, favour, fidelia, izontimi, member, betty, amaebi} from "@/public/images"

const teamMembers = [
  {
    name: "Pst Kemi Ogiemudia",
    title: "President LTIDF",
    image: kemi,
  },
  {
    name: "Deac. Izontimi Otuogha",
    title: "Secretary of Larger Than I Developmental Foundation (LTIDF)",
    image: izontimi,
  },
  {
    name: "Dr. Dokun Ogunniyi",
    title: " Director of Research & Development",
    image: dokun,
  },
  {
    name: "Mrs. Doubra Ofoni",
    title: "Director, Finance services",
    image: doubra,
  },
  {
    name: "Mrs. Elizabeth Owutuamor",
    title: "Administrator, Special Kids Centre",
    image: elizabeth,
  },
  {
    name: "Mrs. Betty Arofah",
    title: "Director of Social Welfare Services",
    image: betty,
  },
  {
    name: "Mrs. Fidelia Ifidi",
    title: "Name of MemberA School Administrator",
    image: fidelia,
  },
  {
    name: "Name of member",
    title: "Name of position",
    image: member,
  },
  {
    name: "Mrs. Favour Egbeighu",
    title: "Administrator, Main Stream School",
    image: favour,
  },
  {
    name: "Mr. Chiefson. I. Meindinyo",
    title: "Director, Monitoring & Evaluation",
    image: chiefson,
  },
  {
    name: "Mr. Amaebi Desmond Oti, esq",
    title: "Director, LEGAL SERVICES",
    image: amaebi,
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h3 className="text-secondary font-semibold mb-4">Our Team</h3>
      <h2 className="text-3xl font-bold mb-12">Meet our team</h2>
      <div className="mx-[65px] md:mx-[96px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-11 lg:gap-5">
        {teamMembers.map((member, index) => (
          <div key={index} className=" ">
            <Image
              src={member.image}
              alt={member.name}
              width={300}
              height={300}
              className=" mx-auto"
            />
            <h4 className="text-xl font-bold my-5">{member.name}</h4>
            <p className="text-gray-600">{member.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
