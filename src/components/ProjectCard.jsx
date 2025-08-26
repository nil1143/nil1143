import PropTypes from "prop-types";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { fadeIn } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
      options={{
        max: 12,
        scale: 1,
        speed: 450,
      }}
      className="p-5 rounded-2xl sm:w-[360px] w-full h-auto flex flex-col transform-gpu will-change-transform
                 hover:scale-[1.02] transition-transform duration-300 shadow-2xl ring-1 ring-white/6
                 bg-gradient-to-br from-slate-900/95 via-purple-950/25 to-[#05010a]/95 overflow-visible"
    >
      {/* Image area: fixed height, centered, ensure consistent cropping */}
      <div className="relative w-full sm:h-[240px] h-[200px] overflow-hidden rounded-xl flex-shrink-0
                      bg-gradient-to-br from-black/75 via-purple-950/10 to-slate-900/80 border border-white/6 flex items-center justify-center">
        <img
          src={image}
          alt={`${name} screenshot`}
          loading="lazy"
          className="block w-full h-full object-cover"
        />
      </div>

      {/* Content: allow grow so cards align consistently */}
      <div className="mt-5 flex-grow flex flex-col min-h-0">
        <h3 className="text-white font-semibold text-[22px]">{name}</h3>
        <p className="mt-3 text-slate-300 text-[14px]">{description}</p>

        <div className="mt-4 flex flex-wrap gap-1 gap-y-1 mb-4">
          {tags?.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className={`inline-block text-[12px] px-2 py-1 rounded-md bg-white/3 ${tag.color} backdrop-blur-sm`}
            >
              #{tag.name}
            </span>
          ))}
        </div>

        {/* Actions: use a fixed top margin so buttons stay consistently spaced from tags */}
        <div className="mt-2 flex items-center gap-3 ">
          {live_link && (
            <a
              href={live_link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open live demo for ${name}`}
              className="inline-flex items-center gap-2 bg-emerald-500 text-black px-3 py-2 rounded-md hover:bg-emerald-400 transition focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <ExternalLink size={16} />
              <span className="text-sm">Live</span>
            </a>
          )}

          {source_code_link && (
            <a
              href={source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open source code for ${name}`}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-neutral-800 to-neutral-900 text-white px-3 py-2 rounded-md hover:opacity-95 transition focus:outline-none focus:ring-2 focus:ring-white/10"
            >
              <Github size={16} />
              <span className="text-sm">ReadMe</span>
            </a>
          )}
        </div>
      </div>
    </Tilt>
  </motion.div>
);

ProjectCard.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, color: PropTypes.string })
  ),
  image: PropTypes.string,
  source_code_link: PropTypes.string,
  live_link: PropTypes.string,
};

ProjectCard.defaultProps = {
  description: "",
  tags: [],
  image: "",
  source_code_link: "",
  live_link: "",
};

export default ProjectCard;