"use client";
import React, { useState, useEffect } from "react";
import { Zap, X, Menu } from "lucide-react";
import Image from "next/image";
import logo from "@/public/Logo_transparent.png";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 md:grid-cols-2 justify-stretch items-center h-20 mx-4">
          <div className="md:hidden"></div>
          <div className="flex items-center">
            <div>
              <Image src={logo} alt="Logo" height={50} />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex justify-end items-center space-x-8 px-4">
            <button
              onClick={() => scrollToSection("services")}
              className="text-slate-700 text-lg hover:text-heffdark transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-slate-700 text-lg hover:text-heffdark transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-heffdarkgray text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-700 flex items-center justify-end"
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left py-2 text-slate-700"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-2 text-slate-700"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="block w-full text-left py-2 text-slate-700"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left py-2 text-blue-600 font-semibold"
            >
              Get Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
