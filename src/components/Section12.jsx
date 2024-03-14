import React from 'react';
import photo from "../assets/photo1.png";
import icon from "../assets/icon 1.png";
import photo2 from "../assets/photo2.png";
import photo3 from "../assets/photo3.png";
import photo4 from "../assets/photo4.png";
import photo5 from "../assets/photo5.png";





const Data = [
  {
    icon: icon,
    photo:photo,
    Tag: "Freediving Computer",
    p: "Introducing the ultimate freediving computer watch, designed for the purest underwater experience. Track depth, dive time, and recovery with precision. Sleek, durable, and intuitive, it's the essential companion for your breath-hold adventures."
  },
  {
    icon: icon,
    photo:photo2,
    Tag: "Freediving Depth Alarm",
    p: "Discover the cutting-edge Freediving Depth Alarm, your essential underwater guide. Designed for accuracy and reliability, it alerts you at pre-set depths, ensuring safety during your freediving exploration. Compact, durable, and easy to use."
  },
  {
    icon: icon,
    
    photo:photo3,
    Tag: "Convenient Boat Calling",
    p: "Experience hassle-free sailing with Convenient Boat Calling. Our innovative service connects you to nearby boats instantly, ensuring assistance or company is just a call away. Safe, reliable, and user-friendly for every mariner's peace of mind."
  },
  {
    icon: icon,
    
    photo:photo4,
    Tag: "Stopwath for Static Apnea",
    p: "Introducing the specialized Stopwatch for Static Apnea, crafted for breath-hold training. Precision timing meets durability, offering divers a tool to monitor performances and progress. Essential for improving your static apnea techniques safely."
  },
  {
    icon: icon,
    photo:photo5,
    Tag: "Freediving Logbook",
    p: "Explore the depths with our Freediving Logbook, a comprehensive tool for tracking dives, conditions, and progress. Tailored for the avid freediver, it's the perfect companion for recording and reflecting on your underwater journeys."
  },
];

const Section12 = () => {
  return (
    <section className='mt-24 w-full xl:px-[150px] px-10'>
      <h1 className="JosefinSansBold text-[50px] leading-[60px] text-[#0F1D46] text-center">
        Freediving <span className="text-[#00ACE5]">Mode</span>{" "}
      </h1>
      
      {Data.map((item, index) => (
        index % 2 === 0 ? (
          <div className='w-full md:flex mt-14 md:gap-8 items-center' key={index}>
            <div className='md:w-1/2 flex flex-col gap-[46px]'>
              <div className='flex gap-[24px] items-center'>
                <img src={item.icon} alt="" width={95} height={95} />
                <h1 className='text-[#0F1D46] text-[24px] MontserratBold'>{item.Tag}</h1>
              </div>
              <div>
                <p className='text-[#05084D] text-[16px] MontserratRegular'>
                  {item.p}
                </p>
              </div>
            </div>
            <div className='md:w-1/2'>
              <img src={item.photo} alt=""   className='rounded-md ' />
            </div>
          </div>
        ) : (
          <div className='w-full md:flex-row flex flex-col-reverse   mt-14 md:gap-8 items-center' key={index}>
            <div className='md:w-1/2'>
              <img src={item.photo} alt="" className='rounded-md' />
            </div>
            <div className='md:w-1/2 flex flex-col gap-[46px]'>
              <div className='flex gap-[24px] items-center'>
                <img src={item.icon} alt="" width={95} height={95} />
                <h1 className='text-[#0F1D46] text-[24px] MontserratBold'>{item.Tag}</h1>
              </div>
              <div>
                <p className='text-[#05084D] text-[16px] MontserratRegular'>
                  {item.p}
                </p>
              </div>
            </div>
          </div>
        )
      ))}
    </section>
  );
};

export default Section12;
