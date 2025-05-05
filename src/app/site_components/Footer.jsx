import React from "react";
import { FlipWords } from "@/components/ui/foot";

export function FlipWordsDemo() {
  const words = ["Creator", "Visionary", "Learner", "Engineer"];

  return (
    <div className="h-[20rem] flex justify-center items-center px-4 ">
      <div
        className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        I'm not only a coder
        <br />
        But a<FlipWords words={words}
        className="text-neutral-900 dark:text-neutral-100" />
      </div>
    </div>
  );
}

export default FlipWordsDemo;
