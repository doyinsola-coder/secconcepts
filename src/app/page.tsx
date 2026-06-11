import Hero from "@/components/Hero";
import TrustBand from "@/components/TrustBand";
import CoursesSection from "@/components/CoursesSection";
import WhyUs from "@/components/WhyUs";
import Instructors from "@/components/Instructors";
import Reviews from "@/components/Reviews";
// import CTABand from "@/components/CTABand";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBand />
      <CoursesSection />
      <WhyUs />
      <Instructors />
      <Reviews />
      {/* <CTABand /> */}
    </main>
  );
}