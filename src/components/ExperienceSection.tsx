"use client";

import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { experiences } from "@/constants";
import ExperienceCard from "./ExperienceCard";
import { GridPattern } from "./ui/grid-pattern";
// import { BackgroundBeams } from "./ui/shadcn-io/background-beams";

const ExperienceSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
         {/* <BackgroundBeams className="absolute inset-0" /> */}
     <GridPattern
      width={40}
      height={40}
      className="absolute [mask-image:radial-gradient(1200px_circle_at_center,white,transparent)] opacity-50 inset-0 skew-y-12"
    />
      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <motion.div
          variants={textVariant(0.1)}
          initial="hidden"
          animate="show"
          className="relative top-5 px-6"
        >
          <p className="sm:text-[18px] text-[14px] uppercase tracking-wider">
            What I have done so far
          </p>
          <h2 className="sm:text-[45px] text-[30px] font-extralight tracking-widest">
            Work Experience
          </h2>
        </motion.div>

        <div className="mt-20 flex flex-col">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
