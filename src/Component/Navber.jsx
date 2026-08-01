import React, { useEffect } from "react";
import feather from "feather-icons";
import { Link } from "react-router-dom";

const Navber = () => {
  useEffect(() => {
    feather.replace();

    const btn = document.getElementById("menu-btn");
    const menu = document.getElementById("mobile-menu");

    // Toggle menu
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      menu.classList.toggle("hidden");
    });

    menu.addEventListener("click", (e) => e.stopPropagation());

    document.addEventListener("click", () => {
      menu.classList.add("hidden");
    });

    document.querySelectorAll("#mobile-menu a").forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.add("hidden");
      });
    });

    // ACTIVE MENU
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    function setActiveLink() {
      let scrollY = window.pageYOffset;


      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.id;

        if (
          scrollY >= sectionTop &&
          scrollY < sectionTop + sectionHeight
        ) {
          navLinks.forEach((link) => {
            link.classList.remove("active");

            const linkHref = link.getAttribute("href");

if (linkHref && linkHref.includes("#" + sectionId)) {
              link.classList.add("active");
            }
          });
        }
      });
    }

    window.addEventListener("scroll", setActiveLink);
    window.addEventListener("load", setActiveLink);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className="fixed top-5 left-0 right-0 mx-auto
        w-[97%] md:w-[83%] px-6 py-3
        flex justify-between items-center
        bg-black/80 backdrop-blur-xl
        rounded-full border border-white/10 shadow-xl z-50" >
        {/* LEFT */}
        <div className="flex items-center gap-4">
          {/* Hamburger */}
          <button
            id="menu-btn"
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition"
          >
            <i data-feather="menu"></i>
          </button>

          {/* Logo */}
          <h1 className="tracking-widest font-semibold">
            priyanshu.
          </h1>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-10 text-sm">
          <li><Link to="/#home" className="nav-link">Home</Link></li>
          <li><Link to="/#about" className="nav-link">About</Link></li>
          <li><Link to="/#projects" className="nav-link">Project</Link></li>
          <li><Link to="/#services" className="nav-link">Services</Link></li>
          <li><Link to="/#contact" className="nav-link">Contact</Link></li>
        </ul>

        {/* RIGHT ICONS */}
        <div className="flex gap-4">
          <a
            href="https://github.com/Priyanshu-Biswas"
            target="_blank"
            rel="noopener noreferrer">
            <i data-feather="github"></i>
          </a>

          <a
            href="https://www.instagram.com/priyanshu____biswas?igsh=Nm1tZWljb2F3amxi"
            target="_blank"
            rel="noopener noreferrer">
            <i data-feather="instagram"></i>
          </a>
        </div>



      </nav>

      {/* MOBILE MENU */}
      <div
        id="mobile-menu"
        className="hidden fixed top-20 left-6 
        w-[260px] 
        bg-white/5 backdrop-blur-2xl 
        border border-white/10 
        rounded-2xl shadow-2xl 
        z-40"
      >

        <ul className="flex flex-col p-4 text-sm">
          <li>
            <Link
              to="/#home"
              className="block px-4 py-3 rounded-lg hover:bg-white/10 hover:pl-6 transition-all"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/#about"
              className="block px-4 py-3 rounded-lg hover:bg-white/10 hover:pl-6 transition-all"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/#projects"
              className="block px-4 py-3 rounded-lg hover:bg-white/10 hover:pl-6 transition-all"
            >
              Project
            </Link>
          </li>

          <li>
            <Link
              to="/#services"
              className="block px-4 py-3 rounded-lg hover:bg-white/10 hover:pl-6 transition-all"
            >
              Services
            </Link>
          </li>

          <li>
            <Link
              to="/#contact"
              className="block px-4 py-3 rounded-lg hover:bg-white/10 hover:pl-6 transition-all"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* STYLE */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        .nav-link {
          position: relative;
          color: rgba(255, 255, 255, 0.7);
        }

        .nav-link:hover {
          color: white;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0%;
          height: 2px;
          background: white;
          transition: width 0.3s ease;
        }

        .nav-link.active {
          color: white;
          font-weight: 600;
        }

        .nav-link.active::after {
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default Navber;