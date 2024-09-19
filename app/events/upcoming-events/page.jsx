"use client";
import axios from "@/utils/axios";
import Nav from "@/app/component/section/Nav";
import EventCard from "../component/EventCard";
// import { events } from "@/app/component/section/dummy";
import React, { useState, useEffect } from "react";
import EventCardSkeleton from "@/app/component/section/EventSkeleton";
import { fetchUpcomingEvents } from "@/utils/Fetch";
import { useQuery } from "@tanstack/react-query";

const UpcomingEvents = () => {
  const {
    data: events,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["upcoming-events"],
    queryFn: fetchUpcomingEvents,
  });

   if (isLoading)
     return (
       <section>
         <Nav />
         <div className="mx-5 md:mx-9 lg:mx-[100px] mt-10 md:mt-20 mb-8 md:mb-16">
           <h1 className="font-medium text-3xl">Upcoming Events</h1>
           <div className="mt-8 mb-14 md:mb-28 grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-24 items-center">
             <EventCardSkeleton />
             <EventCardSkeleton />
             <EventCardSkeleton />
             <EventCardSkeleton />
             <EventCardSkeleton />
             <EventCardSkeleton />
           </div>
         </div>
       </section>
     );

   if (error) return <p>Error fetching events: {error.message}</p>;

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
