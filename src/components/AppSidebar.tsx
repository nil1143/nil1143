"use client";

import { usePathname } from "next/navigation";
import {
  Home,
  CodeXml,
  Briefcase,
  ChevronDown,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator,
} from "./ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { projects, getProjectsByCategory } from "@/constants";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Work Experience",
    url: "/experience",
    icon: Briefcase,
  },
];

const AppSidebar = () => {
  const pathname = usePathname();

  // Get projects by category
  const fullStackProjects = getProjectsByCategory("full-stack");
  const uiProjects = getProjectsByCategory("ui");
  const gameProjects = getProjectsByCategory("games");

  // Check if any project in category is active
  const isFullStackOpen = fullStackProjects.some(
    (project) => pathname === `/projects/${project.slug}`
  );
  const isUIProjectsOpen = uiProjects.some(
    (project) => pathname === `/projects/${project.slug}`
  );
  const isGamesOpen = gameProjects.some(
    (project) => pathname === `/projects/${project.slug}`
  );

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Image src="/logo.png" alt="logo" width={20} height={20} />
              <span className="ml-2">Tom&apos;s Portfolio</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarSeparator />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.url}>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Projects */}
        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === "/projects"}>
                <Link href="/projects">
                  <CodeXml />
                  <span>All Projects</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>

          {/* Collapsible Full Stack */}
          {fullStackProjects.length > 0 && (
            <Collapsible defaultOpen={isFullStackOpen} className="group/collapsible">
              <SidebarGroup>
                <SidebarGroupLabel asChild>
                  <CollapsibleTrigger>
                    Full Stack Projects
                    <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                  </CollapsibleTrigger>
                </SidebarGroupLabel>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {fullStackProjects.map((project) => (
                      <SidebarMenuSubItem key={project.slug}>
                        <SidebarMenuSubButton
                          asChild
                          isActive={pathname === `/projects/${project.slug}`}
                        >
                          <Link href={`/projects/${project.slug}`} className="text-xs">
                            {project.name}
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarGroup>
            </Collapsible>
          )}

          {/* Collapsible UI Projects */}
          {uiProjects.length > 0 && (
            <Collapsible defaultOpen={isUIProjectsOpen} className="group/collapsible">
              <SidebarGroup>
                <SidebarGroupLabel asChild>
                  <CollapsibleTrigger>
                    UI Projects
                    <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                  </CollapsibleTrigger>
                </SidebarGroupLabel>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {uiProjects.map((project) => (
                      <SidebarMenuSubItem key={project.slug}>
                        <SidebarMenuSubButton
                          asChild
                          isActive={pathname === `/projects/${project.slug}`}
                        >
                          <Link href={`/projects/${project.slug}`} className="text-xs">
                            {project.name}
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarGroup>
            </Collapsible>
          )}

          {/* Collapsible Games */}
          {gameProjects.length > 0 && (
            <Collapsible defaultOpen={isGamesOpen} className="group/collapsible">
              <SidebarGroup>
                <SidebarGroupLabel asChild>
                  <CollapsibleTrigger>
                    Games
                    <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                  </CollapsibleTrigger>
                </SidebarGroupLabel>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {gameProjects.map((project) => (
                      <SidebarMenuSubItem key={project.slug}>
                        <SidebarMenuSubButton
                          asChild
                          isActive={pathname === `/projects/${project.slug}`}
                        >
                          <Link href={`/projects/${project.slug}`} className="text-xs">
                            {project.name}
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarGroup>
            </Collapsible>
          )}
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
