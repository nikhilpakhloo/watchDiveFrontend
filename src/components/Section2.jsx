import React from "react";
import gif from "../assets/GIF/01 Dive computer.gif"

const Section2 = () => {
  return (
    <section  className=" w-full   flex flex-col items-center gap-[50px] ] py-5  justify-center ">
      <h1 className="JosefinSansBold md:text-[50px] text-[30px] text-center leading-[60px] text-[#0F1D46] xl:px-0 ">
        Stay Ahead With Our Updated <br />{" "}
        <span className="text-[#27A6E2]">Dive Computer</span>
        Watch
      </h1>
      <div className="w-full xl:flex  justify-between gap-20 xl:px-[150px] px-10">
        <div className="xl:w-1/2   flex flex-shrink-0 ">
            <img src={gif} alt="" className=" rounded-tr-[30px] rounded-br-[30px] " />
        </div>
        <div className="xl:w-1/2  flex  flex-col gap-[20px]  xl:text-start text-center mt-4 ">
           
            <p className="text-[#05084D] text-[16px] MontserratRegular ">
            Buying a diving computer, compass, and separate  equipment for your dive can get pricey over time and not  to mention they are very bulky and can weigh you down while diving. <span className="text-[#26A8E2] MontserratBold">At DIVEROID,</span> we thought of bringing the  convenience of having a smartphone always on hand, with the technology of monitoring your dive. Our product  includes a dive computer, compass, and logbook all in the  palm of your hand. 
            </p>
            <div className="xl:text-start text-center">
            <button className='bg-[#27A6E2] w-[263px] h-[65px] rounded-md'>
             <p className='text-[22 px] JosefinSansBold leading-[28.8px] text-white '> Dive into Details</p>

            </button>
            </div>

         

          
        </div>
      </div>
    </section>
  );
};

export default Section2;
