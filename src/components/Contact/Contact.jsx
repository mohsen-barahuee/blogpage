import React from "react";
import Typewriter from "typewriter-effect";

export default function Contact() {
  return (
    <div className="w-full bg-BG2" data-aos="fade-up">
      <div className="container py-16 sm:py-8 md:py-16">
        <div className="hidden md:flex justify-center">
          <svg>
            <use href="#mouse-icon"></use>
          </svg>
        </div>
        <div className="flex flex-col items-center">
          <span className="inline-block font-UbuntoRegular text-Brand1 text-[64px] skill-title border-b-2 border-Brand1 relative ">
            Contact
            <div className=" absolute flex justify-between w-full -bottom-2 ">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </span>
          <span className="font-plexRegular mt-4 mb-16 text-white block w-auto text-center">
            I’m currently available for freelance work
          </span>
        </div>
        <div className="flex justify-center text-Brand1 font-plexRegular  sm:font-plexMedium ">
          <span className=" text-base sm:text-[32px] leading-8 sm:leading-[42px] border-2 border-Brand1 py-4 px-10 rounded-tl-[32px] rounded-br-[32px]">
            <Typewriter
              options={{
                strings: ["Send Me A Message"],
                deleteSpeed: 100,
                delay: 50,
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
        <div className="flex justify-between gap-x-6 sm:gap-x-16 md:gap-x-32 mt-16 md:px-[306px]">
          <div className="flex flex-col w-full gap-y-6">
            <label
              htmlFor="input"
              className="font-UbuntoLight text-Brand1 leading-[18px]"
            >
              Your name *
            </label>
            <input
              type="text"
              className="bg-BG2 border-b border-b-Brand2 w-full pb-2 text-white outline-none"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col w-full gap-y-6">
            <label
              htmlFor="input"
              className="font-UbuntoLight text-Brand1 leading-[18px]"
            >
              Your email *
            </label>
            <input
              type="text"
              className="bg-BG2 border-b border-b-Brand2 w-full pb-2 text-white outline-none"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-6 sm:gap-x-16 md:gap-x-32 mt-16 md:px-[306px]">
          <label
            htmlFor="input"
            className="font-UbuntoLight text-Brand1 leading-[18px]"
          >
            Your message *
          </label>
          <input
            type="text"
            className="bg-BG2 border-b border-b-Brand2 w-full pb-2 text-white outline-none"
            placeholder="Enter your needs"
          />
        </div>
        <div className="flex justify-center mt-16">
          <a
            href="#"
            className="flex gap-x-4 items-center text-BG1 font-UbuntoRegular text-2xl bg-Brand1 py-4 px-8 rounded-[32px]"
          >
            Send Message
            <svg className="w-6 h-6">
              <use href="#send-icon"></use>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
