import React from 'react'
import Link from 'next/link';
import Nav from '../component/section/Nav'
import { events, pasts } from '../component/section/dummy'; 
import EventCarousel from '../component/section/Carousel';

const page = () => {
  return (
    <section>
      <Nav />
      {/* Upcoming Events */}
      <section className="mx-5 md:mx-9 lg:mx-[100px] mt-10 md:mt-20 mb-8 md:mb-16">
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-3xl">Upcoming Events</h3>
          <p className="text-light-green text-xl">
            <Link href="/events/upcoming-events">
              See All
            </Link>
          </p>
        </div>
        <EventCarousel events={events} />
      </section>

      {/* Past Events */}
      <section className="mx-5 md:mx-9 lg:mx-[100px] mt-20 md:mt-36 mb-16 md:mb-32">
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-3xl">Past Events</h3>
          <p className="text-light-green text-xl">
            <Link href="/events/past-events">
              See All
            </Link>
          </p>
        </div>
        <EventCarousel events={pasts} />
      </section>
    </section>
  );
}

export default page