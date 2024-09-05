import Nav from "@/app/component/section/Nav";
import EventCard from "../component/EventCard";
import { events } from "@/app/component/section/dummy";
import React from "react";

const UpcomingEvents = () => {
  return (
    <section>
      <Nav />
      <div className="mx-5 md:mx-9 lg:mx-[100px] mt-10 md:mt-20 mb-8 md:mb-16">
        <h1 className="font-medium text-3xl">Upcoming Events</h1>
        <div className=" mt-8 mb-14 md:mb-28 grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-24 items-center ">
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
