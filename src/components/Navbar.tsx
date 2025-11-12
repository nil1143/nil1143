"use client";

import React from "react";
import { SidebarTrigger, useSidebar } from "./ui/sidebar";
import { ModeSwitcher } from "./mode-switcher";
import { Button } from "./ui/button";
import { PanelLeftIcon } from "lucide-react";

const Navbar = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <nav className="p-4 flex items-center justify-between sticky top-0 bg-background z-10 px-5">
      <div className="flex space-x-4">
        <Button variant="outline" size="icon" onClick={toggleSidebar}>
          <PanelLeftIcon />
        </Button>
          <ModeSwitcher />
      </div>

      <div className="flex space-x-4">
        <p>LinkedIn</p>
        <p>GitHub</p>
      </div>
    </nav>
  );
};

export default Navbar;
