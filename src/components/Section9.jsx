import React from "react";
import banner from "../assets/sale background.png";
import bannerMobile from "../assets/bannerMobileSection9.png"

const Section9 = () => {
  const isMobile = window.innerWidth <= 450; 

  return (
    <section className="mt-24 w-full xl:px-20  px-5 relative justify-center  flex">
      <img src={isMobile?bannerMobile:banner} alt="" className="flex-shrink-0 md:h-full md:w-full "  />
      <div className="absolute flex flex-col xl:gap-[24px] top-24 md:top-8 xl:top-14  md:left-[138px]">
        <h1 className="JosefinSansBold text-[40px] leading-[40px] text-white md:text-start text-center">Dive into our <br /> First Dive Sale</h1>
        <p className="MontserratRegular text-[16px] leading-[30px] text-white md:text-start text-center ">Dive into savings with our first dive sale. <br /> Limited time offer!</p>
        <button className="bg-[#27A6E2] w-[263px] h-[65px] rounded-md md:self-start self-center">
          <p className="md:text-[22px] JosefinSansBold md:leading-[28.8px] text-white ">
            {" "}
            Spread the wave
          </p>
        </button>
      </div>
    </section>
  );
};

export default Section9;
