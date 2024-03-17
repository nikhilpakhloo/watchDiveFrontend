import React from 'react'
import bronze from "../assets/Bronze.png"
import Gold from "../assets/Gold.png"
import Silver from "../assets/Silver.png"
const Section17 = () => {

    const data = [

        {
            icon:Gold,
            name:"Wilan Roads",
            points:5032
        },
        {
            icon:Silver,
            name:"Josef Boley",
            points:4042
        },
        {
            icon:bronze,
            name:"Billy Jomps",
            points:3250
        },
    ]
  return (
    <section className="mt-24 w-full md:px-[150px] px-10">
          <h1 className="JosefinSansBold text-[50px] leading-[60px] text-[#0F1D46] text-center">
          Dive Into Success <br />
        <span className="text-[#00ACE5]">Top Referral Champions</span>


      
      </h1>
      <p className=' text-[16px] leading-[30px] md:text-center MontserratRegular'>
        Welcome to <span className='text-[#00ACE5] MontserratBold'>Our Dive Watch Referral Program</span>  is not just about earning; it's about leading, inspiring, and showcasing the prowess of our top ambassadors. Meet the champions, the connoisseurs of the deep blue, who have mastered the art of referral and are setting the bar higher for dive watch enthusiasts around the globe.
        </p>
<div className='flex gap-10 w-full justify-center mt-6'>
        {data.map((item, index)=>(
              <div key={index} className='flex items-center gap-[12px] flex-wrap justify-center'>
              <img src={item.icon} alt="" />
              <div className='flex flex-col gap-[16px] items-center'>
                  <h1 className='MontserratBold text-[18px] leading-[21px] text-[#00ACE5] text-center'>{item.name}</h1>
                  <p className='text-[#898A8D] MontserratRegular text-[18px] text-center'> <span className='MontserratBold text-[16px] leading-[21px] text-[#00ACE5]'>{item.points}</span> Points</p>
  
              </div>
  
          </div>
          
  



        ))}
</div>

      



        </section>

  )
}

export default Section17