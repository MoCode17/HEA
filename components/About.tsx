import React from "react";
import { Check } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="relative py-20 px-4 bg-white z-5">
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
              <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full">
                <Check className="w-5 h-5 text-blue-600" />
                <span className="text-slate-700 font-semibold">
                  Licensed & Certified
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full">
                <Check className="w-5 h-5 text-blue-600" />
                <span className="text-slate-700 font-semibold">
                  Fully Insured
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full">
                <Check className="w-5 h-5 text-blue-600" />
                <span className="text-slate-700 font-semibold">
                  Local Experts
                </span>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/18186205/pexels-photo-18186205.jpeg"
              alt="Heffernan Electrical"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
