"use client";

import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { Experience } from "@/types/experience";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === "dark";

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: isDark
          ? "linear-gradient(135deg, #1d1836 0%, #2a2147 50%, #3d2e5a 100%)"
          : "linear-gradient(135deg, #ffffff 0%, #f3f4f6 50%, #e5e7eb 100%)",
        color: isDark ? "#fff" : "#1a202c",
        boxShadow: isDark
          ? "0 10px 30px rgba(29, 24, 54, 0.5)"
          : "0 10px 30px rgba(0, 0, 0, 0.1)",
        border: "none",
        borderRadius: "16px",
        padding: "2rem",
      }}
      contentArrowStyle={{
        borderRight: isDark ? "7px solid #232631" : "7px solid #e5e7eb",
      }}
      date={experience.date}
      dateClassName={isDark ? "text-gray-300" : "text-gray-700"}
      iconStyle={{
        background: isDark
          ? "linear-gradient(135deg, #232631 0%, #3d2e5a 100%)"
          : "linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)",
        boxShadow: isDark
          ? "0 0 20px rgba(35, 38, 49, 0.6)"
          : "0 0 20px rgba(0, 0, 0, 0.1)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <Image
            width={60}
            height={60}
            src={experience.icon}
            alt={experience.company_name}
            className="rounded-full object-contain"
          />
        </div>
      }
    >
      <div className="mb-4">
        <h3 className="text-xl sm:text-2xl font-bold mb-2">
          {experience.company_name}
        </h3>
        <p className="text-sm sm:text-base font-semibold opacity-80">
          {experience.title}
        </p>
      </div>

      <ul className="list-disc list-outside ml-5 space-y-3">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-xs sm:text-sm leading-relaxed tracking-wider opacity-90"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;