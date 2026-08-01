import React from "react";
import project1 from "../assets/Projects/project1.png"
import project2 from "../assets/Projects/project2.png"
import project3 from "../assets/Projects/project3.png"
import project4 from "../assets/Projects/project4.png"
import project5 from "../assets/Projects/project5.png"
import project6 from "../assets/Projects/project6.png"


const Projects = () => {
    return (
        <section
            id="projects"
            className="py-24 px-[43px] sm:px-[48px] md:px-16 lg:px-28 xl:px-36 text-black"

        >
            {/* HEADING */}
            <h2
                className="text-center text-4xl font-semibold mb-16"

            >
                Project
            </h2>

            <div
                className="flex justify-center mt-[-45px] mb-[60px]">
                <div className="w-20 h-[3px] bg-gray-800/70 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">

                {/* Card 1 */}
                <div

                    className="bg-white rounded-xl !transform transform-gpu will-change-transform relative transition-all duration-100 ease-out hover:scale-105 hover:-translate-y-2 hover:z-20 shadow-[12px_12px_40px_rgba(0,0,0,0.6),0_25px_70px_rgba(0,0,0,0.5)] hover:shadow-[18px_18px_60px_rgba(0,0,0,0.8),0_35px_100px_rgba(0,0,0,0.7)]"
                >
                    <div className="bg-gray-300 px-3 rounded-t-xl">
                        <img src={project1} className="w-full h-40 object-cover" alt="" />
                    </div>
                    <div className="p-5 h-40 flex flex-col justify-between">
                        <div>
                            <h3 className="font-semibold text-lg">E-Commerce Website</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Amazon Clone – Built a responsive e-commerce UI using HTML, CSS, and JavaScript, replicating core layouts and interactions.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2 text-xs mb-4 justify-center items-center">
                        <span className="bg-black text-white px-3 py-1 rounded-full">HTML</span>
                        <span className="bg-black text-white px-3 py-1 rounded-full">CSS</span>
                        <span className="bg-black text-white px-3 py-1 rounded-full">JS</span>
                    </div>
                    <div className="flex gap-3 justify-center items-center mb-3">
                        <button className="border px-3 py-1 rounded-full">GitHub</button>
                        <button className="border px-3 py-1 rounded-full">Live Demo</button>
                    </div>
                </div>

                {/* Card 2 */}
                <div

                    className="bg-white rounded-xl !transform transform-gpu will-change-transform relative transition-all duration-100 ease-out hover:scale-105 hover:-translate-y-2 hover:z-20 shadow-[12px_12px_40px_rgba(0,0,0,0.6),0_25px_70px_rgba(0,0,0,0.5)] hover:shadow-[18px_18px_60px_rgba(0,0,0,0.8),0_35px_100px_rgba(0,0,0,0.7)]"
                >
                    <div className="bg-[#26fc58] px-3 rounded-t-xl">
                        <img src={project2} className="w-full h-40 object-cover" alt="" />
                    </div>
                    <div className="p-5 h-40 flex flex-col justify-between">
                        <div>
                            <h3 className="font-semibold text-lg">AI Farmer Support System</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Developed a scalable web app using React, Tailwind CSS, and APIs to deliver real-time, data-driven farming support.s
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2 text-xs mb-4 justify-center items-center">
                       
                        <span className="bg-black text-white px-3 py-1 rounded-full">TailwindCSS</span>
                        <span className="bg-black text-white px-3 py-1 rounded-full">JS</span>
                        <span className="bg-black text-white px-3 py-1 rounded-full">React</span>
                    </div>
                    <div className="flex gap-3 justify-center items-center mb-3">
                        <button className="border px-3 py-1 rounded-full">GitHub</button>
                        <button className="border px-3 py-1 rounded-full">Live Demo</button>
                    </div>
                </div>

                {/* Card 3 */}
                <div

                    className="bg-white rounded-xl !transform transform-gpu will-change-transform relative transition-all duration-100 ease-out hover:scale-105 hover:-translate-y-2 hover:z-20 shadow-[12px_12px_40px_rgba(0,0,0,0.6),0_25px_70px_rgba(0,0,0,0.5)] hover:shadow-[18px_18px_60px_rgba(0,0,0,0.8),0_35px_100px_rgba(0,0,0,0.7)]"
                >
                    <div className="bg-[#32b9fc] px-3 rounded-t-xl">
                        <img src={project3} className="w-full h-40 object-cover" alt="" />
                    </div>
                    <div className="p-5 h-40 flex flex-col justify-between">
                        <div>
                            <h3 className="font-semibold text-lg">Tech Commerce Platform</h3>
                            <p className="text-gray-600 text-sm mt-2">
                               Tech Commerce Platform – Built a scalable e-commerce interface using HTML, CSS, and JavaScript.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2 text-xs mb-4 justify-center items-center">
                        <span className="bg-black text-white px-3 py-1 rounded-full">HTML</span>
                        <span className="bg-black text-white px-3 py-1 rounded-full">CSS</span>
                        <span className="bg-black text-white px-3 py-1 rounded-full">JS</span>
                    </div>
                    <div className="flex gap-3 justify-center items-center mb-3">
                        <button className="border px-3 py-1 rounded-full">GitHub</button>
                        <button className="border px-3 py-1 rounded-full">Live Demo</button>
                    </div>
                </div>

                {/* Card 4 */}
                <div

                    className="bg-white rounded-xl !transform transform-gpu will-change-transform relative transition-all duration-100 ease-out hover:scale-105 hover:-translate-y-2 hover:z-20 shadow-[12px_12px_40px_rgba(0,0,0,0.6),0_25px_70px_rgba(0,0,0,0.5)] hover:shadow-[18px_18px_60px_rgba(0,0,0,0.8),0_35px_100px_rgba(0,0,0,0.7)]"
                >
                    <div className="bg-[#fc6868] px-3 rounded-t-xl">
                        <img src={project5} className="w-full h-40 object-cover" alt="" />
                    </div>
                    <div className="p-5 h-40 flex flex-col justify-between">
                        <div>
                            <h3 className="font-semibold text-lg">Dating App UI/UX Design</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Dating App UI/UX Design – Designed a modern, user-centric interface in Figma focused on intuitive and engaging user experience.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2 text-xs mb-4 justify-center items-center">
                        <span className="bg-black text-white px-3 py-1 rounded-full">Figma</span>
                        <span className="bg-black text-white px-3 py-1 rounded-full">Sketch</span>
                        
                    </div>
                    <div className="flex gap-3 justify-center items-center mb-3">
                        <button className="border px-3 py-1 rounded-full">GitHub</button>
                        <button className="border px-3 py-1 rounded-full">Live Demo</button>
                    </div>
                </div>

                {/* Card 5 */}
                <div

                    className="bg-white rounded-xl !transform transform-gpu will-change-transform relative transition-all duration-100 ease-out hover:scale-105 hover:-translate-y-2 hover:z-20 shadow-[12px_12px_40px_rgba(0,0,0,0.6),0_25px_70px_rgba(0,0,0,0.5)] hover:shadow-[18px_18px_60px_rgba(0,0,0,0.8),0_35px_100px_rgba(0,0,0,0.7)]"
                >
                    <div className="bg-[#8a8181] px-3 rounded-t-xl">
                        <img src={project4} className="w-full h-40 object-cover" alt="" />
                    </div>
                    <div className="p-5 h-40 flex flex-col justify-between">
                        <div>
                            <h3 className="font-semibold text-lg">Interactive Developer Portfolio</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Designed and developed innovative self-portfolio using React, Tailwind CSS, and JavaScript, featuring interactive UI and responsive design.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2 text-xs mb-4 justify-center items-center">
                        <span className="bg-black text-white px-3 py-1 rounded-full">React</span>
                        <span className="bg-black text-white px-3 py-1 rounded-full">TailwindCSS</span>
                        <span className="bg-black text-white px-3 py-1 rounded-full">JS</span>
                    </div>
                    <div className="flex gap-3 justify-center items-center mb-3">
                        <button className="border px-3 py-1 rounded-full">GitHub</button>
                        <button className="border px-3 py-1 rounded-full">Live Demo</button>
                    </div>
                </div>

                {/* Card 6 */}
                <div

                    className="bg-white rounded-xl !transform transform-gpu will-change-transform relative transition-all duration-100 ease-out hover:scale-105 hover:-translate-y-2 hover:z-20 shadow-[12px_12px_40px_rgba(0,0,0,0.6),0_25px_70px_rgba(0,0,0,0.5)] hover:shadow-[18px_18px_60px_rgba(0,0,0,0.8),0_35px_100px_rgba(0,0,0,0.7)]"
                >
                    <div className="bg-[#9c7c98] px-3 rounded-t-xl">
                        <img src={project6} className="w-full h-40 object-cover" alt="" />
                    </div>
                    <div className="p-5 h-40 flex flex-col justify-between">
                        <div>
                            <h3 className="font-semibold text-lg">Travel Platform UI/UX</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Crafted a highly modern, immersive user experience using Figma and Sketch, focusing on intuitive navigation and visual storytelling.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2 text-xs mb-4 justify-center items-center">
                        <span className="bg-black text-white px-3 py-1 rounded-full">Sketch</span>
                        <span className="bg-black text-white px-3 py-1 rounded-full">Figma</span>
                        
                    </div>
                    <div className="flex gap-3 justify-center items-center mb-3">
                        <button className="border px-3 py-1 rounded-full">GitHub</button>
                        <button className="border px-3 py-1 rounded-full">Live Demo</button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Projects;