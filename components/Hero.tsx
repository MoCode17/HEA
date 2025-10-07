import React from "react";
import { ChevronRight } from "lucide-react";

interface props {
  scrollToSection(id: string): void;
}

const Hero = ({ scrollToSection }: props) => {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-amber-50 to-slate-50"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-heff rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
            ⚡ Your Trusted Electrical Automation Experts
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Smart Solutions for
            <span className="bg-gradient-to-b from-heffdark to-heff bg-clip-text text-transparent">
              {" "}
              Modern Living
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            From intelligent home automation to sustainable solar installations,
            we bring cutting-edge electrical solutions to homes and businesses
            across the region.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-heffdark to-heff text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all flex items-center justify-center group"
            >
              Get A Quote
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="bg-white text-slate-700 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-all border-2 border-slate-200"
            >
              Our Services
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto">
          {[
            { number: "500+", label: "Projects Completed" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "24/7", label: "Emergency Support" },
            { number: "10+", label: "Years Experience" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
