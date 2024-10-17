"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { pin } from "@/public/icons";
import EventCarousel from "@/app/component/section/Carousel";
import Nav from "@/app/component/section/Nav";
import { fetchIndividualEvent, fetchUpcomingEvents } from "@/utils/Fetch";
import { useQuery } from "@tanstack/react-query";
import "react-loading-skeleton/dist/skeleton.css";
import EventPageSkeleton from "@/app/component/section/IndividualLoader";
import moment from "moment";
import GallerySection from "@/app/component/section/Gallery";
import ImageSlide from "../component/ImageSlide";

const EventPage = () => {
  const { eventId } = useParams();

  const {
    data: events,
    error: err,
    isLoading,
  } = useQuery({
    queryKey: ["events"],
    queryFn: fetchUpcomingEvents,
  });

  const {
    data: event,
    error,
    isLoading: loading,
  } = useQuery({
    queryKey: ["individual-event", eventId],
    queryFn: fetchIndividualEvent(eventId),
  });

  if (loading) {
    return (
      <div>
        <EventPageSkeleton />
      </div>
    );
  }

  if (error) {
    return <p>Error fetching event: {error.message}</p>;
  }
  const formatDate = moment(event?.startDate).format("MMMM D, YYYY");

  return (
    <div>
      <Nav />
      <section className="mx-7 md:mx-9 mt-10 md:mt-20">
        <div className="lg:h-[392px] md:h-72 w-[370px] md:w-[500px] lg:w-[600px] ">
          <Image
            src={event.cover}
            alt={event.title}
            className="lg:h-[372px] md:h-72 "
            width={600}
            height={500}
          />
        </div>
        <div className="px-3 mx-9 pt-4 bg-white relative -top-10 md:w-[432px]">
          <div className="flex items-center text-sm mb-2">
            <p className="text-gray-800">{formatDate}</p>
            <p className="flex gap-1 items-center ml-4 text-gray-800">
              <Image src={pin} alt="pin" width={10} height={10} />
              {event.location}
            </p>
          </div>
          <h3 className="text-xl font-bold mb-2">{event.title}</h3>
          <p>{event.description}</p>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4 mt-12 md:mt-16">
          {event.images.map((img, index) => (
            <Image
              key={index}
              src={img.url}
              alt={`Event Image ${index}`}
              width={500}
              height={300}
              className=""
            />
          ))}
        </div> */}
        <ImageSlide galleryImages={event.images} />
        <section className="mt-20 md:mt-28 mb-16 md:mb-24">
          <div className="flex justify-between items-center">
            <h3 className="font-medium text-3xl">Other Events</h3>
            <p className="text-light-green text-xl">
              <Link href="/events/upcoming-events">See All</Link>
            </p>
          </div>
          <EventCarousel events={events} error={err} loading={isLoading} />
        </section>
      </section>
    </div>
  );
};

export default EventPage;
