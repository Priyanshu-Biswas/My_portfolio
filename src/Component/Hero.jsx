import { useEffect } from "react";
import front from "../assets/Hero/front.png"
import back from "../assets/Hero/back.png"



const Hero = () => {
    useEffect(() => {
        const container = document.getElementById("container");
        const front = document.getElementById("frontImage");
        const back = document.getElementById("backImage");

        let trailX = 0;
        let trailY = 0;

        function handleMove(x, y) {
            const size = 200;

            trailX += (x - trailX) * 0.15;
            trailY += (y - trailY) * 0.15;

            const frontMask = `
        radial-gradient(circle ${size}px at ${x}px ${y}px,
          transparent 0%,
          transparent 50%,
          rgba(0,0,0,0.1) 70%,
          rgba(0,0,0,0.5) 85%,
          black 100%),
        radial-gradient(circle ${size * 1.6}px at ${trailX}px ${trailY}px,
          transparent 0%,
          transparent 45%,
          rgba(0,0,0,0.1) 70%,
          black 100%)
      `;

            const backMask = `
        radial-gradient(circle ${size}px at ${x}px ${y}px,
          black 0%,
          black 35%,
          rgba(0,0,0,0.6) 70%,
          transparent 100%),
        radial-gradient(circle ${size * 1.4}px at ${trailX}px ${trailY}px,
          rgba(0,0,0,0.4) 0%,
          transparent 100%)
      `;

            front.style.maskImage = frontMask;
            front.style.webkitMaskImage = frontMask;

            back.style.maskImage = backMask;
            back.style.webkitMaskImage = backMask;
        }

        function resetMask() {
            front.style.maskImage =
                "radial-gradient(circle 0px at center, black 100%)";
            front.style.webkitMaskImage =
                "radial-gradient(circle 0px at center, black 100%)";

            back.style.maskImage =
                "radial-gradient(circle 0px at center, transparent 100%)";
            back.style.webkitMaskImage =
                "radial-gradient(circle 0px at center, transparent 100%)";
        }

        // Mouse
        container.addEventListener("mousemove", (e) => {
            const rect = container.getBoundingClientRect();
            handleMove(e.clientX - rect.left, e.clientY - rect.top);
        });

        // Touch
        container.addEventListener("touchstart", (e) => {
            const rect = container.getBoundingClientRect();
            const touch = e.touches[0];
            handleMove(touch.clientX - rect.left, touch.clientY - rect.top);
        });

        container.addEventListener("touchmove", (e) => {
            const rect = container.getBoundingClientRect();
            const touch = e.touches[0];
            handleMove(touch.clientX - rect.left, touch.clientY - rect.top);
        });

        container.addEventListener("mouseleave", resetMask);
        container.addEventListener("touchend", resetMask);
    }, []);

    return (
        <section
            id="home"
            className="h-screen flex items-center justify-between px-6 sm:px-10 md:px-20 relative overflow-hidden"
        >
            {/* LEFT SIDE TEXT */}
            <div className="w-full h-screen flex flex-col items-center justify-start pt-28 sm:pt-20 overflow-hidden text-center">
                <h1 className="w-full font-extrabold leading-none uppercase text-gray-800 sm:text-black tracking-[-0.06em] lg:ml-[-100px]">
                    {/* First Line */}
                    <span class="
                        block text-center
                        whitespace-nowrap   /* prevents breaking */

                        text-[clamp(1rem,3vw,1.2rem)] 
                        tracking-widest text-gray-400
                        font-normal mb-2

                        sm:inline-block sm:mb-0 sm:mr-3 sm:align-middle
                        sm:[writing-mode:vertical-rl] 
                        sm:[text-orientation:mixed]
                        sm:rotate-180
                        ">
                        Hello I'm
                    </span>

                    {/* Priyanshu */}
                    <span className="rubik-dirt-regular text-[clamp(3rem,12vw,12rem)] align-middle">
                        Priyanshu
                    </span>

                    {/* Second Line */}
                    <span className="rubik-dirt-regular block text-[clamp(3rem,12vw,12rem)] mt-2">
                        Biswas
                    </span>
                </h1>
            </div>

            {/* RIGHT SIDE TEXT */}
            <div className="absolute left-4 right-auto bottom-1 z-40">
                <div className="origin-right flex flex-col items-start gap-2">
                    <p className="text-lg sm:text-xl md:text-2xl tracking-widest text-gray-400">
                        Creative
                    </p>

                    <h1 className="relative text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                        {/* BACK TEXT */}
                        <span className="block absolute left-0 top-0 z-0 text-gray-400 [mask-image:linear-gradient(to_bottom,black_30%,transparent)] wave">
                            {"Frontend".split("").map((char, i) => (
                                <span key={i}>{char}</span>
                            ))}
                        </span>

                        {/* FRONT TEXT */}
                        <span className="block relative z-10 mt-8 text-white wave">
                            {"WebDeveloper".split("").map((char, i) => (
                                <span key={i}>{char}</span>
                            ))}
                        </span>
                    </h1>
                </div>
            </div>

            {/* SOCIAL MEDIA */}
            <div className="
                absolute
                right-3 sm:right-4 md:right-6

                top-[70%] -translate-y-1/2   /* mobile + tablet → slightly lower than center */

                md:top-auto md:bottom-8 md:translate-y-0   /* desktop → bottom */

                flex flex-col gap-3 sm:gap-4
                z-50
                ">


                <a href="https://www.linkedin.com/in/priyanshu-biswas-9a323235a?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank"
                    className="w-16 h-16 flex items-center justify-center rounded-full bg-transparent text-gray-400  hover:scale-110 transition">
                    <i className="fa-brands fa-linkedin-in text-3xl"></i>
                </a>


                <a href="https://www.facebook.com/share/18nN7foYUN/" target="_blank"
                    className="w-16 h-16 flex items-center justify-center rounded-full bg-transparent text-gray-400  hover:scale-110 transition">
                    <i className="fa-brands fa-facebook-f text-3xl"></i>
                </a>


                <a href="https://www.instagram.com/priyanshu____biswas?igsh=Nm1tZWljb2F3amxi" target="_blank"
                    className="w-16 h-16 flex items-center justify-center rounded-full bg-transparent text-gray-400  hover:scale-110 transition">
                    <i className="fa-brands fa-instagram text-3xl"></i>
                </a>

            </div>

            {/* IMAGE REVEAL */}
            <div className="absolute bottom-0 left-0 w-full flex justify-center z-20">
                <div
                    id="container"
                    className="relative w-[500px] h-[600px] overflow-hidden cursor-pointer"
                >
                    <img
                        id="backImage"
                        src={back}
                        className="absolute bottom-0  w-[500px] h-auto object-cover mask-back"
                        alt=""
                    />

                    <img
                        id="frontImage"
                        src={front}
                        className="absolute bottom-0  w-[500px] h-auto object-contain mask-front"
                        alt=""
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;