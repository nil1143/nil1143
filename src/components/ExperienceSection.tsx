"use client";

import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { experiences } from "@/constants";
import ExperienceCard from "./ExperienceCard";

const ExperienceSection = () => {
  return (
    <section className="relative overflow-hidden">
        
      {/* Content */}
      <div className="relative ">
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
