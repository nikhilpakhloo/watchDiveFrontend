import React from 'react'
import watchIcon from "../assets/watchlogo.svg"
import WaterproofDepthIcon from "../assets/Waterproofdepth.svg"
import ScubaGearIcon from  "../assets/DivingScuba.svg"
import DiveComputerIcon from "../assets/DiveComputer.svg"
import CompassIcon from "../assets/Compass.svg"
import photologbookIcon from "../assets/PhotoLogbook.png"
import LeakIcon from "../assets/LeakPreventionFunction.svg"
const Section7 = () => {
    const Data = [
        {
            icon:watchIcon,
            tag:"Cost Effectiveness"
        },
        {
            icon:WaterproofDepthIcon,
            tag:"Waterproof Depth"
        },
        {
            icon:ScubaGearIcon,
            tag:"Scuba Diving Community"
        },
        {
            icon:DiveComputerIcon,
            tag:"Dive Computer"
        },
        {
            icon:CompassIcon,
            tag:"Compass Function"
        },
        {
            icon:photologbookIcon,
            tag:"Photo-SyncedLogbook"
        },
        {
            icon:LeakIcon,
            tag:"Leak Prevention Function"
        },
    ]
  return (
   <section id='Features' className='w-full mt-24  flex justify-center flex-col items-center'> 
    <h1 className="JosefinSansBold text-[#0F1D46] text-[50px] leading-[60px] text-center">
        Much More  <br />Exclusive <span className="text-[#26A8E2]">Features</span>
      </h1>

      <div className='md:flex md:flex-row flex flex-col gap-10  md:gap-8 md:my-10 md:px-20 md:w-[80%] w-full justify-center items-center md:h-[400px]   md:overflow-hidden md:overflow-x-auto   group '>
        {Data.map((item, index)=>(
               <div key={index} className='cursor-pointer w-[270px] h-[345px] shadow-md flex flex-col items-center justify-around gap-3  flex-shrink-0 md:group-hover:-translate-x-full transition-all duration-[2000ms] '>
               <img src={item.icon} alt="" />
               <p className='MontserratBold text-[24px] text-[#0F1D46] leading-[31.2px] px-10 text-center'>{item.tag}</p>
   
           </div>


        ))}
     </div>


   </section>
  )
}

export default Section7