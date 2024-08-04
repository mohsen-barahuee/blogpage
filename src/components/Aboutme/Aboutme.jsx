import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Aboutme.css";

export default function Aboutme() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="w-full py-16 md:py-32 about-me" data-aos="fade-down">
      <div className="container ">
        <div className="hidden md:block">
          <svg className=" w-8 h-[140px] mx-auto">
            <use href="#mouse-icon"></use>
          </svg>
        </div>
        <div className="md:mt-32 flex flex-col items-center  md:flex-row  md:justify-between md:pl-[129px] md:pr-[65px] ">
          <div data-aos="fade-up">
            <div className="pb-9 inline-block">
              <div className="bg-BG1 text-white px-10 py-4 border-4 border-Brand1 rounded-tl-[40px] rounded-br-[40px]">
                <h1 className="font-UbuntoRegular text-[32px] text-center  sm:text-[64px] w-[200px] sm:w-auto">
                  About Me
                </h1>
              </div>
            </div>
            <div className="w-full h-auto  sm:w-[620px]  md:w-[880px]  py-6 px-6 sm:px-10 bg-BG1 rounded-[40px]">
              <p className="font-plexRegular text-Brand1 text-sm">{"<p>"}</p>
              <div className="py-4">
                <h1 className="text-Brand1 text-[32px] font-plexMedium">
                  Hello!
                </h1>
                <span className="text-white font-plexRegular">
                  My name is Sinan and I specialize in web developement that
                  utilizes <span className=" text-Brand1">HTML</span>,{" "}
                  <span className=" text-Brand1">CSS</span>,{" "}
                  <span className=" text-Brand1">JS</span>, and{" "}
                  <span className=" text-Brand1">REACT</span> etc.
                </span>
                <br />
                <span className="font-plexRegular text-white">
                  I am a highly motivated individual and eternal optimist
                  dedicated to writing clear, concise, robust code that works.
                  Striving to never stop learning and improving.
                </span>
                <br />
                <span className="font-plexRegular text-white">
                  When I'm not coding, I am{" "}
                  <span className=" text-Brand1">writing bolgs</span>, reading,
                  or picking up some new hands-on art project like{" "}
                  <span className=" text-Brand1">photography</span>.
                </span>
                <br />
                <span className="font-plexRegular text-white">
                  I like to have my perspective and belief systems challenged so
                  that I see the world through new eyes.
                </span>
              </div>
              <p className="font-plexRegular text-Brand1 text-sm">{"</p>"}</p>
            </div>
          </div>

          <div
            className="pt-16 md:pt-0 inline-block sm:hidden lg:inline-block"
            data-aos="fade-up"
          >
            <img
              src="./images/home/Aboutmesection.png"
              className="w-[272px] sm:w-[462px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
