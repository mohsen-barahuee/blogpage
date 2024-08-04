import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className=" container  text-white py-6 md:py-16 border-b border-b-Grey  ">
        {/* Header Nav */}
        <nav className="flex justify-between gap-x-5 pr-5 sm:pr-0">
          <div className="flex gap-x-[8px] items-center  ">
            <svg className=" w-[39px] h-5 sm:w-[58px] sm:h-[58px] md:w-[77px] md:h-[42px]  ">
              <use href="#c"></use>
            </svg>
            <h1 className=" font-plexRegular text-base md:font-plexMedium  md:text-[32px] ">
              SinanTokmak
            </h1>
          </div>
          <div className="flex items-center gap-x-4 sm:gap-x-16 md:child:font-plexRegular md:child:text-base ">
            <ul className="flex items-center gap-x-4 sm:gap-x-8 ">
              <li className=" hover:text-Brand1 transition-colors">
                <Link to={"/"}>
                  <a href="#">Home</a>
                </Link>
              </li>
              <li className=" hover:text-Brand1 transition-colors">
                <Link to={"/blog"}>
                  <a href="#">Blogs</a>
                </Link>
              </li>
            </ul>
            <div className=" relative hidden md:block">
              <input
                type="text"
                className=" w-[204px] h-8 rounded-full outline-none text-BG1 "
              />
              <svg className="w-[17px] h-[17px] text-BG1 absolute top-[7.5px] right-[17.5px]">
                <use href="#search"></use>
              </svg>
            </div>
            <svg className="w-5 h-5 md:hidden text-white">
              <use href="#search"></use>
            </svg>
            <ul className=" hidden sm:flex items-center gap-x-8">
              <li>
                <a href="#" className="flex items-center gap-x-2">
                  <svg className=" w-10 h-10 text-Brand1">
                    <use href="#instageram"></use>
                  </svg>
                  <span className="hidden lg:inline-block">Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-x-2">
                  <svg className=" w-10 h-10 text-Brand1">
                    <use href="#discord"></use>
                  </svg>
                  <span className="hidden lg:inline-block">Discord</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-x-2">
                  <svg className=" w-10 h-10 text-Brand1">
                    <use href="#github"></use>
                  </svg>
                  <span className="hidden lg:inline-block">Github</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
