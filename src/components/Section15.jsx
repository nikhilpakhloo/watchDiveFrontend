import React from 'react'
import banner from "../assets/why Diveroid BG.png"
import icon1 from "../assets/icon 25.png"
import icon2 from "../assets/icon 26.png"
import icon3 from "../assets/icon 27.png"
import icon4 from "../assets/icon 28.png"
import bannerMobile from "../assets/whyMobileBanner.png"

const Section15 = () => {
  const isMobile = window.innerWidth <= 450; 

    const data = [
        {icon:icon1,
            tag:"Advanced Dive Metrics",
            desc:"Track crucial real-time data such as depth, time, and temperature for safer dives, providing better insights."
        
        
        
        },
        {icon:icon2,
            tag:"Seamless Data Sync",
            desc:"Easily synchronize dive data with the DIVEROID app for comprehensive analysis and sharing with fellow enthusiasts."
        
        
        
        },
        {icon:icon3,
            tag:"Durable Construction",
            desc:"Built to withstand the rigors of underwater exploration, ensuring reliability in any dive condition."
        
        
        
        },
        {icon:icon4,
            tag:"Aesthetic  Design",
            desc:"Combines functionality with sleek aesthetics, making it a versatile accessory both in and out of the water.   "
        
        
        
        },
    ]
  return (
    <section className="mt-24 w-full relative ">
        <img src={isMobile?bannerMobile:banner} alt="" className='w-full  md:h-[1500px] xl:h-full' />

        <div className='absolute inset-10 '>
        <h1 className="JosefinSansBold md:text-[50px] leading-[60px] text-[#0F1D46] text-center ">
       Why 
        <span className="text-white ml-3">DIVEROID?</span>
      </h1>
      <div className='w-full place-items-center grid md:grid-cols-2 grid-cols-1 xl:grid-cols-4 gap-3 mt-14   px-[150px]'>
        {data.map((item,index)=>(
              <div className='flex flex-col gap-[30px] w-[270px] items-center'>
              <img src={item.icon} alt=""  width={140} height={140}/>
              <h1 className='text-center MontserratBold text-[22px] px-10 text-white'>{item.tag}</h1>
              <p className='text-center text-[16px] MontserratRegular text-white'>{item.desc}</p>
  
          </div>



        ))}
      

      </div>

        </div>
        </section>

  )
}

export default Section15