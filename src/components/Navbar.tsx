"use client";

import React from "react";
import { useSidebar } from "./ui/sidebar";
import { ModeSwitcher } from "./mode-switcher";
import { Button } from "./ui/button";
import { PanelLeftIcon } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Linkedin, Github } from "lucide-react";

const Navbar = () => {
  const { toggleSidebar } = useSidebar();
  const pathname = usePathname();

  // Generate breadcrumb items from pathname
  const generateBreadcrumbs = () => {
    // Handle Dashboard routes
    if (pathname === "/") {
      return [
        { label: "Dashboard", href: "/" },
        { label: "Home", href: "/", isLast: true },
      ];
    }

    if (pathname === "/experience") {
      return [
        { label: "Dashboard", href: "/" },
        { label: "Work Experience", href: "/experience", isLast: true },
      ];
    }

    if (pathname === "/contact") {
      return [
        { label: "Dashboard", href: "/" },
        { label: "Contact", href: "/contact", isLast: true },
      ];
    }

    // Handle Projects routes
    if (pathname === "/projects") {
      return [
        { label: "Projects", href: "/projects" },
        { label: "All Projects", href: "/projects", isLast: true },
      ];
    }

    if (pathname.startsWith("/projects/")) {
      const projectSlug = pathname.split("/")[2];
      const projectName = projectSlug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      return [
        { label: "Projects", href: "/projects" },
        { label: "All Projects", href: "/projects" },
        { label: projectName, href: `/projects/${projectSlug}`, isLast: true },
      ];
    }

    // Default fallback
    return [{ label: "Dashboard", href: "/", isLast: true }];
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <nav className="p-4 flex items-center justify-between sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="icon"
          className="hover:dark:text-white"
          onClick={toggleSidebar}
        >
          <PanelLeftIcon className="h-4 w-4" />
        </Button>
        <ModeSwitcher />
      </div>
      <Breadcrumb className="mx-2 ">
        <BreadcrumbList className="text-sm sm:text-base">
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={`${crumb.href}-${index}`}>
              <BreadcrumbItem>
                {crumb.isLast ? (
                  <BreadcrumbPage className="text-xs sm:text-sm">
                    {crumb.label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={crumb.href} className="text-xs sm:text-sm">
                      {crumb.label}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {index < breadcrumbs.length - 1 && (
                <BreadcrumbSeparator className="text-xs sm:text-sm" />
              )}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>

      <div className="hidden sm:flex items-center gap-4">
        <Link
          href="https://github.com/nil1143"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm hover:text-primary transition-colors "
        >
          <Button
            variant="outline"
            size="icon"
            className="p-0.5 hover:dark:text-white"
          >
            <Github />
          </Button>
        </Link>
        <Link
          href="https://www.linkedin.com/in/tomasz-nilipiuk-b5b88a239/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm hover:text-primary transition-colors "
        >
          <Button
            variant="outline"
            size="icon"
            className="p-0.5 hover:dark:text-white"
          >
            <Linkedin />
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
