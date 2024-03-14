import React from "react";
import banner from "../assets/banner 2.png";
import like from "../assets/symbol 2.png";
import download from "../assets/symbol 1.png";
import user from "../assets/symbol 4.png";
import func from "../assets/symbol 3.png";
const Section3 = () => {

  const items = [
    {
      icon: download,
      figures: "5000+",
      paragraph: "Downloads App",
    },
    {
      icon: like,
      figures: "18500+",
      paragraph: "Happy Cient",
    },
    {
      icon: func,
      figures: "15+",
      paragraph: "Function",
    },
    {
      icon: user,
      figures: "10000+",
      paragraph: "Active User",
    },
  ];
  return (
    <section  className="mt-24 relative flex justify-center ">
      <img src={banner} alt="" className="w-full h-[534px]  md:h-[384px] xl:h-full " />

      <div className="absolute inset-0 grid grid-cols-2  md:grid-cols-4 w-full place-items-center   text-white ">
        {items.map((data, index) => (
          <div className="xl:w-[210px] xl:h-[204px]  flex flex-col justify-center items-center gap-[25px]">
            <img src={data.icon} alt=""  className='w-[40px] h-[40px]'  width={100} height={100}/>
            <p className="MontserratBold text-[40px]">{data.figures}</p>
            <p className="MontserratRegular text-[16px]">{data.paragraph}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section3;
