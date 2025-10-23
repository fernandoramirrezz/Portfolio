import React from "react";
import { Vortex } from "@/components/ui/vortex";

export function Header() {
  return (
    <div
      className="w-full mx-auto rounded-b-3xl  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          My Journey
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
        I've been dreaming on becoming a software engineer for 10+ years.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          
        </div>
      </Vortex>
    </div>
  );
}

export default Header;
