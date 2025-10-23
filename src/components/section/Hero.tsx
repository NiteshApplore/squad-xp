"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center px-16 sm:px-8 py-12 lg:py-0 lg:px-30 bg-[#11182B] h-[600px]">
      <div className="space-y-4 lg:space-y-6 mx-auto">
        {/* Decorative Line */}
        <div className="w-16 h-1 bg-linear-to-r from-[#23C1A0] to-[#00A6B8] rounded-full mx-auto lg:mx-0 mt-12"></div>
        1{/* Main Heading */}
        <div className="space-y-8 lg:block">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold text-white leading-tight">
            Hire <span className="text-[#3E75F4]"> Global Developers</span> at
            <br />
            <span className="text-[#00BDD6]">40% Lower Cost </span>- Without
            <br />
            Compromising Quality
          </h1>
        </div>
        {/* Description */}
        <p className="sm:text-[14px] text-[15px] lg:text-[17px] text-white/95 leading-relaxed max-w-xl mx-auto lg:mx-0 mt-8">
          SquadXP connects Australian startups and enterprises with pre-vetted
          developers and engineers who work in APAC-friendly time zones.
        </p>
      </div>
      <div className="flex-1 flex justify-end lg:mt-0 mt-4">
        <Image
          src="/images/home/abandoned-cart-recovery-with-voice-ai.jpg"
          alt="Home Hero Image"
          draggable={false}
          height={400}
          width={400}
          className="object-coverpy-20 h-auto w-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
