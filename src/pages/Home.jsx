import { useEffect } from "react";
import feather from "feather-icons";
import { useLocation } from "react-router-dom"

import Contact from "../Component/Contact";
import Services from "../Component/Services";
import Projects from "../Component/Projects";
import Skills from "../Component/Skills";
import About from "../Component/About";
import Footer from "../Component/Footer";
import Navber from "../Component/Navber";
import Hero from "../Component/Hero";

export default function Home() {

    useEffect(() => {
        feather.replace();
    }, []); // run only once

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const section = document.querySelector(location.hash);
            if (section) {
                setTimeout(() => {
                    section.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        }
    }, [location]);

    


    return (
        <div className="min-h-screen
    bg-[radial-gradient(circle_at_center,#f1f3f4_0%,#c9ced1_20%,#6b7075_40%,#3a3d42_65%,#2a2c31_80%,#1f2024_87%,#17181d_90%,#000000_100%)] text-white">
            <div className="max-w-8xl mx-auto">
                <Navber />
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Services />
                <Contact />
                <Footer />
            </div>
        </div>
    );
}

