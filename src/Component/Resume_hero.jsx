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

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-3">

              {/* Line 1 on phone: download button only */}
              <a
                href="/resume.pdf"
                download="Priyanshu-Resume.pdf"
                style={{ "--content": "'Download Resume'" }}
                className="resume-btn relative inline-flex w-full sm:w-auto !rounded-3xl items-center justify-center gap-3 overflow-hidden rounded-md bg-blue-700 px-6 py-3 text-lg font-black uppercase text-blue-100 transition hover:bg-blue-800"
              >
                <span className="resume-bubbles" aria-hidden="true" />

                <span className="resume-left" aria-hidden="true" />
                <span className="resume-right" aria-hidden="true" />

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="relative z-10 shrink-0"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <path d="m7 10 5 5 5-5" />
                  <path d="M12 15V3" />
                </svg>

                <span className="relative z-10">Download Resume</span>
              </a>

              {/* Line 2 on phone: social icons */}
              <div className="flex items-center justify-center gap-3">
                <a
                  href="https://github.com/Priyanshu-Biswas"
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 hover:scale-110 transition"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/priyanshu-biswas-9a323235a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 hover:scale-110 transition"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  href="https://www.facebook.com/share/18nN7foYUN/"
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 hover:scale-110 transition"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </div>
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

      <style>{`
    .resume-btn {
      --text-color: hsl(210, 50%, 85%);
      --shadow-color: hsla(210, 40%, 52%, 0.4);
      --bg-color: #141218;
      isolation: isolate;
      box-shadow: var(--shadow-color) 2px 2px 22px;
      text-decoration: none;
    }

    .resume-bubbles {
      position: absolute;
      inset: 0;
      z-index: 0;
      pointer-events: none;
      opacity: 0.6;
      background:
        radial-gradient(circle at 20% 35%, transparent 0, transparent 2px, var(--text-color) 3px, var(--text-color) 4px, transparent 4px),
        radial-gradient(circle at 75% 44%, transparent 0, transparent 2px, var(--text-color) 3px, var(--text-color) 4px, transparent 4px),
        radial-gradient(circle at 46% 52%, transparent 0, transparent 4px, var(--text-color) 5px, var(--text-color) 6px, transparent 6px);
      animation: resume-bubbles 5s linear infinite;
    }

    @keyframes resume-bubbles {
      from { background-position: 0 0; }
      to { background-position: 0 -100px; }
    }

    .resume-left,
    .resume-right {
      position: absolute;
      top: 0;
      height: 100%;
      width: 50%;
      z-index: 1;
      pointer-events: none;
    }

    .resume-left { left: 0; }
    .resume-right { right: 0; }

    .resume-right::after {
      content: var(--content);
      position: absolute;
      top: -30px;
      left: -100%;
      width: 200%;
      padding: 40px 0;
      white-space: nowrap;
      text-align: center;
      color: transparent;
      background: var(--bg-color);
      pointer-events: none;
      transform: translateY(-90%);
      transition: transform 0.4s ease-out;
    }

    .resume-btn:hover .resume-right::after {
      transform: translateY(-47%);
    }

    .resume-btn:focus-visible {
      outline: 2px solid currentColor;
      outline-offset: 4px;
    }

    @media (prefers-reduced-motion: reduce) {
      .resume-bubbles { animation: none; }
      .resume-right::after { transition: none; }
    }
  `}</style>
    </section>
  );
};

export default Resume_hero;