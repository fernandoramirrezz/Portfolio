"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";

export function AnimatedPinDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer title="SeaSaver" href="https://devpost.com/software/seasaver">
        <div
          className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            SeaSaver App
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
            Tracks polution data and rewards ocean cleanup efforts through rewards.
            </span>
          </div>
          <div
            className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-blue-900 via-blue-500 to-blue-400" />
            <img
            src="turtle.png"
              width={50}
              height={50}
             className="absolute top-60 left-1/4 transform -translate-x-1/2"
            />          
        </div>
      </PinContainer>
    </div>
  );
}
export default AnimatedPinDemo;