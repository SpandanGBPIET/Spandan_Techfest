import React, { useEffect } from "react";

import '../../data/fonts.css'
import Aos from "aos";
import "aos/dist/aos.css";




import { Link, useNavigate } from "react-router-dom";

const Showcase = ({ data, transition }) => {
    useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);
  const navigate = useNavigate();
  
  return (
    <div className="mt-10 sm:grid sm:grid-cols-2 gap-x-5 lg:grid-cols-3 lg:gap-10 ">
      
      {data.map((events) => (
        <div
          data-aos="fade-up"
          key={events.id}
          className="mt-4 rounded-3xl bg-[#D9D9D91A] 
          "
        >
          <div className="w-full duration-200 ease-out scale-90 hover:scale-100">
            <img
              className="object-cover w-full h-full rounded-3xl "
              src={events.image}
              loading="lazy"
            />
          </div>
          <div className="flex flex-col px-4 pb-1 text-white text-start ">
            <h2
              className="pb-1 font-base text-xl md:text-4xl font-semibold font-['inknut_Antiqua'] text-center"
              style={{ fontFamily: "Syne" }}
            >
              {events.name}
            </h2>
            {/* <p className="my-2 font-mono text-base md:text-xl">{events.desc}</p> */}
            <div className="grow-[10]"></div>
            <div className="flex py-2 justify-evenly">
              <div className="relative flex items-center justify-center px-2 py-0 overflow-hidden text-xl font-normal leading-none bg-white rounded-md cursor-pointer h-11 w-max text-slate-700  before:absolute before:left-0 before:w-full before:h-full before:bg-yellow-400 before:z-[0] before:translate-x-[-100%] hover:before:translate-x-[0] before:transition-all before:duration-300">
                <button
                  onClick={() =>
                    navigate(`/Events/${events.id}`, {
                      state: { events: events },
                    })
                  }
                  className="relative z-[1] transition-all duration-500"
                  style={{ fontFamily: "spacemono" }}
                >
                  Details
                </button>
              </div>
              <div className="relative flex items-center justify-center px-2 py-0 overflow-hidden text-xl font-normal leading-none bg-white rounded-md cursor-pointer h-11 w-max text-slate-700  before:absolute before:left-0 before:w-full before:h-full before:bg-yellow-400 before:z-[0] before:translate-x-[-100%] hover:before:translate-x-[0] before:transition-all before:duration-300">
                <Link
                  to={events.register}
                  className="relative z-[1] transition-all duration-500 "
                  style={{ fontFamily: "spacemono" }}
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Showcase;
