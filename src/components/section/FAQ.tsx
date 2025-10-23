"use client";
import React, { useState } from "react";

// Type definitions
interface FAQItem {
  id: string | number;
  q: string; // Changed from 'question' to 'q'
  a: string; // Changed from 'answer' to 'a'
}

interface FAQSectionProps {
  faqs: FAQItem[];

  backgroundColor?: string;
  padding?: string;
}

const FAQ: React.FC<FAQSectionProps> = ({ faqs }) => {
  const [openFAQ, setOpenFAQ] = useState<string | number | null>(
    faqs.length > 0 ? faqs[0].id : null
  );
  const toggleFAQ = (id: string | number): void => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className={"py-8 lg:py-12 bg-gray-50"}>
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6 lg:mb-12">
          <h2
            className="text-gray-900 font-bold mb-4 sm:mb-6 px-2 lg:px-0 text-[22px] sm:text-3xl lg:text-[38px]"
            style={{
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: "bold",
            }}
          >
            {"Frequently Asked Questions"}
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 lg:space-y-4 px-2 lg:px-0">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={`border border-gray-200 rounded-xl lg:rounded-2xl transition-all duration-300 ${
                openFAQ === faq.id
                  ? "bg-blue-50 border-blue-200"
                  : "bg-white hover:border-blue-300"
              }`}
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full flex items-center justify-between p-4 sm:p-5 lg:p-6 text-left"
              >
                <h3
                  className={`text-sm sm:text-base lg:text-lg font-semibold transition-colors pr-3 sm:pr-4 leading-tight ${
                    openFAQ === faq.id ? "text-blue-600" : "text-gray-900"
                  }`}
                  style={{
                    fontFamily: "Inter, Arial, sans-serif",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                >
                  {faq.q}
                </h3>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFAQ === faq.id
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 sm:px-5 lg:px-6 pb-4 sm:pb-5 lg:pb-6">
                  <p
                    className="text-gray-600 leading-relaxed text-xs sm:text-sm lg:text-base"
                    style={{
                      fontFamily: "Inter, Arial, sans-serif",
                      fontWeight: "400",
                      fontSize: "16px",
                      color: "#323232",
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
export type { FAQSectionProps, FAQItem };
