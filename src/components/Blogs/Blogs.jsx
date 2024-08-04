import React from "react";
import { Link } from "react-router-dom";

export default function Blogs() {
  return (
    <div className="w-full " data-aos="fade-down">
      <div className="container pt-16 py-16 md:py-[100px]" data-aos="fade-down">
        <div className="hidden md:flex justify-center">
          <svg>
            <use href="#mouse-icon"></use>
          </svg>
        </div>
        <div className="flex flex-col items-center" data-aos="fade-down">
          <span className="inline-block font-UbuntoRegular text-Brand1 text-[64px] skill-title border-b-2 border-Brand1 relative ">
            Blogs
            <div className=" absolute flex justify-between w-full -bottom-2 ">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </span>
          <span className="font-plexRegular mt-4 mb-16 text-white block w-auto text-center">
            My thoughts on technology and business, welcome to subscribe{" "}
          </span>
        </div>

        <div className="md:px-[306px]  " data-aos="fade-down">
          <div className="border-t border-b border-white py-8 flex flex-wrap sm:flex-nowrap justify-center">
            <div className="mb-8 sm:mb-0">
              <img
                src="./images/home/blogspic.png"
                alt=""
                className="w-[120px]  sm:w-auto"
              />
            </div>
            <div className="flex flex-col gap-y-6 sm:ml-16">
              <h1 className="font-UbuntoRegular text-Brand1 text-[32px]">
                What does it take to become a web developer?
              </h1>
              <p className="font-UbuntoLight text-white">
                Web development, also known as website development, encompasses
                a variety of tasks and processes involved in creating websites
                for the internet…
              </p>
              <a href="#" className="font-UbuntoLight text-Brand1 ">
                Read More
              </a>
              <div className="text-white flex flex-wrap gap-y-4 sm:gap-y-0 gap-x-2 md:gap-x-6 text-sm cursor-default">
                <span className="bg-Grey font-UbuntoLight px-2 py-1 rounded-full">
                  Web Developer
                </span>
                <div className="flex gap-x-2 items-center">
                  <h1 className="font-UbuntoMedium">Text </h1>
                  <span>Sinan</span>
                  <h1 className="font-UbuntoMedium">Data</h1>
                  <span>10.oct2023</span>
                  <h1 className="font-UbuntoMedium">Read </h1>
                  <span>1 Min</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="pt-16 flex justify-center gap-8 font-UbuntoRegular text-base leading-6 child:rounded-[32px] "
          data-aos="fade-down"
        >
          <a href="#" className="text-BG1 bg-Brand1 py-4 px-8">
            <Link to={"/blog"}>View More</Link>
          </a>

          <a href="#" className="text-white border border-Brand1 py-4 px-8">
            <Link to={"/blog"}> Subscribe</Link>
          </a>
        </div>
      </div>
    </div>
  );
}
