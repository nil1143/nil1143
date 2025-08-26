import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <div className="pt-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
          {technologies.map((technology, i) => (
            <motion.div
              key={technology.name}
              variants={fadeIn("up", "spring", i * 0.12, 0.6)}
              className="flex flex-col items-center"
            >
              <div className="w-28 h-28 flex items-center justify-center">
                <BallCanvas icon={technology.icon} />
              </div>
              <p className="mt-2 text-center text-sm text-secondary">
                {technology.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* <div className="flex flex-row flex-wrap md:grid md:grid-cols-4 justify-center gap-10 pt-3">
        {technologies.map((technology) => (
          <div className="w-28 h-28 " key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div> */}

      {/* <div className="mt-20 flex flex-wrap gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");
