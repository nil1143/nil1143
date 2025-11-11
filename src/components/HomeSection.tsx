"use client";

import React from "react";
import { Boxes } from "./ui/shadcn-io/background-boxes";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const HomeSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <Boxes className="absolute inset-0 " />

      <div className="flex flex-col">
        <motion.div
          variants={textVariant(0.1)}
          initial="hidden"
          animate="show"
          className="relative top-5 px-6 w-[30%]"
        >
          <p className="sm:text-[18px] text-[14px]  uppercase tracking-wider">Introduction</p>
          <h2 className="sm:text-[45px] text-[30px] font-thin tracking-widest">
            Overview
          </h2>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "spring", 0.1, 0.6)}
          initial="hidden"
          animate="show"
          className="relative z-20  inset-0 top-[30px] left-[25px] w-[80%] flex flex-row items-end justify-center  mx-6 gap-8"
        >
          {/* <div className="relative z-20  inset-0 top-[30px] left-[20px] w-[80%] flex flex-row items-end justify-end  mx-6 gap-8"> */}
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-60 h-120 violet-gradient" />
          </div>

          <div className="flex flex-col w-auto bg-accent-foreground/40 rounded-4xl p-2">
            <p className="lg:text-[56px]  text-[30px] font-light tracking-wider">
              Hi, I'm <span className="text-[#915eff]">Tom</span>
            </p>
            <p className="mt-4  text-[17px] max-w-3xl leading-[30px]">
              Aspiring front-end developer with experience building and
              deploying full‑stack projects. Comfortable working with React,
              modern JavaScript, and Tailwind. I focus on delivering accessible,
              performant, and maintainable user interfaces. Seeking an
              entry‑level front‑end role where I can contribute to real products
              and continue growing my skills.
            </p>
          </div>
        </motion.div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default HomeSection;
