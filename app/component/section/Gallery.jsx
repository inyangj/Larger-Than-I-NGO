"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { fetchImages } from "@/utils/fetch";

const GallerySection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(""); // Stores the URL string
  const [currentIndex, setCurrentIndex] = useState(0);

  const {
    data: images = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["galleryImages"],
    queryFn: fetchImages,
  });

  const openModal = (index) => {
    setCurrentImage(images[index].url);
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentImage(images[nextIndex].url);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentImage(images[prevIndex].url);
    setCurrentIndex(prevIndex);
  };

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
        {images.map((src, index) => (
          <div
            key={index}
            className="relative group cursor-pointer"
            onClick={() => openModal(index)}
          >
            <Image
              src={src.url}
              alt={`Gallery Image ${index + 1}`}
              width={360}
              height={230}
              className="transition-transform duration-300 transform group-hover:scale-110"
            />
          </div>
        ))}
      </div>
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="relative w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%] max-w-[800px] mx-auto">
            <button
              className="absolute top-2 right-2 text-gray-400 font-bold text-3xl sm:text-4xl md:text-5xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <button
              className="absolute top-1/2 left-4 sm:-left-10 text-gray-400 md:text-white font-bold text-4xl md:text-5xl"
              onClick={prevImage}
            >
              &lt;
            </button>
            <button
              className="absolute top-1/2 right-4 sm:-right-10 text-gray-400 md:text-white font-bold text-4xl md:text-5xl"
              onClick={nextImage}
            >
              &gt;
            </button>
            <Image
              src={currentImage}
              alt="Full View"
              width={800}
              height={600}
              className="object-contain"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
