"use client";
import React from "react";
import { Shield, Award, Clock, TrendingUp, CheckCircle, Cpu, LucideIcon } from "lucide-react";

interface WhyChooseUsItem {
  title: string;
  description: string;
  icon?: string;
}

interface WhyChooseUsProps {
  data?: WhyChooseUsItem[] | null;
}

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Shield,
  Award,
  Clock,
  TrendingUp,
  CheckCircle,
  Cpu,
};

const gradientStyles = [
  "bg-gradient-to-br from-green-700 to-teal-300",
  "bg-gradient-to-br from-violet-600 to-cyan-400",
  "bg-gradient-to-br from-heff to-gray-700",
  "bg-gradient-to-br from-orange-600 to-blue-500",
];

const defaultWhyChooseUs = [
  {
    icon: "Shield",
    title: "Licensed & Insured",
    description: "Fully certified and protected for your peace of mind",
  },
  {
    icon: "Award",
    title: "Quality Guaranteed",
    description: "We stand behind every installation and repair",
  },
  {
    icon: "Clock",
    title: "Reliable Service",
    description: "On-time arrivals and efficient project completion",
  },
  {
    icon: "Cpu",
    title: "Cutting-Edge Tech",
    description: "Latest solutions in electrical automation",
  },
];

const WhyChooseUs = ({ data }: WhyChooseUsProps) => {
  const whyChooseUs = data || defaultWhyChooseUs;
  return (
    <section className="py-20 px-4 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose Heffernan Electrical?
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Your trusted partner for modern electrical solutions
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, idx) => {
            const IconComponent = iconMap[item.icon || "CheckCircle"];
            const gradientStyle = gradientStyles[idx % gradientStyles.length];

            return (
              <div key={idx} className="text-center group">
                <div
                  className={`p-6 rounded-2xl inline-block mb-4 group-hover:scale-110 transition-transform ${gradientStyle}`}
                >
                  {IconComponent ? <IconComponent className="w-8 h-8" /> : <CheckCircle className="w-8 h-8" />}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
