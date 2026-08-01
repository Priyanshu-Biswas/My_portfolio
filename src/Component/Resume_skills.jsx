import { useEffect } from "react";

export default function Resume_skills() {

  useEffect(() => {

    /* ===== FADE ANIMATION ===== */
    const fadeItems = document.querySelectorAll(".fade-init");

    const fadeObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-show");
        }
      });
    });

    fadeItems.forEach(el => fadeObserver.observe(el));


    /* ===== SKILL ANIMATION === */
    const circles = document.querySelectorAll(".circle");

    const circleObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const percent = el.dataset.percent;
          const deg = percent * 3.6;

          el.style.background =
            `conic-gradient(#38bdf8 ${deg}deg, #1f2937 0deg)`;

          el.classList.add("active");
          circleObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    circles.forEach(c => circleObserver.observe(c));

  }, []);

  return (
    <section className="!bg-gradient-to-l !from-[#030303] !to-[#363d47] pt-8  min-h-screen">

      {/* HEADING */}
      <h2 className="text-center text-4xl font-semibold mb-16">
        Skills
      </h2>

      {/* LINE */}
      <div className="flex justify-center mt-[-45px] mb-[60px]" data-aos="fade-up" data-aos-delay="200">
        <div className="w-20 h-[3px] bg-gray-700/50 rounded-full"></div>
      </div>

      {/* STYLE */}
      <style>{`
        :root {
          --circle-size: clamp(85px, 10vw, 110px);
          --inner-size: calc(var(--circle-size) * 0.90);
        }

        .circle {
          width: var(--circle-size);
          height: var(--circle-size);
          border-radius: 50%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: conic-gradient(#38bdf8 calc(var(--percent) * 1%), #2e2e2e 0);
          transition: all 0.4s ease;
          cursor: pointer;
        }

        .circle::before {
          content: "";
          position: absolute;
          width: var(--inner-size);
          height: var(--inner-size);
          background: #111;
          border-radius: 50%;
          z-index: 1;
          transition: all 0.4s ease;
        }

        .circle .percent {
          position: absolute;
          font-size: clamp(13px, 1.6vw, 17px);
          font-weight: 700;
          z-index: 2;
          color: #fff;
          transition: all 0.3s ease;
        }

        .circle .label {
          position: absolute;
          bottom: calc(var(--circle-size) * -0.28);
          font-size: clamp(12px, 1.4vw, 15px);
          font-weight: 700;
          color: #38bdf8;
          letter-spacing: 0.5px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .circle:hover {
          transform: translateY(-6px) scale(1.05);
          box-shadow:
            0 10px 25px rgba(56, 189, 248, 0.25),
            0 0 25px rgba(56, 189, 248, 0.35);
        }

        .circle:hover::before {
          box-shadow: inset 0 0 10px rgba(56, 189, 248, 0.3);
        }

        .circle:hover .percent {
          color: #7dd3fc;
          text-shadow: 0 0 8px rgba(125, 211, 252, 0.8);
        }

        .circle:hover .label {
          color: #7dd3fc;
          text-shadow: 0 0 6px rgba(125, 211, 252, 0.7);
        }

        .skill-wrap {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
          row-gap: 40px;
          justify-items: center;
          align-items: center;
          padding-bottom: clamp(20px, 4vw, 30px);
        }

        @media (min-width: 1024px) {
          .skill-wrap {
            grid-template-columns: repeat(4, 1fr);
            row-gap: 30px;
          }
        }
      `}</style>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6 pb-12">

        {/* FRONTEND */}
        <div className="glass p-6 rounded-xl md:col-span-2">
          <h3 className="mb-6 text-lg font-semibold">Frontend</h3>
          <div className="skill-wrap">
            <div className="circle" style={{ "--percent": 90 }} data-percent="90">
              <span className="percent">90%</span>
              <span className="label">HTML</span>
            </div>
            <div className="circle" style={{ "--percent": 85 }} data-percent="85">
              <span className="percent">85%</span>
              <span className="label">CSS</span>
            </div>
            <div className="circle" style={{ "--percent": 80 }} data-percent="80">
              <span className="percent">80%</span>
              <span className="label">JS</span>
            </div>
            <div className="circle" style={{ "--percent": 75 }} data-percent="75">
              <span className="percent">75%</span>
              <span className="label">React</span>
            </div>
          </div>
        </div>

        {/* BACKEND */}
        <div className="glass p-6 rounded-xl">
          <h3 className="mb-6 text-lg font-semibold">Backend</h3>
          <div className="skill-wrap">
            <div className="circle" style={{ "--percent": 70 }} data-percent="70">
              <span className="percent">70%</span>
              <span className="label">Node</span>
            </div>
            <div className="circle" style={{ "--percent": 65 }} data-percent="65">
              <span className="percent">65%</span>
              <span className="label">MySQL</span>
            </div>
          </div>
        </div>

        {/* TOOLS */}
        <div className="glass p-6 rounded-xl">
          <h3 className="mb-6 text-lg font-semibold">Tools</h3>
          <div className="skill-wrap">
            <div className="circle" style={{ "--percent": 80 }} data-percent="80">
              <span className="percent">80%</span>
              <span className="label">Git</span>
            </div>
            <div className="circle" style={{ "--percent": 85 }} data-percent="85">
              <span className="percent">85%</span>
              <span className="label">VS Code</span>
            </div>
          </div>
        </div>

        {/* PROGRAMMING */}
        <div className="glass p-6 rounded-xl md:col-span-2">
          <h3 className="mb-6 text-lg font-semibold">Programming</h3>
          <div className="skill-wrap">
            <div className="circle" style={{ "--percent": 75 }} data-percent="75">
              <span className="percent">75%</span>
              <span className="label">Java</span>
            </div>
            <div className="circle" style={{ "--percent": 70 }} data-percent="70">
              <span className="percent">70%</span>
              <span className="label">Python</span>
            </div>
            <div className="circle" style={{ "--percent": 65 }} data-percent="65">
              <span className="percent">65%</span>
              <span className="label">C</span>
            </div>
            <div className="circle" style={{ "--percent": 70 }} data-percent="70">
              <span className="percent">70%</span>
              <span className="label">C++</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}