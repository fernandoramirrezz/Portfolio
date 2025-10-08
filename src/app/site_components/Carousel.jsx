"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { TechCard } from "@/components/ui/tech-card";

// ==================== SOFTWARE ENGINEERING CAROUSEL ====================
export function SoftwareEngineeringCarousel() {
  const cards = softwareEngineeringData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section id="software-engineering" className="min-h-screen">
      <div className="w-full h-full py-20">
        <h2 className="max-w-7xl pl-4 mx-auto text-2xl md:text-5xl lg:text-6xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
          My Projects
          <br />
          Full-stack applications.
        </h2>
        <Carousel items={cards} />
      </div>
    </section>
  );
}

// ==================== UI/UX DESIGN CAROUSEL ====================
export function UIUXCarousel() {
  const cards = uiuxData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section id="ui-ux-design" className="min-h-screen ">
      <div className="w-full h-full ">
        <h2 className="max-w-7xl pl-4 mx-auto text-2xl md:text-5xl lg:text-6xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
          UI/UX Portfolio
          <br />
          Aesthetic, intuitive experiences.
        </h2>
        <Carousel items={cards} />
      </div>
    </section>
  );
}

// ==================== DATA ANALYSIS CAROUSEL ====================
export function DataAnalysisCarousel() {
  const cards = dataAnalysisData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section id="data-analysis" className="min-h-screen">
      <div className="w-full h-full">
        <h2 className="max-w-7xl pl-4 mx-auto text-2xl md:text-5xl lg:text-6xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
          Data Analysis Projects
          <br />
         Turning data into actionable insights.
        </h2>
        <Carousel items={cards} />
      </div>
    </section>
  );
}

// ==================== CONTENT COMPONENTS ====================

const StillContent = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <section className="max-w-3xl mx-auto">
        <h2 className="text-neutral-700 dark:text-neutral-200 text-2xl md:text-3xl font-bold mb-4">
          Why It Matters
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans">
          In a fast-paced world filled with distractions, finding moments of peace and spiritual
          connection can be challenging. Still is a scripture exploration app designed to help users
          discover, reflect on, and connect with biblical wisdom in a meaningful and accessible way.
          <br />
          <br />
          <strong>Find peace. Explore scripture. Grow spiritually.</strong>
        </p>

        <img
          src="iosIcon.png"
          alt="Still App MacBook mockup"
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
          Still was crafted with intention and care — every feature designed to create a serene,
          distraction-free experience that encourages daily reflection and spiritual growth.
        </p>

        <h3 className="mt-8 text-neutral-700 dark:text-neutral-200 font-bold text-xl md:text-2xl">
          Tech Stack
        </h3>
        <TechCard />
        <ul className="mt-4 text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans list-disc list-inside">
          <li>
            <strong>Frontend:</strong> Built with React Native and TypeScript for a smooth,
            cross-platform mobile experience.
          </li>
          <li>
            Designed with a calm, minimalist UI using Tailwind CSS and custom components that
            promote focus and tranquility.
          </li>
          <li>
            <strong>Backend:</strong> Powered by Next.js and PostgreSQL with Drizzle ORM for
            efficient scripture data management and user preferences.
          </li>
          <li>
            <strong>Scripture Integration:</strong> Integrates with Bible APIs to provide accurate,
            searchable scripture content across multiple translations.
          </li>
          <li>
            <strong>Features:</strong> Daily devotionals, personalized reading plans, verse bookmarking,
            and reflection journaling — all designed to deepen spiritual engagement.
          </li>
        </ul>

        <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
          <img src="1.png" alt="Still App Home screen" height="100" width="100" className="w-1/8 min-w-[150px] h-auto object-contain rounded-3xl" />
          <img src="2.png" alt="Still App Scripture Explorer" height="100" width="100" className="w-1/8 min-w-[150px] h-auto object-contain rounded-3xl" />
          <img src="3.png" alt="Still App Reflection Journal" height="100" width="100" className="w-1/8 min-w-[150px] h-auto object-contain rounded-3xl" />
          <img src="4.png" alt="Still App Home screen" height="100" width="100" className="w-1/8 min-w-[150px] h-auto object-contain rounded-3xl" />
          <img src="5.png" alt="Still App Scripture Explorer" height="100" width="100" className="w-1/8 min-w-[150px] h-auto object-contain rounded-3xl" />
          <img src="6.png" alt="Still App Reflection Journal" height="100" width="100" className="w-1/8 min-w-[150px] h-auto object-contain rounded-3xl" />
          <img src="7.png" alt="Still App Reflection Journal" height="100" width="100" className="w-1/8 min-w-[150px] h-auto object-contain rounded-3xl" />
        </div>
      </section>
    </div>
  );
};

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
          <strong>It's not therapy. It's training for your mind.</strong>
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
        <TechCard />
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
          <img src="Journal.png" alt="MindStronger Journal mockup" height="100" width="100" className="w-1/4 min-w-[150px] h-auto object-contain rounded-3xl" />
          <img src="Home.png" alt="MindStronger Home mockup" height="100" width="100" className="w-1/4 min-w-[150px] h-auto object-contain rounded-3xl" />
          <img src="Challenge.png" alt="MindStronger Challenge mockup" height="100" width="100" className="w-1/4 min-w-[150px] h-auto object-contain rounded-3xl" />
        </div>
      </section>
    </div>
  );
};

const PawcketContent = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <section className="max-w-3xl mx-auto">
        <h2 className="text-neutral-700 dark:text-neutral-200 text-2xl md:text-3xl font-bold mb-4">
          Why It Matters
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans">
          Pet owners juggle countless responsibilities — vet appointments, medication schedules, dietary needs, 
          and important health records. Pawcket is a comprehensive pet management app that centralizes all your 
          pet care needs in one intuitive platform, ensuring your furry friends get the best care possible.
          <br />
          <br />
          <strong>Your pet's life, organized and optimized.</strong>
        </p>

        <img
          src="pawcket.png"
          alt="Pawcket App mockup"
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
          Pawcket was designed with pet parents in mind — combining practical functionality with a 
          warm, friendly interface that makes pet care management feel effortless.
        </p>

        <h3 className="mt-8 text-neutral-700 dark:text-neutral-200 font-bold text-xl md:text-2xl">
          Tech Stack
        </h3>
        <TechCard />
        <ul className="mt-4 text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans list-disc list-inside">
          <li>
            <strong>Frontend:</strong> Built with React Native and TypeScript for seamless cross-platform experience.
          </li>
          <li>
            Modern UI design using Tailwind CSS with pet-friendly aesthetics and intuitive navigation.
          </li>
          <li>
            <strong>Backend:</strong> Powered by Next.js, Drizzle ORM, and PostgreSQL for reliable data management.
          </li>
          <li>
            <strong>Features:</strong> Health records, appointment reminders, medication tracking, vaccination schedules, and photo galleries.
          </li>
          <li>
            <strong>Cloud Storage:</strong> Firebase integration for secure storage of pet photos and documents.
          </li>
        </ul>

        <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
          <img src="pac.png" alt="Pawcket Dashboard" height="100" width="100" className="w-1/4 min-w-[150px] h-auto object-contain rounded-3xl" />
          <img src="paw.png" alt="Pawcket Health Records" height="100" width="100" className="w-1/4 min-w-[150px] h-auto object-contain rounded-3xl" />
          <img src="pawk.png" alt="Pawcket Reminders" height="100" width="100" className="w-1/4 min-w-[150px] h-auto object-contain rounded-3xl" />
        </div>
      </section>
    </div>
  );
};

const SeaSaverContent = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
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
        <TechCard />
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
          <img src="SeaProfile.png" alt="SeaSaver Mission screen" height="100" width="100" className="w-1/4 min-w-[150px] h-auto object-contain rounded-3xl" />
          <img src="SeaHome.png" alt="SeaSaver Explore screen" height="100" width="100" className="w-1/4 min-w-[150px] h-auto object-contain rounded-3xl" />
          <img src="SeaGame.png" alt="SeaSaver Rewards screen" height="100" width="100" className="w-1/4 min-w-[150px] h-auto object-contain rounded-3xl" />
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
          src="https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/b4/60/0e/b4600e6d-df1b-8573-f712-dfbb8b2fe23a/AppIcon-0-0-1x_U007emarketing-0-2-85-220.png/434x0w.webp"
          alt="AI Expense Tracking App Dashboard"
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
        <TechCard />
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
          <img src="ETL.png" alt="Expense Table" height="100" width="100" className="w-1/4 min-w-[150px] h-auto object-contain rounded-3xl" />
          <img src="ET.png" alt="AI Personalized Advice" height="100" width="100" className="w-1/4 min-w-[150px] h-auto object-contain rounded-3xl" />
          <img src="Dash.png" alt="Budget Overview" height="100" width="100" className="w-1/4 min-w-[150px] h-auto object-contain rounded-3xl" />
        </div>
      </section>
    </div>
  );
};

// ==================== UI/UX DESIGN CONTENT ====================

const MindStrongerDesignContent = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <section className="max-w-3xl mx-auto">
        <h2 className="text-neutral-700 dark:text-neutral-200 text-2xl md:text-3xl font-bold mb-4">
          Design Philosophy
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans">
          MindStronger's design needed to feel masculine yet approachable, strong yet supportive. 
          Every color, typeface, and interaction was chosen to remove barriers and make mental wellness 
          feel empowering rather than clinical.
          <br />
          <br />
          <strong>Designing for strength, clarity, and action.</strong>
        </p>

        <img
          src="mindUi.jpeg"
          alt="MindStronger Design System"
          height="500"
          width="500"
          className="md:w-1/2 h-auto w-full mx-auto rounded-3xl object-contain mt-8"
        />
      </section>

      <section className="max-w-3xl mx-auto mt-14">
        <h2 className="text-neutral-700 dark:text-neutral-200 text-2xl md:text-3xl font-bold mb-4">
          Design Process
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans">
          From initial user research to high-fidelity prototypes, every design decision was validated 
          through user testing and iterative refinement.
        </p>

        <h3 className="mt-8 text-neutral-700 dark:text-neutral-200 font-bold text-xl md:text-2xl">
          Key Design Elements
        </h3>
        <ul className="mt-4 text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans list-disc list-inside">
          <li>
            <strong>Color Psychology:</strong> Deep blues and grays to evoke trust, stability, and masculinity.
          </li>
          <li>
            <strong>Typography:</strong> Bold, sans-serif fonts that communicate strength and directness.
          </li>
          <li>
            <strong>Micro-interactions:</strong> Subtle animations that provide feedback without feeling juvenile.
          </li>
          <li>
            <strong>User Research:</strong> Conducted interviews with 20+ men to understand mental health stigmas.
          </li>
          <li>
            <strong>Accessibility:</strong> WCAG 2.1 AA compliant with high contrast ratios and readable font sizes.
          </li>
        </ul>

        <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
          <img src="Journal.png" alt="MindStronger Journal mockup" height="100" width="100" className="w-1/4 min-w-[150px] h-auto object-contain rounded-3xl" />
          <img src="Home.png" alt="MindStronger Home mockup" height="100" width="100" className="w-1/4 min-w-[150px] h-auto object-contain rounded-3xl" />
          <img src="Challenge.png" alt="MindStronger Challenge mockup" height="100" width="100" className="w-1/4 min-w-[150px] h-auto object-contain rounded-3xl" />
        </div>
      </section>
    </div>
  );
};

const SeaSaverDesignContent = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <section className="max-w-3xl mx-auto">
        <h2 className="text-neutral-700 dark:text-neutral-200 text-2xl md:text-3xl font-bold mb-4">
          Design Philosophy
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans">
          SeaSaver's design balances environmental urgency with gamified motivation. Ocean blues, 
          playful illustrations, and reward-driven interactions create an experience that makes 
          environmental action feel achievable and fun.
          <br />
          <br />
          <strong>Making ocean conservation engaging and rewarding.</strong>
        </p>

        <img
          src="seaUi.jpeg"
          alt="SeaSaver Design System"
          height="500"
          width="500"
          className="md:w-1/2 h-auto w-full mx-auto rounded-3xl object-contain mt-8"
        />
      </section>

      <section className="max-w-3xl mx-auto mt-14">
        <h2 className="text-neutral-700 dark:text-neutral-200 text-2xl md:text-3xl font-bold mb-4">
          Design Process
        </h2>

        <h3 className="mt-8 text-neutral-700 dark:text-neutral-200 font-bold text-xl md:text-2xl">
          Key Design Elements
        </h3>
        <ul className="mt-4 text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans list-disc list-inside">
          <li>
            <strong>Ocean-Inspired Palette:</strong> Vibrant blues, aquas, and sandy neutrals.
          </li>
          <li>
            <strong>Gamification UX:</strong> Progress bars, achievement badges, and leaderboards.
          </li>
          <li>
            <strong>Mission-Based Navigation:</strong> Clear CTAs that drive user action.
          </li>
          <li>
            <strong>Community Features:</strong> Social sharing, team challenges, and impact tracking.
          </li>
        </ul>

        <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
          <img src="SeaProfile.png" alt="SeaSaver Mission screen" height="100" width="100" className="w-1/4 min-w-[150px] h-auto object-contain rounded-3xl" />
          <img src="SeaHome.png" alt="SeaSaver Explore screen" height="100" width="100" className="w-1/4 min-w-[150px] h-auto object-contain rounded-3xl" />
          <img src="SeaGame.png" alt="SeaSaver Rewards screen" height="100" width="100" className="w-1/4 min-w-[150px] h-auto object-contain rounded-3xl" />
        </div>
      </section>
    </div>
  );
};

const StillDesignContent = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <section className="max-w-3xl mx-auto">
        <h2 className="text-neutral-700 dark:text-neutral-200 text-2xl md:text-3xl font-bold mb-4">
          Design Philosophy
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans">
          Still's design embodies tranquility and focus. Soft colors, generous whitespace, and calming 
          typography create a sanctuary for spiritual reflection. Every element removes distraction 
          and encourages mindfulness.
          <br />
          <br />
          <strong>Designing for peace, reflection, and spiritual growth.</strong>
        </p>

        <img
          src="stillcomponents.jpeg"
          alt="Still Design System"
          height="500"
          width="500"
          className="md:w-1/2 h-auto w-full mx-auto rounded-3xl object-contain mt-8"
        />
      </section>

      <section className="max-w-3xl mx-auto mt-14">
        <h2 className="text-neutral-700 dark:text-neutral-200 text-2xl md:text-3xl font-bold mb-4">
          Design Process
        </h2>

        <h3 className="mt-8 text-neutral-700 dark:text-neutral-200 font-bold text-xl md:text-2xl">
          Key Design Elements
        </h3>
        <ul className="mt-4 text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans list-disc list-inside">
          <li>
            <strong>Minimalist Interface:</strong> Generous whitespace and calming neutral tones.
          </li>
          <li>
            <strong>Readability First:</strong> Serif typography optimized for scripture reading.
          </li>
          <li>
            <strong>Contemplative Interactions:</strong> Slow, gentle animations that encourage reflection.
          </li>
          <li>
            <strong>Dark Mode:</strong> Thoughtfully designed for evening devotionals without eye strain.
          </li>
          <li>
            <strong>User Testing:</strong> Tested with faith communities to ensure respectful, meaningful experience.
          </li>
        </ul>

        <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
          <img src="IMG_1460.PNG" alt="Still Prototype" height="100" width="100" className="w-1/4 min-w-[150px] h-auto object-contain rounded-3xl" />
          <img src="stillapp.png"  alt="Still Wireframes" height="100" width="100" className="w-1/4 min-w-[150px] h-auto object-contain rounded-3xl" />
          <img src="IMG_1495.PNG" alt="Still Design System" height="100" width="100" className="w-1/4 min-w-[150px] h-auto object-contain rounded-3xl" />
        </div>
      </section>
    </div>
  );
};

// ==================== DATA ANALYSIS CONTENT ====================

const CustomerChurnAnalysisContent = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <section className="max-w-3xl mx-auto">
        <h2 className="text-neutral-700 dark:text-neutral-200 text-2xl md:text-3xl font-bold mb-4">
          Project Overview
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans">
          Analyzed customer behavior data for a SaaS company to identify churn patterns and predict 
          at-risk customers. Built predictive models that achieved 87% accuracy in identifying customers 
          likely to cancel within 30 days, enabling proactive retention strategies.
          <br />
          <br />
          <strong>Turning data into retention strategies.</strong>
        </p>

        <img
          src="churn-dashboard.png"
          alt="Customer Churn Analysis Dashboard"
          height="500"
          width="500"
          className="md:w-1/2 h-auto w-full mx-auto rounded-3xl object-contain mt-8"
        />
      </section>

      <section className="max-w-3xl mx-auto mt-14">
        <h2 className="text-neutral-700 dark:text-neutral-200 text-2xl md:text-3xl font-bold mb-4">
          Analysis Approach
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans">
          Combined exploratory data analysis, statistical testing, and machine learning to uncover 
          actionable insights from customer usage patterns.
        </p>

        <h3 className="mt-8 text-neutral-700 dark:text-neutral-200 font-bold text-xl md:text-2xl">
          Tools & Techniques
        </h3>
        <ul className="mt-4 text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans list-disc list-inside">
          <li>
            <strong>Python Stack:</strong> Pandas, NumPy, Scikit-learn for data processing and modeling.
          </li>
          <li>
            <strong>Visualization:</strong> Matplotlib, Seaborn, and Plotly for interactive dashboards.
          </li>
          <li>
            <strong>Statistical Analysis:</strong> Hypothesis testing, correlation analysis, and cohort analysis.
          </li>
          <li>
            <strong>Machine Learning:</strong> Random Forest and XGBoost models for churn prediction.
          </li>
          <li>
            <strong>Key Findings:</strong> Identified 5 critical features that predict churn with 87% accuracy.
          </li>
        </ul>

        <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
          <img src="churn-viz1.png" alt="Churn Rate by Cohort" height="100" width="100" className="w-1/4 min-w-[150px] h-auto object-contain rounded-3xl" />
          <img src="churn-viz2.png" alt="Feature Importance" height="100" width="100" className="w-1/4 min-w-[150px] h-auto object-contain rounded-3xl" />
          <img src="churn-viz3.png" alt="Predictive Model Results" height="100" width="100" className="w-1/4 min-w-[150px] h-auto object-contain rounded-3xl" />
        </div>
      </section>
    </div>
  );
};

const SalesPerformanceContent = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <section className="max-w-3xl mx-auto">
        <h2 className="text-neutral-700 dark:text-neutral-200 text-2xl md:text-3xl font-bold mb-4">
          Project Overview
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans">
          Built an interactive sales performance dashboard that tracks KPIs across regions, products, 
          and sales teams. Enabled executives to identify growth opportunities and underperforming 
          segments in real-time, resulting in a 15% increase in quarterly revenue.
          <br />
          <br />
          <strong>Data-driven sales optimization.</strong>
        </p>

        <img
          src="sales-dashboard.png"
          alt="Sales Performance Dashboard"
          height="500"
          width="500"
          className="md:w-1/2 h-auto w-full mx-auto rounded-3xl object-contain mt-8"
        />
      </section>

      <section className="max-w-3xl mx-auto mt-14">
        <h2 className="text-neutral-700 dark:text-neutral-200 text-2xl md:text-3xl font-bold mb-4">
          Analysis Approach
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans">
          Created a comprehensive ETL pipeline to consolidate data from multiple sources, then built 
          interactive visualizations for stakeholder decision-making.
        </p>

        <h3 className="mt-8 text-neutral-700 dark:text-neutral-200 font-bold text-xl md:text-2xl">
          Tools & Techniques
        </h3>
        <ul className="mt-4 text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans list-disc list-inside">
          <li>
            <strong>Data Integration:</strong> SQL for data extraction from CRM and ERP systems.
          </li>
          <li>
            <strong>Dashboard Tools:</strong> Tableau for interactive visualizations and drill-down analysis.
          </li>
          <li>
            <strong>Metrics Tracked:</strong> Revenue, conversion rates, sales cycle length, win rates.
          </li>
          <li>
            <strong>Time Series Analysis:</strong> Forecasting models to predict next quarter performance.
          </li>
          <li>
            <strong>Impact:</strong> Dashboard used daily by 50+ sales team members and executives.
          </li>
        </ul>

        <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
          <img src="sales-viz1.png" alt="Regional Performance" height="100" width="100" className="w-1/4 min-w-[150px] h-auto object-contain rounded-3xl" />
          <img src="sales-viz2.png" alt="Product Mix Analysis" height="100" width="100" className="w-1/4 min-w-[150px] h-auto object-contain rounded-3xl" />
          <img src="sales-viz3.png" alt="Sales Funnel Metrics" height="100" width="100" className="w-1/4 min-w-[150px] h-auto object-contain rounded-3xl" />
        </div>
      </section>
    </div>
  );
};

const SocialMediaSentimentContent = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <section className="max-w-3xl mx-auto">
        <h2 className="text-neutral-700 dark:text-neutral-200 text-2xl md:text-3xl font-bold mb-4">
          Project Overview
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans">
          Analyzed 500K+ social media posts to understand brand sentiment and identify emerging 
          customer pain points. Used natural language processing to categorize feedback themes, 
          providing actionable insights to product and marketing teams.
          <br />
          <br />
          <strong>Understanding customer voice at scale.</strong>
        </p>

        <img
          src="sentiment-dashboard.png"
          alt="Sentiment Analysis Dashboard"
          height="500"
          width="500"
          className="md:w-1/2 h-auto w-full mx-auto rounded-3xl object-contain mt-8"
        />
      </section>

      <section className="max-w-3xl mx-auto mt-14">
        <h2 className="text-neutral-700 dark:text-neutral-200 text-2xl md:text-3xl font-bold mb-4">
          Analysis Approach
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans">
          Collected data from Twitter, Reddit, and product review sites, then applied NLP techniques 
          to extract sentiment and topics at scale.
        </p>

        <h3 className="mt-8 text-neutral-700 dark:text-neutral-200 font-bold text-xl md:text-2xl">
          Tools & Techniques
        </h3>
        <ul className="mt-4 text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans list-disc list-inside">
          <li>
            <strong>Data Collection:</strong> Python APIs (Tweepy, PRAW) for social media scraping.
          </li>
          <li>
            <strong>NLP Pipeline:</strong> NLTK, spaCy, and TextBlob for sentiment classification.
          </li>
          <li>
            <strong>Topic Modeling:</strong> LDA (Latent Dirichlet Allocation) to identify discussion themes.
          </li>
          <li>
            <strong>Visualization:</strong> Word clouds, sentiment time series, and topic distribution charts.
          </li>
          <li>
            <strong>Insights Delivered:</strong> Identified 3 critical product issues that drove 40% of negative sentiment.
          </li>
        </ul>

        <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
          <img src="sentiment-viz1.png" alt="Sentiment Over Time" height="100" width="100" className="w-1/4 min-w-[150px] h-auto object-contain rounded-3xl" />
          <img src="sentiment-viz2.png" alt="Topic Distribution" height="100" width="100" className="w-1/4 min-w-[150px] h-auto object-contain rounded-3xl" />
          <img src="sentiment-viz3.png" alt="Word Cloud Analysis" height="100" width="100" className="w-1/4 min-w-[150px] h-auto object-contain rounded-3xl" />
        </div>
      </section>
    </div>
  );
};

const WebsiteTrafficContent = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <section className="max-w-3xl mx-auto">
        <h2 className="text-neutral-700 dark:text-neutral-200 text-2xl md:text-3xl font-bold mb-4">
          Project Overview
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans">
          Analyzed website traffic patterns and user behavior to optimize conversion rates. 
          Implemented A/B testing framework and identified funnel drop-off points, leading to 
          a 32% increase in sign-up conversion rate over 3 months.
          <br />
          <br />
          <strong>Optimizing digital experiences with data.</strong>
        </p>

        <img
          src="traffic-dashboard.png"
          alt="Website Traffic Analysis"
          height="500"
          width="500"
          className="md:w-1/2 h-auto w-full mx-auto rounded-3xl object-contain mt-8"
        />
      </section>

      <section className="max-w-3xl mx-auto mt-14">
        <h2 className="text-neutral-700 dark:text-neutral-200 text-2xl md:text-3xl font-bold mb-4">
          Analysis Approach
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans">
          Combined web analytics data with user session recordings and heatmaps to understand 
          user behavior and friction points throughout the customer journey.
        </p>

        <h3 className="mt-8 text-neutral-700 dark:text-neutral-200 font-bold text-xl md:text-2xl">
          Tools & Techniques
        </h3>
        <ul className="mt-4 text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans list-disc list-inside">
          <li>
            <strong>Analytics Platforms:</strong> Google Analytics 4, Mixpanel for event tracking.
          </li>
          <li>
            <strong>A/B Testing:</strong> Optimizely for controlled experiments on landing pages.
          </li>
          <li>
            <strong>Funnel Analysis:</strong> Identified 3 key drop-off points with 60%+ abandonment rates.
          </li>
          <li>
            <strong>Cohort Analysis:</strong> Tracked user retention and engagement patterns over time.
          </li>
          <li>
            <strong>SQL & Python:</strong> Custom queries for complex user journey analysis.
          </li>
        </ul>

        <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
          <img src="traffic-viz1.png" alt="Conversion Funnel" height="100" width="100" className="w-1/4 min-w-[150px] h-auto object-contain rounded-3xl" />
          <img src="traffic-viz2.png" alt="User Flow Diagram" height="100" width="100" className="w-1/4 min-w-[150px] h-auto object-contain rounded-3xl" />
          <img src="traffic-viz3.png" alt="A/B Test Results" height="100" width="100" className="w-1/4 min-w-[150px] h-auto object-contain rounded-3xl" />
        </div>
      </section>
    </div>
  );
};

// ==================== DATA ARRAYS ====================

const softwareEngineeringData = [
  {
    category: "Still",
    title: "Scripture Explore App.",
    src: "still.jpg",
    content: <StillContent />,
  },
  {
    category: "MindStronger",
    title: "Because men need support too.",
    src: "IMG_0419.jpg",
    content: <MindStrongerContent />,
  },
  {
    category: "Pawcket",
    title: "Your pet's life, powered by tech.",
    src: "IMG_1050.JPG",
    content: <PawcketContent />,
  },
  {
    category: "Finance Tracker",
    title: "Real-time money moves, powered by AI.",
    src: "IMG_1052.JPG",
    content: <AIExpenseTrackingContent />,
  },
  {
    category: "SeaSaver",
    title: "Together we defend the blue planet.",
    src: "IMG_7886.png",
    content: <SeaSaverContent />,
  },
];

const uiuxData = [
  {
    category: "Still Design",
    title: "Tranquil scripture exploration.",
    src: "StillUi.png",
    content: <StillDesignContent />,
  },
  {
    category: "MindStronger Design",
    title: "Masculine mental wellness UI/UX.",
    src: "mindstrongerUi.jpeg",
    content: <MindStrongerDesignContent />,
  },
  {
    category: "SeaSaver Design",
    title: "Gamifying ocean conservation.",
    src: "SeasaverUi.png",
    content: <SeaSaverDesignContent />,
  },
  
];

const dataAnalysisData = [
  {
    category: "Customer Churn Analysis",
    title: "Predicting customer retention with ML.",
    src: "churn-cover.jpg",
    content: <CustomerChurnAnalysisContent />,
  },
  {
    category: "Sales Performance Dashboard",
    title: "Real-time sales intelligence.",
    src: "sales-cover.jpg",
    content: <SalesPerformanceContent />,
  },
  {
    category: "Social Media Sentiment",
    title: "Understanding brand perception at scale.",
    src: "sentiment-cover.jpg",
    content: <SocialMediaSentimentContent />,
  },
  {
    category: "Website Traffic Optimization",
    title: "Data-driven conversion rate optimization.",
    src: "traffic-cover.jpg",
    content: <WebsiteTrafficContent />,
  },
];

// ==================== EXPORTS ====================

export { UIUXCarousel, DataAnalysisCarousel };
export default SoftwareEngineeringCarousel;