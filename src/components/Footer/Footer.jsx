import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="w-full py-6 px-[70px] md:px-32 border-t border-t-Grey bg-BG2">
      <div className="flex flex-wrap gap-y-6 md:gap-y-0 justify-center md:justify-between text-white font-UbuntoLight items-center">
        <div className="flex gap-y-6 flex-wrap  sm:gap-x-11 lg:gap-x-[261px] order-2 md:order-1">
          <div className="text-center xs:w-80 sm:w-auto ">
            <span className=" leading-[18px] ">
              © 2023 SinanTokmak. All rights reserved.
            </span>
          </div>
          <div className="flex gap-x-8 mx-auto ">
            <div>
              <span>Privacy Policy</span>
            </div>
            <div>
              <span>Terms & Conditions</span>
            </div>
          </div>
        </div>

        <div className="flex  items-center gap-x-8 order-1">
          <div className="bg-Brand2 p-2 rounded-full">
            <a href="#">
              <svg className="w-8 h-8 text-BG1">
                <use href="#instageram"></use>
              </svg>
            </a>
          </div>
          <div className="bg-Brand2 p-2 rounded-full">
            <a href="#">
              <svg className="w-8 h-8 text-BG1">
                <use href="#discord"></use>
              </svg>
            </a>
          </div>
          <div className="bg-Brand2 p-2 rounded-full">
            <a href="#">
              <svg className="w-8 h-8 text-BG1">
                <use href="#github"></use>
              </svg>
            </a>
          </div>
        </div>
        <div className="flex gap-x-1 order-3">
          <span>Design By</span>
          <span className="text-Brand1">JohannLeon</span>
        </div>
      </div>
    </div>
  );
}
