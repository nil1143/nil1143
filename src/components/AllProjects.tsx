"use client";
import { fadeIn, textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getProjectsByCategory } from "@/constants";
import { ProjectCard } from "@/components/ProjectCard";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/components/ui/sidebar"; // Add this import

const AllProjects = () => {
  const [activeTab, setActiveTab] = useState("full-stack");
  const { open } = useSidebar(); // Get sidebar state

  const fullStackProjects = getProjectsByCategory("full-stack");
  const uiProjects = getProjectsByCategory("frontend");
  const gameProjects = getProjectsByCategory("games");

  // Dynamic grid: 1 col when sidebar open on tablet, 2 cols when closed
  const gridClasses = cn(
    "grid gap-6",
    open 
      ? "grid-cols-1 lg:grid-cols-2 xl:grid-cols-3" // 1 col on mobile/tablet, 3 on desktop
      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" // 1 on mobile, 2 on tablet, 3 on desktop
  );

  return (
    <section className="relative overflow-hidden min-h-screen pb-8">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
          "dark:opacity-50 opacity-30"
        )}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={textVariant(0.1)}
          initial="hidden"
          animate="show"
          className="relative top-5 px-6"
        >
          <p className="sm:text-[18px] text-[14px] uppercase tracking-wider">
            My Work
          </p>
          <h2 className="sm:text-[45px] text-[30px] font-extralight tracking-widest">
            Projects
          </h2>
        </motion.div>

        <motion.p
          variants={fadeIn("up", "spring", 0.4, 0.8)}
          initial="hidden"
          animate="show"
          className="px-6 mt-6 text-[17px] max-w-3xl leading-[30px]"
        >
          These projects showcase practical web apps I built and deployed. Each
          entry includes a brief description, a detailed README in the source
          repository, and a live demo — demonstrating problem solving and
          technical breadth.
        </motion.p>

        <motion.div
          variants={fadeIn("up", "spring", 0.6, 0.8)}
          initial="hidden"
          animate="show"
          className="mt-12 px-6"
        >
          <Tabs defaultValue="full-stack" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="full-stack">Full Stack</TabsTrigger>
              <TabsTrigger value="ui">Frontend</TabsTrigger>
              {/* <TabsTrigger value="game">Games</TabsTrigger> */}
            </TabsList>

            <TabsContent value="full-stack" className="mt-8">
              <div className={gridClasses}>
                {fullStackProjects.map((project, index) => (
                  <motion.div
                    key={project.slug}
                    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
                    initial="hidden"
                    animate="show"
                  >
                    <ProjectCard project={project} index={index} />
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ui" className="mt-8">
              <div className={gridClasses}>
                {uiProjects.map((project, index) => (
                  <motion.div
                    key={project.slug}
                    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
                    initial="hidden"
                    animate="show"
                  >
                    <ProjectCard project={project} index={index} />
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="game" className="mt-8">
              <div className={gridClasses}>
                {gameProjects.map((project, index) => (
                  <motion.div
                    key={project.slug}
                    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
                    initial="hidden"
                    animate="show"
                  >
                    <ProjectCard project={project} index={index} />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default AllProjects;
