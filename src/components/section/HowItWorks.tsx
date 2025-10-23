"use client";
import  { useEffect, useState } from "react";

import Image from "next/image";

const HowItWorks = () => {
  const steps = [
    {
      title: "Real-time Query Resolution",
      description:
        "With seamless integration of CRMs, ERPs, and APIs, queries are resolved and updated in real-time.",
      img: '/images/home/timeline4.png',
    },
    {
      title: "Omnichannel Extensions",
      description:
        "Voice bot customer service maintains unified workflows and shares information across telephone, WhatsApp, Email, and SMS.",
      img: '/images/home/timeline2.png',
    },
    {
      title: "Retention Programs",
      description:
        "Automate loyalty reminders via voice bot and proactively notify about cross-sell opportunities.",
      img: '/images/home/timeline3.png',
    },
    {
      title: "Scalable Cloud Infrastructure",
      description:
        "Voice bot software India uptime is 99.9% and ready to deploy enterprise data.",
      img: '/images/home/timeline1.png',
    },
  ];
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    document.title = "Landing Page";

    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("timeline-section");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress based on section visibility in viewport
      // Progress starts when section enters viewport and ends when it exits
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const sectionBottom = sectionTop + sectionHeight;

      // Calculate how much of the section has been scrolled through
      let progress = 0;

      if (sectionTop <= 0 && sectionBottom >= windowHeight) {
        // Section is larger than viewport and fills it
        progress = Math.abs(sectionTop) / (sectionHeight - windowHeight);
      } else if (sectionTop <= windowHeight && sectionBottom >= 0) {
        // Section is partially visible
        const visibleHeight =
          Math.min(sectionBottom, windowHeight) - Math.max(sectionTop, 0);
        const totalScrollDistance = sectionHeight + windowHeight;
        const scrolled = windowHeight - sectionTop;
        progress = Math.max(0, scrolled) / totalScrollDistance;
      }

      // Clamp progress between 0 and 1
      progress = Math.max(0, Math.min(1, progress));

      // Calculate active step (0 to steps.length - 1)
      const step = Math.floor(progress * steps.length);
      const clampedStep = Math.min(step, steps.length - 1);

      setActiveStep(clampedStep);
    };

    // Initial calculation
    handleScroll();

    // Add scroll listener with passive option for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, [steps?.length]);

  return (
    <section
      id="timeline-section"
      className="mt-10 pt-4 pb-20 bg-gray-900 text-white relative"
    >
      <span className="text-center px-4 py-2 text-[#23C1A0] text-sm font-semibold rounded-full mb-4 flex items-center justify-center">
        How It Work
      </span>
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl mb-4 mt-4 font-bold">
        How It Works
      </h2>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative">
        <div className="relative">
          {/* Center Vertical Line (Desktop only) */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-px bg-gray-700 h-full z-0" />

          {/* Progress Line (Desktop only) */}
          <div
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-1 bg-[#3E75F4] transition-all duration-500 ease-out z-0"
            style={{ height: `${((activeStep + 1) / steps.length) * 100}%` }}
          />

          {/* 👇 Mobile ke liye koi line nahi dikh rahi ab */}

          <div className="space-y-12 sm:space-y-16 lg:space-y-28 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row items-center relative z-10"
              >
                {/* Circle Indicator */}
                <div
                  className={`
                absolute z-10 w-4 h-4 rounded-full border-4 border-gray-900 transition-all duration-500
                lg:left-1/2 -translate-x-1/2
              `}
                >
                  <div
                    className={`w-full h-full rounded-full transition-all duration-500 mt-6 ${
                      activeStep >= index ? "bg-[#3E75F4]" : "bg-gray-600"
                    }`}
                  />
                </div>

                {/* Image side */}
                <div
                  className={`w-full lg:w-1/2 order-2 ${
                    index % 2 === 0
                      ? "lg:pr-12 lg:order-1"
                      : "lg:pl-12 lg:order-2"
                  } relative z-10`}
                >
                  <div
                    className={`mx-auto rounded-xl overflow-hidden transition-all duration-700 ${
                      activeStep >= index
                        ? "opacity-100 transform translate-y-0"
                        : "opacity-60 transform translate-y-4"
                    }`}
                    style={{ width: 322, height: 260 }}
                  >
                    <Image
                      src={`${step.img}`}
                      alt={step.title}
                      className="w-full h-full object-contain bg-transparent"
                      width={100}
                      height={100}
                    
                    />
                  </div>
                </div>

                {/* Text side */}
                <div
                  className={`w-full lg:w-1/2 text-center lg:text-left order-1 ${
                    index % 2 === 0
                      ? "lg:pl-12 lg:order-2"
                      : "lg:pr-12 lg:order-1 lg:text-right"
                  } relative z-10`}
                >
                  <div
                    className={`mb-3 sm:text-xsm lg:text-sm font-semibold transition-all duration-700 font-sans ${
                      activeStep >= index ? "text-gray-500" : "text-gray-700"
                    }`}
                    
                  >
                    Step: {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3
                    className={`text-[20px] sm:text-[25px] lg:text-[30px] font-bold mb-2 transition-all duration-700 ${
                      activeStep >= index
                        ? "text-white opacity-100 transform translate-y-0"
                        : "text-gray-400 opacity-60 transform translate-y-2"
                    }`}
                    style={{
                      fontFamily: "Helvetica, Arial, sans-serif",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-[14px] sm:text-[15px] lg:text-[16px] transition-all duration-700 ${
                      activeStep >= index
                        ? "text-gray-300 opacity-100 transform translate-y-0"
                        : "text-gray-500 opacity-60 transform translate-y-2"
                    }`}
                    style={{
                      fontFamily: "Inter, Arial, sans-serif",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
