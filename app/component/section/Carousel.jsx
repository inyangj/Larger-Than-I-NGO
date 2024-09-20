"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import EventCard from "@/app/events/component/EventCard";

import EventCardSkeleton from "./EventSkeleton";



const EventCarousel = ({ head, events = [], loading, error }) => {
  if (loading)
    return (
      <div className="mt-8 mb-14 md:mb-28 grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-24 items-center">
        <EventCardSkeleton />
        <EventCardSkeleton />
        <EventCardSkeleton />
      </div>
    );

      if (events.length === 0) {
        return (
          <div className="container mx-auto text-center py-16">
            <h2 className="text-3xl md:text-5xl">No events yet</h2>
          </div>
        );
      }

  if (error) return <p>Error: {error}</p>;

  const settings = {
    dots: true,
    infinite: events.length > 1,
    autoplay: events.length > 1,
    arrows: true,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: Math.min(events.length, 3),
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: Math.min(events.length, 3),
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(events.length, 2),
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-4xl md:text-6xl text-right mb-16">{head}</h2>
      <Slider {...settings}>
        {events.map((event, index) => (
          <div key={index} className="px-4 ">
            {" "}
            <EventCard event={event} />
          </div>
        ))}
      </Slider>
      <style jsx>{`
        .slick-slide {
          margin-right: 30px; /* Gap between slides */
        }
        .slick-slide:last-child {
          margin-right: 0; /* Remove margin from the last slide */
        }
      `}</style>
    </div>
  );
};

export default EventCarousel;
