"use client";

import React, { useState } from "react";
import Image from "next/image";

const ImageSlide = ({ galleryImages }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentImage(galleryImages[index].url);
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentImage(galleryImages[nextIndex].url);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex =
      (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentImage(galleryImages[prevIndex].url);
    setCurrentIndex(prevIndex);
  };

  return (
    <section
      className="space-y-4 pt-36 md:pt-28 pb-16 md:pb-20"
      id="gallery-section"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:px-[57px] xl:px-0 lg:grid-cols-3 xl:grid-cols-4 px-4 gap-4 justify-center items-center">
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            className="relative group cursor-pointer"
            onClick={() => openModal(index)}
          >
            <Image
              src={image.url}
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
              className="absolute top-2 right-2 text-white text-4xl"
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
              className="object-contain "
              width={500}
              height={400}
              style={{
                width: "100%",
                height: "600px",
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageSlide;
