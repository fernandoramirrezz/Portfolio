import Image from "next/image";
import Navbar from "@/app/site_components/Navbar";
import TimelineDemo from "./_components/Timeline";
import FlipWordsDemo from "@/app/site_components/Footer";
import Header from "./_components/Header";

export default function TimelinePage() {
  return (
  <div>
  <Navbar />
  <Header/>
  <TimelineDemo />
  <FlipWordsDemo />

  </div>
  );

}