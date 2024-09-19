"use client";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Nav from "@/app/component/section/Nav";

const EventPageSkeleton = () => {
  return (
    <div>
      <Nav />
      <section className="mx-7 md:mx-9 mt-10 md:mt-20">
        <div>
          <Skeleton height={300} width="100%" />
        </div>
        <div className="px-3 mx-9 pt-4 bg-white relative -top-10 md:w-[432px]">
          <div className="flex items-center text-sm mb-2">
            <Skeleton width={100} />
            <Skeleton width={150} className="ml-4" />
          </div>
          <Skeleton height={24} width={300} />
          <Skeleton count={3} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4 mt-12 md:mt-16">
          <Skeleton height={300} width={500} />
          <Skeleton height={300} width={500} />
          <Skeleton height={300} width={500} />
        </div>
        <section className="mt-20 md:mt-28 mb-16 md:mb-24">
          <div className="flex justify-between items-center">
            <Skeleton width={200} height={30} />
            <Skeleton width={100} height={20} />
          </div>
          <div className="mt-8">
            <Skeleton count={3} height={200} />
          </div>
        </section>
      </section>
    </div>
  );
};

export default EventPageSkeleton;
