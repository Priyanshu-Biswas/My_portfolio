import React from "react";
import { Link } from "react-router-dom";
import resumepic from "../assets/Resume_hero/resumepic.png"
import Navber from "../Component/Navber"

const About = () => {
    const handleMouseEnter = (e) => {
        e.currentTarget.style.transform = "scale(1.05)";
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.transform = "scale(1)";
    };

    return (
        <div className="w-full h-full bg-[#37363c]">
            <div className="bg-gray-900 text-white overflow-x-hidden overflow-y-auto font-[Poppins] max-w-7xl mx-auto">

                <Navber />

                {/* Main Container */}
                <div className="w-full min-h-screen relative 
                flex flex-col sm:flex-col md:flex-row items-center justify-center ">

                    {/* RIGHT BAR */}
                    <div className="absolute right-0 top-0 h-full w-[80px] sm:w-[100px] md:w-[120px] lg:w-[150px] 
          bg-[#575757] z-0"></div>

                    {/* BIG TEXT */}
                    <div className="absolute left-4 sm:left-8 md:left-12 top-16 sm:top-20 md:top-24 
          text-[80px] sm:text-[120px] md:text-[180px] lg:text-[220px] 
          font-bold text-white/10 leading-none z-0">
                        ABOUT ME
                    </div>

                    {/* HERO IMAGE */}
                    <div className="
          z-20 md:z-0 
          order-1 sm:order-1 md:order-none
          mt-16 sm:mt-20 md:mt-0 
          mb-[-24px] md:mb-0
          flex justify-center w-full md:w-auto md:absolute md:bottom-0">

                        <img
                            src={resumepic}
                            alt="resume"
                            className="relative w-[560px] sm:w-[320px] md:w-[380px] lg:w-[420px] aspect-[3/4] object-cover"
                        />
                    </div>

                    {/* RIGHT PANEL */}
                    <div className="glass 
                    order-2 md:order-none
                    w-[90%] sm:w-[80%] md:w-[300px] lg:w-[350px]
                    mt-10 md:mt-0
                    md:absolute md:right-0 !md:top-1/2 !md:translate-y-[-50%]
                    p-5 sm:p-6 rounded-2xl md:rounded-l-3xl z-10 mb-4">

                        <div className="mb-5">
                            <p className="text-xs text-gray-400 tracking-widest uppercase">
                                About Me
                            </p>
                            <h3 className="text-xl sm:text-2xl font-semibold text-white leading-tight">
                                Personal Info
                            </h3>
                            <div className="w-10 h-[2px] bg-orange-500 mt-2 rounded-full"></div>

                            <p className="text-xs sm:text-sm text-gray-300 mt-3 leading-relaxed">
                                Passionate frontend developer focused on building clean, scalable, and user-friendly interfaces with
                                modern design principles.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 text-sm">

                            <div className="flex justify-between items-center border-b border-white/10 pb-2">
                                <p className="text-gray-400 text-xs">Name</p>
                                <p className="text-white font-medium">Priyanshu Biswas</p>
                            </div>

                            <div className="flex justify-between items-center border-b border-white/10 pb-2">
                                <p className="text-gray-400 text-xs">Age</p>
                                <p className="text-white font-medium">21+</p>
                            </div>

                            <div className="flex justify-between items-center border-b border-white/10 pb-2">
                                <p className="text-gray-400 text-xs">Role</p>
                                <p className="text-white font-medium">Frontend Developer/UI Designer</p>
                            </div>

                            <div className="flex justify-between items-center border-b border-white/10 pb-2">
                                <p className="text-gray-400 text-xs">Phone</p>
                                <p className="text-white font-medium">+91 9903749640</p>
                            </div>

                            <div className="flex justify-between items-center border-b border-white/10 pb-2">
                                <p className="text-gray-400 text-xs">Email</p>
                                <p className="text-white font-medium break-all">priyanshubiswas1682004@</p>
                            </div>

                            <div className="flex justify-between items-center">
                                <p className="text-gray-400 text-xs">Nationality</p>
                                <p className="text-white font-medium">Indian</p>
                            </div>

                        </div>
                    </div>

                    {/* LEFT CARD */}
                    <div className="glass 
          order-1 md:order-none
          w-[90%] sm:w-[80%] md:w-[400px] lg:w-[500px]
          mt-6 md:mt-0
          md:absolute md:bottom-0 md:left-0
          p-4 sm:p-5 rounded-tr-3xl z-10">

                        <div className="mb-3">
                            <p className="text-xs text-gray-400 tracking-widest uppercase">
                                Who I Am
                            </p>
                            <h2 className="text-lg sm:text-xl font-semibold text-white leading-tight">
                                Crafting Ideas into Experiences
                            </h2>
                            <div className="w-12 h-[2px] bg-orange-500 mt-2 rounded-full"></div>
                        </div>

                        <p className="text-xs sm:text-sm text-gray-200 leading-relaxed mb-4">
                            I’m Priyanshu Biswas—a frontend developer who enjoys turning ideas into modern, responsive, and
                            interactive web experiences. I love clean UI, smooth animations, and I also bring backend skills to
                            build full-stack apps that work as good as they look.
                        </p>



                        <Link
                            to="/resume"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-full text-sm flex items-center gap-2 transition-all duration-300"
                        >
                            Resume →
                        </Link>

                    </div>

                </div>

                {/* Glass Effect Style */}
                <style>
                    {`
          .glass {
                    background: rgba(255, 255, 255, 0.08);
                    backdrop-filter: blur(15px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }
                `}
                </style>

            </div>
        </div>
    );
};

export default About;