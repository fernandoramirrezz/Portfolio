import Image from "next/image";
import Navbar from "./site_components/Navbar";
import Hero from "./site_components/Hero";
import Carousel from "./site_components/Carousel";
import FlipWordsDemo from "./site_components/Footer";
import SocialLinks from "./site_components/SocialLinks";

export default function Home() {
  return (
  <div>
  <Navbar />
  
  <Hero />
  <Carousel />
  <FlipWordsDemo />
  <SocialLinks />
  
  </div>
  );

}