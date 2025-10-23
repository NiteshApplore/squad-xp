"use client";
import Image from "next/image";
import '../../app/globals.css';
const TrustedBusinessAndPartners = () => {
  return (
    <section className="lg:pb-20 py-20 lg:py-0 lg:h-[210px] bg-white lg:flex lg:items-center overflow-hidden">
      <div className="w-full">
        {/* Section Title */}
        <div className="text-center mb-8 lg:mb-12">
          <h2
            className="text-2xl sm:text-2xl lg:text-3xl font-bold text-gray-900"
            style={{
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: "bold",
              lineHeight: "1.2",
            }}
          >
            Trusted By Leading Enterprises
          </h2>
        </div>

        {/* Animated Logo Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee">
            <div className="flex items-center gap-8 sm:gap-12 lg:gap-16 px-4 sm:px-6 lg:px-8 min-w-max">
              <div className="flex items-center justify-center ">
                <Image
                  src={"/images/common/indiamart.png"}
                  alt="IndianMart"
                  width={180}
                  height={60}
                  className=" object-contain h-auto w-auto  opacity-100"
                />
              </div>
              <div className="flex items-center justify-center ">
                <Image
                  src={"/images/common/dehaat.png"}
                  alt="Dehaat"
                  width={180}
                  height={60}
                  className=" object-contain h-auto w-auto  opacity-100"
                />
              </div>
              <div className="flex items-center justify-center ">
                <Image
                  src={"/images/common/kalyan.png"}
                  alt="KALYAN Jewellers"
                  width={180}
                  height={60}
                  className="object-contain h-auto w-auto opacity-100"
                />
              </div>
              <div className="flex items-center justify-center ">
                <Image
                  src={"/images/common/circlepe.png"}
                  alt="CirclePe"
                  width={180}
                  height={60}
                  className=" object-contain h-auto w-auto opacity-100"
                />
              </div>
              <div className="flex items-center justify-center ">
                <Image
                  src={"/images/common/covrzy.png"}
                  alt="COVRZY"
                  width={180}
                  height={60}
                  className=" object-contain h-auto w-auto  opacity-100"
                />
              </div>
              <div className="flex items-center justify-center ">
                <Image
                  src={"/images/common/talentcarriage.png"}
                  alt="Talent Carriage"
                  width={180}
                  height={60}
                  className=" object-contain h-auto w-auto  opacity-100"
                />
              </div>
              <div className="flex items-center justify-center ">
                <Image
                  src={"/images/common/jktyre.png"}
                  alt="JK Tyre"
                  width={180}
                  height={60}
                  className=" object-contain h-auto w-auto  opacity-100"
                />
              </div>
              <div className="flex items-center justify-center ">
                <Image
                  src={"/images/common/indorewalaEntHospital.png"}
                  alt="Indorevela ENT Hospital"
                  width={180}
                  height={60}
                  className=" object-contain h-auto w-auto  opacity-100"
                />
              </div>
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex items-center gap-8 sm:gap-12 lg:gap-16 px-4 sm:px-6 lg:px-8 min-w-max">
              <div className="flex items-center justify-center ">
                <Image
                  src={"/images/common/indiamart.png"}
                  alt="IndianMart"
                  width={180}
                  height={60}
                  className=" object-contain h-auto w-auto  opacity-100"
                />
              </div>
              <div className="flex items-center justify-center ">
                <Image
                  src={"/images/common/dehaat.png"}
                  alt="'/images/common/dehaat.png'"
                  width={180}
                  height={60}
                  className=" object-contain h-auto w-auto  opacity-100"
                />
              </div>
              <div className="flex items-center justify-center ">
                <Image
                  src={"/images/common/kalyan.png"}
                  alt="KALYAN Jewellers"
                  width={180}
                  height={60}
                  className=" object-contain h-auto w-auto  opacity-100"
                />
              </div>
              <div className="flex items-center justify-center ">
                <Image
                  src={"/images/common/circlepe.png"}
                  alt="CirclePe"
                  width={180}
                  height={60}
                  className=" object-contain h-auto w-auto  opacity-100"
                />
              </div>
              <div className="flex items-center justify-center ">
                <Image
                  src={"/images/common/covrzy.png"}
                  alt="COVRZY"
                  width={180}
                  height={60}
                  className=" object-contain h-auto w-auto  opacity-100"
                />
              </div>
              <div className="flex items-center justify-center ">
                <Image
                  src={"/images/common/talentcarriage.png"}
                  alt="Talent Carriage"
                  width={180}
                  height={60}
                  className=" object-contain h-auto w-auto  opacity-100"
                />
              </div>
              <div className="flex items-center justify-center ">
                <Image
                  src={"/images/common/jktyre.png"}
                  alt="JK Tyre"
                  width={180}
                  height={60}
                  className=" object-contain h-auto w-auto  opacity-100"
                />
              </div>
              <div className="flex items-center justify-center ">
                <Image
                  src={"/images/common/indorewalaEntHospital.png"}
                  alt="Indorevela ENT Hospital"
                  width={180}
                  height={60}
                  className=" object-contain h-auto w-auto  opacity-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBusinessAndPartners;
