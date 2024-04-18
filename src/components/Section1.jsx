import React from 'react';
import icon1 from "../assets/icon 1.png";
import icon2 from "../assets/icon 2.png";
import icon3 from "../assets/icon 3.png";

const Section1 = () => {
    const cards = [
        {
            icon: icon1,
            heading: "Dive Computers",
            paragraph: "Essential metrics at your fingertips, streamlining your dive experience for safety and convenience underwater. Dive confidently with real-time data."
        },
        {
            icon: icon2,
            heading: "Cost Effective",
            paragraph: "Packed with essential features, it offers affordability without compromising on quality, making it perfect for budget-conscious divers."
        },
        {
            icon: icon3,
            heading: "Logbook App Synced",
            paragraph: "Effortlessly sync your dive logbook and photos through your watch, capturing and recording every underwater adventure with ease and precision."
        }
    ];

    return (
        <section id="benifits" className='flex justify-center items-center xl:px-[150px]  mt-24'>
        <div className='flex flex-wrap justify-center  gap-8  '>
            {cards.map((card, index) => (
                <div key={index} className='w-[367px] xl:h-[425px] flex flex-col items-center gap-[20px] '>
                    <img src={card.icon} alt="" />
                    <h1 className='text-[24px] leading-[28.8px] MontserratBold text-[#05084D] text-center'>{card.heading}</h1>
                    <p className='MontserratRegular text-[16px] leading-[30px] text-center text-[#05084D] '>{card.paragraph}</p>
                </div>
            ))}
        </div>
    </section>
    
    );
};

export default Section1;
