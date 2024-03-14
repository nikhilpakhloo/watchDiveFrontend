import React from "react";
import iphone from "../assets/phone slide screen.gif"
import circle from "../assets/circle.png"
import watchmini from "../assets/watchmini.png"
const Section8 = () => {
  return (
    <section className=" w-full md:px-20 xl:flex gap-10 mt-24">
      <div className=" xl:w-1/2 flex flex-col gap-[50px] justify-center">
        <h1 className="JosefinSansBold text-[#0F1D46] text-[50px] leading-[60px] xl:text-start text-center ">
          Use Any <span className="text-[#26A8E2]">Smartphone</span>
        </h1>
        <p className="text-[#05084D] MontserratRegular text-[16px] xl:text-start text-center md:px-0 px-10">
          Dive into seamless connectivity with DIVEROID's cutting-edge dive
          watch synchronization. Our innovative technology allows you to
          effortlessly sync your dive data, including dive logs and photos, with
          any Android or iOS mobile application. Whether you're exploring the
          depths of the ocean or capturing  stunning underwater moments, our dive
          watch ensures that your experiences <br /> are seamlessly integrated into
          your mobile device for easy access and sharing. With DIVEROID, you can
          trust that your diving adventures <br /> are not only recorded with precision
          but also effortlessly <br /> shared with friends and family, enhancing the
          joy of <br /> underwater exploration like never before.
        </p>
      </div>
      <div className="xl:w-1/2 flex items-center justify-center flex-shrink-0 ">
       

        <img src={iphone} alt="" />
      </div>
    </section>
  );
};

export default Section8;
