"use client";
import Nav from "@/app/component/section/Nav";
import EventCard from "../component/EventCard";
import { fetchPastEvents } from "@/utils/fetch.js";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import EventCardSkeleton from "@/app/component/section/EventSkeleton";

const PastEvents = () => {
  const {
    data: pasts,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["pasts-events"],
    queryFn: fetchPastEvents,
  });

  // Loading State
  if (isLoading)
    return (
      <section>
        <Nav />
        <div className="mx-5 md:mx-9 lg:mx-[100px] mt-10 md:mt-20 mb-8 md:mb-16">
          <h1 className="font-medium text-3xl">Past Events</h1>
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

  // Empty State: When no past events are available
  if (!pasts || pasts.length === 0) {
    return (
      <section>
        <Nav />
        <div className="mx-5 md:mx-9 lg:mx-[100px] mt-10 md:mt-20 mb-8 md:mb-16">
          <h1 className="font-medium text-3xl">Past Events</h1>
          <div className="mt-8 mb-14 md:mb-28 flex items-center justify-center">
            <p className="text-xl text-gray-500">No Past Events</p>
          </div>
        </div>
      </section>
    );
  }

  // Display Past Events when available
  return (
    <section>
      <Nav />
      <div className="mx-5 md:mx-9 lg:mx-[100px] mt-10 md:mt-20 mb-8 md:mb-16">
        <h1 className="font-medium text-3xl">Past Events</h1>
        <div className="mt-8 mb-14 md:mb-28 grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-24 items-center">
          {pasts.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastEvents;
