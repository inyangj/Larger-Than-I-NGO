"use client";
import Image from "next/image";
import Nav from "@/app/component/section/Nav"; 
import { donate, volunteer, sponsor } from "@/public/icons";
import { img1, img2, img3, img4, img5, img6, img7, banner2  } from "@/public/images";
import {events} from "@/app/component/section/dummy"
import Button from "./component/element/Button";
import EventCarousel from "./component/section/Carousel";
import Link from "next/link";
import HomeAbout from "./component/section/HomeAbout";

const Home = () => {

   const galleryImages = [img2, img3, img2, img1, img5, img4, img5, img7];

    const handleVolunteerClick = () => {
      window.open(
        "https://docs.google.com/forms/d/e/1FAIpQLSdULR-9XA1BY8E8xKZiqTfGANTIpTlGLX7fP0X7Moo5LD2CgA/viewform?usp=sf_link",
        "_blank",
        "noopener,noreferrer"
      );
    };
    const handleDonateClick = () => {
      window.open(
        "https://flutterwave.com/donate/amwwbhnwpjft",
        "_blank",
        "noopener,noreferrer"
      );
    };

  return (
    <div className="">
      {/* Hero Section */}
      <section className=" banner ">
        {/* <div className="absolute inset-0 bg-black bg-opacity-50 hidden -z-10 xl:block"></div> */}
        <div className="bg-black bg-opacity-60 ">
          <Nav />
          <div className="text-center  mt-72 ">
            <h1 className="text-white text-[40px] md:w-[633px] md:mx-auto md:text-[50px]">
              Caring for children with special needs
            </h1>
            <div className="mt-7 flex flex-col md:flex-row gap-6 pb-44 justify-center items-center">
              <Link href="/about">
                <Button className={`bg-primary  `}>About Us</Button>
              </Link>

              <Button className={`bg-secondary`} onClick={handleVolunteerClick}>
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats and Call to Action Section */}
      <section className="bg-white py-8 md:py-16 relative">
        <div className="container mx-auto px-[30px] md:px-[100px] lg:px-36 grid relative md:h-[188px] -top-36 grid-cols-1 lg:grid-cols-3 text-center lg:text-start">
          <div className=" bg-accent-green text-white p-6 shadow-lg">
            <h2 className="text-2xl font-bold">Served Over</h2>
            <p className="text-4xl font-bold mt-4">200+</p>
            <p className="mt-2">Children In Nigeria</p>
          </div>
          <div className="bg-accent-green-2 text-black p-6 shadow-lg">
            <h2 className="text-xl font-bold">Donate Money</h2>
            <p className="mt-4 mb-2 w-[218px] mx-auto lg:mx-0">
              Support our mission to bring hope and change lives through your
              generous donations.
            </p>
            <Button  onClick={handleDonateClick}
              className={` shadow-dark lg:text-lg xl:text-xl bg-white font-light hover:bg-opacity-70 `}
            >
              Donate Now
            </Button>
          </div>
          <div className="bg-primary text-black p-6 shadow-lg ">
            <h2 className="text-xl font-bold">Be a Volunteer</h2>
            <p className="mt-4 mb-2 w-[218px] mx-auto lg:mx-0">
              Make a difference today! Join us as a volunteer and impact lives
              positively.
            </p>
            <Button
              onClick={handleVolunteerClick}
              className={` shadow-dark lg:text-lg xl:text-xl font-light bg-white hover:bg-opacity-70 `}
            >
              Be A Volunteer
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}

      <section className=" md:mt-36 lg:mt-0 px-8 md:px-[100px] lg:px-36 ">
        <div className="container relative mx-auto px-4 md:px-6 grid gap-20 md:gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 text-center md:pt-36 lg:pt-0 lg:-top-20">
          <div className="grid items-center justify-center">
            <Image
              src={donate}
              alt="Make Donation"
              className="place-self-center"
              width={50}
              height={50}
            />
            <h3 className="mt-4 text-lg font-bold">Make Donation</h3>
            <p className="mt-2 text-gray-600">
              Your support can change lives. Make a donation today to help us
              continue making a difference together!
            </p>
          </div>
          <div className="grid items-center justify-center">
            <Image
              src={volunteer}
              alt="Become A Volunteer"
              className="place-self-center"
              width={50}
              height={50}
            />
            <h3 className="mt-4 text-lg font-bold">Become A Volunteer</h3>
            <p className="mt-2 text-gray-600">
              Join our team of dedicated volunteers and make a lasting impact in
              the lives of those in need.
            </p>
          </div>
          <div className="grid items-center justify-center">
            <Image
              src={sponsor}
              alt="Sponsorship"
              className="place-self-center"
              width={50}
              height={50}
            />
            <h3 className="mt-4 text-lg font-bold">Sponsorship</h3>
            <p className="mt-2 text-gray-600 ">
              Support our mission through sponsorship, empowering lives and
              creating lasting change in communities in need.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <HomeAbout />

      {/* Donation Section */}
      <section
        id="donate-button"
        className="relative banner2 text-white text-center py-20 xl:pt-56 xl:pb-32 "
      >
        <div className="absolute inset-0 bg-black opacity-60 -z-20"></div>
        <div className="relative z-10 space-y-4 px-10">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Make A Donation Today
          </h2>
          <p>You can support a child today.</p>
          <Button onClick={handleDonateClick} className={`bg-secondary hover:bg-opacity-50`}>Donate</Button>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        className="space-y-4 pt-36 md:pt-28 pb-16 md:pb-20"
        id="gallery-section"
      >
        <div className=" flex gap-4 items-center px-8 md:px-[73px] ">
          <div className="w-16 h-0 border-secondary border-2"></div>
          <h2 className="md:text-xl md:font-bold font-medium">Our Gallery</h2>
        </div>

        <p className="text-3xl md:text-5xl px-8 md:px-[73px] pb-11 ">
          Take a look at our gallery
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:px-[57px] xl:px-0 lg:grid-cols-3 xl:grid-cols-4 px-4 gap-0 justify-center items-center">
          {galleryImages.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Gallery Image ${index + 1}`}
              width={360}
              height={230}
              className="mx-auto md:mx-0"
            />
          ))}
        </div>
      </section>
      <section className="px-4 py-8 md:px-14 lg:px-36">
        <div className=" flex gap-4 items-center justify-end mb-8">
          <h2 className="md:text-xl md:font-bold font-medium">Events</h2>
          <div className="w-16 h-0 border-secondary border-2"></div>
        </div>
        <EventCarousel head={"Our Latest Events"} events={events} />
      </section>

      {/* Volunteer Section */}
      <section className="relative banner3 text-white mt-16 text-center py-20 xl:pt-56 xl:pb-32 ">
        <div className="absolute inset-0 bg-black opacity-70 -z-20"></div>
        <div className="relative z-10 space-y-4 px-10">
          <h2 className="text-3xl lg:text-5xl font-bold">Want to Volunteer?</h2>
          <p>
            Join Our team of dedicated Volunteers! Are you passionate about our
            cause? Do you want to make a positive impact o your community? We’re
            always looking for volunteers to help us
          </p>
          <Button onClick={handleVolunteerClick} className={`bg-primary hover:bg-opacity-50`}>
            Volunteer
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
