"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function ExpenseTrackerDemo() {
  return (
    <div className="scale-90 md:scale-75 lg:scale-75 origin-top">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold text-black dark:text-white leading-tight">
              Unleash the power of <br />
              <span className="block text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mt-2 leading-none">
                Expense Tracking
              </span>
            </h1>
          </>
        }
      >
        <img
          src="Dash.png"
          alt="hero"
          className="w-full h-full object-cover object-left-top rounded-2xl"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

export default ExpenseTrackerDemo;
