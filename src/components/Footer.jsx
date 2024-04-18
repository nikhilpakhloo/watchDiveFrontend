import React from "react";
import banner from "../assets/footer background.png";
import DiveroidIcon from "../assets/Logo.svg";
import fb from "../assets/fb.svg"
import youtube from "../assets/youtube.svg"
import linkedin from "../assets/linkdin.svg"
import twitter from "../assets/twitter.svg"
import skype from "../assets/skype.svg"
import BannerMobile from "../assets/headerMobileBanner.png"
const Footer = () => {
  const isMobile = window.innerWidth <= 450; 


  return (
    <section className="xl:mt-24 w-full relative  ">
      <img src={isMobile?BannerMobile:banner} alt="" className="md:h-full w-full" />
      <div className="absolute inset-y-[20%] md:inset-y-[30%] xl:inset-y-1/2 px-5 md:px-5  xl:px-[150px] md:flex gap-20">
        <div className="flex flex-col gap-[30px] w-[287px] ">
          <img src={DiveroidIcon} alt="" height={30} width={190} />
          <p className="text-white text-[16px] leading-[30px] MontserratRegular">
            Discover the world's most versatile and affordable diving computer
            solution, providing accurate data and real-time monitoring for a
            groundbreaking underwater experience.
          </p>
        </div>
        <div className="flex flex-col gap-[30px] mt-4  ">
          <h1 className="text-white JosefinSansBold text-[22px]">
            Quick Links
          </h1>
          <ul className="text-white text-[16px] leading-[30px] MontserratRegular">
          <a href="#home">
              {" "}
              <li className="cursor-pointer MontserratRegular text-[16px] hover:underline underline-offset-8  decoration-[#27A6E2]  ">
                Home
              </li>
            </a>
            <a href="#benifits">
              {" "}
              <li className="cursor-pointer MontserratRegular text-[16px]  hover:underline underline-offset-8  decoration-[#27A6E2] ">
                Benefits
              </li>
            </a>
            <a href="#Features">
              {" "}
              <li className="cursor-pointer MontserratRegular text-[16px]  hover:underline underline-offset-8  decoration-[#27A6E2]  ">
                Feature
              </li>
            </a>
            <a href="#reviews">
              {" "}
              <li className="cursor-pointer MontserratRegular text-[16px] hover:underline underline-offset-8  decoration-[#27A6E2]  ">
                Review
              </li>
            </a>
            <a href="#pricing">
              {" "}
              <li className="cursor-pointer MontserratRegular text-[16px]  hover:underline underline-offset-8  decoration-[#27A6E2]">
                Pricing
              </li>
            </a>
            <a href="#contact">
              {" "}
              <li className="cursor-pointer MontserratRegular text-[16px]   hover:underline underline-offset-8  decoration-[#27A6E2]  ">
                Contact
              </li>
            </a>
          </ul>
        </div>
        <div className="flex flex-col gap-[30px] w-[185px] mt-4 ">
          <h1 className="text-white JosefinSansBold text-[22px]">Social</h1>
          <p className="text-white text-[16px] leading-[30px] MontserratRegular">
            Data and real-time monitoring for a groundbreaking underwater
            experience.
          </p>

          <div className="flex gap-[10px]">
            <img src={fb} alt=""  className="cursor-pointer"/>
            <img src={skype} alt="" className="cursor-pointer" />
            <img src={twitter} alt=""  className="cursor-pointer"/>
            <img src={youtube} alt=""  className="cursor-pointer"/>
            <img src={linkedin} alt="" className="cursor-pointer" />

          </div>
        </div>

      </div>
      <p className="absolute bottom-2 md:bottom-0 xl:bottom-10 text-white left-5 md:left-10 xl:left-20">© 2024 Diveroid pvt ltd. All Rights Reserved</p>




    </section>
  );
};

export default Footer;
