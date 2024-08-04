import React from "react";
import "./Skills.css";

export default function Skills() {
  return (
    <div className="w-full px-6 sm:px-0 skill-section " data-aos="fade-down">
      <div className=" md:block hidden container pt-32 md:pb-16 relative ">
        <div className="flex justify-center ">
          <svg>
            <use href="#mouse-icon"></use>
          </svg>
        </div>
        <div className="hidden lg:block absolute right-[350px] top-32 ">
          <img src="./images/home/codtag.png" alt="" />
        </div>
      </div>
      <div className="container flex flex-col items-center pt-16 md:pt-0">
        <span className="font-UbuntoRegular text-Brand1 text-[64px] skill-title border-b-2 border-Brand1 relative ">
          Skills
          <div className=" absolute flex justify-between w-full -bottom-2 ">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </span>
        <span className="font-plexRegular mt-4 mb-16 text-white block w-auto text-center">
          I am striving to never stop learning and improving
        </span>
      </div>
      <div className="container  flex flex-col gap-y-8 sm:gap-y-0 sm:flex-row justify-center gap-x-8 md:gap-x-32 child:rounded-lg">
        <div
          className="flex flex-col gap-y-2 items-center px-6 py-4 bg-Brand2 border-l-8 border-[#0C73B8]"
          data-aos="flip-left"
        >
          <svg
            width="30"
            height="28"
            viewBox="0 0 30 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.3333 22.0001H25.6666C27.8758 22.0001 29.6666 20.2092 29.6666 18.0001V4.66675C29.6666 2.45761 27.8758 0.666748 25.6666 0.666748H4.33331C2.12417 0.666748 0.333313 2.45761 0.333313 4.66675V18.0001C0.333313 20.2092 2.12417 22.0001 4.33331 22.0001H13.6666V24.6667H9.66665C8.93027 24.6667 8.33331 25.2637 8.33331 26.0001C8.33331 26.7365 8.93027 27.3334 9.66665 27.3334H20.3333C21.0697 27.3334 21.6666 26.7365 21.6666 26.0001C21.6666 25.2637 21.0697 24.6667 20.3333 24.6667H16.3333V22.0001ZM4.33331 3.33341C3.59693 3.33341 2.99998 3.93037 2.99998 4.66675V18.0001C2.99998 18.7365 3.59693 19.3334 4.33331 19.3334H25.6666C26.403 19.3334 27 18.7365 27 18.0001V4.66675C27 3.93037 26.403 3.33341 25.6666 3.33341H4.33331Z"
              fill="#292F36"
            />
          </svg>
          <span className="text-2xl font-plexRegular">web developement</span>
          <p className="font-plexRegular">HTML·CSS·JS·REACT</p>
        </div>
        <div
          className="flex flex-col items-center px-6 py-4 bg-Brand2 border-l-8 border-[#0C73B8]"
          data-aos="flip-right"
        >
          <svg
            width="22"
            height="30"
            viewBox="0 0 22 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 21.6666C10.2637 21.6666 9.66671 22.2635 9.66671 22.9999C9.66671 23.7363 10.2637 24.3333 11 24.3333H11.0134C11.7498 24.3333 12.3467 23.7363 12.3467 22.9999C12.3467 22.2635 11.7498 21.6666 11.0134 21.6666H11Z"
              fill="#292F36"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.33337 0.333252C2.12423 0.333252 0.333374 2.12411 0.333374 4.33325V25.6666C0.333374 27.8757 2.12423 29.6666 4.33337 29.6666H17.6667C19.8758 29.6666 21.6667 27.8757 21.6667 25.6666V4.33325C21.6667 2.12411 19.8758 0.333252 17.6667 0.333252H4.33337ZM3.00004 4.33325C3.00004 3.59687 3.59699 2.99992 4.33337 2.99992H17.6667C18.4031 2.99992 19 3.59687 19 4.33325V25.6666C19 26.403 18.4031 26.9999 17.6667 26.9999H4.33337C3.59699 26.9999 3.00004 26.403 3.00004 25.6666V4.33325Z"
              fill="#292F36"
            />
          </svg>
          <span className="text-2xl font-plexRegular">App developement</span>
          <p className="font-plexRegular">iOS·Android</p>
        </div>
      </div>
      <div
        className="container flex gap-x-16 sm:gap-[96px] md:gap-x-32 justify-center pt-[90px] pb-16 md:pb-32"
        data-aos="flip-up"
      >
        <div className="flex flex-col md:flex-row gap-x-32 gap-y-8 md:gap-y-0">
          <div className="flex flex-col items-center gap-y-6">
            <img src="./images/home/skills/html.png" alt="" />
            <span className=" uppercase text-3xl text-[#E54F26]">html</span>
          </div>
          <div className="flex flex-col items-center gap-y-6">
            <img src="./images/home/skills/css.png" alt="" />
            <span className=" uppercase text-3xl text-[#0C73B8] ">css</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-x-32 gap-y-8 md:gap-y-0">
          <div className="flex flex-col items-center gap-y-6">
            <img src="./images/home/skills/js.png" alt="" />
            <span className=" uppercase text-3xl text-[#E7A020]">js</span>
          </div>
          <div className="flex flex-col items-center gap-y-6">
            <img src="./images/home/skills/react.png" alt="" />
            <span className=" uppercase text-3xl text-[#28A9E0]">react</span>
          </div>
        </div>
      </div>
    </div>
  );
}
