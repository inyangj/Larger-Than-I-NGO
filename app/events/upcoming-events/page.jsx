"use client";
import axios from "@/utils/axios";
import Nav from "@/app/component/section/Nav";
import EventCard from "../component/EventCard";
import React from "react";
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

  // Loading State
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

  // Error State
  if (error) return <p>Error fetching events: {error.message}</p>;

  // Empty State: When no events are available
  if (!events || events.length === 0) {
    return (
      <section>
        <Nav />
        <div className="mx-5 md:mx-9 lg:mx-[100px] mt-10 md:mt-20 mb-8 md:mb-16">
          <h1 className="font-medium text-3xl">Upcoming Events</h1>
          <div className="mt-8 mb-14 md:mb-28 flex items-center justify-center">
            <p className="text-xl text-gray-500">No Upcoming Events</p>
          </div>
        </div>
      </section>
    );
  }

  // Display Events when available
  return (
    <section>
      <Nav />
      <div className="mx-5 md:mx-9 lg:mx-[100px] mt-10 md:mt-20 mb-8 md:mb-16">
        <h1 className="font-medium text-3xl">Upcoming Events</h1>
        <div className="mt-8 mb-14 md:mb-28 grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-24 items-center">
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
