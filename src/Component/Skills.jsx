import React from "react";

const Skills = () => {
  return (
    <>
      <section
        className="py-16 text-black overflow-hidden"

      >
        {/* HEADING */}
        <h2
          className="text-center text-4xl font-semibold mb-16"

        >
          Skills
        </h2>

        {/* LINE */}
        <div
          className="flex justify-center mt-[-45px] mb-[60px]"

        >
          <div className="w-20 h-[3px] bg-gray-700/50 rounded-full"></div>
        </div>

        <div
          className="relative w-full overflow-hidden"

        >
          {/* Marquee */}
          <div className="marquee">
            <div className="marquee-track">

              {/* ICON SET */}
              <div
                className="flex gap-16 text-5xl mr-16"

              >
                <span><i className="fa-brands fa-java"></i></span>
                <span><i className="fa-brands fa-react"></i></span>
                <span><i className="fa-brands fa-js"></i></span>
                <span><i className="fa-brands fa-python"></i></span>
                <span><i className="fa-brands fa-php"></i></span>
                <span><i className="fa-brands fa-node-js"></i></span>
                <span><i className="fa-solid fa-database"></i></span>
                <span><i className="fa-brands fa-git-alt"></i></span>
                <span><i className="fa-brands fa-github"></i></span>
              </div>

              {/* DUPLICATE */}
              <div className="flex gap-16 text-5xl">
                <span><i className="fa-brands fa-java"></i></span>
                <span><i className="fa-brands fa-react"></i></span>
                <span><i className="fa-brands fa-js"></i></span>
                <span><i className="fa-brands fa-python"></i></span>
                <span><i className="fa-brands fa-php"></i></span>
                <span><i className="fa-brands fa-node-js"></i></span>
                <span><i className="fa-solid fa-database"></i></span>
                <span><i className="fa-brands fa-git-alt"></i></span>
                <span><i className="fa-brands fa-github"></i></span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* STYLE */}
      <style>{`
        .marquee {
          overflow: hidden;
          position: relative;

          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: scroll 25s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </>
  );
};

export default Skills;