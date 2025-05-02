import React from "react";
import { Timeline } from "@/components/ui/timeline";
import ExpenseTrackerDemo from "./FinanceTracker";
import LightSaber from "./LightSaber";
import AnimatedPinDemo from "./3d-Pin-Dev";
import MyRobot from "./myRobot";

export function TimelineDemo() {
  const data = [
    
    {
      title: "Now 2025",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Built and launched an AI Expense Tracking App that gives users smart financial advice.
          </p>
          <div className="h-150 w-full rounded-lg object-cover">
            <ExpenseTrackerDemo />
          </div>
        </div>
      ),
    },

    {
      title: "Early 2025",
      content: (
        <div>
          <p className="mb-1 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Won my first hackathon at SparkHacks at Univeristy of Illinois at Chicago with our AI-powered environmental project SeaSavers.          </p>
          <div className="h-120 w-full rounded-lg object-cover">
            <AnimatedPinDemo />
          </div>
        </div>
      ),
    },

    {
      title: "2024",
      content: (
        <div>
          <p className="mb-20 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Built my own Lightsaber component — an interactive React animation you can try out on this page right now!
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-50 w-full rounded-lg object-cover justify-center">
              <LightSaber />
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "2023",
      content: (
        <div>
          <p
            className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Built my very first website — it wasn’t perfect, but it sparked a passion for frontend development and UI/UX
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
             </div>
        </div>
      ),
    },

      {
        title: "2022",
        content: (
          <div>
            <p
              className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
              Took my first deep dive into HTML, CSS, and JavaScript.
            </p>
            <p
              className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
              Started following online coding tutorials and built mini-projects like calculators, to-do lists, and weather pages. Realized how powerful building for the web could be and set a goal to launch my own design system one day.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="Codedex.png"
                alt="hero template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
               </div>
          </div>
        ),
      },
      
      {
        title: "2018",
        content: (
          <div>
            <p
              className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                Joined the Robotics Club in high school.
                </p>
                <p
              className="mb-10 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Built and programmed robots to compete in regional competitions.
              </p>  
            
            <div className="grid grid-cols-2 gap-4">
              <div className="h-70 w-full rounded-lg object-cover">
                <MyRobot />
              </div>
            </div>
          </div>
        ),
      },

      {
        title: "2010",
        content: (
          <div>
            <p
              className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                Fell in love with technology and how it all worked.
                </p>
                <p
              className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Grew up with a PlayStation 2, PSP, and GameBoy, spending hours exploring digital worlds.
              </p>  
              <p
              className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
              That curiosity turned into a lifelong passion to build my own tech someday.          
            </p>
  
            
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://assets.aceternity.com/pro/hero-sections.png"
                alt="hero template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
              <img
                src="https://assets.aceternity.com/pro/hero-sections.png"
                alt="hero template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
              
              </div>
          </div>
        ),
      },

  ];
  return (
    <section id="timeline" className="min-h-screen">
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
    </section>
  );
}

export default TimelineDemo;