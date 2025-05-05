"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";


export function AppleCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));


  return (
    <section id="carousel" className="min-h-screen">
    <div className="w-full h-full py-20">
      <h2
        className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        My Projects
        <br></br>
        Get to know your Developer.
      </h2>
      
      <Carousel items={cards} />
    </div>
    </section>
  );
}

const MindStrongerContent = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <section className="max-w-3xl mx-auto">
        <h2 className="text-neutral-700 dark:text-neutral-200 text-2xl md:text-3xl font-bold mb-4">
          Why It Matters
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans">
          Men often face unique challenges when it comes to mental health. The social expectations to
          "tough it out," fewer support systems, and stigma around vulnerability. MindStronger was 
          created with one goal in mind, to make mental strength and emotional well being 
          accessible, relatable, and empowering for men.
          <br />
          <br />
          <strong>It’s not therapy. It’s training for your mind.</strong>
        </p>

        <img
          src="IMG_1057.JPG"
          alt="MindStronger MacBook mockup"
          height="500"
          width="500"
          className="md:w-1/2 h-auto w-full mx-auto rounded-3xl object-contain mt-8"
        />
      </section>

      <section className="max-w-3xl mx-auto mt-14">
        <h2 className="text-neutral-700 dark:text-neutral-200 text-2xl md:text-3xl font-bold mb-4">
          How It Was Built
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans">
          Every feature, color, font, and flow was carefully designed to feel approachable, masculine, 
          and action-driven — no fluff, just clarity, power, and purpose.
        </p>

        <h3 className="mt-8 text-neutral-700 dark:text-neutral-200 font-bold text-xl md:text-2xl">
          Tech Stack
        </h3>

        <ul className="mt-4 text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans list-disc list-inside">
          <li>
            <strong>Frontend:</strong> Built with React Native and TypeScript for a fast, responsive, cross-platform experience.
          </li>
          <li>
            Tailored UI using Aceternity UI and Tailwind CSS, designed to feel strong, clean, and minimal.
          </li>
          <li>
            <strong>Backend:</strong> Powered by Next.js, Drizzle ORM, and PostgreSQL for scalable and efficient data management.
          </li>
          <li>
            <strong>AI Integration:</strong> Uses the OpenAI API to deliver smart, context-aware journaling insights and personalized mental wellness coaching.
          </li>
          <li>
            <strong>Data & Security:</strong> User data is stored securely using Firebase, with real-time capabilities and a privacy-first architecture — so users always stay in control.
          </li>
        </ul>

        <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
          <img
            src="Journal.png"
            alt="MindStronger Journal mockup"
            height="100"
            width="100"
            className="w-1/4 min-w-[150px] h-auto object-contain rounded-3xl"
          />
          <img
            src="Home.png"
            alt="MindStronger Home mockup"
            height="100"
            width="100"
            className="w-1/4 min-w-[150px] h-auto object-contain rounded-3xl"
          />
          <img
            src="Challenge.png"
            alt="MindStronger Challenge mockup"
            height="100"
            width="100"
            className="w-1/4 min-w-[150px] h-auto object-contain rounded-3xl"
          />
        </div>
      </section>
    </div>
  );
};


const SeaSaverContent = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      {/* WHY IT MATTERS SECTION */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-neutral-700 dark:text-neutral-200 text-2xl md:text-3xl font-bold mb-4">
          Why It Matters
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans">
          Every year, millions of tons of plastic and waste end up in our oceans, threatening marine
          life and ecosystems. SeaSaver is an innovative mobile app that empowers volunteers to clean up
          sea garbage smarter. By combining real-world environmental action with gamified digital
          experiences and sponsor-backed rewards, SeaSaver turns ocean cleanup into a global movement.
          <br />
          <br />
          <strong>Clean oceans, one mission at a time.</strong>
        </p>

        <img
          src="Sea.JPG"
          alt="SeaSaver MacBook mockup"
          height="500"
          width="500"
          className="md:w-1/2 h-auto w-full mx-auto rounded-3xl object-contain mt-8"
        />
      </section>

      {/* HOW IT WAS BUILT SECTION */}
      <section className="max-w-3xl mx-auto mt-14">
        <h2 className="text-neutral-700 dark:text-neutral-200 text-2xl md:text-3xl font-bold mb-4">
          How It Was Built
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans">
          SeaSaver was built to be simple, motivating, and scalable — from user-friendly tracking
          to rewarding eco-actions with real impact.
        </p>

        <h3 className="mt-8 text-neutral-700 dark:text-neutral-200 font-bold text-xl md:text-2xl">
          Tech Stack
        </h3>

        <ul className="mt-4 text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans list-disc list-inside">
          <li>
            <strong>Frontend:</strong> Built with React Native and TypeScript for fast cross-platform development.
          </li>
          <li>
            Styled with Tailwind CSS and Preline for a clean, modern, and intuitive interface.
          </li>
          <li>
            <strong>Backend:</strong> Powered by Next.js, Drizzle ORM, and PostgreSQL for efficient, structured data handling.
          </li>
          <li>
            <strong>Gamification & AI:</strong> AI-powered challenge generation with OpenAI, plus a points and reward system.
          </li>
          <li>
            <strong>Database & Auth:</strong> Secure, real-time data management with Firebase and Neon for scalable user interactions.
          </li>
        </ul>

        <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
          <img
            src="SeaProfile.png"
            alt="SeaSaver Mission screen"
            height="100"
            width="100"
            className="w-1/4 min-w-[150px] h-auto object-contain rounded-3xl"
          />
          <img
            src="SeaHome.png"
            alt="SeaSaver Explore screen"
            height="100"
            width="100"
            className="w-1/4 min-w-[150px] h-auto object-contain rounded-3xl"
          />
          <img
            src="SeaGame.png"
            alt="SeaSaver Rewards screen"
            height="100"
            width="100"
            className="w-1/4 min-w-[150px] h-auto object-contain rounded-3xl"
          />
        </div>
      </section>
    </div>
  );
};

const AIExpenseTrackingContent = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <section className="max-w-3xl mx-auto">
        <h2 className="text-neutral-700 dark:text-neutral-200 text-2xl md:text-3xl font-bold mb-4">
          Why It Matters
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans">
          Managing finances can be overwhelming — from tracking daily expenses to setting realistic budgets and making smart decisions. Our AI-powered expense tracker was designed to simplify this process by combining clear visual insights with intelligent financial coaching.
          <br />
          <br />
          <strong>It's not just tracking — it's financial clarity powered by AI.</strong>
        </p>

        <img
          src="https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/b4/60/0e/b4600e6d-df1b-8573-f712-dfbb8b2fe23a/AppIcon-0-0-1x_U007emarketing-0-2-85-220.png/434x0w.webp"          alt="AI Expense Tracking App Dashboard"
          height="500"
          width="500"
          className="md:w-1/2 h-auto w-full mx-auto rounded-3xl object-contain mt-8"
        />
      </section>

      <section className="max-w-3xl mx-auto mt-14">
        <h2 className="text-neutral-700 dark:text-neutral-200 text-2xl md:text-3xl font-bold mb-4">
          How It Was Built
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans">
          Every interaction, chart, and recommendation was crafted to deliver financial empowerment. The design feels clean, trustworthy, and focused — giving users confidence in their financial decisions.
        </p>

        <h3 className="mt-8 text-neutral-700 dark:text-neutral-200 font-bold text-xl md:text-2xl">
          Tech Stack
        </h3>

        <ul className="mt-4 text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans list-disc list-inside">
          <li>
            <strong>Frontend:</strong> Built using React JS, Next.js, TailwindCSS, TypeScript, Preline, Tabler Icons, and Chadcn for a beautiful, accessible, and responsive interface.
          </li>
          <li>
            <strong>Backend:</strong> Powered by OpenAI API for personalized insights, with Neon Console and Drizzle ORM ensuring fast, scalable, and secure backend logic.
          </li>
          <li>
            <strong>Database:</strong> Relational database system ensures structured, consistent data for tracking expenses, budgets, and income in real time.
          </li>
        </ul>

        <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
          <img
            src="ETL.png"
            alt="Expense Table"
            height="100"
            width="100"
            className="w-1/4 min-w-[150px] h-auto object-contain rounded-3xl"
          />
          <img
            src="ET.png"
            alt="AI Personalized Advice"
            height="100"
            width="100"
            className="w-1/4 min-w-[150px] h-auto object-contain rounded-3xl"
          />
          <img
            src="Dash.png"
            alt="Budget Overview"
            height="100"
            width="100"
            className="w-1/4 min-w-[150px] h-auto object-contain rounded-3xl"
          />
        </div>
      </section>
    </div>
  );
};

const data = [
  {
    category: "MindStronger",
    title: "Because men need support too.",
    //src: "MeBigg.Png",
    src: "IMG_0419.jpg",
    content: <MindStrongerContent />,
  },
  {
    category: "SeaSaver",
    title: "Together we defend the blue planet.",
    src: "IMG_7886.png",
    content: <SeaSaverContent />,
  },
  {
    category: "Pawcket",
    title: "Your pet’s life, powered by tech.",
    src: "IMG_1050.JPG",
    content: <MindStrongerContent />,
  },

  {
    category: "Finance Tracker",
    title: "Real-time money moves, powered by AI.",
    src: "IMG_1052.JPG",
    content: <AIExpenseTrackingContent />,
  },
  {
    category: "Rooted",
    title: "Know more than you ever imagined.",
    src: "IMG_1054.JPG",
    content: <MindStrongerContent />,
  },
];

export default AppleCarousel;