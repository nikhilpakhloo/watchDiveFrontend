import React from "react";
// import gif from "../assets/GIF/02 Lodbook.gif";
import gif from "../assets/GIF/logbook.gif";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";

const Section4 = () => {
  return (
    <section className=" w-full mt-24 xl:flex gap-[40px] lg:relative ">
      <div className=" flex-1 ">
        <img src={gif} alt="" className="h-full w-full object-cover  -translate-x-36 overflow-visible" />
      </div>
      <div className=" xl:w-[65%] flex flex-col  gap-[45px]  xl:px-20  px-10">
        <h1 className="text-[#0F1D46] JosefinSansBold text-[50px] leading-[65px] xl:text-start text-center">
          Photo-Synced <span className="text-[#26A8E2]">Logbook</span>{" "}
        </h1>
        <p className="text-[#05084D] text-[16px] leading-[35px] xl:text-start text-center">
          Experience the ultimate convenience and innovation with DIVEROID's
          dive watch and mobile app integration. Capture and sync your
          underwater memories seamlessly with our dive watch and mobile app
          integration. Take photos directly from your wrist while diving, and
          effortlessly sync them to your smartphone for easy access and sharing.
          Our innovative technology ensures that every moment is captured with
          clarity and convenience, preserving your diving experiences for a
          lifetime. With photo sync capabilities, you can focus on exploring the
          depths while knowing that your memories are safely stored and ready to
          be shared with friends and family.
        </p>
        <div className="flex-3 w-auto gap-[30px] pr-20 overflow-hidden overflow-x-auto  lg:absolute xl:relative md:-bottom-72 xl:bottom-0  left-0 ">
          <div className="flex gap-[30px]  hover:-translate-x-full transition-all duration-[2000ms] ease-in-out "> 
          <img
            src={img1}
            alt=""
            className="hover:scale-105 "
          />
          <img src={img2} alt="" className=" hover:scale-105  " />
          <img
            src={img1}
            alt=""
            className="hover:scale-105 "
          />
          <img src={img2} alt="" className=" hover:scale-105  " />
          <img
            src={img1}
            alt=""
            className="hover:scale-105 "
          />
          <img src={img2} alt="" className=" hover:scale-105  " />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Section4;
