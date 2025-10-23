"use client";

import React from "react";
import { useState, useEffect, useRef } from 'react';
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { TechCard } from "@/components/ui/tech-card";
import { StarsBackground } from "@/components/ui/stars-background";
import { CometCardDemo } from "@/components/CometCard";
import { LensDemoThird } from "@/components/zoomLens";
import { SparklesCore } from "@/components/ui/sparkles";



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

// ==================== UI/UX CASE STUDY COMPONENTS ====================

const MindStrongerDesignContent = () => {
  return (
<div className="min-h-screen bg-white dark:bg-[#0f0f12] text-black dark:text-white transition-colors duration-300">   
      <section className="max-w-7xl mx-auto px-10 py-32 pt-70 ">
        <div className="max-w-4xl">
          {/* Main title - Athletic serif font */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl mb-12" style={{fontFamily: 'Georgia, serif', fontWeight: 300, lineHeight: 1}}>
            MindStronger
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mb-16" style={{fontFamily: 'system-ui, -apple-system, sans-serif'}}>
            An innovative mental wellness application designed specifically for men, reframing mental health through strength-based, action-oriented design principles to make seeking support feel empowering rather than clinical.
          </p>

          {/* Meta info grid - Athletic style */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/10">
            <div>
              <p className="text-black/40 dark:text-white/40 mb-2">Role</p>
              <p className="font-medium">Designer & Developer</p>
            </div>
            <div>
              <p className="text-black/40 dark:text-white/40 mb-2">Duration</p>
              <p className="font-medium">3 Months</p>
            </div>
            <div>
              <p className="text-black/40 dark:text-white/40 mb-2">Wireframe</p>
              <img src="figma.png" alt="Figma" className="h-8  rounded-lg" />
            </div>
            <div>
              <p className="text-black/40 dark:text-white/40 mb-2">Areas</p>
              <p className="font-medium">Research, Strategy, Design</p>
            </div>
          </div>
        </div>
      </section>


      {/* Overview */}
      <section className="max-w-7xl mx-auto px-8 py-32">
        <div className="space-y-24">
          <div>
            <p className="text-sm tracking-wider mb-4 text-black/40 dark:text-white/40">01/ OVERVIEW</p>
            <p className="text-3xl md:text-4xl font-light leading-relaxed">
              MindStronger <span className="text-black/40 dark:text-white/40">is an innovative application that enables users to</span> manage mental wellness <span className="text-black/40 dark:text-white/40">through</span> strength-based design.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-black max-w-7xl mx-auto px-8 py-32 border-t border-black/5 dark:border-white/5">
        <p className="text-sm tracking-wider mb-8 text-black/40 dark:text-white/40">02/ THE PROBLEM</p>
        <h2 className="text-5xl md:text-6xl font-light mb-12">
          The Challenge
        </h2>
        <div className="space-y-6 text-lg leading-relaxed text-black/60 dark:text-white/60">
          <p>
            Men are 3-4x less likely to seek mental health support than women. They face unique barriers including social stigma around vulnerability, existing wellness apps that feel too clinical or feminine, and fear of judgment from peers and family.
          </p>
          <div className="pt-8">
            <div className="rounded-2xl p-8 bg-black/5 dark:bg-white/5">
              <p className="text-2xl font-light">
                How might we make mental wellness feel empowering rather than clinical?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="max-w-7xl mx-auto px-8 py-32 border-t border-black/5 dark:border-white/5">
        <p className="text-sm tracking-wider mb-8 text-black/40 dark:text-white/40">03/ RESEARCH</p>
        <h2 className="text-5xl md:text-6xl font-light mb-12">
          Key Insights
        </h2>
        
        <div className="space-y-8 mb-16">
          <div className="border-l-2 border-black dark:border-white pl-6">
            <p className="text-lg leading-relaxed">
              Men responded to "mental reps" vs "emotional check-ins"
            </p>
          </div>
          <div className="border-l-2 border-black dark:border-white pl-6">
            <p className="text-lg leading-relaxed">
              Privacy was non-negotiable. Fear of data leaks or social sharing
            </p>
          </div>
          <div className="border-l-2 border-black dark:border-white pl-6">
            <p className="text-lg leading-relaxed">
              They preferred action over reflection. Wanted tangible progress
            </p>
          </div>
        </div>

        <img
          src="mindUi.jpeg"
          alt="Research findings"
          className="w-full h-auto rounded-2xl"
        />
      </section>

      {/* Wireframes */}
      <section className="max-w-7xl mx-auto px-8 py-32 border-t border-black/5 dark:border-white/5">
        <p className="text-sm tracking-wider mb-8 text-black/40 dark:text-white/40">WIREFRAMES</p>
        <h2 className="text-5xl md:text-6xl font-light mb-12">
          Early Explorations
        </h2>
        <p className="text-lg mb-16 max-w-3xl text-black/60 dark:text-white/60">
          Starting with low-fidelity wireframes to explore information architecture and user flows before committing to visual design.
        </p>

        {/* Wireframe Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {/* Wireframe 1 */}
          <div className="rounded-xl p-6 border bg-gray-50 dark:bg-white/5 border-black/5 dark:border-white/5">
            <div className="space-y-4">
              <div className="h-2 w-16 rounded bg-black/10 dark:bg-white/10"></div>
              <div className="space-y-2">
                <div className="h-1.5 w-full rounded bg-black/10 dark:bg-white/10"></div>
                <div className="h-1.5 w-3/4 rounded bg-black/10 dark:bg-white/10"></div>
              </div>
              <div className="aspect-square rounded-lg flex items-center justify-center bg-black/5 dark:bg-white/5">
                <div className="w-16 h-16 border-2 rounded-full border-black/10 dark:border-white/10"></div>
              </div>
              <div className="space-y-2">
                <div className="h-1.5 w-full rounded bg-black/10 dark:bg-white/10"></div>
                <div className="h-1.5 w-5/6 rounded bg-black/10 dark:bg-white/10"></div>
              </div>
            </div>
          </div>

          {/* Wireframe 2 */}
          <div className="rounded-xl p-6 border bg-gray-50 dark:bg-white/5 border-black/5 dark:border-white/5">
            <div className="space-y-4">
              <div className="h-2 w-16 rounded bg-black/10 dark:bg-white/10"></div>
              <div className="grid grid-cols-2 gap-2">
                <div className="aspect-square rounded bg-black/5 dark:bg-white/5"></div>
                <div className="aspect-square rounded bg-black/5 dark:bg-white/5"></div>
              </div>
              <div className="space-y-2">
                <div className="h-1.5 w-full rounded bg-black/10 dark:bg-white/10"></div>
                <div className="h-1.5 w-4/5 rounded bg-black/10 dark:bg-white/10"></div>
                <div className="h-1.5 w-3/5 rounded bg-black/10 dark:bg-white/10"></div>
              </div>
            </div>
          </div>

          {/* Wireframe 3 */}
          <div className="rounded-xl p-6 border bg-gray-50 dark:bg-white/5 border-black/5 dark:border-white/5">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="h-2 w-12 rounded bg-black/10 dark:bg-white/10"></div>
                <div className="h-6 w-6 rounded-full bg-black/5 dark:bg-white/5"></div>
              </div>
              <div className="space-y-3">
                <div className="h-12 rounded-lg bg-black/5 dark:bg-white/5"></div>
                <div className="h-12 rounded-lg bg-black/5 dark:bg-white/5"></div>
                <div className="h-12 rounded-lg bg-black/5 dark:bg-white/5"></div>
              </div>
            </div>
          </div>

          {/* Wireframe 4 */}
          <div className="rounded-xl p-6 border bg-gray-50 dark:bg-white/5 border-black/5 dark:border-white/5">
            <div className="space-y-4">
              <div className="h-2 w-16 rounded bg-black/10 dark:bg-white/10"></div>
              <div className="aspect-[4/3] rounded-lg bg-black/5 dark:bg-white/5"></div>
              <div className="space-y-2">
                <div className="h-1.5 w-full rounded bg-black/10 dark:bg-white/10"></div>
                <div className="h-1.5 w-11/12 rounded bg-black/10 dark:bg-white/10"></div>
                <div className="h-1.5 w-4/5 rounded bg-black/10 dark:bg-white/10"></div>
              </div>
              <div className="h-8 rounded-lg bg-black/10 dark:bg-white/10"></div>
            </div>
          </div>
        </div>

        <div className="border-l-2 border-black dark:border-white pl-6">
          <p className="leading-relaxed text-black/60 dark:text-white/60">
            These wireframes helped validate core user flows with stakeholders before investing in high-fidelity designs. Focus was placed on information hierarchy and intuitive navigation patterns.
          </p>
        </div>
      </section>

      {/* Before & After */}
      <section className="max-w-7xl mx-auto px-8 py-32 border-t border-black/5 dark:border-white/5">
        <p className="text-sm tracking-wider mb-8 text-black/40 dark:text-white/40">05/ TRANSFORMATION</p>
        <h2 className="text-5xl md:text-6xl font-light mb-16">
          Before & After
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="mb-6">
              <span className="text-sm tracking-wider text-black/40 dark:text-white/40">BEFORE</span>
            </div>
            <div className="rounded-2xl aspect-[9/16] mb-6 flex items-center justify-center bg-black/5 dark:bg-white/5">
              <p className="text-sm text-black/20 dark:text-white/20">Clinical interface</p>
            </div>
            <ul className="space-y-3 text-black/60 dark:text-white/60">
              <li>Felt too clinical and feminine</li>
              <li>Used vulnerable emotional language</li>
              <li>Social features felt invasive</li>
            </ul>
          </div>

          <div>
            <div className="mb-6">
              <span className="text-sm tracking-wider text-black/40 dark:text-white/40">AFTER</span>
            </div>
            <div className="rounded-2xl overflow-hidden mb-6 shadow-lg">
              <img src="Home.png" alt="After Design" className="w-full h-auto" />
            </div>
            <ul className="space-y-3">
              <li>Masculine yet approachable design</li>
              <li>Action-oriented language</li>
              <li>Privacy-first approach</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="max-w-7xl mx-auto px-8 py-32 border-t border-black/5 dark:border-white/5">
        <p className="text-sm tracking-wider mb-8 text-black/40 dark:text-white/40">06/ SOLUTION</p>
        <h2 className="text-5xl md:text-6xl font-light mb-16">
          Design Approach
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="space-y-3">
            <p className="font-medium">Action-Oriented</p>
            <p className="text-sm text-black/60 dark:text-white/60">"Log mental reps" instead of "journal feelings"</p>
          </div>
          <div className="space-y-3">
            <p className="font-medium">Progress Tracking</p>
            <p className="text-sm text-black/60 dark:text-white/60">Streak counters and visual dashboards</p>
          </div>
          <div className="space-y-3">
            <p className="font-medium">Privacy-First</p>
            <p className="text-sm text-black/60 dark:text-white/60">No social features, complete control</p>
          </div>
        </div>

        <div className="flex gap-6 justify-center flex-wrap">
          <img src="Journal.png" alt="Journal" className="w-56 h-auto rounded-2xl shadow-lg" />
          <img src="Home.png" alt="Home" className="w-56 h-auto rounded-2xl shadow-lg" />
          <img src="Challenge.png" alt="Challenge" className="w-56 h-auto rounded-2xl shadow-lg" />
        </div>
      </section>

      {/* Results */}
      <section className="max-w-7xl mx-auto px-8 py-32 border-t border-black/5 dark:border-white/5">
        <p className="text-sm tracking-wider mb-8 text-black/40 dark:text-white/40">07/ IMPACT</p>
        <h2 className="text-5xl md:text-6xl font-light mb-16">
          Results
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="text-center">
            <p className="text-6xl font-light mb-3">85%</p>
            <p className="text-sm text-black/60 dark:text-white/60">Said app felt "designed for them"</p>
          </div>
          <div className="text-center">
            <p className="text-6xl font-light mb-3">75%</p>
            <p className="text-sm text-black/60 dark:text-white/60">Daily completion rate</p>
          </div>
          <div className="text-center">
            <p className="text-6xl font-light mb-3">95%</p>
            <p className="text-sm text-black/60 dark:text-white/60">Accessibility score</p>
          </div>
        </div>

        <div className="border-l-2 border-black dark:border-white pl-6 py-6">
          <p className="text-xl font-light italic mb-4">
            "This is the first mental health app that doesn't make me feel weak. It feels like I'm working on myself, not fixing something broken."
          </p>
          <p className="text-sm text-black/40 dark:text-white/40">Beta tester, age 28</p>
        </div>
      </section>

      {/* Learnings */}
      <section className="max-w-7xl mx-auto px-8 py-32 pb-40 border-t border-black/5 dark:border-white/5">
        <p className="text-sm tracking-wider mb-8 text-black/40 dark:text-white/40">08/ LEARNINGS</p>
        <h2 className="text-5xl md:text-6xl font-light mb-16">
          Key Takeaways
        </h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-light mb-3">
              Design language shapes behavior
            </h3>
            <p className="leading-relaxed text-black/60 dark:text-white/60">
              Changing "journal" to "log mental reps" removed psychological barriers without changing functionality
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-light mb-3">
              Accessibility benefits everyone
            </h3>
            <p className="leading-relaxed text-black/60 dark:text-white/60">
              High contrast and readable fonts improved experience for all users, not just those with disabilities
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-light mb-3">
              Less is more
            </h3>
            <p className="leading-relaxed text-black/60 dark:text-white/60">
              Removing social features actually increased engagement by reducing cognitive load
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};


const StillDesignContent = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef([]);
  const wireframeRef = useRef(null);

  const scrollToWireframe = () => {
    wireframeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const observers = [];

    sectionRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisibleSections((prev) => new Set([...prev, index]));
              }
            });
          },
          {
            threshold: 0.1,
            rootMargin: '0px 0px -200px 0px'
          }
        );

        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f0f12] text-black dark:text-white transition-colors duration-300">
      {/* Hero Section - SHOPMA inspired */}
 <section className="relative min-h-screen flex items-center justify-center">
        {/* Dark overlay background image - Replace with your image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
          }}
        />
        
        {/* Content overlay */}
        <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">
          <h1 
            className="text-6xl md:text-7xl lg:text-8xl mb-4"
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              fontWeight: 300,
              letterSpacing: '0.02em'
            }}
          >
            UI/UX
          </h1>
          <h2 
            className="text-5xl md:text-6xl lg:text-7xl mb-8"
            style={{
              fontFamily: "Georgia, serif",
              fontStyle: 'italic',
              fontWeight: 300,
              letterSpacing: '0.01em'
            }}
          >
            Case Study
          </h2>
          


          <p className="text-xs font-light tracking-widest mb-16 ">
            A PERSONALIZED BIBLE VERSE APP THAT MEETS USERS WHERE THEY ARE EMOTIONALLY
          </p>

          {/* Project details row - replacing brand logos */}
          <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap opacity-60">
            <div className="text-xs font-light tracking-widest">UI/UX DESIGNER</div>
            <div className="text-xs font-light tracking-widest">4 WEEKS</div>
            <div className="text-xs font-light tracking-widest">iOS</div>
            <div className="text-xs font-light tracking-widest">FIGMA</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-black/50 dark:border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 dark:bg-white/50 bg-black/50 rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Three Column Section - Replace with your project details */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Role */}
          <div className="border border-black/10 dark:border-white/10 p-8 rounded-lg bg-black/5 dark:bg-white/5 backdrop-blur-sm">
            <div className="w-12 h-12 mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-black/60 dark:text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-light mb-4 tracking-wide">ROLE</h3>
            <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed mb-6">
              UI/UX Designer & Developer responsible for the complete user experience, interface design, and implementation.
            </p>
           
          </div>

          {/* Wireframe */}
          <div className="border border-black/10 dark:border-white/10 p-8 rounded-lg bg-black/5 dark:bg-white/5 backdrop-blur-sm">
            <div className="w-12 h-12 mb-6 flex items-center justify-center">
              <img src="figma.png" alt="Figma" className="h-12 rounded-xl" />

            </div>
            <h3 className="text-xl font-light mb-4 tracking-wide">WIREFRAME</h3>
            <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed mb-6">
              Designed and prototyped using Figma with complete design system and interactive prototypes.
            </p>
            <button 
              onClick={scrollToWireframe}
              className="text-sm text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
            >
              VIEW DESIGNS
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* User Research */}
          <div className="border border-black/10 dark:border-white/10 p-8 rounded-lg bg-black/5 dark:bg-white/5 backdrop-blur-sm">
            <div className="w-12 h-12 mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-black/60 dark:text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-light mb-4 tracking-wide">USER RESEARCH</h3>
            <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed mb-6">
              Conducted interviews and surveys with 15+ users to understand emotional needs and personalization preferences.
            </p>
            <button className="text-sm text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors flex items-center gap-2">
              VIEW INSIGHTS
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Background Section - SCROLL ANIMATION */}
<section 
  ref={addToRefs}
  className={`max-w-7xl mx-auto px-8 py-32 border-t border-black/5 dark:border-white/5 transition-all duration-1000 ease-out ${
    visibleSections.has(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
  }`}
>
  <p className="text-sm tracking-wider mb-8 text-black/40 dark:text-white/40" style={{fontFamily: 'system-ui, sans-serif', letterSpacing: '0.1em'}}>
    BACKGROUND
  </p>
  <h2 className="text-5xl md:text-6xl mb-12" style={{fontFamily: '"Noto Serif", "Georgia", serif', fontWeight: 300, lineHeight: 1.1}}>
    The  Challenge
  </h2>
  <div className="space-y-6 text-lg leading-relaxed text-black dark:text-white mb-30">
    <p className="text-lg md:text-xl leading-relaxed max-w-3xl mb-16" style={{fontFamily: 'system-ui, -apple-system, sans-serif'}}>
      People turn to their faith during difficult moments—stress, depression, anger, feeling distant from God. But finding the right scripture that speaks to their current struggle feels overwhelming. Traditional Bible apps require users to know exactly what they're looking for, leaving those who need guidance most feeling lost.
    </p>
    <div className="bg-black/5 dark:bg-white/5 border-l-4 border-black dark:border-white rounded-r-lg p-6 max-w-3xl mb-16">
      <p className="text-sm font-medium mb-3 text-black/60 dark:text-white/60">DESIGN CHALLENGE</p>
      <p className="text-lg md:text-xl leading-relaxed" style={{fontFamily: 'system-ui, -apple-system, sans-serif'}}>
        Create a scripture discovery experience that guides emotionally overwhelmed users to relevant verses without requiring Biblical knowledge, while maintaining the depth serious readers expect.
      </p>
    </div>
  </div>
  
  <div className="grid md:grid-cols-2 gap-8 mt-16">
    <div className="overflow-hidden">
      <img src="StillSketch.png" alt="Early sketches exploring recommendation flows" className="rounded-lg w-full" />
      <p className="text-sm text-center py-4 text-black/40 dark:text-white/40">Early sketches exploring recommendation and discovery flows</p>
    </div>
    
    <div className="overflow-hidden">
      <img src="before.png" alt="User flow diagram" className="rounded-lg w-full rounded-xl dark:bg-[#191919] bg-[#e9eaee]" />
      <p className="text-sm text-center py-4 text-black/40 dark:text-white/40">Before Redesign</p>
    </div>
  </div>
</section>

{/* Design System Section */}
      <section 
        ref={addToRefs}
        className={`max-w-7xl mx-auto px-8 py-32 border-t border-black/5 dark:border-white/5 transition-all duration-1000 ease-out ${
          visibleSections.has(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
<p className="text-sm tracking-wider mb-8 text-black/40 dark:text-white/40" style={{fontFamily: 'system-ui, sans-serif', letterSpacing: '0.1em'}}>
    BACKGROUND
  </p>  
  <h2 className="text-5xl md:text-6xl mb-12" style={{fontFamily: '"Noto Serif", "Georgia", serif', fontWeight: 300, lineHeight: 1.1}}>
          The Solution
        </h2>

        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mb-12" style={{fontFamily: 'system-ui, -apple-system, sans-serif'}}>
          Rather than requiring users to search for specific books or chapters, I redesigned the entry point around how people actually feel. The solution centers on three core principles:
        </p>

        <div className="py-1 mb-12">
          <img src="StillUIComponents.png" alt="Design system components" className="max-h-auto w-full rounded-xl dark:bg-[#191919] bg-[#e9eaee]" />
        </div>

<div className="grid grid-cols-2 gap-8 mb-8">

          <div className="rounded-xl overflow-hidden">
  <img 
    src="ui.fernando.gif" 
    alt="Interactive prototype with recommendation flow" 
    className="w-full h-auto rounded-lg object-cover bg-[#191919] dark:bg-[#c5c5c3]"
  />
  
</div>
          <div className="rounded-xl overflow-hidden" >
            <img src="StillLogo.png" alt="Still Logo and branding" className="rounded-lg h-auto dark:bg-[#191919] bg-[#e9eaee]" />
          </div>
  </div>

<div className="py-1 mb-12">
          <img src="StillPreview.png" alt="Design system components" className="max-h-auto w-full rounded-xl dark:bg-[#191919] bg-[#e9eaee]" />
        </div>

<div className="grid grid-cols-2 gap-8 mt-1">
          <div className="rounded-xl overflow-hidden" >
            <img src="StillLogo.png" alt="Still Logo and branding" className="rounded-lg h-auto dark:bg-[#191919] bg-[#e9eaee]" />
            <p className="text-sm text-center py-4 text-black/40 dark:text-white/40">Logo design & brand identity system</p>
          </div>
          
<div className="rounded-xl overflow-hidden">
  <img 
    src="4.gif" 
    alt="Interactive prototype with recommendation flow" 
    className="w-full h-auto rounded-lg object-cover bg-[#191919] dark:bg-[#c5c5c3]"
  />
  <p className="text-sm text-center py-4 text-black/40 dark:text-white/40">
    Interactive prototype with recommendation flow
  </p>
</div>
        </div>


      </section>


      {/* Research Section - SCROLL ANIMATION */}
<section 
  ref={addToRefs}
  className={`max-w-7xl mx-auto px-8 py-32 border-t border-black/5 dark:border-white/5 transition-all duration-1000 ease-out ${
    visibleSections.has(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
  }`}
>
  <p className="text-sm tracking-wider mb-8 text-black/40 dark:text-white/40">USER RESEARCH</p>
  
    <div>
  <h2 className="text-5xl md:text-6xl mb-12" style={{fontFamily: '"Noto Serif", "Georgia", serif', fontWeight: 300, lineHeight: 1.1}}>
        Understanding The User
      </h2>

        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mb-12" style={{fontFamily: 'system-ui, -apple-system, sans-serif'}}>
        I started by listening to people about their spiritual struggles and how they currently seek comfort in scripture.
      </p>
    </div>
    
    

  {/* Research Methods with new UI */}
  <h3 className="text-2xl md:text-3xl font-light mb-8">Research Methods</h3>
  
  <div className="grid md:grid-cols-3 gap-6 mb-16">
    {/* A/B Testing - Dark card */}
    <div className="bg-[#0f0f12] dark:bg-white text-white dark:text-black rounded-2xl p-8">
      <h4 className="text-xl font-semibold mb-3">A/B TESTING</h4>
      <p className="text-sm leading-relaxed opacity-90">
        Tested different UI patterns and verse presentation styles to optimize user engagement and comprehension
      </p>
    </div>
    
    {/* Analytics - Light card */}
    <div className="bg-gray-100 dark:bg-[#191919] rounded-2xl p-8">
      <h4 className="text-xl font-semibold mb-3">ANALYTICS</h4>
      <p className="text-sm text-black/70 dark:text-white/70 leading-relaxed">
        Analyzed user behavior patterns and interaction data from existing Bible apps to identify pain points
      </p>
    </div>
    
    {/* Surveys - Light card */}
    <div className="bg-gray-100 dark:bg-[#191919] rounded-2xl p-8">
      <h4 className="text-xl font-semibold mb-3">SURVEYS & QUESTIONNAIRES</h4>
      <p className="text-sm text-black/70 dark:text-white/70 leading-relaxed">
        45 responses on how people search for verses during difficult moments
      </p>
    </div>
  </div>

  {/* Research Statistics */}
  <div className="grid md:grid-cols-2 gap-12 mb-16">
    {/* Left side - Dark card with main stat */}
    <div className="bg-[#0f0f12] dark:bg-white text-white dark:text-black rounded-2xl p-8">
      <h4 className="text-lg font-medium mb-4">Pre-Design Audit</h4>
      <p className="text-sm leading-relaxed opacity-90 mb-6">
        Comprehensive analysis of user pain points and behavioral patterns across multiple research methodologies to inform design decisions
      </p>
      <div className="inline-flex items-center gap-2 bg-white/10 dark:bg-black/10 px-4 py-2 rounded-full">
        <span className="text-xs font-medium">Method</span>
      </div>
    </div>

    {/* Right side - Stats grid */}
    <div className="grid grid-cols-2 gap-6">
      <div>
        <p className="text-4xl md:text-5xl font-light mb-2">2+</p>
        <p className="text-sm text-black/60 dark:text-white/60">Weeks of research to understand user needs and pain points</p>
      </div>
      <div>
        <p className="text-4xl md:text-5xl font-light mb-2">100+</p>
        <p className="text-sm text-black/60 dark:text-white/60">Data points collected from surveys, interviews, and analytics</p>
      </div>
      <div>
        <p className="text-4xl md:text-5xl font-light mb-2">5+</p>
        <p className="text-sm text-black/60 dark:text-white/60">Hours of user interviews</p>
      </div>
      <div>
        <p className="text-4xl md:text-5xl font-light mb-2">99%</p>
        <p className="text-sm text-black/60 dark:text-white/60">User clarity on emotional state selection</p>
      </div>
    </div>
  </div>

  <div className="border-l-4 border-black dark:border-white pl-6 py-4 mb-16 bg-black/5 dark:bg-white/5 rounded-r-lg">
    <p className="text-sm font-medium mb-2 text-black/60 dark:text-white/60">KEY INSIGHT</p>
    <p className="text-xl font-light italic mb-3">
      "When I'm anxious, I don't know which verses to read. I just want something that understands what I'm feeling."
    </p>
    <p className="text-black/70 dark:text-white/70">
      Users needed guidance, not another search bar. They wanted verses curated to their emotional state.
    </p>
  </div>

  <h3 className="text-2xl md:text-3xl font-light mb-8">Key Research Findings</h3>
  <div className="space-y-6 mb-16">
    <div className="border-l-2 border-black dark:border-white pl-6">
      <p className="text-lg leading-relaxed">
        Users felt overwhelmed trying to find relevant verses. "I don't even know where to start looking"
      </p>
    </div>
    <div className="border-l-2 border-black dark:border-white pl-6">
      <p className="text-lg leading-relaxed">
        Visual presentation helped verses feel more accessible. "Instagram makes everything easier to digest"
      </p>
    </div>
    <div className="border-l-2 border-black dark:border-white pl-6">
      <p className="text-lg leading-relaxed">
        People wanted recommendations based on their emotional state, not just topical categories
      </p>
    </div>
  </div>
</section>

      {/* User Journey Map Section */}
  <section 
        ref={addToRefs}
        className={`max-w-7xl mx-auto px-8 py-32 border-t border-black/5 dark:border-white/5 transition-all duration-1000 ease-out ${
          visibleSections.has(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
  <p className="text-sm tracking-wider mb-8 text-black/40 dark:text-white/40">USER JOURNEY</p>
  <h2 className="text-5xl md:text-6xl font-light mb-12">
    Mapping User Experience
  </h2>

  <p className="text-lg md:text-xl leading-relaxed max-w-3xl mb-12" style={{fontFamily: 'system-ui, -apple-system, sans-serif'}}>
    I mapped how users move from feeling anxious to finding comfort in scripture—identifying critical moments where the app could provide guidance.
  </p>

  <div className="border border-black/10 dark:border-white/10 rounded-lg p-8 mb-12">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
          <span className="text-2xl">01</span>
        </div>
        <p className="font-medium mb-2">Feeling Anxious</p>
        <p className="text-sm text-black/60 dark:text-white/60">"I need comfort but don't know where to look"</p>
      </div>
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
          <span className="text-2xl">02</span>
        </div>
        <p className="font-medium mb-2">Gets Recommendations</p>
        <p className="text-sm text-black/60 dark:text-white/60">"These verses are exactly what I needed"</p>
      </div>
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
          <span className="text-2xl">03</span>
        </div>
        <p className="font-medium mb-2">Explores Visually</p>
        <p className="text-sm text-black/60 dark:text-white/60">"This feels like scrolling but purposeful"</p>
      </div>
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center">
          <span className="text-2xl">04</span>
        </div>
        <p className="font-medium mb-2">Goes Deeper</p>
        <p className="text-sm text-black/60 dark:text-white/60">"I want to read the full chapter now"</p>
      </div>
    </div>
  </div>
  <div className="py-1 mb-12">
          <img src="U.png" alt="User Flow Diagram" className="max-h-auto w-full rounded-4xl dark:bg-[#191919] bg-[#e9eaee]" />
        </div>
  <div className="bg-black/5 dark:bg-white/5 rounded-lg p-6">
    <p className="text-sm font-medium mb-2 text-black/60 dark:text-white/60">KEY INSIGHT</p>
    <p className="text-black/70 dark:text-white/70">
      The journey showed that personalization wasn't a nice-to-have—it was essential. Users needed the app to understand their emotional state before they could engage with content.
    </p>
  </div>
</section>

      {/* Wireframes & Prototypes */}
     
        <section 
        ref={(el) => {
          addToRefs(el);
          wireframeRef.current = el;
        }}
        className={`max-w-7xl mx-auto px-8 py-32 border-t border-black/5 dark:border-white/5 transition-all duration-1000 ease-out ${
          visibleSections.has(4) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <p className="text-sm tracking-wider mb-8 text-black/40 dark:text-white/40" style={{fontFamily: 'system-ui, sans-serif', letterSpacing: '0.1em'}}>
          WIREFRAMING & PROTOTYPING
        </p>
        <h2 className="text-5xl md:text-6xl mb-12" style={{fontFamily: '"Noto Serif", "Georgia", serif', fontWeight: 300, lineHeight: 1.1}}>
          From Concept to Experience
        </h2>

        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mb-12" style={{fontFamily: 'system-ui, -apple-system, sans-serif'}}>
          I iterated rapidly in Figma, testing how users would discover verses through mood-based recommendations and Instagram-style visual browsing.
        </p>

        <div className="mb-16">
          <div className="mb-6">
            <div className="inline-block px-3 py-1 bg-black/10 dark:bg-white/10 rounded-full text-sm font-medium mb-4">
              Low-Fidelity Exploration
            </div>
            <h3 className="text-2xl font-light mb-4">Exploring Recommendation & Discovery Patterns</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg p-4">
              <img src="StillSketch.png" alt="Low-fidelity wireframes" className="rounded-lg w-full mb-3" />
              <p className="text-sm text-black/60 dark:text-white/60">Testing mood selection flows and explore page layouts</p>
            </div>
            <div className="rounded-lg p-4">
              <img src="lofi.png" alt="Low-fidelity wireframes" className="rounded-lg w-full mb-3" />
              <p className="text-sm text-black/60 dark:text-white/60">Testing mood selection flows and explore page layouts</p>
            </div>
          </div>
        </div>

        <div>
  <div className="mb-6">
  <div className="inline-block px-3 py-1 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-medium mb-4">
    High-Fidelity Prototype
  </div>
  <h3 className="text-2xl font-light mb-4">Interactive Figma Prototype</h3>
</div>
<div className="grid md:grid-cols-2 gap-8 items-center">
  <div>
    <div className="overflow-hidden rounded-lg mb-4">
      <img src="still-hifi.png" alt="High-fidelity prototype screens" className="rounded-lg w-full" />
    </div>
    <p className="text-sm text-black/60 dark:text-white/60">Complete UI with mood selector, personalized feed, and explore grid</p>
  </div>
  <div className="flex items-center justify-center">
    <CometCardDemo/>
  </div>
</div>
</div>
      </section>
      
      

      {/* Results Section - SCROLL ANIMATION */}
      <section 
        ref={addToRefs}
        className={`max-w-7xl mx-auto px-8 py-32 border-t border-black/5 dark:border-white/5 transition-all duration-1000 ease-out ${
          visibleSections.has(5) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <p className="text-sm tracking-wider mb-8 text-black/40 dark:text-white/40">IMPACT & VALIDATION</p>
        <h2 className="text-5xl md:text-6xl font-light mb-12">
          The Results
        </h2>

        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mb-12" style={{fontFamily: 'system-ui, -apple-system, sans-serif'}}>
          Validated through usability testing with 20 participants experiencing various emotional states over a 2-week period.
        </p>
        
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="text-center">
            <p className="text-6xl font-light mb-3">92%</p>
            <p className="text-sm text-black/60 dark:text-white/60">Found verses that matched their emotional need</p>
          </div>
          <div className="text-center">
            <p className="text-6xl font-light mb-3">85%</p>
            <p className="text-sm text-black/60 dark:text-white/60">Preferred visual discovery over traditional search</p>
          </div>
          <div className="text-center">
            <p className="text-6xl font-light mb-3">78%</p>
            <p className="text-sm text-black/60 dark:text-white/60">Read full chapters after discovering verses</p>
          </div>
        </div>

        <div className="border-l-2 border-black dark:border-white pl-6 py-6">
          <p className="text-xl font-light italic mb-4">
            "This app gets me. When I said I was anxious, it showed me exactly the verses I needed. It's like having a friend who knows scripture."
          </p>
          <p className="text-sm text-black/40 dark:text-white/40">— Beta tester dealing with work stress, age 28</p>
        </div>
      </section>

      {/* Learnings Section - SCROLL ANIMATION */}
<section 
  ref={addToRefs}
  className={`max-w-7xl mx-auto px-8 py-32 border-t border-black/5 dark:border-white/5 transition-all duration-1000 ease-out ${
    visibleSections.has(6) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
  }`}
>
  <p className="text-sm tracking-wider mb-8 text-black/40 dark:text-white/40">REFLECTION</p>
  <h2 className="text-5xl md:text-6xl font-light mb-16">
    What I Learned
  </h2>
  
  <div className="space-y-12">
    <div>
      <h3 className="text-2xl font-medium mb-4">What Worked</h3>
      <p className="leading-relaxed text-black/70 dark:text-white/70 mb-4">
        Instagram-style visual discovery tested exceptionally well. 85% of users preferred it over traditional search within first use. The familiar interaction pattern lowered the barrier to scripture exploration significantly.
      </p>
    </div>

    <div>
      <h3 className="text-2xl font-medium mb-4">What Failed</h3>
      <p className="leading-relaxed text-black/70 dark:text-white/70 mb-4">
        Initial mood selector offered too many options (12 emotions). Users found it overwhelming and completion rates were only 45%. Simplifying to 6 core emotional states increased completion to 89% and improved recommendation accuracy.
      </p>
    </div>

    <div>
      <h3 className="text-2xl font-medium mb-4">What Surprised Me</h3>
      <p className="leading-relaxed text-black/70 dark:text-white/70 mb-4">
        Users didn't want comprehensive Bible study tools—they wanted an easy entry point. Once emotionally connected through recommendations, 78% naturally explored full chapters. The path to depth started with simplicity.
      </p>
    </div>

    <div>
      <h3 className="text-2xl font-medium mb-4">What I'd Do Differently</h3>
      <p className="leading-relaxed text-black/70 dark:text-white/70">
        I spent 2 weeks perfecting the UI before validating the recommendation algorithm worked. Should have been reversed—proving the core mechanic first, then refining the interface. Testing earlier would have saved significant iteration time.
      </p>
    </div>
  </div>
</section>
    </div>
  );
};


const SeaSaverDesignContent = () => {
  return (
    <div className="bg-black text-white p-8 md:p-16 rounded-3xl mb-4 min-h-screen">
      {/* Header */}
      <section className="max-w-7xl mx-auto mb-20 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">
          UI/UX Case Study
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
          SeaSaver
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
          Turning ocean cleanup into a rewarding global movement through gamification
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 mt-8 text-xs">
          <span className="px-5 py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
            UI/UX Designer & Developer
          </span>
          <span className="px-5 py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
            3 months
          </span>
          <span className="px-5 py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
            iOS & Android
          </span>
        </div>
      </section>

      {/* The Problem */}
      <section className="max-w-7xl mx-auto mb-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-6xl font-bold text-white/10 block mb-4">01</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Problem
            </h2>
            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
              Millions of tons of plastic end up in our oceans yearly. While people want to help, environmental action often feels:
            </p>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 mr-4"></span>
                <span>Overwhelming and hopeless — the problem seems too big</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 mr-4"></span>
                <span>Disconnected from tangible results — "Does my effort matter?"</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 mr-4"></span>
                <span>Boring and preachy — lacking motivation and fun</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-3xl p-10 border border-white/10">
            <p className="text-2xl font-semibold leading-relaxed">
              How might we make ocean conservation engaging, rewarding, and achievable?
            </p>
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="max-w-7xl mx-auto mb-24">
        <span className="text-6xl font-bold text-white/10 block mb-4">02</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Research & Discovery
        </h2>
        <p className="text-xl text-gray-400 mb-12">
          I researched volunteer behavior and analyzed successful gamification patterns in fitness and education apps.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300">
            <div className="text-cyan-500 text-sm font-semibold mb-3 uppercase tracking-wider">
              Key Insight #1
            </div>
            <p className="text-gray-300">
              People need to see immediate impact. Visual tracking of progress increases retention by 40%
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300">
            <div className="text-cyan-500 text-sm font-semibold mb-3 uppercase tracking-wider">
              Key Insight #2
            </div>
            <p className="text-gray-300">
              Gamification works when rewards feel meaningful, not arbitrary
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300">
            <div className="text-cyan-500 text-sm font-semibold mb-3 uppercase tracking-wider">
              Key Insight #3
            </div>
            <p className="text-gray-300">
              Social challenges and team competitions drive sustained engagement
            </p>
          </div>
        </div>

        <img
          src="seaUi.jpeg"
          alt="SeaSaver Design Research"
          className="w-full h-auto rounded-3xl object-cover border border-white/10"
        />
      </section>

      {/* Design Process */}
      <section className="max-w-7xl mx-auto mb-24">
        <span className="text-6xl font-bold text-white/10 block mb-4">03</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Design Process
        </h2>
        
        <div className="space-y-12">
          {/* Information Architecture */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-200">
              Information Architecture
            </h3>
            <p className="text-gray-400 mb-8">
              Mission-driven navigation focused on action:
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="px-8 py-6 bg-gradient-to-br from-cyan-600 to-blue-800 rounded-2xl border border-cyan-400/20">
                <p className="font-bold text-lg mb-1">Missions</p>
                <p className="text-sm text-cyan-200">Find cleanup events</p>
              </div>
              <div className="px-8 py-6 bg-gradient-to-br from-cyan-600 to-blue-800 rounded-2xl border border-cyan-400/20">
                <p className="font-bold text-lg mb-1">Track</p>
                <p className="text-sm text-cyan-200">Log your impact</p>
              </div>
              <div className="px-8 py-6 bg-gradient-to-br from-cyan-600 to-blue-800 rounded-2xl border border-cyan-400/20">
                <p className="font-bold text-lg mb-1">Rewards</p>
                <p className="text-sm text-cyan-200">Earn sponsor perks</p>
              </div>
            </div>
          </div>

          {/* Design System */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10">
            <h3 className="text-2xl font-bold mb-8 text-gray-200">
              Design System
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-cyan-400 font-semibold mb-2 text-sm uppercase tracking-wider">Ocean-Inspired Palette</div>
                <p className="text-gray-400">
                  Vibrant blues, aquas, and sandy neutrals evoke the environment being protected
                </p>
              </div>
              <div>
                <div className="text-cyan-400 font-semibold mb-2 text-sm uppercase tracking-wider">Gamification UX</div>
                <p className="text-gray-400">
                  Progress bars, achievement badges, and leaderboards create friendly competition
                </p>
              </div>
              <div>
                <div className="text-cyan-400 font-semibold mb-2 text-sm uppercase tracking-wider">Mission-Based CTAs</div>
                <p className="text-gray-400">
                  Clear action buttons drive users to participate immediately
                </p>
              </div>
              <div>
                <div className="text-cyan-400 font-semibold mb-2 text-sm uppercase tracking-wider">Community Features</div>
                <p className="text-gray-400">
                  Social sharing and team challenges foster collective action
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="max-w-7xl mx-auto mb-24">
        <span className="text-6xl font-bold text-white/10 block mb-4">04</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          The Solution
        </h2>
        <p className="text-xl text-gray-400 mb-12">
          An app that turns ocean cleanup into an engaging game with real-world impact
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gradient-to-br from-cyan-600/10 to-blue-600/10 border border-white/10 p-8 rounded-2xl">
            <div className="text-4xl mb-4">🎯</div>
            <p className="font-bold text-lg mb-2">Mission-Based Challenges</p>
            <p className="text-gray-400 text-sm">AI-generated cleanup missions with specific goals and rewards</p>
          </div>
          <div className="bg-gradient-to-br from-cyan-600/10 to-blue-600/10 border border-white/10 p-8 rounded-2xl">
            <div className="text-4xl mb-4">🏆</div>
            <p className="font-bold text-lg mb-2">Sponsor-Backed Rewards</p>
            <p className="text-gray-400 text-sm">Earn points redeemable for real perks from eco-friendly brands</p>
          </div>
          <div className="bg-gradient-to-br from-cyan-600/10 to-blue-600/10 border border-white/10 p-8 rounded-2xl">
            <div className="text-4xl mb-4">📊</div>
            <p className="font-bold text-lg mb-2">Visual Impact Tracking</p>
            <p className="text-gray-400 text-sm">See exactly how much waste you've removed from oceans</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8">
          <img src="SeaProfile.png" alt="SeaSaver Profile" className="w-1/4 min-w-[200px] h-auto object-contain rounded-2xl border border-white/10" />
          <img src="SeaHome.png" alt="SeaSaver Home" className="w-1/4 min-w-[200px] h-auto object-contain rounded-2xl border border-white/10" />
          <img src="SeaGame.png" alt="SeaSaver Gamification" className="w-1/4 min-w-[200px] h-auto object-contain rounded-2xl border border-white/10" />
        </div>
      </section>

      {/* Results */}
      <section className="max-w-7xl mx-auto mb-24">
        <span className="text-6xl font-bold text-white/10 block mb-4">05</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Results & Impact
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-10 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm border border-white/10 rounded-2xl">
            <p className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-4">40%</p>
            <p className="text-gray-300">Higher volunteer retention vs traditional methods</p>
          </div>
          <div className="text-center p-10 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm border border-white/10 rounded-2xl">
            <p className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-4">82%</p>
            <p className="text-gray-300">Users said rewards felt meaningful</p>
          </div>
          <div className="text-center p-10 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm border border-white/10 rounded-2xl">
            <p className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-4">3x</p>
            <p className="text-gray-300">More cleanup events attended per user</p>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border-l-4 border-cyan-500 p-8 rounded-2xl">
          <p className="text-xl text-gray-300 italic mb-4">
            "This app made me actually want to clean up beaches. The challenges are fun and seeing my impact visualized keeps me motivated."
          </p>
          <p className="text-sm text-gray-500">— Beta tester, age 24</p>
        </div>
      </section>

      {/* Learnings */}
      <section className="max-w-7xl mx-auto">
        <span className="text-6xl font-bold text-white/10 block mb-4">06</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Key Learnings
        </h2>
        
        <div className="space-y-6">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300">
            <h3 className="text-xl font-bold mb-3">
              Gamification must feel meaningful
            </h3>
            <p className="text-gray-400">
              Rewards tied to real eco-brands performed better than arbitrary points or virtual badges
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300">
            <h3 className="text-xl font-bold mb-3">
              Visual progress drives action
            </h3>
            <p className="text-gray-400">
              Showing concrete impact (pounds of trash removed) was more motivating than abstract metrics
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300">
            <h3 className="text-xl font-bold mb-3">
              Community features need balance
            </h3>
            <p className="text-gray-400">
              Team challenges worked great, but public shaming for low participation backfired
            </p>
          </div>
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
    src: "mindstrongerUI.jpeg",
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



// ==================== SOFTWARE ENGINEERING CAROUSEL ====================
function SoftwareEngineeringCarousel() {
  const cards = softwareEngineeringData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section id="software-engineering" className=" py-20">
      <div className=" max-w-7xl w-full mx-auto">
          <h2 className="px-8 max-w-7xl text-neutral-800 dark:text-neutral-200 font-sans text-4xl md:text-5xl lg:text-6xl font-bold">
          My Projects
          <br />
          Full-stack applications.
        </h2>
      </div>
      <div className="px-0 w-full mx-auto">
        <Carousel items={cards} />
      </div>
    </section>
  );
}

// ==================== UI/UX DESIGN CAROUSEL ====================
function UIUXCarousel() {
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
function DataAnalysisCarousel() {
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

// ==================== EXPORTS ====================

export { SoftwareEngineeringCarousel, UIUXCarousel, DataAnalysisCarousel };
