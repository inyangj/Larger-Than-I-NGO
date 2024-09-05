"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { img1, img3, img5, img7 } from "@/public/images";
import { pin } from "@/public/icons";
import { events } from "@/app/component/section/dummy"; 
import EventCarousel from "@/app/component/section/Carousel";
import Nav from "@/app/component/section/Nav";



const eventData = {
  eventId: 9,
  date: "Sep 4, 2024",
  location: "Unknown",
  title: "Grand Opening",
  description:
    "Some Final Words and Another Heading for Your Guests. Replace this Text.",
  images: [
    img1, // Replace with actual image paths
    img3,
    img5,
    img7,
  ],
  otherEvents: [
    {
      eventId: 10,
      title: "Huisiton's Outreach",
      date: "Unknown",
      location: "Unknown",
      description: "Dorem ipsum dolor sit amet, consectetur adipiscing elit.",
      images: ["/img5.jpg"],
    },
    {
      eventId: 11,
      title: "Huisiton's Outreach",
      date: "Unknown",
      location: "Unknown",
      description: "Dorem ipsum dolor sit amet, consectetur adipiscing elit.",
      images: ["/img6.jpg"],
    },
    // Add the rest as needed...
  ],
};

export default function EventPage() {
  const { eventId } = useParams();
  // Filter event data based on the dynamic route
//   const event = eventData.eventId === parseInt(eventId) ? eventData : null;

//   if (!event) return <p>Event not found</p>;

  return (
    <div>
      <Nav />
      <section className=" mx-7 md:mx-9 mt-10 md:mt-20">

      <div>
        <Image
          src={eventData.images[0]}
          alt={eventData.title}
          className="lg:h-[372px] md:h-72 w-full"
        />
      </div>
      <div className="px-3 mx-9 pt-4 bg-white relative -top-10 md:w-[432px]">
        <div className="flex items-center text-sm mb-2">
          <p className="text-gray-800">{eventData.date}</p>
          <p className="flex gap-1 items-center ml-4 text-gray-800">
            <Image src={pin} alt="pin" width={10} height={10} />
            {eventData.location}
          </p>
        </div>
        <h3 className="text-xl font-bold mb-2">{eventData.title}</h3>
        <p className="">{eventData.description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4 mt-12 md:mt-16">
        {eventData.images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={Event + index}
            width={500}
            height={300}
            className=""
          />
        ))}
      </div>

      <section className=" mt-20 md:mt-28 mb-16 md:mb-24">
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-3xl">Other Events</h3>
          <p className="text-light-green text-xl">
            <Link href="/events/upcoming-events">See All</Link>
          </p>
        </div>
        <EventCarousel events={events} />
      </section>
      </section>
    </div>
  );
}
