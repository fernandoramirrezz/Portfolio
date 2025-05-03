"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";

export function Sparkle() {
  return (
    <div
      className="h-[30rem] w-full  bg-neutral-900 flex flex-col items-center justify-center overflow-hidden rounded-xl">
      <h1
        className=" md:text-4xl top-15 text-2xl lg:text-6xl font-bold text-center text-white relative z20">
        Creator first. Coder second.
      </h1>
      <div className="w-[40rem] h-40 relative top-15">
        {/* Gradients */}
        <div
          className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div
          className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div
          className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div
          className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF" />

        <div
          className="absolute inset-0 w-full h-full  bg-neutral-900 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
 export default Sparkle;