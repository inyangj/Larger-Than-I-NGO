"use client";

import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const EventCardSkeleton = () => {
  return (
    <div className="shadow-slip relative">
      <div className="px-3 pt-4">
        <Skeleton height={180} width="100%" />
      </div>
      <div className="px-3 mx-9 pt-4 bg-white relative -top-10">
        <div className="flex items-center text-sm mb-2">
          <Skeleton width={100} height={20} />
          <Skeleton width={150} height={20} className="ml-4" />
        </div>
        <Skeleton width={200} height={24} />
        <Skeleton count={3} width="100%" height={20} />
      </div>
    </div>
  );
};

export default EventCardSkeleton;
