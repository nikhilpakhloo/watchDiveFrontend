import React from "react";
import watch from "../assets/waterwatch.png";
import DiveSimulator from "../assets/DiveSimulator.png";
import pressureResistance from "../assets/PressureResistance.png";
import SealedConstruction from "../assets/SealedConstruction.png";
import banner from "../assets/watch baground png.png";

const Section11 = () => {
  const Data = [
    {
      icon: DiveSimulator,
      h1: "Dive Simulations",
      paragraph:
        "Rigorously tested to withstand underwater pressure without compromise.",
    },
    {
      icon: pressureResistance,
      h1: "Pressure Resistance",
      paragraph:
        "Undergoes simulated dives to ensure flawless performance when you need it.",
    },
    {
      icon: SealedConstruction,
      h1: "Sealed Construction",
      paragraph:
        "Meticulously sealed to keep moisture out under extreme conditions.",
    },
  ];
  return (
    <section className="mt-24 w-full">
      <div className="relative flex flex-col  items-center">
        <img src={banner} alt="" />
        <h1 className="JosefinSansBold text-[50px] leading-[60px] text-[#0F1D46] text-center absolute xl:mt-44 mt-24 ">
          Waterproof <span className="text-[#00ACE5]">Testing</span>{" "}
        </h1>
        <div className=" xl:flex-row md:-mt-96  flex flex-col-reverse">
        <div className="xl:w-1/2 flex md:px-0 px-5 flex-col gap-[58px] items-center ">
          {Data.map((item, index)=>(
             <div key={index} className="md:w-[520px] md:h-[185px] rounded-[30px] px-4 md:px-[28px] py-3 md:py-[46px] shadow-lg flex gap-3 cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-1000 ease-in-out">
             <img src={item.icon} alt="" className="" />
             <div className="flex flex-col gap-[7px] justify-center">
               <h1 className="text-[#0F1D46] text-[24px] MontserratBold">
                {item.h1}
               </h1>
               <p className="text-[#0F1D46] text-[16px] MontserratRegular">
                {item.paragraph}
               </p>
             </div>
           </div>



          ))}
         
        </div>
        <div className=" xl:w-1/2 ">
        <img src={watch} alt="" />
        </div>
        </div>

     
  
      </div>
    </section>
  );
};

export default Section11;
