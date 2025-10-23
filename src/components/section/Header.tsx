"use client";

import React, { useState, useEffect } from "react";

import { Code, Menu, X } from "lucide-react";
import { createPortal } from "react-dom";
import DemoForm from "./DemoForm";
import Link from "next/link";
import Logo from "./Logo";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Modal Content */}
      <div
        className="relative bg-white rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-gray-400 hover:text-gray-600 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
        >
          ×
        </button>

        {/* Modal Body */}
        <div className="p-6">{children}</div>
      </div>
    </div>,
    document.body
  );
};

interface NavigationItem {
  label: string;
  href: string;
}

interface LandingPageNavProps {
  className?: string;
}

const Header: React.FC<LandingPageNavProps> = ({ className = "" }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setIsModalOpen(false); // Also close modal on Escape
      }
    };

    const handleOutsideClick = (e: MouseEvent): void => {
      const target = e.target as HTMLElement;
      if (isOpen && !target.closest(".navbar-container")) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("click", handleOutsideClick);
      document.body.style.overflow = "hidden";
    }

    return (): void => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("click", handleOutsideClick);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleResize = (): void => {
      // Changed from 768 to 640 to match sm breakpoint
      if (window.innerWidth >= 640 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return (): void => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  const handleMenuItemClick = (): void => {
    setIsOpen(false);
  };

  const handleToggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const handleBookDemoClick = (): void => {
    setIsModalOpen(true);
    setIsOpen(false); // Close mobile menu if open
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  const navigationItems: NavigationItem[] = [
    { label: "Featuers", href: "/product" },
    { label: "Product", href: "/product" },
    { label: "About", href: "/company-overview" },
  ];

  return (
    <div
      className={`navbar-container fixed top-0 left-0 right-0 z-100 transition-all duration-500 ease-in-out ${className}`}
    >
      {/* Main Navbar */}
      <header className=" bg-[#111827] border-b-2 border-b-white shadow-lg px-10">
        <div className="flex items-center justify-between h-16 sm:h-[73px] px-4 sm:px-6 lg:px-20">
          {/* Logo */}
          <Logo />
          {/* Desktop Navigation - Changed from md:flex to sm:flex */}
          <nav
            className="hidden sm:flex items-center space-x-8"
            role="navigation"
            aria-label="Main navigation"
          >
            <ul className="flex items-center space-x-4 lg:space-x-6">
              {navigationItems.map((item: NavigationItem) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-inter text-sm lg:text-base text-white hover:text-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-sm px-2 py-1"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={handleBookDemoClick}
                  className="px-3 py-2 lg:px-4 lg:py-2 text-sm lg:text-base font-medium text-white bg-linear-to-r from-[#23C1A0] via-[#8B5CF6] to-[#C855E6] rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200 transform hover:scale-105"
                >
                  Book a Demo
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button - Changed from md:hidden to sm:hidden */}
          <button
            type="button"
            className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-100 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
            onClick={handleToggleMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <Menu size={24} className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="sm:hidden fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300"
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Panel - Changed from md:hidden to sm:hidden */}
      <div
        id="mobile-menu"
        className={`sm:hidden fixed top-0 left-0 right-0 bg-[#111827] border-b border-gray-200 shadow-lg z-50 transform transition-all duration-300 ease-in-out ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        {/* Close Button in Mobile Menu */}
        <div className="flex justify-between items-center px-5">
          <Logo />
          <div className="flex justify-end border-b border-gray-100 pt-8">
            <button
              type="button"
              onClick={handleToggleMenu}
              className="inline-flex items-center justify-center rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
              aria-label="Close menu"
            >
              <span className="sr-only">Close menu</span>
              <X size={24} className="h-8 w-8" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="px-4 py-2 space-y-2 max-h-[calc(100vh-8rem)] overflow-y-auto">
          {navigationItems.map((item: NavigationItem, index: number) => (
            <Link
              key={item.label}
              href={item.href}
              className="block px-4 py-3 text-base font-inter  hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-gray-50 text-white"
              onClick={handleMenuItemClick}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item.label}
            </Link>
          ))}

          <div className="pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={handleBookDemoClick}
              className="w-full px-4 py-3 text-base font-medium text-white bg-linear-to-r from-[#23C1A0] via-[#8B5CF6] to-[#C855E6] rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200 transform active:scale-95"
            >
              Book Demo
            </button>
          </div>
        </div>
      </div>

      {/* Modal with DemoForm */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <DemoForm onClose={closeModal} />
      </Modal>
    </div>
  );
};

export default Header;
