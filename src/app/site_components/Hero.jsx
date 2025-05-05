"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import SocialLinks from "./SocialLinks";


export function Hero () {
    
  return (
    <section id="home" className="min-h-screen">
    <div className="min-h-screen h-full rounded-xl bg-neutral-900 flex flex-col items-center justify-center relative w-full">
        <h1 className="z-10 text-center font-medium text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white">
          Fernando Ramirez
        </h1>
        <p className="z-10 mt-2 text-white text-lg md:text-xl font-thin">x</p>
        <h2 className="z-10 text-center text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white mt-2">
          Software Engineer
        </h2>

      <ShootingStars />
      <StarsBackground />
      <div className="absolute inset-x-0 top-70 z-20 flex justify-center">
          <SocialLinks />
        </div>
    </div>
    </section>
  );
}
export default Hero;