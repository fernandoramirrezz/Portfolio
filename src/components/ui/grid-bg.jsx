import { cn } from "@/lib/utils";
import React from "react";
import { TechCard } from "./tech-card";
import { BackgroundBeamsWithCollision } from "./bg-beam";

export function DotBackground() {
  return (
    <div className="relative w-full bg-white dark:bg-[#0a0a0a] overflow-hidden">
      {/* Dot Grid Background */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />

      {/* Radial Gradient Mask */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-white dark:bg-[#0a0a0a] [mask-image:radial-gradient(ellipse_at_center,rgba(0,0,0,0)_20%,rgba(0,0,0,1)_70%)]" />

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-start px-4 pt-16 pb-24 gap-10">
        
        <TechCard />

  
      </div>
    </div>
  );
}

