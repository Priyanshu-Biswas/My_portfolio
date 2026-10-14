import React from "react";
import { Link } from "react-router-dom";
import about_back from "../assets/About/about_back.png"
import about_front from "../assets/About/about_front.png"

const About = () => {
  const flip = (e) => {
    e.currentTarget.classList.toggle("rotate-y-180");
  };

  return (
    <>
      <section
        id="about"
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 text-black"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-out-cubic"
      >
        {/* HEADING */}
        <h2
          className="text-center text-3xl sm:text-4xl font-semibold mb-12 sm:mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="900"
        >
          About Me
        </h2>

        <div
          className="flex justify-center mt-[-45px] mb-[45px]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="w-20 h-[3px] bg-white/40 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 sm:gap-12 items-center text-center md:text-left">
          {/* FLIP CARD */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="flex justify-center perspective"
          >
            <div
              onClick={flip}
              className="relative w-[220px] h-[280px] 
              sm:w-[240px] sm:h-[300px] 
              md:w-[260px] md:h-[320px] 
              lg:w-[300px] lg:h-[360px] 
              cursor-pointer transition-transform duration-700 preserve-3d rounded-xl 
              shadow-[0_10px_30px_rgba(0,0,0,0.5),0_30px_80px_rgba(0,0,0,0.7)] 
              hover:shadow-[0_20px_50px_rgba(0,0,0,0.7),0_40px_120px_rgba(0,0,0,0.9)]"
            >
              {/* FRONT */}
              <div className="absolute inset-0 rounded-xl backface-hidden overflow-hidden">
                <img
                  src={about_front}
                  className="w-full h-full object-cover"
                  alt="About Front"
                />
              </div>

              {/* BACK */}
              <div className="absolute inset-0 rounded-xl backface-hidden rotate-y-180 overflow-hidden">
                <img
                  src={about_back}
                  className="w-full h-full object-cover"
                  alt="About Back"
                />
              </div>
            </div>
          </div>

          {/* TEXT + BUTTONS */}
          <div className="flex flex-col items-center md:items-start">
            {/* TEXT */}
            <p
              className="text-gray-300 leading-relaxed max-w-md mb-6 
              text-left md:text-justify px-4 sm:px-6 md:px-0"
              data-aos="fade-up"
              data-aos-delay="300"

            >
              <span className="text-2xl sm:text-3xl font-medium">Hi,</span> I'm
              Priyanshu Biswas, a passionate frontend developer who loves
              crafting modern, responsive, and interactive web interfaces with
              clean UI and smooth animations. I also have hands-on experience in
              backend development, allowing me to build full-stack applications
              that are both visually engaging and functionally robust. Learn
              more about me....
            </p>

            {/* BUTTONS */}
            <div
              className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4"
              data-aos="fade-up"
              data-aos-delay="200">

              <Link to="/about">
                <button
                  className="shadow-[8px_8px_25px_rgba(0,0,0,0.5)] 
                  hover:shadow-[14px_14px_40px_rgba(0,0,0,0.8)] 
                  transition duration-300 px-4 sm:px-6 py-2 border border-black text-black rounded-xl 
                  hover:bg-black hover:text-white transition duration-500 text-sm sm:text-base"
                  data-aos="fade-up"
                  data-aos-delay="450"
                >
                  Who I'm
                </button>
              </Link>


              <Link to="/resume">
                <button
                  className="shadow-[8px_8px_25px_rgba(0,0,0,0.5)] 
                  hover:shadow-[14px_14px_40px_rgba(0,0,0,0.8)] 
                  transition duration-300 px-4 sm:px-6 py-2 border border-black text-black rounded-xl 
                  hover:bg-black hover:text-white transition duration-500 text-sm sm:text-base"
                  data-aos="fade-up"
                  data-aos-delay="550"
                >
                  Resume
                </button>
              </Link>

              <Link
                to="/blog"
                className="inline-block shadow-[8px_8px_25px_rgba(0,0,0,0.5)]
  hover:shadow-[14px_14px_40px_rgba(0,0,0,0.8)]
  transition duration-300 px-4 sm:px-6 py-2 border border-black text-black rounded-xl
  hover:bg-black hover:text-white duration-500 text-sm sm:text-base"
                data-aos="fade-up"
                data-aos-delay="650"
              >
                Blog
              </Link>


            </div>
          </div>
        </div>
      </section>

      {/* STYLE */}
      <style>{`
        .perspective {
          perspective: 1000px;
        }

        .preserve-3d {
          transform-style: preserve-3d;
        }

        .backface-hidden {
          backface-visibility: hidden;
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </>
  );
};

export default About;