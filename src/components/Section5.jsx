import React from "react";
import DeepstopIcon from "../assets/Deepstop.svg";
import SafetyStopIcon from "../assets/Stop.svg";
import FastUpIcon from "../assets/FastUp.svg";
import DecoIcon from "../assets/Deco.svg";
import OxygenToxicityIcon from "../assets/OxygenToxicity.svg";
import CriticalDepthIcon from "../assets/CriticalDepth.svg";

const Section5 = () => {
  const data = [
    {
      icon: DeepstopIcon,
      tag: "Deep Stop",
    },
    {
      icon: SafetyStopIcon,
      tag: "Safety Stop",
    },
    {
      icon: FastUpIcon,
      tag: "Fast-Up",
    },
    {
      icon: DecoIcon,
      tag: "Deco",
    },
    {
      icon: OxygenToxicityIcon,
      tag: "Oxygen Toxicity",
    },
    {
      icon: CriticalDepthIcon,
      tag: "Critical Depth",
    },
  ];
  return (
    <section className="xl:mt-24 md:mt-96  mt-12 w-full">
      <h1 className="JosefinSansBold text-[#0F1D46] text-[50px] leading-[60px] text-center">
        Safety <span className="text-[#26A8E2]">Alerts</span>
      </h1>
      <div className="flex gap-2 xl:px-12 px-10 flex-wrap justify-center">
        {data.map((item,index)=>(
             <div className="flex flex-col px-10 items-center mt-12 gap-5 ">
             <img src={item.icon} alt="" className="" width={140} height={140}/>
             <p className="text-[#0F1D46] MontserratBold text-[24px]  text-center w-[80px]">{item.tag}</p>
           </div>


        ))}

     
     
      </div>
    </section>
  );
};

export default Section5;
