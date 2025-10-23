import Image from "next/image";
import Navbar from "./site_components/Navbar";
import Hero from "./site_components/Hero";
// In page.js
import { SoftwareEngineeringCarousel, UIUXCarousel, DataAnalysisCarousel } from "./site_components/Carousel";
import FlipWordsDemo from "./site_components/Footer";
import SocialLinks from "./site_components/SocialLinks";
import Cards from "@/components/ui/Cards";
import { DotBackground } from "@/components/ui/grid-bg";
import UIUXCard from "./site_components/UI/UX";

export default function Home() {
  return (
    <div>
      <Navbar />
      
      <Hero />
      <SoftwareEngineeringCarousel />
      {/* <UIUXCarousel />*/}
      <UIUXCard />
      
      <FlipWordsDemo />
      <SocialLinks />
    </div>
  );
}