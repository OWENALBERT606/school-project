
// import { getData } from "@/lib/getData";
import Hero from "@/components/frontend/hero";
import PreHero from "@/components/frontend/pre-hero";
import AnimatedStatistics from "@/components/frontend/statistics";
import Image from "next/image";

export default async function Home() {

  return (
    <div className="">
      <Hero/>
      <PreHero/>
      <AnimatedStatistics/>
      {/* <QuickAccess/> */}
      {/* <QuickLinks/> */}
      {/* <AgricultureFeatures/> */}
      {/* <FAQSection/> */}
      {/* <NewsletterSubscription/> */}
    </div>
    
  );
}
