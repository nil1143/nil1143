"use client";

import React from "react";
import { Boxes } from "./ui/shadcn-io/background-boxes";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const HomeSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <Boxes className="absolute inset-0" />

      <div className="flex flex-col z-20">
        <motion.div
          variants={textVariant(0.1)}
          initial="hidden"
          animate="show"
          className="relative top-5 px-6 w-[25%]"
        >
          <p className="sm:text-[18px] text-[14px]  uppercase tracking-wider">
            Introduction
          </p>
          <h2 className="sm:text-[45px] text-[30px] font-extralight tracking-widest">
            Overview
          </h2>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "spring", 0.4, 0.8)}
          initial="hidden"
          animate="show"
          className="flex flex-row w-fit p-3 mx-8 my-12 gap-8 bg-background/50 backdrop-blur-xs rounded-4xl border border-border/50 items-center"
        >
          {/* <div className="relative z-20  inset-0 top-[30px] left-[20px] w-[80%] flex flex-row items-end justify-end  mx-6 gap-8"> */}
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-60 h-120 violet-gradient" />
          </div>

          <div className="flex flex-col w-auto ">
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
