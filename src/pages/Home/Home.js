import React, { useEffect } from 'react'
import Typewriter from 'typewriter-effect';
import Aboutme from '../../components/Aboutme/Aboutme.jsx'
import Skills from '../../components/Skills/Skills.jsx';
import Work from '../../components/Works/Work.jsx';
import Blogs from '../../components/Blogs/Blogs.jsx';
import Contact from '../../components/Contact/Contact.jsx';
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
    useEffect(() => {
        Aos.init();
    }, []);


    return (
        <>
            <div className=" container  mt-16 lg:mx-auto md:relative pb-16 md:pb-32" data-aos="fade-down">
                <h1 className=" font-UbuntoRegular hidden md:block text-[117px] text-center text-Brand2  ">
                    <Typewriter
                        options={{
                            strings: ['Developer'],
                            deleteSpeed: 50,
                            delay: 200,
                            autoStart: true,
                            loop: true,

                        }}

                    />
                </h1>
                <div className="hidden lg:block w-16 h-[376px] absolute top-0 -left-14 rounded-full bg-BG2  " data-aos="fade-right">
                    <ul className="text-white h-full flex flex-col justify-around items-center ">
                        <li className="w-10 h-10 hover:bg-white hover:text-black  rounded-full flex items-center justify-center transition-colors cursor-pointer">
                            <svg className=" w-5 h-5 ">
                                <use href="#grid"></use>
                            </svg>
                        </li>
                        <li className="w-10 h-10 hover:bg-white hover:text-black  rounded-full flex items-center justify-center transition-colors cursor-pointer">
                            <svg className=" w-5 h-5 ">
                                <use href="#user"></use>
                            </svg>
                        </li>
                        <li className="w-10 h-10 hover:bg-white hover:text-black  rounded-full flex items-center justify-center transition-colors cursor-pointer">
                            <svg className=" w-5 h-5 ">
                                <use href="#code-icon"></use>
                            </svg>
                        </li>
                        <li className="w-10 h-10 hover:bg-white hover:text-black  rounded-full flex items-center justify-center transition-colors cursor-pointer">
                            <svg className=" w-5 h-5 ">
                                <use href="#pc-icon"></use>
                            </svg>
                        </li>
                        <li className="w-10 h-10 hover:bg-white hover:text-black  rounded-full flex items-center justify-center transition-colors cursor-pointer">
                            <svg className=" w-5 h-5 ">
                                <use href="#edit"></use>
                            </svg>
                        </li>
                        <li className="w-10 h-10 hover:bg-white hover:text-black  rounded-full flex items-center justify-center transition-colors cursor-pointer">
                            <svg className=" w-5 h-5 ">
                                <use href="#mail"></use>
                            </svg>
                        </li>
                    </ul>
                </div>
                <div className=" mt-16  lg:mx-32 flex flex-wrap flex-col lg:flex-row   lg:justify-between md:items-center">
                    <div className=" w-80 h-[520px] flex flex-col items-center mx-auto lg:mx-0
                     box-shadow shadow-Brand1 border-4 border-white rounded-tl-[160px]  rounded-br-[160px] py-9 text-white "
                        data-aos="flip-left" data-aos-duration="1000">
                        <img
                            className="w-24 h-24 bg-contain"
                            src="./images/home/Profile photo.png"
                            alt=""
                        />
                        <h1 className=" font-plexMedium text-[32px] mt-1">Sinan</h1>
                        <p className=" font-plexRegular text-sm">Full-stack developer</p>
                        <div className="mt-8 flex flex-col gap-y-4">
                            <div className="flex items-center gap-x-4">
                                <svg className=" w-3.5 h-3.5 text-Brand1 ">
                                    <use href="#mail"></use>
                                </svg>
                                <span className=" font-plexRegular text-sm">
                                    abdurrahman_sinan@hotmail.com
                                </span>
                            </div>
                            <div className="flex items-center gap-x-4">
                                <svg className=" w-3.5 h-3.5 text-Brand1 ">
                                    <use href="#location"></use>
                                </svg>
                                <span className=" font-plexRegular text-sm">Turkey</span>
                            </div>
                            <div className="flex items-center gap-x-4">
                                <svg className=" w-3.5 h-3.5 text-Brand1 ">
                                    <use href="#bag"></use>
                                </svg>
                                <span className=" font-plexRegular text-sm ">
                                    Full-time / Freelancer
                                </span>
                            </div>
                            <div className="flex items-center gap-x-4">
                                <svg className=" w-3.5 h-3.5 text-Brand1 ">
                                    <use href="#link-icon"></use>
                                </svg>
                                <span className=" font-plexRegular text-sm">
                                    www.sinantokmak.com
                                </span>
                            </div>
                        </div>
                        <div className="flex  justify-start gap-x-4 mt-4 w-full pl-5 child:text-BG1 child:bg-Brand1 child:px-2 child:rounded-full child:font-plexRegular  ">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JS</span>
                            <span>REACT</span>
                        </div>
                        <button className="flex justify-center items-center gap-x-4 mt-8 mr-[69px] ml-6  w-[227px] h-16 bg-white text-BG1 rounded-full ">
                            <span className="font-UbuntoRegular text-xl">Download CV</span>
                            <svg className="w-6 h-6">
                                <use href="#download-icon"></use>
                            </svg>
                        </button>
                    </div>

                    <div className=" mt-16  lg:mt-0 lg:mx-0 w-[328px]  md:w-[648px]  lg:w-[960px]  flex flex-wrap md:flex-col lg:flex-row items-center lg:justify-between">
                        <div  >
                            <p className="font-plexRegular text-sm text-Brand2">{"<h1>"}</p>
                            <div className="font-UbuntoRegular lg:pl-4 text-2xl sm:text-6xl pl-12  text-white">
                                <h1>Hey</h1>
                                <h1>
                                    I’m <span className="text-Brand1">Sinan</span>,
                                </h1>
                                <h1 className=' overflow-hidden line-clamp-2 sm:w-[597px]'>
                                    Full-stack Developer

                                </h1>
                            </div>
                            <span className="font-plexRegular text-sm text-Brand2 hidden lg:block">
                                {"</h1>"}
                            </span>
                            <span className="font-plexRegular text-sm  text-Brand2 block lg:hidden">{"</h1>"}</span>
                            <span className="font-plexRegular text-sm text-Brand2 pt-8 block ">
                                {"<p>"}
                            </span>
                            <div className="pl-6 ">
                                <p className="max-w-[328px] sm:max-w-[697px] font-plexRegular text-white">
                                    I help business grow by crafting amazing web experiences. If
                                    you’re looking for a developer that likes to get stuff done,
                                </p>
                            </div>
                            <span className="font-plexRegular text-sm text-Brand2">
                                {"</p>"}
                            </span>
                            <div className='flex items-center gap-x-4 pl-6 mt-4 font-plexMedium text-[32px] leading-[42px] text-Brand1'>
                                <h1 >Let’s Talk</h1>
                                <svg className='w-6 h-6'>
                                    <use href='#mail'></use>
                                </svg>
                            </div>

                        </div>

                        <div className='flex  flex-col mx-auto lg:mx-0 mt-16 lg:mt-0 justify-around w-[217px] h-[378px] bg-BG2 rounded-[80px]' data-aos="flip-right">
                            <div className='flex gap-x-4 justify-center'>
                                <h1 className='font-plexMedium text-5xl text-Brand1 '>4</h1>
                                <div className='font-plexRegular text-white'>
                                    <p>Programming</p>
                                    <p>Language</p>

                                </div>
                            </div>
                            <div className='flex gap-x-4 justify-center'>
                                <h1 className='font-plexMedium text-5xl text-Brand1 '>6</h1>
                                <div className='font-plexRegular text-white'>
                                    <p>Development</p>
                                    <p>Tools</p>

                                </div>
                            </div>
                            <div className='flex gap-x-4 justify-center'>
                                <h1 className='font-plexMedium text-5xl text-Brand1 '>8</h1>
                                <div className='font-plexRegular text-white'>
                                    <p>Years of</p>
                                    <p>Experience</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Aboutme />
            <Skills />
            <Work />
            <Blogs />
            <Contact />

        </>
    )
}
