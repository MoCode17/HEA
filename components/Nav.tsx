"use client";
import React from "react";
import { Zap, X, Menu } from "lucide-react";

interface props {
  scrolled: boolean;
  isMenuOpen: boolean;
  scrollToSection(id: string): void;
  setIsMenuOpen(isMenuOpen: boolean): void;
}

const Nav = ({
  scrolled,
  isMenuOpen,
  scrollToSection,
  setIsMenuOpen,
}: props) => {
  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 mx-4">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-br from-heff to-heffdark p-2 rounded-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">
                Heffernan Electrical Automation
              </h1>
              <p className="text-xs text-slate-600">Smart Home Specialists</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
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
              className="bg-gradient-to-r from-yellow-600 to-heff text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-700"
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
