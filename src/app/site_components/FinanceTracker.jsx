"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function ExpenseTrackerDemo() {
  return (
    <div className="scale-70 origin-top">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-xl md:text-4xl font-semibold text-black dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Expense Tracking
              </span>
            </h1>
          </>
        }>
        <img
            src="Dash.png"
            alt="hero"
          className="w-full h-full object-cover object-left-top rounded-2xl"
          draggable={false} />
      </ContainerScroll>
    </div>
  );
}
export default ExpenseTrackerDemo;