"use client";
// src/components/DemoForm.tsx
import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface FormData {
  fullName: string;
  companyName: string;
  workEmail: string;
  phoneNumber: string;
}

interface DemoFormProps {
  onClose?: () => void;
}

const DemoForm: React.FC<DemoFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    companyName: "",
    workEmail: "",
    phoneNumber: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit form");

      setFormData({
        fullName: "",
        companyName: "",
        workEmail: "",
        phoneNumber: "",
      });

      if (onClose) onClose();
      router.push("/lp/thank-you");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full flex justify-center px-4 bg-white pt-10 lg:pt-0 lg:py-0">
      <form
        onSubmit={handleSubmit}
        className="bg-[#111827] rounded-xl shadow-xl lg:translate-y-[-40%] sm:translate-y-0 p-10 w-full max-w-4xl flex flex-col gap-4 md:grid md:grid-cols-5 md:items-end"
        style={{ boxShadow: "0px 10px 32px 0px rgba(42, 75, 170, 0.16)" }}
      >
        <h3 className="text-lg font-semibold text-white mb-2 md:col-span-5">
          Scale Today
        </h3>

        {/* Grid Inputs */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleInputChange}
            className="bg-[#222B43] text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-[#2953E2] border border-[#2E3456] placeholder-[#8893AF]"
          />
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleInputChange}
            className="bg-[#222B43] text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-[#2953E2] border border-[#2E3456] placeholder-[#8893AF]"
          />
        </div>

        <div className="md:col-span-2 flex flex-col gap-4">
          <input
            type="email"
            name="workEmail"
            placeholder="Work Email"
            value={formData.workEmail}
            onChange={handleInputChange}
            className="bg-[#222B43] text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-[#2953E2] border border-[#2E3456] placeholder-[#8893AF]"
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="bg-[#222B43] text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-[#2953E2] border border-[#2E3456] placeholder-[#8893AF]"
          />
        </div>

        {/* Button */}
        <div className="md:col-span-1 flex justify-end md:justify-center mt-2 md:mb-5">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto bg-[#12C9C4] hover:bg-[#13b7b1] transition-colors text-[#11182B] font-bold rounded-lg px-8 py-3 text-lg"
          >
            {isSubmitting ? "Submitting..." : "Get Started"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default DemoForm;
