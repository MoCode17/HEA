import React from "react";
import { Check, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              About Heffernan Electrical
            </h2>
            <p className="text-lg text-slate-600 mb-4">
              Founded with a vision to bring cutting-edge electrical automation
              to every home and business, Heffernan Electrical Automation
              combines traditional electrical expertise with modern smart
              technology.
            </p>
            <p className="text-lg text-slate-600 mb-4">
              As a startup, we're not burdened by outdated practices. We bring
              fresh perspectives, the latest technology, and personalized
              service that larger companies can't match. Every project receives
              our full attention and expertise.
            </p>
            <p className="text-lg text-slate-600 mb-6">
              Our mission is simple: deliver exceptional electrical solutions
              that improve lives, save energy, and embrace the future of
              automation. Whether you're upgrading a single room or transforming
              an entire building, we're here to make it happen.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-lg">
                <Check className="w-5 h-5 text-blue-600" />
                <span className="text-slate-700 font-semibold">
                  Licensed & Certified
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-lg">
                <Check className="w-5 h-5 text-blue-600" />
                <span className="text-slate-700 font-semibold">
                  Fully Insured
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-lg">
                <Check className="w-5 h-5 text-blue-600" />
                <span className="text-slate-700 font-semibold">
                  Local Experts
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <Zap className="w-48 h-48 text-blue-600 opacity-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
