import React, { useState, useEffect } from 'react';
import profile1 from '../assets/avatar.png';
import profile2 from "../assets/profile 1.png"
import profile3 from "../assets/profie2.png"
import quatation from '../assets/quoteMark.svg';

const Section10 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Data.length);
    }, 6000); // Change comment every 6 seconds

    return () => clearInterval(interval);
  }, []);

  const Data = [
    {
      profile:profile1,
      review:
        "When I finish the diving course with my students, I used to tell them information such as maximum depth, bottom temperature and more. And when the students want to receive the photos I used to send them through kakaotalk messanger. But now, with DIVEROID , I just share the link, then they have all diving information including photos. It's that convenient. I definitely recommend it to other instructors.",
      name: 'Jin Young Joo',
      company: ' Diveroid',
      designation:' Instructor Trainer'
    },
    {
      profile:profile2,

      review:
        "I just got my open water license paying a lot and my instructor recommended me to get dive computer as a first gear. But my dream gear always has been a camera. But I could not spend so much money to get all of them as a beginner and thought about. selecting one of the two for a long time. There I met DIVEROID, way out of my troubles! Even in a way cheaper price.",
      name: 'Jieun Kim',
      company: ' Diver',
      designation:'Open Water'

    },
    {
      profile:profile3,

      review:
        "I manage most of diving tour on the resort. My major work is to lead entire tour with taking photos of customers to share. Obviously, I have taken a lot of time and effort to send the photos and video from camera to laptop. The procedures were too cumbersome for me. But with DIVEROID, I just send a link of logbook that has every information of that diving including photos! ",
      name: 'Chada',
      company: ' Master',
      designation:'Dive'

    },
  ];

  return (
    <section id='reviews' className='mt-24 w-full'>
      <h1 className='JosefinSansBold text-[50px] leading-[60px] text-[#0F1D46] text-center'>
        What People <span className='text-[#00ACE5]'>Say</span>{' '}
      </h1>
      <div className='xl:flex w-full px-10 md:px-[150px] xl:px-[200px] py-10'>
        <div className='xl:w-1/2 flex w-full justify-center xl:justify-start items-center'>
          <img src={Data[currentIndex].profile} alt='' className='rounded-full' />
        </div>
        <div className='xl:w-1/2 flex flex-col gap-[30px] relative'>
          <img
            src={quatation}
            alt=''
            width={50}
            height={50}
            className='absolute -left-16 -top-6'
          />

          <p className='text-[#05084D] text-[16px] leading-[28.8px] MontserratRegular xl:text-start text-center mt-5 '>
            {Data[currentIndex].review}
          </p>
          <div className='flex flex-col xl:justify-start justify-center'>
            <h1 className='text-[#0F1D46] text-[24px] MontserratBold'>{Data[currentIndex].name}</h1>
            <p className='MontserratRegular text-[16px] '>
            {Data[currentIndex].designation} at
              <span className='text-[#27A6E2] MontserratBold'>{Data[currentIndex].company}</span>
            </p>
            <img
              src={quatation}
              alt=''
              width={50}
              height={50}
              className='absolute rotate-180 left-60 '
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section10;
