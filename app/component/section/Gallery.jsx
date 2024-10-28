"use client";

import React from "react";
import { Image as AntImage } from "antd";
import { useQuery } from "@tanstack/react-query";
import { fetchImages } from "@/utils/Fetch";

const GallerySection = () => {
  const {
    data: images = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["galleryImages"],
    queryFn: fetchImages,
  });

  const skeletonArray = new Array(8).fill(0);

  if (isLoading) {
    return (
      <section
        className="space-y-4 pt-36 md:pt-28 pb-16 md:pb-20"
        id="gallery-section"
      >
        <div className="flex gap-4 items-center px-8 md:px-[73px]">
          <div className="w-16 h-0 border-secondary border-2"></div>
          <h2 className="md:text-xl md:font-bold font-medium">Our Gallery</h2>
        </div>
        <p className="text-3xl md:text-5xl px-8 md:px-[73px] pb-11">
          Take a look at our gallery
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-8 md:px-[57px]">
          {skeletonArray.map((_, index) => (
            <div
              key={index}
              className="w-[360px] h-[230px] bg-gray-200 animate-pulse rounded-md"
            />
          ))}
        </div>
      </section>
    );
  }

  if (isError) {
    return <p className="text-center text-xl py-16">Failed to load images</p>;
  }

  if (images.length === 0) {
    return (
      <section
        className="space-y-4 pt-36 md:pt-28 pb-16 md:pb-20"
        id="gallery-section"
      >
        <div className="flex gap-4 items-center px-8 md:px-[73px]">
          <div className="w-16 h-0 border-secondary border-2"></div>
          <h2 className="md:text-xl md:font-bold font-medium">Our Gallery</h2>
        </div>
        <p className="text-3xl md:text-5xl px-8 md:px-[73px] pb-11">
          Take a look at our gallery
        </p>
        <div className="text-center py-16">
          <h2 className="text-3xl md:text-5xl">No images yet</h2>
        </div>
      </section>
    );
  }

  return (
    <section
      className="space-y-4 pt-36 md:pt-28 pb-16 md:pb-20"
      id="gallery-section"
    >
      <div className="flex gap-4 items-center px-8 md:px-[73px]">
        <div className="w-16 h-0 border-secondary border-2"></div>
        <h2 className="md:text-xl md:font-bold font-medium">Our Gallery</h2>
      </div>
      <p className="text-3xl md:text-5xl px-8 md:px-[73px] pb-11">
        Take a look at our gallery
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:px-[57px] xl:px-0 lg:grid-cols-3 xl:grid-cols-4 px-4 gap-4 justify-center items-center">
        <AntImage.PreviewGroup>
          {images.map((src, index) => (
            <AntImage
              key={index}
              src={src.url}
              alt={`Gallery Image ${index + 1}`}
              width={360}
              height={230}
              className="transition-transform duration-300 transform group-hover:scale-110 cursor-pointer"
            />
          ))}
        </AntImage.PreviewGroup>
      </div>
    </section>
  );
};

export default GallerySection;
