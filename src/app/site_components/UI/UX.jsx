"use client";
import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { CometCardDemo } from '@/components/CometCard';
import Image from 'next/image';


// ... [Keep all your existing StillDesignContent component code - lines 9-600]
const StillDesignContent = ({ onClose }) => {
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
      {/* Close Button */}
      <button
        onClick={onClose}
        className="fixed top-6 right-6 z-50 p-3 bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 rounded-full transition-colors"
        aria-label="Close case study"
      >
        <X className="w-6 h-6" />
      </button>
      
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
        <p className="text-4xl md:text-5xl font-light mb-2">3+</p>
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
              <img src="lowff.png" alt="Low-fidelity wireframes" className="rounded-lg w-full rounded-xl dark:bg-[#191919] bg-[#e9eaee] mb-3" />
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
// SeaSaver Content Component - Matching Still Design Layout
const SeaSaverContent = ({ onClose }) => {
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
      {/* Close Button */}
      <button
        onClick={onClose}
        className="fixed top-6 right-6 z-50 p-3 bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 rounded-full transition-colors"
        aria-label="Close case study"
      >
        <X className="w-6 h-6" />
      </button>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" />
        
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
            OCEAN CLEANUP
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

          <p className="text-xs font-light tracking-widest mb-16">
            GAMIFYING ENVIRONMENTAL ACTION TO SAVE OUR OCEANS
          </p>

          {/* Project details row */}
          <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap opacity-60">
            <div className="text-xs font-light tracking-widest">UI/UX DESIGNER</div>
            <div className="text-xs font-light tracking-widest">48 HOURS</div>
            <div className="text-xs font-light tracking-widest">FIGMA</div>
            <div className="text-xs font-light tracking-widest">WINNING PROJECT</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-black/50 dark:border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 dark:bg-white/50 bg-black/50 rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Three Column Section */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Role */}
          <div className="border border-black/10 dark:border-white/10 p-8 rounded-lg bg-black/5 dark:bg-white/5 backdrop-blur-sm">
            <div className="w-12 h-12 mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-black/60 dark:text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-light mb-4 tracking-wide">ROLE</h3>
            <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed mb-6">
              Lead UI/UX Designer in a cross-functional team. Collaborated intensively under tight time constraints, navigating design decisions through team discussions, prototyping solutions, and rapid iteration to deliver a complete mobile experience.
            </p>
          </div>

          {/* Design Tools */}
          <div className="border border-black/10 dark:border-white/10 p-8 rounded-lg bg-black/5 dark:bg-white/5 backdrop-blur-sm">
            <div className="w-12 h-12 mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-black/60 dark:text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h3 className="text-xl font-light mb-4 tracking-wide">DESIGN TOOLS</h3>
            <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed mb-6">
              Figma for rapid design and prototyping, FigJam for quick team alignment, and constant screen-sharing for real-time feedback loops with developers.
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

          {/* Impact */}
          <div className="border border-black/10 dark:border-white/10 p-8 rounded-lg bg-black/5 dark:bg-white/5 backdrop-blur-sm">
            <div className="w-12 h-12 mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-black/60 dark:text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-light mb-4 tracking-wide">IMPACT</h3>
            <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed mb-6">
              Our team's solution won first place by delivering an engaging, fully-functional design that demonstrated innovation in environmental gamification under intense time pressure. The judges praised our cohesive execution and user-centered approach.
            </p>
            <button 
  onClick={() => window.open("https://devpost.com/software/seasaver", "_blank")}
  className="text-sm text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
>
  VIEW DEVPOST
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
</button>
          </div>
        </div>
      </section>

      {/* Challenge Section - SCROLL ANIMATION */}
      <section 
        ref={addToRefs}
        className={`max-w-7xl mx-auto px-8 py-32 border-t border-black/5 dark:border-white/5 transition-all duration-1000 ease-out ${
          visibleSections.has(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <p className="text-sm tracking-wider mb-8 text-black/40 dark:text-white/40">THE CHALLENGE</p>
        <h2 className="text-5xl md:text-6xl font-light mb-16">
          Environmental Burnout
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg md:text-xl leading-relaxed mb-8" style={{fontFamily: 'system-ui, -apple-system, sans-serif'}}>
              Volunteers often feel disconnected from the impact of their cleanup efforts. Without visible progress or rewards, it's hard to stay motivated over time.
            </p>
          </div>
          <div className="space-y-6">
            <p className="leading-relaxed text-black/70 dark:text-white/70">
              <strong>Low retention:</strong> Most cleanup volunteers participate once or twice, then never return.
            </p>
            <p className="leading-relaxed text-black/70 dark:text-white/70">
              <strong>No incentive system:</strong> Environmental work felt thankless with no tangible rewards or recognition.
            </p>
            <p className="leading-relaxed text-black/70 dark:text-white/70">
              <strong>Unclear impact:</strong> People couldn't see how their individual actions contributed to the larger mission.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Overview - SCROLL ANIMATION */}
      <section 
        ref={addToRefs}
        className={`max-w-7xl mx-auto px-8 py-32 border-t border-black/5 dark:border-white/5 transition-all duration-1000 ease-out ${
          visibleSections.has(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <p className="text-sm tracking-wider mb-8 text-black/40 dark:text-white/40">THE SOLUTION</p>
        <h2 className="text-5xl md:text-6xl font-light mb-16">
          Gamified Ocean Cleanup Experience
        </h2>
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mb-12" style={{fontFamily: 'system-ui, -apple-system, sans-serif'}}>
          SeaSaver is a mobile app that transforms cleanup missions into an engaging experience. Through gamification, visual progress tracking, and reward systems, volunteers stay motivated while making a real environmental impact.
        </p>
      </section>

      {/* NEW: Team Collaboration Section - SCROLL ANIMATION */}
      <section 
        ref={addToRefs}
        className={`max-w-7xl mx-auto px-8 py-32 border-t border-black/5 dark:border-white/5 transition-all duration-1000 ease-out ${
          visibleSections.has(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <p className="text-sm tracking-wider mb-8 text-black/40 dark:text-white/40">COLLABORATION</p>
        <h2 className="text-5xl md:text-6xl font-light mb-16">
          Working as a Team
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-medium mb-6">Team Dynamics</h3>
            <p className="leading-relaxed text-black/70 dark:text-white/70 mb-6">
              Our 4-person team came together with just 48 hours to build a complete solution. Working with two developers and a product strategist, we had to make rapid decisions, navigate differing opinions, and stay focused under intense time pressure.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium mb-1">UI/UX Designer (Me)</p>
                  <p className="text-sm text-black/60 dark:text-white/60">Rapid wireframing, visual design, prototype creation, and real-time feedback integration</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium mb-1">Developers (2)</p>
                  <p className="text-sm text-black/60 dark:text-white/60">Built functional prototype with backend systems and core features</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium mb-1">Product Strategist</p>
                  <p className="text-sm text-black/60 dark:text-white/60">Defined scope, prioritized features, and prepared presentation materials</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-6">Navigating Challenges & Moving Forward</h3>
            <p className="leading-relaxed text-black/70 dark:text-white/70 mb-6">
              With such limited time, we faced disagreements about feature priorities, design direction, and technical feasibility. Here's how we pushed through:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-black/70 dark:text-white/70">Rapid competitive research (2 hours) to align on market gaps and opportunities</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-black/70 dark:text-white/70">Quick wireframing sessions where the team voted on concepts to move forward</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-black/70 dark:text-white/70">Real-time design-dev collaboration with constant check-ins on feasibility</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-black/70 dark:text-white/70">Designed high-fidelity mockups in parallel with development to save time</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-black/70 dark:text-white/70">Built interactive prototype for the judges while developers finalized the live demo</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-black/70 dark:text-white/70">Made tough calls on scope cuts when features weren't achievable in time</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black/5 dark:bg-white/5 rounded-2xl p-8 md:p-12 border border-black/10 dark:border-white/10">
          <h3 className="text-2xl font-medium mb-6">Critical Moments & Decisions</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="font-medium">Hour 6: Feature Conflict</h4>
              </div>
              <p className="text-sm text-black/60 dark:text-white/60 leading-relaxed">
                Team disagreed on gamification complexity. Developers worried about time. I advocated for simplified version focusing on core mechanics—we voted and moved forward.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h4 className="font-medium">Hour 24: Pivot Point</h4>
              </div>
              <p className="text-sm text-black/60 dark:text-white/60 leading-relaxed">
                Rewards catalog wasn't building in time. Strategist suggested cutting it; I proposed a static prototype version to show vision. We compromised and kept it.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="font-medium">Hour 42: Final Push</h4>
              </div>
              <p className="text-sm text-black/60 dark:text-white/60 leading-relaxed">
                Everyone exhausted but aligned. Last-minute design polish while devs debugged. Team came together beautifully—no more disagreements, just execution.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-l-4 border-blue-500 pl-6">
          <p className="text-lg leading-relaxed text-black/70 dark:text-white/70 italic mb-3">
            "The intense time pressure actually helped us. We couldn't overthink decisions—we had to trust each other, make calls quickly, and keep moving. When disagreements came up, we talked it out fast and voted. That's how we won."
          </p>
          <p className="text-sm text-black/40 dark:text-white/40">— Reflection on team dynamics under pressure</p>
        </div>
      </section>

      {/* NEW: Design Process & Wireframes Section - SCROLL ANIMATION */}
      <section 
        ref={addToRefs}
        className={`max-w-7xl mx-auto px-8 py-32 border-t border-black/5 dark:border-white/5 transition-all duration-1000 ease-out ${
          visibleSections.has(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <p className="text-sm tracking-wider mb-8 text-black/40 dark:text-white/40">DESIGN PROCESS</p>
        <h2 className="text-5xl md:text-6xl font-light mb-16">
          From Sketches to High Fidelity
        </h2>
        
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mb-16" style={{fontFamily: 'system-ui, -apple-system, sans-serif'}}>
          The design process evolved through multiple iterations, starting with low-fidelity sketches to validate core concepts, moving through mid-fidelity wireframes for user testing, and finishing with polished high-fidelity designs ready for development.
        </p>

        {/* Design Process Steps */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>
            <h4 className="font-medium mb-2">1. User Research</h4>
            <p className="text-sm text-black/60 dark:text-white/60">
              Interviews with volunteers, competitive analysis, and personas to understand user needs
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h4 className="font-medium mb-2">2. Wireframes</h4>
            <p className="text-sm text-black/60 dark:text-white/60">
              Low-fi digital wireframes to establish information architecture and user flows
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h4 className="font-medium mb-2">3. Visual Design</h4>
            <p className="text-sm text-black/60 dark:text-white/60">
              High-fidelity designs with branding, visual styling, colors, and typography
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-medium mb-2">4. Prototyping</h4>
            <p className="text-sm text-black/60 dark:text-white/60">
              Interactive prototype for user testing, stakeholder demos, and developer handoff
            </p>
          </div>
        </div>

        {/* Wireframe Examples */}
        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-medium mb-6">Wireframes</h3>
            <p className="text-black/70 dark:text-white/70 mb-8 max-w-3xl">
              These early wireframes focused on core user flows: onboarding, mission logging, and rewards redemption. The goal was to test information hierarchy and navigation patterns before investing in visual design.
            </p>
            <div className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-12 border-2 border-dashed border-black/20 dark:border-white/20">
              <div ref={wireframeRef} className="flex flex-wrap justify-center items-center gap-8">
              <img src="/SeaProfile.png" alt="SeaSaver Profile screen showing user stats and achievements" className="w-64 h-auto object-contain rounded-2xl shadow-2xl" />
              <img src="/SeaHome.png" alt="SeaSaver Home screen with mission feed" className="w-64 h-auto object-contain rounded-2xl shadow-2xl" />
              <img src="/SeaGame.png" alt="SeaSaver Gamification features and leaderboard" className="w-64 h-auto object-contain rounded-2xl shadow-2xl" />
            </div>
            </div>
            <div className="mt-6 text-sm text-black/60 dark:text-white/60">
              <p><strong>Key decisions from wireframing:</strong></p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Simplified mission logging to 3 steps instead of 7</li>
                <li>Made progress visualization central to home screen</li>
                <li>Prioritized leaderboard over individual stats initially</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-6">High-Fidelity Mockups</h3>
            <p className="text-black/70 dark:text-white/70 mb-8 max-w-3xl">
              After validating the wireframes, I created high-fidelity designs with visual styling, color palette, typography, and micro-interactions. The design system emphasized ocean themes with blues and greens while maintaining accessibility standards.
            </p>
            <div className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-12 border-2 border-dashed border-black/20 dark:border-white/20">
              <div ref={wireframeRef} className="flex flex-wrap justify-center items-center gap-8">
              <img src="/SeaWireframe.png" alt="SeaSaver Home screen with mission feed" className="w-full h-auto object-contain rounded-2xl shadow-2xl" />
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Prototype & Testing Section - SCROLL ANIMATION */}
      <section 
        ref={addToRefs}
        className={`max-w-7xl mx-auto px-8 py-32 border-t border-black/5 dark:border-white/5 transition-all duration-1000 ease-out ${
          visibleSections.has(4) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <p className="text-sm tracking-wider mb-8 text-black/40 dark:text-white/40">PROTOTYPING & TESTING</p>
        <h2 className="text-5xl md:text-6xl font-light mb-16">
          Interactive Prototype & User Testing
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-medium mb-6">Prototype Development</h3>
            <p className="leading-relaxed text-black/70 dark:text-white/70 mb-6">
              I built a fully interactive prototype in Figma with transitions, micro-animations, and realistic data. This prototype served two purposes: usability testing with target users and technical handoff to developers.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-black/70 dark:text-white/70">Full user flows from onboarding to reward redemption</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-black/70 dark:text-white/70">Smart Animate transitions for smooth micro-interactions</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-black/70 dark:text-white/70">Component variants for different states (loading, error, success)</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-black/70 dark:text-white/70">Developer-friendly annotations with spacing, colors, and interaction notes</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-6">Rapid Prototype Testing</h3>
            <p className="leading-relaxed text-black/70 dark:text-white/70 mb-6">
              During the final 12 hours, we conducted quick guerrilla testing with 3 volunteers to validate core flows. Each session was 15 minutes focused on mission logging and rewards—just enough to catch critical usability issues before submission.
            </p>
            <div className="bg-black/5 dark:bg-white/5 rounded-xl p-6 border border-black/10 dark:border-white/10">
              <h4 className="font-medium mb-4">Testing Approach</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-black/80 dark:text-white/80 mb-1">Participants:</p>
                  <p className="text-black/60 dark:text-white/60">3 volunteers recruited from our networks</p>
                </div>
                <div>
                  <p className="font-medium text-black/80 dark:text-white/80 mb-1">Format:</p>
                  <p className="text-black/60 dark:text-white/60">Quick remote sessions via video call with prototype</p>
                </div>
                <div>
                  <p className="font-medium text-black/80 dark:text-white/80 mb-1">Key Tasks:</p>
                  <p className="text-black/60 dark:text-white/60">Log a cleanup mission, check leaderboard, browse rewards</p>
                </div>
                <div>
                  <p className="font-medium text-black/80 dark:text-white/80 mb-1">Focus:</p>
                  <p className="text-black/60 dark:text-white/60">Major blockers and confusion points only—no time for minor issues</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testing Results */}
        <div className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20 rounded-2xl p-8 md:p-12 border border-blue-200 dark:border-blue-900">
          <h3 className="text-2xl font-medium mb-8">Quick Wins & Last-Minute Fixes</h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-medium mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                What Worked
              </h4>
              <ul className="space-y-2 text-sm text-black/70 dark:text-white/70">
                <li>• Gamification was immediately engaging—all testers smiled during mission logging</li>
                <li>• Visual progress tracking resonated strongly with volunteers</li>
                <li>• Rewards catalog was motivating and clear</li>
                <li>• 100% completion rate on core mission flow</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Pain Points
              </h4>
              <ul className="space-y-2 text-sm text-black/70 dark:text-white/70">
                <li>• Initial confusion: "Are points and impact the same thing?"</li>
                <li>• Photo requirement felt like unnecessary friction</li>
                <li>• Leaderboard: "Where am I on this list?"</li>
                <li>• Onboarding felt slightly long for the context</li>
              </ul>
            </div>
          </div>

          <div className="bg-white/80 dark:bg-black/20 rounded-xl p-6 border border-black/10 dark:border-white/10">
            <h4 className="font-medium mb-3">Critical Changes Made in Final Hours</h4>
            <div className="space-y-2 text-sm text-black/70 dark:text-white/70">
              <p>→ Added tooltip for points vs. impact after tester confusion—implemented in 20 minutes</p>
              <p>→ Made photo upload optional when testers felt it was too much friction</p>
              <p>→ Fixed leaderboard visual hierarchy issue that made user placement unclear</p>
              <p>→ Streamlined onboarding flow after feedback that it felt too long</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features - SCROLL ANIMATION WITH IMAGES */}
      <section 
        ref={addToRefs}
        className={`max-w-7xl mx-auto px-8 py-32 border-t border-black/5 dark:border-white/5 transition-all duration-1000 ease-out ${
          visibleSections.has(5) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <p className="text-sm tracking-wider mb-8 text-black/40 dark:text-white/40">FINAL DESIGN</p>
        <h2 className="text-5xl md:text-6xl font-light mb-16">
          Key Features & Interactions
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-medium">Mission Tracking</h3>
            <p className="text-black/60 dark:text-white/60 leading-relaxed">
              Intuitive 3-step process to log cleanup activities with photo upload, location tagging, and waste categorization. Users see immediate visual feedback on their environmental impact.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <h3 className="text-2xl font-medium">Rewards System</h3>
            <p className="text-black/60 dark:text-white/60 leading-relaxed">
              Browse sponsor-backed rewards catalog with filters and personalized recommendations. Clear point requirements and redemption process with confirmation screens.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-medium">Gamification</h3>
            <p className="text-black/60 dark:text-white/60 leading-relaxed">
              Leaderboards, achievement badges, level progression, and dynamic challenges. Social features allow volunteers to see friends' activity and compete in teams.
            </p>
          </div>
        </div>
      </section>

      {/* Results Section - SCROLL ANIMATION */}
      <section 
        ref={addToRefs}
        className={`max-w-7xl mx-auto px-8 py-32 border-t border-black/5 dark:border-white/5 transition-all duration-1000 ease-out ${
          visibleSections.has(6) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <p className="text-sm tracking-wider mb-8 text-black/40 dark:text-white/40">THE OUTCOME</p>
        <h2 className="text-5xl md:text-6xl font-light mb-16">
          First Place 🏆
        </h2>
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mb-12" style={{fontFamily: 'system-ui, -apple-system, sans-serif'}}>
          After 48 hours of intense collaboration, design iterations, and late-night problem-solving, our team won first place. The judges praised our user-centered approach, cohesive execution, and innovative take on environmental gamification.
        </p>
        
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="text-center">
            <p className="text-6xl font-light mb-3">1st</p>
            <p className="text-sm text-black/60 dark:text-white/60">Place out of 30+ competing teams</p>
          </div>
          <div className="text-center">
            <p className="text-6xl font-light mb-3">48</p>
            <p className="text-sm text-black/60 dark:text-white/60">Hours from concept to working prototype</p>
          </div>
          <div className="text-center">
            <p className="text-6xl font-light mb-3">100%</p>
            <p className="text-sm text-black/60 dark:text-white/60">Team collaboration despite challenges</p>
          </div>
        </div>

        <div className="border-l-2 border-black dark:border-white pl-6 py-6">
          <p className="text-xl font-light italic mb-4">
            "SeaSaver stood out for its holistic approach—beautiful design paired with thoughtful UX and a clear understanding of user motivation. This team delivered a complete vision under incredible time pressure."
          </p>
          <p className="text-sm text-black/40 dark:text-white/40">— Judge's feedback</p>
        </div>
      </section>

      {/* Learnings Section - SCROLL ANIMATION */}
      <section 
        ref={addToRefs}
        className={`max-w-7xl mx-auto px-8 py-32 border-t border-black/5 dark:border-white/5 transition-all duration-1000 ease-out ${
          visibleSections.has(7) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <p className="text-sm tracking-wider mb-8 text-black/40 dark:text-white/40">REFLECTION</p>
        <h2 className="text-5xl md:text-6xl font-light mb-16">
          What I Learned
        </h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-medium mb-4">Designing Under Pressure</h3>
            <p className="leading-relaxed text-black/70 dark:text-white/70 mb-4">
              48 hours forced me to trust my instincts and iterate rapidly. I couldn't overthink every decision—I had to wireframe fast, get team feedback, and move to high-fidelity immediately. This constraint made me a more decisive designer and taught me to separate "nice-to-haves" from "must-haves" instantly.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-4">Navigating Team Disagreements</h3>
            <p className="leading-relaxed text-black/70 dark:text-white/70 mb-4">
              When the team disagreed on feature priorities and design direction, we couldn't afford long debates. We established a voting system and committed to moving forward with decisions even if not everyone loved them. I learned that progress beats perfection when time is limited, and that healthy conflict actually strengthened our final solution.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-4">Real-Time Design-Dev Collaboration</h3>
            <p className="leading-relaxed text-black/70 dark:text-white/70 mb-4">
              Working in parallel with developers was crucial. I designed components knowing they'd be built within hours, so constant check-ins on feasibility saved us from design debt. This experience taught me to design with implementation in mind from the start, not as an afterthought.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-4">The Power of Constraints</h3>
            <p className="leading-relaxed text-black/70 dark:text-white/70">
              Limited time forced radical prioritization. We cut features that would've been "nice" to focus on what would actually win. This constraint made the design sharper and more focused. I learned that sometimes having less time produces better results because you can't overcomplicate things.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-4">What Made Us Win</h3>
            <p className="leading-relaxed text-black/70 dark:text-white/70">
              Our willingness to disagree, make fast decisions, and trust each other under pressure. We didn't have perfect alignment—we had productive conflict followed by commitment. That's what allowed us to deliver a complete, polished solution in just 48 hours and ultimately take first place.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
// AI Finance UI/UX Case Study - Enhanced with Wireframes, Prototypes & Team Details
const AIExpenseTrackingContent = ({ onClose }) => {
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
      {/* Close Button */}
      <button
        onClick={onClose}
        className="fixed top-6 right-6 z-50 p-3 bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 rounded-full transition-colors"
        aria-label="Close case study"
      >
        <X className="w-6 h-6" />
      </button>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" />
        
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
            AI FINANCE
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

          <p className="text-xs font-light tracking-widest mb-16">
            INTELLIGENT EXPENSE TRACKING WITH PERSONALIZED FINANCIAL COACHING
          </p>

          {/* Project details row */}
          <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap opacity-60">
            <div className="text-xs font-light tracking-widest">UI/UX DESIGNER</div>
            <div className="text-xs font-light tracking-widest">8 WEEKS</div>
            <div className="text-xs font-light tracking-widest">WEB APP</div>
            <div className="text-xs font-light tracking-widest">RESPONSIVE DESIGN</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-black/50 dark:border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 dark:bg-white/50 bg-black/50 rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Three Column Section */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Role */}
          <div className="border border-black/10 dark:border-white/10 p-8 rounded-lg bg-black/5 dark:bg-white/5 backdrop-blur-sm">
            <div className="w-12 h-12 mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-black/60 dark:text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-light mb-4 tracking-wide">ROLE</h3>
            <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed mb-6">
              UI/UX Designer responsible for user research, information architecture, wireframing, visual design, and usability testing of the web dashboard.
            </p>
          </div>

          {/* Design Tools */}
          <div className="border border-black/10 dark:border-white/10 p-8 rounded-lg bg-black/5 dark:bg-white/5 backdrop-blur-sm">
            <div className="w-12 h-12 mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-black/60 dark:text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h3 className="text-xl font-light mb-4 tracking-wide">DESIGN TOOLS</h3>
            <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed mb-6">
              Figma for design and prototyping, FigJam for user flows, Maze for usability testing, and Notion for documentation.
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

          {/* Impact */}
          <div className="border border-black/10 dark:border-white/10 p-8 rounded-lg bg-black/5 dark:bg-white/5 backdrop-blur-sm">
            <div className="w-12 h-12 mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-black/60 dark:text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-light mb-4 tracking-wide">IMPACT</h3>
            <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed mb-6">
              Designed an intuitive dashboard that helps users understand spending patterns and make better financial decisions through AI-powered insights.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge Section - SCROLL ANIMATION */}
      <section 
        ref={addToRefs}
        className={`max-w-7xl mx-auto px-8 py-32 border-t border-black/5 dark:border-white/5 transition-all duration-1000 ease-out ${
          visibleSections.has(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <p className="text-sm tracking-wider mb-8 text-black/40 dark:text-white/40">THE CHALLENGE</p>
        <h2 className="text-5xl md:text-6xl font-light mb-16">
          Financial Complexity & Cognitive Overload
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg md:text-xl leading-relaxed mb-8" style={{fontFamily: 'system-ui, -apple-system, sans-serif'}}>
              Most expense tracking apps overwhelm users with numbers, charts, and complex interfaces. Users need clarity, not more data—they want to understand what their spending means and what actions to take.
            </p>
          </div>
          <div className="space-y-6">
            <p className="leading-relaxed text-black/70 dark:text-white/70">
              <strong>Information overload:</strong> Too many metrics displayed without hierarchy or context creates analysis paralysis.
            </p>
            <p className="leading-relaxed text-black/70 dark:text-white/70">
              <strong>No actionable guidance:</strong> Apps show spending but don't explain patterns or suggest improvements.
            </p>
            <p className="leading-relaxed text-black/70 dark:text-white/70">
              <strong>Manual categorization fatigue:</strong> Users abandon apps when expense logging feels like a chore.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Overview - SCROLL ANIMATION */}
      <section 
        ref={addToRefs}
        className={`max-w-7xl mx-auto px-8 py-32 border-t border-black/5 dark:border-white/5 transition-all duration-1000 ease-out ${
          visibleSections.has(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <p className="text-sm tracking-wider mb-8 text-black/40 dark:text-white/40">THE SOLUTION</p>
        <h2 className="text-5xl md:text-6xl font-light mb-16">
          AI-Powered Financial Dashboard
        </h2>
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mb-12" style={{fontFamily: 'system-ui, -apple-system, sans-serif'}}>
          A clean, intelligent dashboard that combines visual data storytelling with AI-powered coaching. The design prioritizes clarity and actionability—showing users not just what they spent, but what it means and what to do next.
        </p>
      </section>

      {/* NEW: Solo Project & Design Approach Section - SCROLL ANIMATION */}
      <section 
        ref={addToRefs}
        className={`max-w-7xl mx-auto px-8 py-32 border-t border-black/5 dark:border-white/5 transition-all duration-1000 ease-out ${
          visibleSections.has(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <p className="text-sm tracking-wider mb-8 text-black/40 dark:text-white/40">PROJECT APPROACH</p>
        <h2 className="text-5xl md:text-6xl font-light mb-16">
          Solo Design & Development
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-medium mb-6">My Dual Role</h3>
            <p className="leading-relaxed text-black/70 dark:text-white/70 mb-6">
              As a solo designer and developer, I wore multiple hats throughout this project. I handled everything from initial user research and design to frontend implementation, giving me unique insights into how design decisions translate into working code.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium mb-1">UI/UX Design</p>
                  <p className="text-sm text-black/60 dark:text-white/60">User research, information architecture, wireframes, prototypes, visual design, usability testing</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium mb-1">Frontend Development</p>
                  <p className="text-sm text-black/60 dark:text-white/60">React implementation, responsive layouts, data visualization components, state management</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium mb-1">Backend & AI Integration</p>
                  <p className="text-sm text-black/60 dark:text-white/60">API setup, database schema, OpenAI integration for financial recommendations</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-6">Design-First Approach</h3>
            <p className="leading-relaxed text-black/70 dark:text-white/70 mb-6">
              Even though I handled development, I approached this project as a designer first. Every technical decision was informed by user needs and design goals, not the other way around.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-black/70 dark:text-white/70">Started with user research before writing any code</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-black/70 dark:text-white/70">Created full design system in Figma before implementation</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-black/70 dark:text-white/70">Tested prototypes with users to validate concepts early</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-black/70 dark:text-white/70">Prioritized user experience over technical complexity</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-black/70 dark:text-white/70">Conducted usability testing throughout development cycles</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-black/70 dark:text-white/70">Iterated on design based on real user feedback</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black/5 dark:bg-white/5 rounded-2xl p-8 md:p-12 border border-black/10 dark:border-white/10">
          <h3 className="text-2xl font-medium mb-6">Design Workflow & Tools</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-6 h-6 text-black/60 dark:text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
                <h4 className="font-medium">Figma & FigJam</h4>
              </div>
              <p className="text-sm text-black/60 dark:text-white/60 leading-relaxed">
                Complete design system built in Figma with components, variants, and auto-layout. FigJam for user flows and ideation.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-6 h-6 text-black/60 dark:text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                <h4 className="font-medium">Maze</h4>
              </div>
              <p className="text-sm text-black/60 dark:text-white/60 leading-relaxed">
                Remote usability testing platform to validate designs with target users and collect quantitative metrics.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-6 h-6 text-black/60 dark:text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h4 className="font-medium">Notion</h4>
              </div>
              <p className="text-sm text-black/60 dark:text-white/60 leading-relaxed">
                Project documentation, research findings, design decisions, and testing notes organized for reference.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-l-4 border-blue-500 pl-6">
          <p className="text-lg leading-relaxed text-black/70 dark:text-white/70 italic mb-3">
            "Working solo meant I had complete creative control, but it also meant I had to be disciplined about validating my assumptions. Regular user testing kept me grounded and prevented me from designing in a vacuum."
          </p>
          <p className="text-sm text-black/40 dark:text-white/40">— Personal reflection on solo design work</p>
        </div>
      </section>

      {/* NEW: Design Process & Wireframes Section - SCROLL ANIMATION */}
      <section 
        ref={addToRefs}
        className={`max-w-7xl mx-auto px-8 py-32 border-t border-black/5 dark:border-white/5 transition-all duration-1000 ease-out ${
          visibleSections.has(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <p className="text-sm tracking-wider mb-8 text-black/40 dark:text-white/40">DESIGN PROCESS</p>
        <h2 className="text-5xl md:text-6xl font-light mb-16">
          From Research to High-Fidelity Design
        </h2>
        
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mb-16" style={{fontFamily: 'system-ui, -apple-system, sans-serif'}}>
          The design process began with understanding user pain points through interviews, competitive analysis, and card sorting exercises. This research informed the information architecture, which evolved through low-fidelity wireframes, usability testing, and finally polished visual design.
        </p>

        {/* Design Process Steps */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h4 className="font-medium mb-2">1. Research</h4>
            <p className="text-sm text-black/60 dark:text-white/60">
              User interviews, competitive analysis, and personas to understand financial management behaviors
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
              </svg>
            </div>
            <h4 className="font-medium mb-2">2. Information Architecture</h4>
            <p className="text-sm text-black/60 dark:text-white/60">
              Card sorting and sitemap creation to organize dashboard content hierarchically
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h4 className="font-medium mb-2">3. Wireframes & Testing</h4>
            <p className="text-sm text-black/60 dark:text-white/60">
              Low-fi wireframes tested with users to validate layout and information hierarchy
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h4 className="font-medium mb-2">4. Visual Design</h4>
            <p className="text-sm text-black/60 dark:text-white/60">
              High-fidelity mockups with brand colors, data visualizations, and micro-interactions
            </p>
          </div>
        </div>

        {/* Wireframe Examples */}
        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-medium mb-6">Information Architecture</h3>
            <p className="text-black/70 dark:text-white/70 mb-8 max-w-3xl">
              Through card sorting exercises with 8 participants, I organized dashboard features into logical groups. The hierarchy prioritized "Overview" (high-level insights), "Transactions" (detailed data), "Budget" (goals and alerts), and "AI Coach" (recommendations).
            </p>
            <div className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-12">
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-4 gap-4 text-center text-sm">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border-2 border-blue-500">
                    <div className="font-medium mb-2">Dashboard</div>
                    <div className="text-xs text-black/60 dark:text-white/60">Primary View</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-black/10 dark:border-white/10">
                    <div className="font-medium mb-2">Transactions</div>
                    <div className="text-xs text-black/60 dark:text-white/60">Detail View</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-black/10 dark:border-white/10">
                    <div className="font-medium mb-2">Budget</div>
                    <div className="text-xs text-black/60 dark:text-white/60">Goals</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-black/10 dark:border-white/10">
                    <div className="font-medium mb-2">AI Coach</div>
                    <div className="text-xs text-black/60 dark:text-white/60">Insights</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-6">Low-Fidelity Wireframes</h3>
            <p className="text-black/70 dark:text-white/70 mb-8 max-w-3xl">
              Initial wireframes focused on layout, content hierarchy, and key user flows. The goal was to test comprehension before investing in visual polish. Multiple variations explored different approaches to displaying financial data.
            </p>
            <div className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-12 border-2 border-dashed border-black/20 dark:border-white/20">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-black/10 dark:border-white/10 aspect-[16/10]">
                  <div className="space-y-4">
                    <div className="h-8 bg-black/10 dark:bg-white/10 rounded w-1/3"></div>
                    <div className="h-32 bg-black/5 dark:bg-white/5 rounded border-2 border-dashed border-black/20 dark:border-white/20 flex items-center justify-center text-xs text-black/40 dark:text-white/40">
                      Spending Overview Chart
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-20 bg-black/5 dark:bg-white/5 rounded"></div>
                      <div className="h-20 bg-black/5 dark:bg-white/5 rounded"></div>
                      <div className="h-20 bg-black/5 dark:bg-white/5 rounded"></div>
                    </div>
                    <div className="text-xs text-black/40 dark:text-white/40 text-center pt-4">
                      Dashboard Wireframe v1
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-black/10 dark:border-white/10 aspect-[16/10]">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="h-6 bg-black/10 dark:bg-white/10 rounded w-1/4"></div>
                      <div className="h-6 bg-black/10 dark:bg-white/10 rounded w-1/5"></div>
                    </div>
                    <div className="space-y-2">
                      {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className="h-12 bg-black/5 dark:bg-white/5 rounded flex items-center px-4 gap-4">
                          <div className="w-8 h-8 bg-black/10 dark:bg-white/10 rounded-full"></div>
                          <div className="flex-1 h-4 bg-black/10 dark:bg-white/10 rounded"></div>
                          <div className="w-16 h-4 bg-black/10 dark:bg-white/10 rounded"></div>
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-black/40 dark:text-white/40 text-center pt-4">
                      Transaction List Wireframe
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 text-sm text-black/60 dark:text-white/60">
              <p><strong>Key decisions from wireframing:</strong></p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Dashboard needed to show 3-4 key metrics maximum to avoid overwhelm</li>
                <li>AI insights should be prominently displayed, not hidden in a separate tab</li>
                <li>Visualizations should tell a story, not just display raw data</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-6">High-Fidelity Design</h3>
            <p className="text-black/70 dark:text-white/70 mb-8 max-w-3xl">
              After validating structure through wireframes, I created high-fidelity designs with a clean, modern aesthetic. The color palette uses blues and greens to convey trust and financial growth, with strategic use of red for alerts.
            </p>
            <div ref={wireframeRef} className="flex flex-wrap justify-center items-center gap-8">
              <img src="/ETL.png" alt="Expense tracking table with category filters" className="w-72 h-auto object-contain rounded-2xl shadow-2xl" />
              <img src="/ET.png" alt="AI financial insights and recommendations" className="w-72 h-auto object-contain rounded-2xl shadow-2xl" />
              <img src="/Dash.png" alt="Financial dashboard with spending overview" className="w-72 h-auto object-contain rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Prototype & Testing Section - SCROLL ANIMATION */}
      <section 
        ref={addToRefs}
        className={`max-w-7xl mx-auto px-8 py-32 border-t border-black/5 dark:border-white/5 transition-all duration-1000 ease-out ${
          visibleSections.has(4) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <p className="text-sm tracking-wider mb-8 text-black/40 dark:text-white/40">PROTOTYPING & TESTING</p>
        <h2 className="text-5xl md:text-6xl font-light mb-16">
          Interactive Prototype & User Validation
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-medium mb-6">Prototype Development</h3>
            <p className="leading-relaxed text-black/70 dark:text-white/70 mb-6">
              I created a fully clickable prototype in Figma that simulated key user flows: adding expenses, viewing insights, and interacting with AI recommendations. The prototype included realistic data and animations to make testing feel authentic.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-black/70 dark:text-white/70">Complete expense logging flow with validation states</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-black/70 dark:text-white/70">Interactive chart filtering and date range selection</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-black/70 dark:text-white/70">AI coach interactions with contextual recommendations</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-black/70 dark:text-white/70">Responsive breakpoints for desktop, tablet, and mobile</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-6">Usability Testing</h3>
            <p className="leading-relaxed text-black/70 dark:text-white/70 mb-6">
              Conducted 3 rounds of moderated usability testing with 6 participants per round (18 total). Each session lasted 60 minutes and focused on task completion, comprehension, and emotional reactions to AI recommendations.
            </p>
            <div className="bg-black/5 dark:bg-white/5 rounded-xl p-6 border border-black/10 dark:border-white/10">
              <h4 className="font-medium mb-4">Testing Methodology</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-black/80 dark:text-white/80 mb-1">Participants:</p>
                  <p className="text-black/60 dark:text-white/60">18 total (6 per round), ages 22-45, mixed financial literacy</p>
                </div>
                <div>
                  <p className="font-medium text-black/80 dark:text-white/80 mb-1">Format:</p>
                  <p className="text-black/60 dark:text-white/60">Remote moderated via Zoom, recorded with consent</p>
                </div>
                <div>
                  <p className="font-medium text-black/80 dark:text-white/80 mb-1">Key Tasks:</p>
                  <p className="text-black/60 dark:text-white/60">Add expense, interpret spending chart, follow AI recommendation</p>
                </div>
                <div>
                  <p className="font-medium text-black/80 dark:text-white/80 mb-1">Metrics:</p>
                  <p className="text-black/60 dark:text-white/60">Task success rate, time on task, SUS score, qualitative feedback</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testing Results */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-8 md:p-12 border border-blue-200 dark:border-blue-900">
          <h3 className="text-2xl font-medium mb-8">Usability Testing Insights</h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-medium mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                What Worked Well
              </h4>
              <ul className="space-y-2 text-sm text-black/70 dark:text-white/70">
                <li>• Visual charts made complex data immediately understandable</li>
                <li>• AI recommendations felt personal and actionable</li>
                <li>• Dashboard layout felt clean and uncluttered</li>
                <li>• 95% task completion rate for expense logging</li>
                <li>• Average SUS score of 82 (excellent usability)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Pain Points Found
              </h4>
              <ul className="space-y-2 text-sm text-black/70 dark:text-white/70">
                <li>• Category dropdown had too many options (15+ categories)</li>
                <li>• Users initially missed the "AI Coach" tab in navigation</li>
                <li>• Date range selector wasn't immediately discoverable</li>
                <li>• Some users wanted more context on how AI generates advice</li>
              </ul>
            </div>
          </div>

          <div className="bg-white/80 dark:bg-black/20 rounded-xl p-6 border border-black/10 dark:border-white/10">
            <h4 className="font-medium mb-3">Design Iterations Based on Testing</h4>
            <div className="space-y-2 text-sm text-black/70 dark:text-white/70">
              <p>→ Reduced expense categories from 15 to 8 core categories with "Other" option</p>
              <p>→ Added prominent AI insight card directly on dashboard homepage</p>
              <p>→ Made date range selector larger with clear "This Month" / "Last 30 Days" presets</p>
              <p>→ Added "How this works" tooltip explaining AI recommendation logic</p>
              <p>→ Improved color contrast on charts for better accessibility (WCAG AAA compliance)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features - SCROLL ANIMATION */}
      <section 
        ref={addToRefs}
        className={`max-w-7xl mx-auto px-8 py-32 border-t border-black/5 dark:border-white/5 transition-all duration-1000 ease-out ${
          visibleSections.has(5) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <p className="text-sm tracking-wider mb-8 text-black/40 dark:text-white/40">FINAL DESIGN</p>
        <h2 className="text-5xl md:text-6xl font-light mb-16">
          Key Features & Design Decisions
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-medium">Visual Analytics</h3>
            <p className="text-black/60 dark:text-white/60 leading-relaxed">
              Interactive charts tell a visual story of spending patterns. Users can filter by category, adjust date ranges, and drill down into specific time periods with intuitive click interactions.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-2xl font-medium">AI Financial Coach</h3>
            <p className="text-black/60 dark:text-white/60 leading-relaxed">
              Contextual recommendations appear based on spending behavior. The AI explains not just what users should do, but why—building trust through transparency.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-medium">Smart Budgeting</h3>
            <p className="text-black/60 dark:text-white/60 leading-relaxed">
              Visual progress bars show budget usage at a glance. The system alerts users before overspending, with gentle nudges rather than harsh warnings.
            </p>
          </div>
        </div>
      </section>

      {/* Results Section - SCROLL ANIMATION */}
      <section 
        ref={addToRefs}
        className={`max-w-7xl mx-auto px-8 py-32 border-t border-black/5 dark:border-white/5 transition-all duration-1000 ease-out ${
          visibleSections.has(6) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <p className="text-sm tracking-wider mb-8 text-black/40 dark:text-white/40">IMPACT & RESULTS</p>
        <h2 className="text-5xl md:text-6xl font-light mb-16">
          Financial Clarity Through Design
        </h2>
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mb-12" style={{fontFamily: 'system-ui, -apple-system, sans-serif'}}>
          The redesigned experience significantly improved user comprehension and engagement during beta testing.
        </p>
        
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="text-center">
            <p className="text-6xl font-light mb-3">87%</p>
            <p className="text-sm text-black/60 dark:text-white/60">Found AI recommendations helpful and actionable</p>
          </div>
          <div className="text-center">
            <p className="text-6xl font-light mb-3">3.2x</p>
            <p className="text-sm text-black/60 dark:text-white/60">Increase in budget adherence rates</p>
          </div>
          <div className="text-center">
            <p className="text-6xl font-light mb-3">94%</p>
            <p className="text-sm text-black/60 dark:text-white/60">Logged expenses consistently after 2 weeks</p>
          </div>
        </div>

        <div className="border-l-2 border-black dark:border-white pl-6 py-6">
          <p className="text-xl font-light italic mb-4">
            "Finally, a finance app that doesn't just show me numbers—it tells me what they mean and what I should do about them. The AI coaching is surprisingly insightful."
          </p>
          <p className="text-sm text-black/40 dark:text-white/40">— Beta tester managing freelance income, age 29</p>
        </div>
      </section>

      {/* Learnings Section - SCROLL ANIMATION */}
      <section 
        ref={addToRefs}
        className={`max-w-7xl mx-auto px-8 py-32 border-t border-black/5 dark:border-white/5 transition-all duration-1000 ease-out ${
          visibleSections.has(7) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <p className="text-sm tracking-wider mb-8 text-black/40 dark:text-white/40">REFLECTION</p>
        <h2 className="text-5xl md:text-6xl font-light mb-16">
          What I Learned
        </h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-medium mb-4">Less is More in Data Visualization</h3>
            <p className="leading-relaxed text-black/70 dark:text-white/70 mb-4">
              My initial designs showed too many metrics at once. Through testing, I learned that users need focus, not comprehensiveness. The final dashboard shows 3-4 key insights prominently, with the ability to drill down for more detail only when needed.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-4">AI Transparency Builds Trust</h3>
            <p className="leading-relaxed text-black/70 dark:text-white/70 mb-4">
              Users were initially skeptical of AI recommendations until we added explanations of how the system reached its conclusions. Adding "How this works" tooltips increased trust scores by 40% in testing.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-4">Iterative Testing is Essential</h3>
            <p className="leading-relaxed text-black/70 dark:text-white/70 mb-4">
              Conducting 3 rounds of testing allowed me to catch issues early and validate improvements. Each round revealed new insights—things I would have never discovered without putting designs in front of real users.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-4">Design with Technical Constraints</h3>
            <p className="leading-relaxed text-black/70 dark:text-white/70 mb-4">
              Working closely with the data scientist helped me understand what AI could realistically deliver. This prevented me from designing experiences that looked great but were technically infeasible within our timeline.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-4">What I'd Do Differently</h3>
            <p className="leading-relaxed text-black/70 dark:text-white/70">
              I would conduct more competitive analysis earlier in the process. While we did some initial research, deeper analysis of existing finance apps would have revealed UX patterns that users already understand, reducing the learning curve for our interface.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

// MindStronger Content Component - Matching Still Design Layout
const MindStrongerContent = ({ onClose }) => {
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
      {/* Close Button */}
      <button
        onClick={onClose}
        className="fixed top-6 right-6 z-50 p-3 bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 rounded-full transition-colors"
        aria-label="Close case study"
      >
        <X className="w-6 h-6" />
      </button>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" />
        
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
            MENTAL WELLNESS
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

          <p className="text-xs font-light tracking-widest mb-16">
            AI-POWERED MENTAL STRENGTH TRAINING FOR MEN
          </p>

          {/* Project details row */}
          <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap opacity-60">
            <div className="text-xs font-light tracking-widest">FULL STACK DEVELOPER</div>
            <div className="text-xs font-light tracking-widest">7 WEEKS</div>
            <div className="text-xs font-light tracking-widest">iOS & ANDROID</div>
            <div className="text-xs font-light tracking-widest">REACT NATIVE</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-black/50 dark:border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 dark:bg-white/50 bg-black/50 rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Three Column Section */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Role */}
          <div className="border border-black/10 dark:border-white/10 p-8 rounded-lg bg-black/5 dark:bg-white/5 backdrop-blur-sm">
            <div className="w-12 h-12 mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-black/60 dark:text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-light mb-4 tracking-wide">ROLE</h3>
            <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed mb-6">
              Full Stack Developer responsible for mobile development, AI-powered journaling, UI/UX design, and backend infrastructure.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="border border-black/10 dark:border-white/10 p-8 rounded-lg bg-black/5 dark:bg-white/5 backdrop-blur-sm">
            <div className="w-12 h-12 mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-black/60 dark:text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-light mb-4 tracking-wide">TECH STACK</h3>
            <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed mb-6">
              React Native, TypeScript, Next.js, Firebase, PostgreSQL, OpenAI API, Drizzle ORM, and Tailwind CSS.
            </p>
            <button 
              onClick={scrollToWireframe}
              className="text-sm text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
            >
              VIEW APP
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Impact */}
          <div className="border border-black/10 dark:border-white/10 p-8 rounded-lg bg-black/5 dark:bg-white/5 backdrop-blur-sm">
            <div className="w-12 h-12 mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-black/60 dark:text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-light mb-4 tracking-wide">IMPACT</h3>
            <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed mb-6">
              Breaking stigma around men's mental health through action-driven journaling, daily challenges, and AI-powered emotional insights.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge Section - SCROLL ANIMATION */}
      <section 
        ref={addToRefs}
        className={`max-w-7xl mx-auto px-8 py-32 border-t border-black/5 dark:border-white/5 transition-all duration-1000 ease-out ${
          visibleSections.has(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <p className="text-sm tracking-wider mb-8 text-black/40 dark:text-white/40">THE CHALLENGE</p>
        <h2 className="text-5xl md:text-6xl font-light mb-16">
          Making Mental Health Accessible for Men
        </h2>
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl" style={{fontFamily: 'system-ui, -apple-system, sans-serif'}}>
          Men face unique mental health challenges—social pressure to "be strong," fewer support systems, and widespread stigma around vulnerability. Traditional mental health apps feel clinical and disconnected. The challenge was to create a platform that feels empowering and action-oriented rather than therapeutic, meeting men where they are emotionally without judgment.
        </p>
      </section>

      {/* The Problem Section - SCROLL ANIMATION */}
      <section 
        ref={addToRefs}
        className={`max-w-7xl mx-auto px-8 py-32 transition-all duration-1000 ease-out ${
          visibleSections.has(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm tracking-wider mb-8 text-black/40 dark:text-white/40">THE PROBLEM</p>
            <h2 className="text-4xl md:text-5xl font-light mb-8">
              Stigma and Lack of Relatable Tools
            </h2>
          </div>
          <div className="space-y-6">
            <p className="leading-relaxed text-black/70 dark:text-white/70">
              <strong>Mental health stigma:</strong> Men avoid seeking help due to cultural expectations around masculinity and emotional expression.
            </p>
            <p className="leading-relaxed text-black/70 dark:text-white/70">
              <strong>Clinical tone:</strong> Existing mental health apps feel like therapy, which deters men who don't identify as needing "treatment."
            </p>
            <p className="leading-relaxed text-black/70 dark:text-white/70">
              <strong>No sense of progress:</strong> Men respond well to measurable goals and achievement, but most wellness apps lack this structure.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Overview - SCROLL ANIMATION */}
      <section 
        ref={addToRefs}
        className={`max-w-7xl mx-auto px-8 py-32 border-t border-black/5 dark:border-white/5 transition-all duration-1000 ease-out ${
          visibleSections.has(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <p className="text-sm tracking-wider mb-8 text-black/40 dark:text-white/40">THE SOLUTION</p>
        <h2 className="text-5xl md:text-6xl font-light mb-16">
          Mental Strength Training Platform
        </h2>
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mb-12" style={{fontFamily: 'system-ui, -apple-system, sans-serif'}}>
          MindStronger reframes mental wellness as strength training for the mind. Through AI-powered journaling, daily challenges, and progress tracking, men build emotional resilience without feeling like they're in therapy. The design is masculine, action-driven, and achievement-focused—built to feel empowering, not clinical.
        </p>
      </section>

      {/* Key Features - SCROLL ANIMATION WITH IMAGES */}
      <section 
        ref={addToRefs}
        className={`max-w-7xl mx-auto px-8 py-20 transition-all duration-1000 ease-out ${
          visibleSections.has(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h3 className="text-2xl font-medium">AI Journaling</h3>
            <p className="text-black/60 dark:text-white/60 leading-relaxed">
              Context-aware AI analyzes journal entries to provide personalized insights and emotional pattern recognition.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-2xl font-medium">Daily Challenges</h3>
            <p className="text-black/60 dark:text-white/60 leading-relaxed">
              Achievement-based mental wellness activities that build emotional resilience through consistent action.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-2xl font-medium">Progress Tracking</h3>
            <p className="text-black/60 dark:text-white/60 leading-relaxed">
              Visual metrics showing emotional growth, streaks, and milestones to reinforce continued engagement.
            </p>
          </div>
        </div>

        {/* App Screenshots */}
        <div ref={wireframeRef} className="flex flex-wrap justify-center items-center gap-8 mt-16">
          <img src="/Journal.png" alt="MindStronger journaling interface" className="w-64 h-auto object-contain rounded-2xl shadow-2xl" />
          <img src="/Home.png" alt="MindStronger home dashboard" className="w-64 h-auto object-contain rounded-2xl shadow-2xl" />
          <img src="/Challenge.png" alt="MindStronger daily challenges" className="w-64 h-auto object-contain rounded-2xl shadow-2xl" />
        </div>
      </section>

      {/* Results Section - SCROLL ANIMATION */}
      <section 
        ref={addToRefs}
        className={`max-w-7xl mx-auto px-8 py-32 border-t border-black/5 dark:border-white/5 transition-all duration-1000 ease-out ${
          visibleSections.has(4) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <p className="text-sm tracking-wider mb-8 text-black/40 dark:text-white/40">IMPACT</p>
        <h2 className="text-5xl md:text-6xl font-light mb-16">
          Building Emotional Strength
        </h2>
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mb-12" style={{fontFamily: 'system-ui, -apple-system, sans-serif'}}>
          Testing showed men responded positively to the achievement-focused, non-clinical approach.
        </p>
        
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="text-center">
            <p className="text-6xl font-light mb-3">84%</p>
            <p className="text-sm text-black/60 dark:text-white/60">Preferred this over traditional therapy apps</p>
          </div>
          <div className="text-center">
            <p className="text-6xl font-light mb-3">21</p>
            <p className="text-sm text-black/60 dark:text-white/60">Average day streak for daily journaling</p>
          </div>
          <div className="text-center">
            <p className="text-6xl font-light mb-3">91%</p>
            <p className="text-sm text-black/60 dark:text-white/60">Found AI insights helpful and accurate</p>
          </div>
        </div>

        <div className="border-l-2 border-black dark:border-white pl-6 py-6">
          <p className="text-xl font-light italic mb-4">
            "This doesn't feel like therapy—it feels like I'm training my mind the same way I train my body. Finally, something that gets it."
          </p>
          <p className="text-sm text-black/40 dark:text-white/40">— Beta tester managing work stress, age 31</p>
        </div>
      </section>

      {/* Learnings Section - SCROLL ANIMATION */}
      <section 
        ref={addToRefs}
        className={`max-w-7xl mx-auto px-8 py-32 border-t border-black/5 dark:border-white/5 transition-all duration-1000 ease-out ${
          visibleSections.has(5) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
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
              Reframing mental health as "strength training" resonated powerfully. Men who wouldn't touch therapy apps engaged deeply when presented as building emotional resilience through action.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-4">What Failed</h3>
            <p className="leading-relaxed text-black/70 dark:text-white/70 mb-4">
              Initial UI was too soft and pastel. Users found it uninspiring. Shifting to darker tones, sharper typography, and achievement-focused language increased engagement by 67%.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-4">What Surprised Me</h3>
            <p className="leading-relaxed text-black/70 dark:text-white/70 mb-4">
              Men wanted deeper AI insights than expected. They weren't looking for surface-level affirmations—they wanted honest, thoughtful analysis of their emotional patterns.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-4">What I'd Do Differently</h3>
            <p className="leading-relaxed text-black/70 dark:text-white/70">
              Should have involved male users in design decisions from day one. My assumptions about what men wanted versus what they actually responded to were often misaligned until user testing.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

function UIUXCard() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const renderCaseStudyContent = () => {
    switch(selectedCaseStudy) {
      case 'still':
        return <StillDesignContent onClose={() => setSelectedCaseStudy(null)} />;
      case 'seasaver':
        return <SeaSaverContent onClose={() => setSelectedCaseStudy(null)} />;
      case 'finance':
        return <AIExpenseTrackingContent onClose={() => setSelectedCaseStudy(null)} />;
      case 'mindstronger':
        return <MindStrongerContent onClose={() => setSelectedCaseStudy(null)} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f0f12] text-black dark:text-white border-t border-black/5 dark:border-white/5">
      {selectedCaseStudy ? (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {renderCaseStudyContent()}
        </div>
      ) : (
        <section className="relative min-h-screen px-8 py-20">
          <div className="max-w-7xl w-full mx-auto">
            <h2 className="text-neutral-800 dark:text-neutral-200 font-sans text-4xl md:text-5xl lg:text-6xl font-bold mb-32">
              UI/UX Portfolio
            </h2>
            
            <div className="min-h-screen md:space-y-64">
              {/* Case Study 1 - Still App */}
              <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 items-center mb-20">
                <div className="flex items-center justify-center">
                  <div className="relative w-full rounded-2xl bg-[#191919] dark:bg-[#c5c5c3]">
                      <Image
                        src="/StillUIComponents.png"
                        alt="Still app verse discovery"
                        width={5000}
                        height={1200}
                        className="rounded-2xl w-full h-auto"
                      />
                  </div>
                </div>

                <div className="flex flex-col justify-center space-y-6">
                  <p className="text-sm text-gray-400 uppercase tracking-wider">Case study</p>
                  <h3 className="text-neutral-800 dark:text-neutral-200 font-sans text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Still<br />Verse App
                  </h3>
                  <button 
                    onClick={() => setSelectedCaseStudy('still')}
                    className="text-neutral-800 dark:text-neutral-200 underline underline-offset-4 hover:text-gray-300 transition w-fit"
                  >
                    Read more
                  </button>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-black/10 dark:border-white/10 my-20"></div>

              {/* Case Study 2 - SeaSaver */}
              <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 items-center mb-20">
                <div className="flex flex-col justify-center space-y-6">
                  <p className="text-sm text-gray-400 uppercase tracking-wider">Case study</p>
                  <h3 className="text-neutral-800 dark:text-neutral-200 font-sans text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    SeaSaver<br />Ocean Cleanup
                  </h3>
                  <button 
                    onClick={() => setSelectedCaseStudy('seasaver')}
                    className="text-neutral-800 dark:text-neutral-200 underline underline-offset-4 hover:text-gray-300 transition w-fit"
                  >
                    Read more
                  </button>
                </div>

                <div className="flex items-center justify-center">
                  <div className="relative w-full rounded-2xl bg-[#191919] dark:bg-[#c5c5c3]">
                    <Image
                      src="/Sea.JPG"
                      alt="SeaSaver ocean cleanup app"
                      width={5000}
                      height={1200}
                      className="rounded-2xl w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-black/10 dark:border-white/10 my-20"></div>

              {/* Case Study 3 - AI Finance App */}
              <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 items-center mb-20">
                <div className="flex items-center justify-center">
                  <div className="relative w-full rounded-2xl bg-[#191919] dark:bg-[#c5c5c3]">
                    <Image
                      src="/dashboard.png"
                      alt="AI Finance Dashboard"
                      width={5000}
                      height={1200}
                      className="rounded-2xl w-full h-auto"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col justify-center space-y-6">
                  <p className="text-sm text-gray-400 uppercase tracking-wider">Case study</p>
                  <h3 className="text-neutral-800 dark:text-neutral-200 font-sans text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    AI Finance<br />Tracker
                  </h3>
                  <button 
                    onClick={() => setSelectedCaseStudy('finance')}
                    className="text-neutral-800 dark:text-neutral-200 underline underline-offset-4 hover:text-gray-300 transition w-fit"
                  >
                    Read more
                  </button>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-black/10 dark:border-white/10 my-20"></div>

              {/* Case Study 4 - MindStronger */}
              <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 items-center">
                <div className="flex flex-col justify-center space-y-6">
                  <p className="text-sm text-gray-400 uppercase tracking-wider">Case study</p>
                  <h3 className="text-neutral-800 dark:text-neutral-200 font-sans text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    MindStronger<br />Mental Wellness
                  </h3>
                  <button 
                    onClick={() => setSelectedCaseStudy('mindstronger')}
                    className="text-neutral-800 dark:text-neutral-200 underline underline-offset-4 hover:text-gray-300 transition w-fit"
                  >
                    Read more
                  </button>
                </div>

                <div className="flex items-center justify-center">
                  <div className="relative w-full rounded-2xl bg-[#191919] dark:bg-[#c5c5c3]">
                    <Image
                      src="/IMG_1057.JPG"
                      alt="MindStronger mental wellness app"
                      width={5000}
                      height={1200}
                      className="rounded-2xl w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default UIUXCard;