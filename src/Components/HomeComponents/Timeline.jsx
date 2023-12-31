import React,{useEffect} from "react";
import sphp from "../../Images/homeImages/nphp.jpeg";
import "../../data/fonts.css";
import Aos from "aos";
import "aos/dist/aos.css";
import banner from "../../Images/homeImages/banner.png"

function Timeline() {
    useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);
  const innerHeight = 300;
  return (
    <div className="flex flex-col items-center justify-center ">
      <div data-aos="fade-up ">
        <img style={{ height: innerHeight }} src={sphp} />
      </div>
      <div
        className="my-5 text-6xl text-white lg:text-9xl md:text-8xl sm:text-7xl"
        style={{ fontFamily: "Syne" }}
      >
        <img src={banner} alt="" className="w-[650px] object-cover lg:w-[900px]"/>
      </div>
    </div>
  );
}

export default Timeline;
