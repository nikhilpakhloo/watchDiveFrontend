import React, { useState } from "react";

import PlusIcon from "../assets/plusIcon.svg";
import minusIcon from "../assets/minusIcon.svg";

const Section14 = () => {
  const data = [
    {
      question: "How does the watch handle low-light conditions underwater?",
      answer:
        "The dive watch is designed with advanced luminous markers or backlighting, enhancing visibility and ensuring readability in low-light or dark underwater conditions. This feature is essential for divers who need to track time accurately during their underwater adventures, providing safety and reliability in all diving situations.",
    },
    {
      question: "How does the watch handle low-light conditions underwater?",
      answer:
        "Yes, the dive watch comes with an adjustable strap, designed to comfortably fit various wrist sizes, ensuring a secure fit for all divers.",
    },
    {
      question: "Is the strap adjustable for different wrist sizes?",
      answer:
        "Yes, our dive watch includes a comprehensive warranty, offering peace of mind with protection against defects and ensuring reliable performance under the sea.",
    },
    {
      question: "Does the watch come with a warranty?",
      answer:
        "Yes, the dive watch is designed with a user-replaceable battery, allowing for easy maintenance and extended use without professional assistance.",
    },
    {
      question: "Can I replace the watch battery myself?",
      answer:
        "The dive watch is designed with advanced luminous markers or backlighting, enhancing visibility and ensuring readability in low-light or dark underwater conditions. This feature is essential for divers who need to track time accurately during their underwater adventures, providing safety and reliability in all diving situations.",
    },
  ];
  const [expanded, setExpanded] = useState(Array(data.length).fill(false));

  const handleChange = (index) => () => {
    setExpanded((prevExpanded) =>
      prevExpanded.map((item, idx) => (idx === index ? !item : false))
    );
  };

  return (
    <section className="mt-24 w-full md:px-[150px] px-10">
      <h1 className="JosefinSansBold text-[50px] leading-[60px] text-[#0F1D46] text-center">
        Peoples Always <br />
        <span className="text-[#00ACE5]">Frequently Asked Question</span>
      </h1>

      {/* Accordian */}
      {data.map((item, index) => (
        <div key={index} className="flex flex-col mt-6 gap-[35px] cursor-pointer "            onClick={handleChange(index)}>
          <div className="md:h-[86px] bg-[#27A6E2] flex items-center justify-between ">
            <h1 className=" ml-[70px] MontserratBold text-[22px] leading-[35px] text-white">
              {item.question}{" "}
            </h1>
            <img
              src={expanded[index] ? minusIcon : PlusIcon}
              alt=""
              className="cursor-pointer mr-6"
   
            />
          </div>
          {expanded[index] && (
            <div className="flex justify-around ">
              <p className="ml-[70px] mr-6 text-[#0F1D46] text-[16px] MontserratRegular leading-[30px]">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Section14;
