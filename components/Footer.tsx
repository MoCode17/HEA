import React from "react";
import { Zap } from "lucide-react";

interface props {
  scrollToSection(id: string): void;
}

const Footer = ({ scrollToSection }: props) => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-2 rounded-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Heffernan Electrical</h3>
                <p className="text-xs text-slate-400">Automation Specialists</p>
              </div>
            </div>
            <p className="text-slate-400">
              Powering the future, one home at a time.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="hover:text-white transition-colors"
                >
                  Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Smart Home Automation</li>
              <li>Solar Installation</li>
              <li>General Electrical</li>
              <li>Commercial Solutions</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-400">
              <li>(555) 123-4567</li>
              <li>info@heffernanautomate.com</li>
              <li className="pt-4">
                <div className="flex space-x-3">
                  {["facebook", "twitter", "instagram", "linkedin"].map(
                    (social) => (
                      <div
                        key={social}
                        className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer"
                      >
                        <div className="w-5 h-5 bg-slate-600 rounded"></div>
                      </div>
                    )
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>
            &copy; 2024 Heffernan Electrical Automation. All rights reserved.
            Licensed & Insured.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
