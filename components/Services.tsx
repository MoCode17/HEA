import React from "react";
import { Home, Sun, Zap, Wrench, Check } from "lucide-react";

const services = [
  {
    icon: <Home className="w-8 h-8" />,
    title: "Smart Home Automation",
    description:
      "Transform your home into an intelligent living space with integrated lighting, security, climate control, and entertainment systems.",
    features: [
      "Voice Control Integration",
      "Remote Access",
      "Energy Management",
      "Custom Scenes",
    ],
  },
  {
    icon: <Sun className="w-8 h-8" />,
    title: "Solar Installation",
    description:
      "Harness clean energy with professional solar panel installation and maintenance. Reduce your bills while helping the environment.",
    features: [
      "System Design",
      "Installation & Setup",
      "Maintenance",
      "Battery Storage",
    ],
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "General Electrical",
    description:
      "Comprehensive electrical services for residential and commercial properties. From repairs to complete rewiring projects.",
    features: [
      "Repairs & Upgrades",
      "New Installations",
      "Safety Inspections",
      "Emergency Service",
    ],
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Commercial Solutions",
    description:
      "Specialized electrical automation for businesses. Increase efficiency and reduce operational costs with smart solutions.",
    features: [
      "Office Automation",
      "Energy Audits",
      "Lighting Design",
      "Maintenance Plans",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive electrical solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl hover:shadow-xl transition-all group border border-slate-200"
            >
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white p-4 rounded-xl inline-block mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-slate-700">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
