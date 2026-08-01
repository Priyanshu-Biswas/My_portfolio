import { useEffect } from "react";
import feather from "feather-icons";
import Resume_hero from "../Component/Resume_hero"
import Resume_skills from "../Component/Resume_skills"
import Resume_education from "../Component/Resume_education"
import Navber from "../Component/Navber";


export default function Resume() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className=" text-white bg-[#030303]">
            <div className="max-w-7xl mx-auto">
                <Navber />
                <Resume_hero />
                <Resume_education />
                <Resume_skills />
            </div>
        </div>
    );
}