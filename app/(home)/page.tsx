
// import { getData } from "@/lib/getData";
import FAQSection from "@/components/frontend/faq copy";
import AgricultureFeatures from "@/components/frontend/features copy";
import Hero from "@/components/frontend/hero";
import QuickLinks from "@/components/frontend/links";
import NewsletterSubscription from "@/components/frontend/newsletter";
import PreHero from "@/components/frontend/pre-hero";
import QuickAccess from "@/components/frontend/quick-access";
import AnimatedStatistics from "@/components/frontend/statistics";
import Image from "next/image";

export default async function Home() {

  return (
    <div className="">
      <Hero/>
      <PreHero/>
      <AnimatedStatistics/>
      <QuickAccess/>
      <QuickLinks/>
      <AgricultureFeatures/>
      <FAQSection/>
      <NewsletterSubscription/>
    </div>
    
  );
}
