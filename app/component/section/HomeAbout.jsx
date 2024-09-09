import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/app/component/element/Button'
import {img1} from '@/public/images'

const HomeAbout = () => {
  return (
    <section className="flex flex-col pb-14 md:pb-20 lg:pt-16 mt-[160px] md:mt-[178px] lg:mt-[81px] px-8 md:px-[100px] lg:px-36 lg:flex-row justify-center items-center lg:justify-between space-y-16 md:space-y-24 lg:space-y-0 lg:gap-10 xl:gap-20 lg:bg-[#FFF7DD] ">
      <div className="lg:w-1/2 space-y-4">
        <h2 className="text-3xl font-bold text-center lg:text-left">
          About Us
        </h2>
        <p className="text-gray-600 text-center lg:text-left">
          Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora
        </p>
        <div className="space-y-4 md:space-y-0 md:space-x-2 flex flex-col md:flex-row justify-center items-center lg:justify-start">
            <Link href="/about">    
          <Button className={` bg-secondary hover:bg-opacity-70`}>
            See More
          </Button>
            </Link>
            <Link href="/contact">    
          <Button className={` bg-primary hover:bg-opacity-70`}>
            Contact Us
          </Button>
          </Link>
        </div>
      </div>
      <div className="lg:w-1/2 mt-6 md:mt-0 ">
        <Image
          src={img1}
          alt="About Us"
          // width={500}
          // height={300}
          className=""
          priority
        />
      </div>
    </section>
  );
}

export default HomeAbout