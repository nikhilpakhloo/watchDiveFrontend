import React from 'react'
import ring from "../assets/openedwatch.png"
const Section13 = () => {
    const cards = [
        {
        pieces:"1-100",
        tag:"Join the elite circle of pioneers and receive",
        percentage:"30%",
        discount:"Discount off the retail price of the Dive Watch."
    },
        {
        pieces:"100-500",
        tag:"Be part of the adventurous guild with",
        percentage:"20%",
        discount:"Discount off the retail price of the Dive Watch."
    },
        {
        pieces:"500-2000",
        tag:"Navigate the seas with confidence and receive ",
        percentage:"5%",
        discount:"Discount off the retail price."
    },

]
  return (
   <section id='pricing' className='mt-24 w-full px-10 xl:px-[150px]'>
       <h1 className="JosefinSansBold text-[50px] leading-[60px] text-[#0F1D46] text-center">
       Be the First to Dive Deep with <br />     <span className="text-[#00ACE5]">Diveroid Watch </span>{" "}
      </h1>
      <p className='mt-[24px] text-[#0F1D46] MontserratRegular text-[16px] text-center   '>For a  <span className='text-[#0096C6]'>Kickstarter campaign</span> or a pre-launch website page for dive watch, creating tiered discount sections can effectively incentivize early backers to pledge their support. Here's how you might structure and present these sections to highlight the benefits of early booking and the exclusive discounts available</p>

      <div className='xl:flex xl:flex-row flex-col mt-[24px]  gap-6 xl:items-center '>
        <div className='flex w-full xl:justify-start justify-center'>
            <img src={ring} alt="" />
        </div>
        <div className='md:flex md:flex-row md:gap-4 gap-6 md:justify-center flex flex-col items-center    '>
            {cards.map((card, index)=>(
                  <div key={index} className='w-[270px] h-[420px] flex flex-col justify-evenly shadow-lg rounded-lg items-center px-1'>
                  <p className='text-[#27A6E2] MontserratBold text-[24px] text-center'> {card.pieces}<span className='text-[#DADADA] text-[16px] MontserratRegular'> Pcs</span></p>
                  <p className='MontserratRegular text-[16px] text-[#0F1D46] text-center'>{card.tag}</p>
                  <h1 className='text-[#0F1D46] text-[60px] JosefinSansBold text-center'>{card.percentage}</h1>
                  <p className='MontserratRegular text-[16px] text-[#0F1D46] text-center'>{card.discount}</p>
                 
                <a href="https://en.diveroid.com/" target='_blank'><button className='w-[175px] h-[63px] MontserratBold text-[18px] border border-[#00ABE6] text-center rounded-md hover:bg-[#00ABE6] hover:text-white'>
                      Book now
                  </button></a> 
  
              </div>



            ))}
          

        </div>

        
      </div>
      
       </section>
  )
}

export default Section13