"use client";
import { useState } from "react";

const TabbedSection = () => {
  const [activeTab, setActiveTab] = useState("Prevention");

  const tabContent = {
    Prevention: (
      <>
        <p>
          Sensitization awareness drive in hospitals for causes and types at:
        </p>
        <ul className="list-disc pl-5 marker:text-yellow-500 marker:text-3xl mt-3 grid gap-3 md:gap-6">
          <li>
            Hospitals, Schools & Community Pre-natal, Perinatal and Post natal
            causes of disability
          </li>
          <li>
            Training of Teachers, Care Givers and volunteers of management of
            children with special needs.
          </li>
        </ul>
      </>
    ),
    Intervention: (
      <>
        <ul className="list-disc pl-5 marker:text-yellow-500 marker:text-3xl grid gap-3 md:gap-6">
          <li>
            Spiritual; projecting Christian values and virtues that crystallize
            efforts towards alleviating the plight of people with disabilities.
          </li>
          <li>
            Educational; inclusive education, apt curriculum, vocational and
            skill, capacity building, health;
          </li>
          <li>
            Establishment of support groups among parents, teachers and other
            interest groups to increase emotional and educational stability.
          </li>
          <li>
            Pre & Post counseling for parents of children with physical, mental,
            sensory and behavioral disability.
          </li>
          <li>
            Provision of a platform for proper medical checkup, diagnosis of
            specific disabilities and prompt intervention.
          </li>
          <li>Therapeutic; speech language, physiotherapy, occupational etc</li>
        </ul>
      </>
    ),
    Advocacy: (
      <>
        <ul className="list-disc pl-5 marker:text-yellow-500 marker:text-3xl grid gap-3 md:gap-6">
          <li>
            Implementation of Rights of Disability Act to Government Parastatals
          </li>
          <li>
            Collaboration with government agencies for the introduction of
            policies for improved intervention.
          </li>
          <li>Collaboration with health agencies for subsidized treatments.</li>
          <li>Culture Shift in handling children with special Needs</li>
          <li>
            Identifying needs and talents and abilities instead of their
            disabilities.
          </li>
          <li>
            Disability friendly facilities and structures in organizations -
          </li>
        </ul>
      </>
    ),
  };

  return (
    <div className=" px-5 lg:px-24 py-10">
      <h3 className="text-secondary font-semibold mb-4 text-center ">
        What We Do
      </h3>
      <h2 className="text-4xl md:text-6xl text-center font-black md:px-[70px] xl:px-[230px] mb-24">
        With Our PIA Approach We Are On A Mission To Ensure...
      </h2>
      <div className="flex my-10 md:mt-40 md:space-x-5  ">
        {["Prevention", "Intervention", "Advocacy"].map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 md:px-8 rounded-tr-[50px] rounded-bl-[50px] font-medium text-lg md:text-xl lg:text-3xl ${
              activeTab === tab ? "bg-green-500 text-white" : " text-black"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="font-light text-lg md:text-xl">
        {tabContent[activeTab]}
      </div>
    </div>
  );
};

export default TabbedSection;
