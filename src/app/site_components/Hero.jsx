"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { FlipWords } from "@/components/ui/foot";
import { MapPin } from "lucide-react";
import SocialLinks from "./SocialLinks";

export function Hero() {
  const words = ["Software Engineer", "Full Stack Developer" ,"UI/UX"];

  return (
    <section id="home" className="w-[calc(100%)] mx-auto rounded-b-3xl h-[45rem] overflow-hidden">
      <div className="h-full rounded-b-xl bg-neutral-900 flex flex-col items-center justify-center relative w-full">
        <h1 className="z-10 text-center font-medium text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white">
          Fernando Ramirez
        </h1>

        <h2 className="z-10 text-center text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white mt-2">
          <FlipWords
            words={words}
            className="text-neutral-100 dark:text-neutral-100"
          />
        </h2>
        <div className="z-10 mt-5 flex items-center justify-center text-sm md:text-base text-neutral-400">
         <MapPin className="w-4 h-4 mr-1" />
       <span>Chicago, IL</span>
        </div>

        <ShootingStars />
        <StarsBackground />
      </div>
    </section>
  );
}

export default Hero;