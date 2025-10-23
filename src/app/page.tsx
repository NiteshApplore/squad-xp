'use client';
import BlueText from "@/components/section/BlueText";
import CTA from "@/components/section/CTA";
import DemoForm from "@/components/section/DemoForm";
import FAQ from "@/components/section/FAQ";
import Header from "@/components/section/Header";
import Hero from "@/components/section/Hero";
import HowItWorks from "@/components/section/HowItWorks";
import Industries from "@/components/section/Industries";
import Metrics from "@/components/section/Metrics";
import Pricing from "@/components/section/Pricing";
import Problem from "@/components/section/Problem";
import Services from "@/components/section/Services";
import TestimonialsSection from "@/components/section/Testimonial";
import TrustedBusinessAndPartners from "@/components/section/TrustedBusinessAndPartners";
import WhyUs from "@/components/section/WhyUs";
import { homeCTA, homeFAQs } from "@/data/homepagedata";

const Home = () => {
  return (
    <div>
      <div className="relative">
        {/* HERO SECTION */}
        <Hero />

        <DemoForm />

        {/* TRUSTED GLOBAL PARTNERS LOGOS */}

        <TrustedBusinessAndPartners />
      </div>
      <Metrics />
      <Problem />
      <BlueText />
      <Services />
      <HowItWorks />
      <Industries />
      <div className="grid lg:grid-cols-2 grid:col-1 w-full">
        <WhyUs />
        <Pricing />
      </div>
      <TestimonialsSection />
      <FAQ faqs={homeFAQs} />
      <CTA data={homeCTA} />
    </div>
  );
};

export default Home;
