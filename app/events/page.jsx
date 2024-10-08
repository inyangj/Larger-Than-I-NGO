"use client";
import React from "react";
import Link from "next/link";
import Nav from "../component/section/Nav";
import { fetchPastEvents, fetchUpcomingEvents } from "@/utils/fetch.js";
import { useQuery } from "@tanstack/react-query";
import EventCarousel from "../component/section/Carousel";

const Upcoming = () => {
  const {
    data: events,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["coming-events"],
    queryFn: fetchUpcomingEvents,
  });

  const {
    data: pasts,
    error: err,
    isLoading: loading,
  } = useQuery({
    queryKey: ["past-events"],
    queryFn: fetchPastEvents,
  });
  return (
    <section>
      <Nav />
      {/* Upcoming Events */}
      <section className="mx-5 md:mx-9 lg:mx-[100px] mt-10 md:mt-20 mb-8 md:mb-16">
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-3xl">Upcoming Events</h3>
          <p className="text-light-green text-xl">
            <Link href="/events/upcoming-events">See All</Link>
          </p>
        </div>
        <EventCarousel events={events} loading={isLoading} error={error} />
      </section>

      {/* Past Events */}
      <section className="mx-5 md:mx-9 lg:mx-[100px] mt-20 md:mt-36 mb-16 md:mb-32">
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-3xl">Past Events</h3>
          <p className="text-light-green text-xl">
            <Link href="/events/past-events">See All</Link>
          </p>
        </div>
        <EventCarousel events={pasts} loading={loading} error={err} />
      </section>
    </section>
  );
};

export default Upcoming;
