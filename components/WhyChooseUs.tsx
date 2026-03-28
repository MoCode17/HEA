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
    icon: "TrendingUp",
    title: "Data-Driven Design",
    description:
      "We pull your actual interval data from Powercor before designing anything. No guesswork, no generic estimates — your system is built on 12 months of your real usage.",
  },
  {
    icon: "Award",
    title: "Right-Sized, Not Oversized",
    description:
      "Our goal is the system that pays itself off fastest for you — always targeting under 10 years. We don't push the biggest sale. We push the best fit.",
  },
  {
    icon: "CheckCircle",
    title: "Direct Installers",
    description:
      "Jesse and Alexis do the work themselves. No subcontractors, no middlemen, no inflated quotes. You deal with the installer from day one.",
  },
  {
    icon: "Shield",
    title: "Licensed in Victoria",
    description:
      "REC 37307. Fully licensed and insured for solar and battery installations across Bendigo and surrounds.",
  },
];

const WhyChooseUs = ({ data }: WhyChooseUsProps) => {
  const whyChooseUs = data || defaultWhyChooseUs;
  return (
    <section className="py-20 px-4 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose HEA?
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            We&apos;re not here to sell you the biggest system. We&apos;re here to design the right one.
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
