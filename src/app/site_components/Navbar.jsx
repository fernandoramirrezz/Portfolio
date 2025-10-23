"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-nav";
import { IconHome, IconMessage, IconUser, IconTimeline } from "@tabler/icons-react";

export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "/#software-engineering",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/timeline",
      icon:
        <IconTimeline className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
   
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}


export default Navbar;