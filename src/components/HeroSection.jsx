import React, { useState } from "react";
import img from "../assets/Banner.png";

import logo from "../assets/Diverselogo.svg";
import watch1 from "../assets/watch.png";
import watch2 from "../assets/PNG 1000X1000 08.png";
import watch3 from "../assets/PNG 1000X1000 09.png";
import HamburgerIcon from "../assets/hamburgerIcon.svg";
import whiteCloseIcon from "../assets/whiteCloseIcon.svg"

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleHamburger = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div id="home" className="relative   ">
      <img
        src={img}
        alt=""
        className="xl:h-[850px] h-[1200px]  w-full object-cover   "
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(5,8,77,0.6)] via-transparent to-[rgba(5,8,77,0.6)]"></div>

      <header className="flex xl:flex xl:flex-row  md:justify-center  md:flex-col  w-full xl:justify-between   xl:items-center px-5 md:px-20 absolute top-[30px] ">
        <div className="w-auto h-[50px] flex md:justify-center ">
          <img src={logo} alt="" width={200} height={50} />
        </div>
        <div className="md:flex md:justify-center hidden mt-[8px] xl:mt-0">
          <ul className="flex gap-[43px] text-white  z-10 ">
            <a href="#home">
              {" "}
              <li className="cursor-pointer JosefinSansRegular text-[14px] hover:JosefinSansMedium uppercase  hover:underline underline-offset-8  decoration-[#27A6E2]  ">
                Home
              </li>
            </a>
            <a href="#benifits">
              {" "}
              <li className="cursor-pointer JosefinSansRegular text-[14px] hover:JosefinSansMedium uppercase hover:underline underline-offset-8  decoration-[#27A6E2] ">
                Benefits
              </li>
            </a>
            <a href="#Features">
              {" "}
              <li className="cursor-pointer JosefinSansRegular text-[14px] hover:JosefinSansMedium uppercase hover:underline underline-offset-8  decoration-[#27A6E2]  ">
                Feature
              </li>
            </a>
            <a href="#reviews">
              {" "}
              <li className="cursor-pointer JosefinSansRegular text-[14px] hover:JosefinSansMedium uppercase hover:underline underline-offset-8  decoration-[#27A6E2]  ">
                Review
              </li>
            </a>
            <a href="#pricing">
              {" "}
              <li className="cursor-pointer JosefinSansRegular text-[14px] hover:JosefinSansMedium uppercase hover:underline underline-offset-8  decoration-[#27A6E2]">
                Pricing
              </li>
            </a>
            <a href="#contact">
              {" "}
              <li className="cursor-pointer JosefinSansRegular text-[14px] hover:JosefinSansMedium uppercase hover:underline underline-offset-8  decoration-[#27A6E2]  ">
                Contact
              </li>
            </a>
          </ul>
        </div>
        <div className="md:hidden flex justify-end w-full relative   ">
          {!isOpen ?  <img
            src={HamburgerIcon}
            alt="Menu"
            className="cursor-pointer "
            width={28}
            onClick={toggleHamburger}
          />:
        <img
        src={whiteCloseIcon}
        alt="close"
        className="cursor-pointer "
        width={28}
        onClick={toggleHamburger}
        
        />
          
          
          }
        
          {isOpen && (
            <div className=" h-[250px] w-[200px] absolute right-0  z-10 top-10 rounded-md flex" style={{backgroundColor:"rgba(255, 255, 255, .25)"}}>
              <ul className="flex gap-2 text-white flex-col items-center w-full justify-center  ">
                <a href="#home" >
                  {" "}
                  <li className="cursor-pointer JosefinSansRegular text-[14px] hover:JosefinSansMedium uppercase  hover:underline underline-offset-8  decoration-[#27A6E2]  " onClick={()=>(setIsOpen(false))}>
                    Home
                  </li>
                </a>
                <a href="#benifits">
                  {" "}
                  <li className="cursor-pointer JosefinSansRegular text-[14px] hover:JosefinSansMedium uppercase hover:underline underline-offset-8  decoration-[#27A6E2] " onClick={()=>(setIsOpen(false))}>
                    Benefits
                  </li>
                </a>
                <a href="#Features">
                  {" "}
                  <li className="cursor-pointer JosefinSansRegular text-[14px] hover:JosefinSansMedium uppercase hover:underline underline-offset-8  decoration-[#27A6E2]  " onClick={()=>(setIsOpen(false))}>
                    Feature
                  </li>
                </a>
                <a href="#reviews">
                  {" "}
                  <li className="cursor-pointer JosefinSansRegular text-[14px] hover:JosefinSansMedium uppercase hover:underline underline-offset-8  decoration-[#27A6E2]  " onClick={()=>(setIsOpen(false))}>
                    Review
                  </li>
                </a>
                <a href="#pricing">
                  {" "}
                  <li className="cursor-pointer JosefinSansRegular text-[14px] hover:JosefinSansMedium uppercase hover:underline underline-offset-8  decoration-[#27A6E2]" onClick={()=>(setIsOpen(false))}>
                    Pricing
                  </li>
                </a>
                <a href="#contact">
                  {" "}
                  <li className="cursor-pointer JosefinSansRegular text-[14px] hover:JosefinSansMedium uppercase hover:underline underline-offset-8  decoration-[#27A6E2]  " onClick={()=>(setIsOpen(false))}>
                    Contact
                  </li>
                </a>
              </ul>
            </div>
          )}
        </div>
      </header>
      <main className="absolute top-20  xl:top-28 md:px-20 text-white w-full flex-col-reverse   xl:flex-row  xl:flex  flex items-center ">
        <div className="xl:w-1/2 flex flex-col xl:gap-y-[50px] gap-y-[30px] px-10 ">
          <p className="md:text-[50px] text-[40px] text-center xl:text-start JosefinSansBold md:leading-[60px]">
            World's Cheapest, <br /> Most Versatile Dive Computer
          </p>
          <p className="MontserratRegular text-[16px] leading-[30px] xl:text-start text-center">
            Discover the world's most versatile and affordable diving computer{" "}
            <br /> solution, providing accurate data and real-time monitoring
            for a <br /> groundbreaking underwater experience. Dive confidently
            with <br /> unparalleled functionality at an unbeatable price.
          </p>
          <div className="flex w-full justify-center xl:justify-start">
            <a href="https://en.diveroid.com/" target="_blank">
              {" "}
              <button className="bg-[#27A6E2] w-[288px] h-[70px] rounded-md">
                <p className="text-[22px] JosefinSansBold leading-[28.8px] ">
                  {" "}
                  Dive into Details
                </p>
              </button>
            </a>
          </div>
        </div>
        <div className="xl:w-1/2 flex  ">
          <img src={watch1} alt="" className="flex-shrink-0" />
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
