import React from "react";

export default function Work() {
  return (
    <div className="w-full works-section" data-aos="fade-down">
      <div className=" container  py-16 md:py-32">
        <div className="hidden md:flex justify-center">
          <svg>
            <use href="#mouse-icon"></use>
          </svg>
        </div>
        <div className="flex flex-col items-center">
          <span className="inline-block font-UbuntoRegular text-Brand1 text-[64px] skill-title border-b-2 border-Brand1 relative ">
            Works
            <div className=" absolute flex justify-between w-full -bottom-2 ">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </span>
          <span className="font-plexRegular mt-4 mb-16 text-white block w-auto text-center">
            I had the pleasure of working with these awesome projects
          </span>
        </div>
        <div className="flex justify-center items-center ">
          <div className="bg-BG1 rounded-full p-2 sm:p-4 cursor-pointer ">
            <svg className="w-5 h-5 md:w-10  md:h-10 text-white">
              <use href="#chevron-left"></use>
            </svg>
          </div>
          <div>
            <img
              src="./images/home/Dual-screen.png"
              className="w-[298px] sm:w-[480px] md:w-[649px]"
              alt=""
            />
          </div>
          <div className="bg-BG1 rounded-full p-2 sm:p-4 cursor-pointer">
            <svg className="w-5 h-5 md:w-10  md:h-10 text-white ">
              <use href="#chevron-right"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
