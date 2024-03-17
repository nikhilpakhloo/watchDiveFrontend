import React, { useState, useEffect } from 'react';
import testimonialavatr from '../assets/avatar.png';
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
      review:
        "When I finish the diving course with my students, I used to tell them information such as maximum depth, bottom temperature and more. And when the students want to receive the photos I used to send them through kakaotalk messanger. But now, with DIVEROID , I just share the link, then they have all diving information including photos. It's that convenient. I definitely recommend it to other instructors.",
      name: 'Sameer Narawade',
      company: ' Diveroid',
      designation:' Lead Designer'
    },
    {
      review:
        "When I finish the diving course with my students, I used to tell them information such as maximum depth, bottom temperature and more. And when the students want to receive the photos I used to send them through kakaotalk messanger. But now, with DIVEROID , I just share the link, then they have all diving information including photos. It's that convenient. I definitely recommend it to other instructors.",
      name: 'Nikhil Pakhloo',
      company: ' Diveroid',
      designation:'Developer'

    },
    {
      review:
        "When I finish the diving course with my students, I used to tell them information such as maximum depth, bottom temperature and more. And when the students want to receive the photos I used to send them through kakaotalk messanger. But now, with DIVEROID , I just share the link, then they have all diving information including photos. It's that convenient. I definitely recommend it to other instructors. ",
      name: 'Sandeep Kashyap',
      company: ' Diveroid',
      designation:'Lead Ios Developer'

    },
  ];

  return (
    <section id='reviews' className='mt-24 w-full'>
      <h1 className='JosefinSansBold text-[50px] leading-[60px] text-[#0F1D46] text-center'>
        What People <span className='text-[#00ACE5]'>Say</span>{' '}
      </h1>
      <div className='xl:flex w-full px-20 xl:px-[150px] py-10'>
        <div className='xl:w-1/2 flex w-full justify-center xl:justify-start items-center'>
          <img src={testimonialavatr} alt='' className='rounded-full' />
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
