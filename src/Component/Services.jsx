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
  const cards = [
    {
      title: "Frontend Focus Website",
      desc: "We build fast, responsive websites that look sharp and feel smooth.",
      tags: ["React", "Next.js", "Performance"],
      number: "01",
    },
    {
      title: "E-commerce Website ",
      desc: "We build online stores that help small businesses showcase products, take orders and grow sales.",
      tags: ["Product Catalog", "Cart & Checkout", "Payments"],
      number: "02",
    },
    {
      title: "Modern Website UI/UX",
      desc: "We design clean, modern interfaces that are simple to use and nice to look at.",
      tags: ["Wireframe", "Prototype", "Design"],
      number: "03",
    },
  ];


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
        {cards.map((card, i) => (
          <div
            key={card.number}
            data-aos="fade-up"
            data-aos-delay={200 + i * 100}
            data-aos-anchor-placement="top-bottom"
            className="group relative w-full max-w-sm aspect-square mx-auto overflow-hidden
                        rounded-2xl p-6 flex flex-col justify-between text-left
                        bg-gradient-to-br from-white/80 via-gray-200/70 to-gray-400/60
                        backdrop-blur-lg border border-white/50
                        shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                        transform-gpu transition-all duration-500 ease-out
                        hover:-translate-y-2 hover:shadow-[0_35px_80px_rgba(0,0,0,0.5)]
                        will-change-transform"
          >
            {/* Top: title + description */}
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase leading-tight text-black">
                {card.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm font-medium text-gray-800 max-w-[85%]">
                {card.desc}
              </p>
            </div>

            {/* Bottom: tags + number */}
            <div className="relative z-10 flex items-end justify-between">
              <ul className="text-sm font-semibold text-black space-y-1">
                {card.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <span className="text-3xl sm:text-4xl font-bold text-black">
                {card.number}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;