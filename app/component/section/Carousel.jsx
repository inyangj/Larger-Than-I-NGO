"use client";
import React from "react";
import Slider from "react-slick";
import EventCard from "@/app/events/component/EventCard";



const EventCarousel = ({head, events}) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: true,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
