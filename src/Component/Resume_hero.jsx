import React, { useEffect } from "react";
import resumepic from "../assets/Resume_hero/resumepic.png"


const Resume_hero = () => {
  useEffect(() => {
    const roles = [
      "UI Designer",
      "Frontend Developer",
      "Backend Developer",
      "Full Stack Developer",
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const el = document.getElementById("typing");

    function type() {
      if (!el) return;

      const current = roles[roleIndex];

      el.textContent = current.substring(0, charIndex);

      if (!isDeleting) {
        charIndex++;
      } else {
        charIndex--;
      }

      let speed = isDeleting ? 40 : 65;

      if (!isDeleting && charIndex === current.length + 1) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
      }

      if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }

      setTimeout(type, speed);
    }

    type();
  }, []);

  return (
    <section className="  w-full !bg-gradient-to-l !from-[#363d47] !to-[#030303] text-white">
      <div className="flex items-center pt-14 md:pt-16 lg:pt-20 pb-0 px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          
          {/* LEFT */}
          <div className="order-2 md:order-1">
            <h1 className="text-xs sm:text-sm md:text-base font-semibold tracking-wide mb-1 text-white/70">
              HELLO! Developers,
            </h1>

            <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 lg:whitespace-nowrap">
              I'm{" "}
              <span className="font-extrabold !bg-gradient-to-r !from-blue-500 !via-indigo-500 !to-white text-transparent bg-clip-text">
                Priyanshu Biswas
              </span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl font-medium mb-3">
              <span className="mr-2">A</span>
              <span id="typing" className="text-[1.2em]"></span>
            </p>

            <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-md mb-4">
              UI designer & frontend-focused full stack developer building scalable websites.
              Skilled in React, Node.js, and modern web technologies.
              Turning Figma designs into clean, production-ready code.
            </p>

            <div className="flex items-center gap-3">
              <a href="https://github.com/Priyanshu-Biswas" className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 hover:scale-110 transition">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/priyanshu-biswas-9a323235a?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 hover:scale-110 transition">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://www.facebook.com/share/18nN7foYUN/" className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 hover:scale-110 transition">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="order-1 md:order-2 relative flex justify-center md:justify-end">
            <div className="relative w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px] aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src={resumepic}
                alt="profile"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
              />
              <div className="absolute inset-0"></div>
            </div>
          </div>

        </div>
      </div>

      {/* STYLE */}
      <style>
        {`
          #typing::after {
            content: "|";
            margin-left: 4px;
            animation: blink 1s infinite;
          }

          @keyframes blink {
            0%, 50%, 100% { opacity: 1; }
            25%, 75% { opacity: 0; }
          }
        `}
      </style>
    </section>
  );
};

export default Resume_hero;