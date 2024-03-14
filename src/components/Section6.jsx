import React from "react";
import YouTube from "react-youtube";
import { Media, Video } from "@vidstack/player-react";
import video from "../assets/video.mp4"
import poster from "../assets/video div.png"

const Section6 = () => {
  const videoId = "jYCsePRODe8";
  const opts = {
    height: "768",
    width: "100%",
    controls: 0,
  };
  return (
    <section className="w-full mt-24 xl:flex xl:flex-row flex-col-reverse  ">
      <div className="xl:w-1/2 xl:px-20 px-10 h-[650px] bg-gradient-to-r from-[#05084D] to-[#1e22a0] flex justify-center flex-col  gap-[40px]">
        <h1 className="text-white JosefinSansBold text-[50px] leading-[60px] xl:text-start text-center">
          Unveiling the Ultimate Adventure with Precision Dive Gear!
        </h1>
        <p className="MontserratRegular text-[16px] text-white text-opacity-60 xl:text-start text-center ">
          Exploring new horizons ignites the soul. Embrace curiosity, seek
          knowledge, and savor the journey. Life's beauty lies in continuous
          discovery.
        </p>
        <div className="flex justify-center xl:justify-start">
          <button className="bg-[#27A6E2] w-[220px] h-[65px] rounded-md">
            <p className="text-[22px] JosefinSansBold leading-[28.8px] text-white ">
              {" "}
              Explore Further{" "}
            </p>
          </button>
        </div>
      </div>

      <div className="xl:w-1/2 md:h-full">
  <Media>
    <Video
      loading="visible"
      poster={poster}
      controls
      preload="true"
      className="w-full h-[650px] md:h-[1000px] xl:h-[650px]"
    >
      <video
        loading="visible"
        poster={poster}
        src={video}
        className="w-full h-full "
        preload="none"
        data-video="0"
        controls
      />
    </Video>
  </Media>
</div>

    </section>
  );
};

export default Section6;
