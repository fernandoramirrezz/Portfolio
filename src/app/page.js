import Image from "next/image";
import Navbar from "./site_components/Navbar";
import Hero from "./site_components/Hero";
import Carousel from "./site_components/Carousel";
import TimelineDemo from "./site_components/Timeline";
import Sparkle from "./site_components/Footer";

export default function Home() {
  return (
  <div>
  <Navbar />
  
  <Hero />
  <Carousel />
  <Sparkle />
  <TimelineDemo />
  
  </div>
  );

}