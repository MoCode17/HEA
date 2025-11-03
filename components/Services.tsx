"use client";
import React, { Ref, useEffect, useRef, useState } from "react";
import { Home, Sun, Zap, CarFront, Check, BatteryCharging, LucideIcon } from "lucide-react";
import Image from "next/image";

interface Service {
  title: string;
  description: string;
  icon?: string;
  bgImage?: string;
  features: string[];
}

interface ServicesProps {
  data?: Service[] | null;
}

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Home,
  Sun,
  Zap,
  CarFront,
  BatteryCharging,
};

const defaultServices = [
  {
    icon: "Home",
    title: "Smart Home Automation",
    description:
      "Transform your home into an intelligent living space with integrated lighting, security, climate control, and entertainment systems.",
    features: [
      "Voice Control Integration",
      "Remote Access",
      "Energy Management",
      "Custom Scenes",
      "24/7 Security Monitoring",
    ],
    bgImage:
      "https://images.pexels.com/photos/16423103/pexels-photo-16423103.jpeg",
  },
  {
    icon: "Zap",
    title: "General Electrical",
    description:
      "Comprehensive electrical services for residential and commercial properties. From repairs to complete rewiring projects.",
    features: [
      "Repairs & Upgrades",
      "New Installations",
      "Safety Inspections",
      "Emergency Service",
    ],
    bgImage:
      "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg",
  },
  {
    icon: "Sun",
    title: "Solar Installation",
    description:
      "Harness clean energy with professional solar panel installation and maintenance. Reduce your bills while helping the environment.",
    features: [
      "System Design",
      "Installation & Setup",
      "Maintenance",
      "Battery Storage",
    ],
    bgImage:
      "https://images.pexels.com/photos/9875423/pexels-photo-9875423.jpeg",
  },
  {
    icon: "BatteryCharging",
    title: "EV Charger Installation",
    description:
      "Smart electric vehicle charging solutions for your home, with optional solar integration for truly sustainable transportation",
    features: [
      "Solar-Powered Charging",
      "Smart Scheduling",
      "Multiple Vehicle Support",
      "Level 2 Chargers",
    ],
    bgImage:
      "https://images.pexels.com/photos/9800009/pexels-photo-9800009.jpeg",
  },
];

const Services = ({ data }: ServicesProps) => {
  const services = data || defaultServices;
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => [...new Set([...prev, index])]);
            }
          });
        },
        { threshold: 0.2 }
      );

      if (ref instanceof Element) observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section id="services" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive electrical solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 2xl:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              className={`flex flex-col bg-gradient-to-br from-slate-50 to-yellow-50 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ease-in-out group border border-slate-200 overflow-hidden ${
                visibleCards.includes(idx)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="w-full h-72 relative overflow-hidden">
                <Image
                  src={service.bgImage || "https://images.pexels.com/photos/16423103/pexels-photo-16423103.jpeg"}
                  alt={`${service.title} background`}
                  style={{ objectFit: "cover" }}
                  fill
                />
              </div>
              <div className="relative z-10 p-8">
                <div className="absolute -top-4 bg-gradient-to-br from-yellow-600 to-heff text-white p-4 rounded-xl inline-block mb-4 group-hover:scale-110 transition-transform">
                  {(() => {
                    const IconComponent = iconMap[service.icon || "Zap"];
                    return IconComponent ? <IconComponent className="w-8 h-8" /> : <Zap className="w-8 h-8" />;
                  })()}
                </div>
                <h3
                  className={`pt-8 text-2xl font-bold text-slate-900 mb-3 transition-all duration-500 ${
                    visibleCards.includes(idx)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${idx * 100 + 100}ms` }}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-slate-600 mb-6 transition-all duration-500 ${
                    visibleCards.includes(idx)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${idx * 100 + 150}ms` }}
                >
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className={`flex items-center text-slate-700 transition-all duration-500 ${
                        visibleCards.includes(idx)
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                      style={{
                        transitionDelay: `${idx * 100 + 200 + i * 100}ms`,
                      }}
                    >
                      <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
