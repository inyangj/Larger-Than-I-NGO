"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { pin } from "@/public/icons";


const EventCard = ({ event }) => {
  return (
    <div className="shadow-slip  relative">
      <Link href={`/events/${event.eventId}`} passHref>
        <Image
          src={event.image}
          alt={event.title}
          className="px-3 pt-4"
          layout="responsive"
        />
      </Link>
      <div className="px-3 mx-9 pt-4 bg-white relative -top-10">
        <div className="flex items-center text-sm mb-2">
          <p className="text-gray-800">{event.date}</p>
          <p className="flex gap-1 items-center ml-4 text-gray-800">
            <Image src={pin} alt="pin" width={10} height={10} />
            {event.location}
          </p>
        </div>
        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
        <p className="">{event.description}</p>
      </div>
    </div>
  );
};

export default EventCard;
