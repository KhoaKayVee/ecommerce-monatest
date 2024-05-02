import Image from "next/image";
import React from "react";
import Banner from "../../public/ecommerce-banner1.jpg";
import { Button } from "@/components/ui/button";
import Banner2 from "../../public/bau-banner.jpg";
import Banner3 from "../../public/banner-remove.png";

const Hero = () => {
  return (
    <div className="w-full h-screen relative bg-gradient-to-r from-indigo-700 via-indigo-100 to-indigo-400">
      <Image
        className="absolute object-contain w-[520px] right-0 top-[150px] z-20 "
        src={Banner3}
        alt="banner3"
      />
      <div className="absolute w-[250px] h-[250px] right-[230px] top-[150px] bg-indigo-700 rounded-full"></div>
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30">
        <div className=" absolute top-0 w-full h-full flex flex-col justify-center text-start text-white px-[100px] gap-2">
          <h1 className=" text-7xl  font-bold">New Arrivals!</h1>
          <h1 className="text-7xl font-normal">Collections</h1>
          <div className=" flex gap-2 mb-3  font-normal text-7xl">
            For <p className="text-indigo-700 font-bold">EVERYONE</p>
          </div>
        </div>
        <Button className="absolute bottom-[100px] left-[220px] rounded-full px-3 py-3 bg-indigo-600 ">
          Latest Collection
        </Button>
      </div>
    </div>
  );
};

export default Hero;
