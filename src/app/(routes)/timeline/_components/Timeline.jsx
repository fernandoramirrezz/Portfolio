import React from "react";
import { Timeline } from "@/components/ui/timeline";
import ExpenseTrackerDemo from "./FinanceTracker";
import LightSaber from "./LightSaber";
import AnimatedPinDemo from "./3d-Pin-Dev";
import MyRobot from "./myRobot";
import PlayStation from "./Playstation";
import Web from "./Website";
export function TimelineDemo() {
  const data = [
    
    
    {
  title: "Now 2025",
  content: (
    <div>
      <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
        Released <strong>Still - Scripture Explore App</strong> on iOS App Store — a tranquil scripture exploration app designed for daily reflection and spiritual growth.
      </p>
      <div className="grid grid-cols-3 gap-4 mb-8">
        <img
          src="/1.png"
          alt="Still App Home Screen"
          className="rounded-lg w-full h-auto object-cover shadow-md"
        />
        <img
          src="/2.png"
          alt="Still App Scripture Explorer"
          className="rounded-lg w-full h-auto object-cover shadow-md"
        />
         <video autoPlay muted loop>
            <source
              src="Still.mp4"
              type="video/mp4"
              className="rounded-lg w-full h-auto object-cover shadow-md"
            />
          </video>
      </div>
      <p className="text-xs font-normal text-neutral-600 md:text-sm dark:text-neutral-400">
        Features daily devotionals, personalized reading plans, and verse bookmarking — crafted with React Native, TypeScript, and Firebase.
      </p>
      <a 
        href="https://apps.apple.com/us/app/still-scripture-explore-app/id6753603287" 
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
      >
        View on App Store →
      </a>
    </div>
  ),
},

    {
      title: "Mid 2025",
      content: (
        <div>
          <p className="mb-12 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Built and launched an AI Expense Tracking App that gives users smart financial advice.
          </p>
          <div className="h-110 w-full rounded-lg object-cover">
            <ExpenseTrackerDemo />
          </div>
        </div>
      ),
    },

    {
      title: "Early 2025",
      content: (
        <div>
          <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Won my first hackathon at SparkHacks at Univeristy of Illinois at Chicago with our AI-powered environmental project SeaSavers.          </p>
          <div className="scale-80 h-120 w-full rounded-lg object-cover">
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
          
          <div >
            <Web />
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
            <div className="w-full scale-80">
              <img
                src="Laptop.png"
                alt="hero template"
                className="w-full h-auto rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
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
            
            <div >
              <div className="h-70 justify-center">
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
  
            
            <div >
              <PlayStation />
              </div>
          </div>
        ),
      },

  ];
  return (
    <section id="timeline" 
    className="w-[calc(100%-2rem)] mx-auto overflow-hidden "
    >
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
    </section>
  );
}

export default TimelineDemo;