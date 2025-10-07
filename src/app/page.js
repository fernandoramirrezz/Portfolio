import Image from "next/image";
import Navbar from "./site_components/Navbar";
import Hero from "./site_components/Hero";
import Carousel, { DataAnalysisCarousel, SoftwareEngineeringCarousel, UIUXCarousel } from "./site_components/Carousel";
import FlipWordsDemo from "./site_components/Footer";
import SocialLinks from "./site_components/SocialLinks";
import Cards from "@/components/ui/Cards";
import { DotBackground } from "@/components/ui/grid-bg";

export default function Home() {
  return (
  <div>
  <Navbar />
  
  <Hero />
  <SoftwareEngineeringCarousel />
  <UIUXCarousel />
  
  <FlipWordsDemo />
  <SocialLinks />

  </div>
  );

}