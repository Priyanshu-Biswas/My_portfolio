import React from "react";

const Education = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
      {/* ===== EXPERIENCE ============================================================================ */}
      <section className="glass p-6 rounded-xl fade-init">
        <h2 className="text-xl font-semibold mb-2">Work Experience</h2>
        <p className="text-gray-400 text-sm mb-6">
          Here is a summary of my work experience, showcasing my professional
          growth and contributions in various roles.
        </p>

        <div className="relative pl-6">
          {/* Vertical Line */}
          <div className="absolute left-[10px] top-0 bottom-0 w-[3px] bg-gray-600 rounded-full"></div>

          {/* Timeline Item */}
          <div className="relative mb-8">
            {/* Dot */}
            <div className="absolute left-[-20px] top-1 w-4 h-4 bg-[#38bdf8] rounded-full border-2 border-gray-900"></div>

            {/* Date */}
            <p className="text-gray-400 text-sm mb-1">
              Nov 18, 2025 - Jan 18, 2026
            </p>

            {/* Role */}
            <h3 className="font-semibold text-lg">
              Full Stack Web Developer Intern
            </h3>

            {/* Company */}
            <p className="text-[#38bdf8] font-medium">
              PCS Global
            </p>

            {/* Description */}
            <p className="text-gray-300 mt-2">
              Worked as a UI/UX Designer and Frontend Developer Intern, contributing to the design and development of scalable, user-centric web interfaces using modern frontend technologies, while collaborating with backend teams to ensure seamless integration and performance.
            </p>

            {/* Bullet Points */}
            <ul className="list-disc pl-5 text-gray-300 mt-3 space-y-1">
              <li>
                Designed scalable, user-centric interfaces in Figma, ensuring usability and visual consistency.
              </li>
              <li>
                Developed scalable, responsive web applications using HTML, CSS, JavaScript, and React.
              </li>
              <li>
                Collaborated with backend teams to integrate APIs and deliver seamless user experiences.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== EDUCATION =================================================================================== */}
      <section className="glass p-6 rounded-xl fade-init">
        <h2 className="text-xl font-semibold mb-2">My Education</h2>
        <p className="text-gray-400 text-sm mb-6">
          Below is an overview of my educational background, highlighting my
          academic achievements and learning journey.
        </p>

        <div className="relative pl-10">
          {/* Item 1 */}
          <div className="relative ml-[-40px]">
            {/* line */}
            <div className="absolute left-[10px] top-0 bottom-0 w-[3px] bg-gray-600 rounded-full"></div>

            {/* Dot */}
            <div className="absolute left-[4px] top-1 w-4 h-4 bg-[#38bdf8] rounded-full border-2 border-gray-900"></div>

            <div className="ml-6">
              <p className="text-gray-400 text-sm mb-1">2023 - 2027</p>

              <h3 className="font-semibold text-lg">
                Bachelor of Technology in Computer Science & Engineering
              </h3>

              <p className="text-[#38bdf8] font-medium">
                College of Engineering and Management, Kolaghat
              </p>

              <p className="text-gray-300 mt-2">
                Pursuing a B.Tech in Computer Science & Engineering, gaining
                practical experience in software development, algorithms, and
                modern technologies through academic projects and teamwork.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="relative pt-[25px] ml-[-40px]">
            {/* line */}
            <div className="absolute left-[10px] top-0 bottom-0 w-[3px] bg-gray-600 rounded-full"></div>

            {/* Dot */}
            <div className="absolute left-[4px] top-[27px] w-4 h-4 bg-[#38bdf8] rounded-full border-2 border-gray-900"></div>

            <div className="ml-6">
              <p className="text-gray-400 text-sm mb-1">2010 - 2021</p>

              <h3 className="font-semibold text-lg">
                Higher Secondary (Class 12)
              </h3>

              <p className="text-[#38bdf8] font-medium">
                New Andul H.C. School
              </p>

              <p className="text-gray-300 mt-2">
                Completed Higher Secondary education with a focus on science,
                building a solid base in analytical reasoning, mathematics, and
                communication skills.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;