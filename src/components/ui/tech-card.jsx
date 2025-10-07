"use client";
import { animate, motion } from "motion/react";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  SiNextdotjs, SiJavascript, SiTailwindcss, SiTypescript, SiReact,
  SiOpenai, SiHtml5, SiGithub, SiPython, SiCss3
} from "react-icons/si";

export function TechCard() {
  return (
    <div className="w-[calc(100%-5rem)] mx-auto rounded-xl h-[30rem] overflow-hidden border border-[rgba(255,255,255,0.10)] p-8 bg-gray-100 dark:bg-[rgba(40,40,40,0.70)] shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]">
      <div className="h-[15rem] md:h-[20rem] rounded-xl bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)]  z-40">
        <Skeleton />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white py-2">
        My Tech Stack
      </h3>
      <p className="text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm">
        Tools and technologies I use to craft fast, modern, and beautiful products.
      </p>
    </div>
  );
}

const Skeleton = () => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const sequence = Array.from({ length: 10 }).map((_, i) => [
    `.circle-${i + 1}`,
    { scale, transform },
    { duration: 0.8 }
  ]);

  useEffect(() => {
    animate(sequence, { repeat: Infinity, repeatDelay: 1 });
  }, []);

  const icons = [
    <SiPython className="h-5 w-5 text-yellow-400" />,
    <SiOpenai className="h-5 w-5 text-black" />,
    <SiTypescript className="h-6 w-6 text-blue-600" />,
    <SiTailwindcss className="h-8 w-8 text-sky-400" />,
    <SiNextdotjs className="h-6 w-6 dark:text-white" />,
    <SiJavascript className="h-8 w-8 text-yellow-500" />,
    <SiReact className="h-5 w-5 text-cyan-500" />,
    <SiHtml5 className="h-5 w-5 text-orange-600" />,
    <SiGithub className="h-5 w-5 text-black" />,
    <SiCss3 className="h-5 w-5 text-blue-500" />
  ];

  return (
    <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row shrink-0 justify-center items-center gap-2">
        {icons.map((icon, i) => (
          <div
            key={i}
            className={`circle-${i + 1} h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]`}>
            {icon}
          </div>
        ))}
      </div>
      <div className="h-40 w-px absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
        <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
          <Sparkles />
        </div>
      </div>
    </div>
  );
};

const Sparkles = () => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-black dark:bg-white"
        ></motion.span>
      ))}
    </div>
  );
};
