import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import feather from "feather-icons";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
    });

    feather.replace();
  }, []);

  return (
    <section
      id="services"
      className="py-24 px-16 sm:px-19 md:px-19 lg:px-28 xl:px-36 text-black"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-out-cubic"
    >
      {/* HEADING */}
      <h2
        className="text-center text-4xl font-semibold mb-16"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Services
      </h2>

      <div
        className="flex justify-center mt-[-45px] mb-[45px]"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="w-20 h-[3px] bg-white/40 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
        
        {/* Card 1 */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-anchor-placement="top-bottom"
          className="bg-white/10 backdrop-blur-lg p-6 rounded-xl 
          w-full max-w-sm h-full flex flex-col items-center text-center
          transform-gpu origin-center 
          transition-all duration-500 ease-out
          shadow-[0_20px_60px_rgba(0,0,0,0.35)]
          
          hover:shadow-[0_35px_80px_rgba(0,0,0,0.5)]
          will-change-transform relative"
        >
          <i
            data-feather="code"
            className="mx-auto w-10 h-10"
            data-aos="zoom-in"
            data-aos-delay="400"
          ></i>

          <h3
            className="font-semibold text-lg min-h-[56px] flex items-center justify-center"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            Frontend Development
          </h3>

          <p
            className="mt-2 text-sm text-gray-400 flex-grow w-full text-left"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            I build modern and interactive websites using React, HTML, CSS,
            JavaScript, Node.js, PHP, MySQL and Next.js.
          </p>
        </div>

        {/* Card 2 */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-anchor-placement="top-bottom"
          className="bg-white/10 backdrop-blur-lg p-6 rounded-xl 
          w-full max-w-sm h-full flex flex-col items-center text-center
          transform-gpu origin-center 
          transition-all duration-500 ease-out
          shadow-[0_20px_60px_rgba(0,0,0,0.35)]
          
          hover:shadow-[0_35px_80px_rgba(0,0,0,0.5)]
          will-change-transform relative"
        >
          <i
            data-feather="pen-tool"
            className="mx-auto w-10 h-10"
            data-aos="zoom-in"
            data-aos-delay="400"
          ></i>

          <h3
            className="font-semibold text-lg min-h-[56px] flex items-center justify-center"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            UI Design
          </h3>

          <p
            className="mt-2 text-sm text-gray-400 flex-grow w-full text-left"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Creating clean and modern user interfaces with focus on design and usability.
          </p>
        </div>

        {/* Card 3 */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-anchor-placement="top-bottom"
          className="bg-white/10 backdrop-blur-lg p-6 rounded-xl 
          w-full max-w-sm h-full flex flex-col items-center text-center
          transform-gpu origin-center 
          transition-all duration-500 ease-out
          shadow-[0_20px_60px_rgba(0,0,0,0.35)]
          
          hover:shadow-[0_35px_80px_rgba(0,0,0,0.5)]
          will-change-transform relative"
        >
          <i
            data-feather="monitor"
            className="mx-auto w-10 h-10"
            data-aos="zoom-in"
            data-aos-delay="400"
          ></i>

          <h3
            className="font-semibold text-lg min-h-[56px] flex items-center justify-center"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            Web Applications
          </h3>

          <p
            className="mt-2 text-sm text-gray-400 flex-grow w-full text-left"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Building modern web applications with dynamic features and smooth performance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;