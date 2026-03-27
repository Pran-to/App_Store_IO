import React from "react";
import img1 from "../assets/fi_16076057.png";
import img2 from "../assets/fi_5977575.png";
import hero from "../assets/hero.png";
const Banner = () => {
  return (
    <div className="text-center space-y-5 mt-5">
      <h1 className="text-5xl font-bold">We Build</h1>
      <h1 className="text-5xl font-bold">
        <span className="text-violet-500">Productive</span> Apps
      </h1>
      <p className="px-10">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting.
        <br />
        Our goal is to turn your ideas into digital experiences that truly make
        an impact.
      </p>
      <div className="flex gap-5 justify-center">
        <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg ">
          <img className="h-5 w-5" src={img1} alt="" />
          Google Play
        </button>
        <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg ">
          <img className="h-5 w-5" src={img2} alt="" />
          App Store
        </button>
      </div>
      <div className="flex justify-center">
        <img className="w-[50%]" src={hero} alt="" />
      </div>
    </div>
  );
};

export default Banner;
