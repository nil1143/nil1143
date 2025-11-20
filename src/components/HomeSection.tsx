"use client";

import React from "react";
import { Boxes } from "./ui/shadcn-io/background-boxes";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { technologies } from "@/constants"; // Import technologies
import { FaLaptopCode } from "react-icons/fa";
import { Separator } from "./ui/separator";
// Define skills using your existing tech constants
const skills = {
  frontend: [
    technologies.react,
    technologies.javascript,
    technologies.nextjs,
    technologies.typescript,
    technologies.vite,
    technologies.tailwind,
    technologies.shadcn,
  ],
  backend: [
    technologies.nodejs,
    technologies.express,
    technologies.mongodb,
    technologies.postgresql,
    technologies.prisma,
  ],
  tools: [
    technologies.vscode,
    technologies.git,
    technologies.stripe,
    technologies.vercel,
    technologies.netlify,
  ],
};

const HomeSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <Boxes className="absolute inset-0" />

      <div className="flex flex-col z-20 px-4 mx-auto gap-8">
        {/* Introduction */}
        <motion.div
          variants={textVariant(0.1)}
          initial="hidden"
          animate="show"
          className="relative top-5 px-6 w-[25%]"
        >
          <p className="sm:text-[18px] text-[14px] uppercase tracking-wider">
            Introduction
          </p>
          <h2 className="sm:text-[45px] text-[30px] font-extralight tracking-widest">
            Overview
          </h2>
        </motion.div>

        {/* Main Intro Card */}
        <motion.div
          variants={fadeIn("left", "tween", 0.4, 0.8)}
          initial="hidden"
          animate="show"
          className="flex flex-row w-fit p-3 mx-8 my-12 gap-3 sm:gap-6 bg-background/50 backdrop-blur-xs rounded-4xl border border-border/50 items-center"
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-60 h-120 violet-gradient" />
          </div>

          <div className="flex flex-col w-auto gap-4 p-2">
            <p className="lg:text-[56px] text-[30px] font-light tracking-wider">
              Hi, I'm <span className="text-[#915eff]">Tom</span>
            </p>
            <p className="mt-2 text-[12px] sm:text-[17px] max-w-3xl leading-[30px]">
              Front-end developer with hands-on experience building and
              deploying full-stack applications using React, Next.js, and
              TypeScript. I specialize in creating accessible, performant user
              interfaces with modern tools like Tailwind CSS and shadcn/ui.
              Passionate about writing clean, maintainable code and delivering
              exceptional user experiences. Currently seeking opportunities to
              contribute to meaningful projects while growing alongside talented
              teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="group">
                <Link href="/projects" className="flex items-center gap-2">
                  View My Work
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="hover:dark:text-white"
              >
                <Link href="/experience" className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  Work Experience
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Skills Card - NEW */}
        <motion.div
          variants={fadeIn("right", "tween", 0.9, 0.8)}
          initial="hidden"
          animate="show"
          className="mx-8 mb-12 justify-end flex"
        >
          <Card className="max-w-2xl bg-background/50 backdrop-blur-xs rounded-4xl border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-light tracking-wider">
               <div className="flex items-center gap-4"><FaLaptopCode /> <div>Skills & Technologies</div></div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {/* <div className="flex flex-row gap-10"> */}
              {/* <div> */}
              {/* Frontend */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-muted-foreground">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-3 ">
                  {skills.frontend.map((tech) => {
                    const Icon = tech.icon;
                    return (
                      <div
                        key={tech.name}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs bg-gradient-to-br from-secondary/30 to-accent/10 dark:from-accent/20 dark:to-accent/5 border border-border/50 hover:from-accent/50 hover:to-accent/20 hover:dark:from-accent/50 hover:dark:to-accent/20 transition duration-700"
                      >
                        <Icon
                          className="h-4 w-4"
                          style={{ color: tech.color }}
                        />
                        {tech.name}
                      </div>
                    );
                  })}
                </div>
              </div>
                <Separator />

              {/* Backend */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-muted-foreground">
                  Backend
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.backend.map((tech) => {
                    const Icon = tech.icon;
                    return (
                      <div
                        key={tech.name}
                        className="flex items-center gap-2 px-3 py-2 text-xs rounded-lg bg-gradient-to-br from-secondary/30 to-accent/10 dark:from-accent/20 dark:to-accent/5 border border-border/50 hover:from-accent/50 hover:to-accent/20 hover:dark:from-accent/50 hover:dark:to-accent/20 transition duration-700"
                      >
                        <Icon
                          className="h-4 w-4"
                          style={{ color: tech.color }}
                        />
                        {tech.name}
                      </div>
                    );
                  })}
                </div>
              </div>
              <Separator />

              {/* Tools */}
              {skills.tools.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-muted-foreground">
                    Tools & Platforms
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((tech) => {
                      const Icon = tech.icon;
                      return (
                        <div
                          key={tech.name}
                          className="flex items-center gap-2 px-3 py-2 text-xs rounded-lg bg-gradient-to-br from-secondary/30 to-accent/10 dark:from-accent/20 dark:to-accent/5 border border-border/50 hover:from-accent/50 hover:to-accent/20 hover:dark:from-accent/50 hover:dark:to-accent/20 transition duration-700"
                        >
                          <Icon
                            className="h-4 w-4"
                            style={{ color: tech.color }}
                          />
                          {tech.name}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* </div> */}

              {/* <div className="flex flex-col justify-center items-center">
                <div className="w-1 sm:h-60 h-140 violet-gradient rotate-180 " />
                <div className="w-5 h-5 rounded-full bg-[#915eff]" />
              </div> */}
              {/* </div> */}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;
