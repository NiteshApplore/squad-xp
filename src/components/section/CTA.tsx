"use client";
// components/CTASection/CTASection.tsx
import React, { JSX } from "react";
import { useRouter } from "next/navigation";
// import ctaImage from "/images/common/cta-img.png";
import { CircleAlert } from "lucide-react";
import Image from "next/image";

// Types defined within the component file
interface CTASectionData {
  title: string;
  subtitle: string;
  showDecorations?: boolean;
  showFeatureList?: boolean;
  customStyles?: React.CSSProperties;
}

interface CTASectionProps {
  data: CTASectionData;
}

export default function CTA({ data }: CTASectionProps) {
  const router = useRouter();

  const {
    title,
    subtitle,
    showDecorations = true,
    showFeatureList = true,
    customStyles = {},
  } = data;

  // Static feature list
  const renderFeatureList = (): JSX.Element | null => {
    if (!showFeatureList) return null;

    return (
      <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-3 mt-4 justify-center sm:justify-start lg:justify-start">
        <div
          className="flex items-center text-purple-100 sm:ml-10 ml-0 lg:ml-0 text-[10px] sm:text-xs lg:text-sm gap-2"
          style={{
            fontFamily: "Inter, Arial, sans-serif",
            fontWeight: "400",
            fontSize: "16px",
          }}
        >
          <CircleAlert className="h-4 w-4" />{" "}
          <span className="text-[10px] lg:text-[13px]">
            Average response time: under 12 hours.
          </span>
        </div>
      </div>
    );
  };

  const renderButtons = (): JSX.Element => (
    <div className="flex flex-col sm:flex-row gap-3 mt-4">
      <button
        onClick={() => router.push("/book-a-demo")}
        className="px-6 py-2 bg-white text-black text-[14px] lg:text-[16px] font-semibold rounded-lg hover:bg-gray-100 transition-colors text-sm"
        style={{ fontFamily: "Inter, Arial, sans-serif" }}
      >
        Book a Free Demo
      </button>
      <button
        onClick={() => router.push("/contact-us")}
        className="px-6 py-2 border-2 border-white text-[14px] lg:text-[16px] text-white font-semibold rounded-lg hover:bg-white hover:text-purple-700 transition-colors text-sm"
        style={{ fontFamily: "Inter, Arial, sans-serif" }}
      >
        Talk to Our Experts
      </button>
    </div>
  );

  const renderDecorations = (): JSX.Element | null => {
    if (!showDecorations) return null;

    return (
      <>
        <div className="absolute top-0 right-0 w-32 sm:w-48 lg:w-96 h-32 sm:h-48 lg:h-96 bg-linear-to-bl from-purple-500/20 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-24 sm:w-32 lg:w-64 h-24 sm:h-32 lg:h-64 bg-linear-to-tr from-purple-800/30 to-transparent rounded-full translate-y-1/2 -translate-x-1/2" />
      </>
    );
  };

  return (
    <section
      className={"py-10 lg:py:20 bg-gray-50 lg:mt-10"}
      style={customStyles}
    >
      <div className={`max-w-6xl mx-auto px-4 lg:px-8`}>
        <div className="relative">
          {/* Main CTA Container */}
          <div
            className={`relative rounded-2xl lg:rounded-3xl overflow-hidden py-6 bg-linear-to-r from-[#23C1A0] to-[#3E75F4]`}
            style={{
              minHeight: "200px",
            }}
          >
            {/* Content */}
            <div className="relative z-10 p-4 sm:p-6 lg:p-6 pr-4 sm:pr-6 lg:pr-32 xl:pr-64 flex items-center min-h-[240px] lg:min-h-[200px]">
              {/* Left Content */}
              <div className="max-w-2xl">
                <p
                  className={`text-[22px] lg:text-[32px] text-center lg:text-left font-bold text-white mb-3`}
                  style={{
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  {title}
                </p>
                <p
                  className={`text-purple-100 text-center lg:text-left text-[14px] lg:text-[16px] mt-4`}
                  style={{
                    fontFamily: "Inter, Arial, sans-serif",
                    fontWeight: "400",
                  }}
                >
                  {subtitle}
                </p>

                {/* Feature List */}

                {/* Buttons */}
                {renderButtons()}
                {renderFeatureList()}
              </div>
            </div>

            {/* Decorations */}
            {renderDecorations()}
          </div>
          {/* Decorative image */}
          <div className="absolute bottom-0 right-0 hidden lg:block z-20">
            <div className="absolute bottom-0 right-0 hidden lg:block z-20 w-[400px] h-[400px]">
              <Image
                src="/images/common/cta-img.png"
                alt="Group Image"
                fill
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export type { CTASectionData };
