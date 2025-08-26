import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import ProjectCard from "./ProjectCard";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          These projects showcase practical web apps I built and deployed. Each
          entry includes a brief description, a detailed README in the source
          repository, and a live demo — demonstrating problem solving and
          technical breadth.
        </motion.p>
      </div>

      { /* Replace flex-wrap with a responsive 2-column grid.
           auto-rows-min + items-start prevents overlapping when cards have different heights.
           Each card is wrapped in a constrained container (max width + min height + self-start)
           so transforms/shadows don't overlap neighboring cells and rows align visually. */ }
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-7 auto-rows-min items-start justify-items-center">
        {projects.map((project, index) => (
          <div
            key={project.name || `project-${index}`}
            className="relative w-full max-w-[420px] self-start z-0 min-h-[320px] p-1"
          >
            <ProjectCard index={index} {...project} />
          </div>
        ))}
      </div>
    </>
  );
};

const WrappedWorks = SectionWrapper(Works, "project");
export default WrappedWorks;
