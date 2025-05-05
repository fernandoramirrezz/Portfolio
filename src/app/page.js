import Image from "next/image";
import Navbar from "./site_components/Navbar";
import Hero from "./site_components/Hero";
import Carousel from "./site_components/Carousel";
import TimelineDemo from "./(routes)/timeline/_components/Timeline";
import FlipWordsDemo from "./site_components/Footer";

export default function Home() {
  return (
  <div>
  <Navbar />
  
  <Hero />
  <Carousel />
  <FlipWordsDemo />
  
  </div>
  );

}