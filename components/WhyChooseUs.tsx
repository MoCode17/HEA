import React from "react";
import { Shield, Award, Clock, TrendingUp } from "lucide-react";

const whyChooseUs = [
  {
    icon: <Shield />,
    title: "Licensed & Insured",
    desc: "Fully certified and protected for your peace of mind",
    style: "bg-gradient-to-br from-green-700 to-teal-300",
  },
  {
    icon: <Award />,
    title: "Quality Guaranteed",
    desc: "We stand behind every installation and repair",
    style: "bg-gradient-to-br from-violet-600 to-cyan-400",
  },
  {
    icon: <Clock />,
    title: "Reliable Service",
    desc: "On-time arrivals and efficient project completion",
    style: "bg-gradient-to-br from-heff to-gray-700",
  },
  {
    icon: <TrendingUp />,
    title: "Cutting-Edge Tech",
    desc: "Latest solutions in electrical automation",
    style: "bg-gradient-to-br from-orange-600 to-blue-500",
  },
];

const WhyChooseUs = () => {
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
          {whyChooseUs.map((item, idx) => (
            <div key={idx} className="text-center group">
              <div
                className={`p-6 rounded-2xl inline-block mb-4 group-hover:scale-110 transition-transform ${
                  item.style
                    ? item.style
                    : "bg-gradient-to-br from-blue-600 to-cyan-500"
                }`}
              >
                {React.cloneElement(item.icon, { className: "w-8 h-8" })}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
