import React from "react";
import Image from "next/image";
import logo from "@/public/Logo_transparent.png";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import facebook from "@/public/facebook.svg";
import instagram from "@/public/instagram.svg";

interface props {
  scrollToSection(id: string): void;
}

const Footer = ({ scrollToSection }: props) => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4 w-full">
              <Image src={logo} alt="Logo" height={50} />
            </div>
            <p className="text-white">
              Powering the future, one home at a time.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-heff">Quick Links</h4>
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
            <h4 className="font-bold mb-4 text-heff">Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Smart Home Automation</li>
              <li>Solar Installation</li>
              <li>General Electrical</li>
              <li>Commercial Solutions</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-heff">Contact</h4>
            <ul className="space-y-2 text-slate-400">
              <li>(555) 123-4567</li>
              <li>info@heffernanautomate.com</li>
              <li className="pt-4 px-4">
                <div className="flex gap-8 text-white">
                  <FiFacebook
                    size={24}
                    className="hover:text-blue-500 cursor-pointer"
                  />
                  <FaInstagram
                    size={24}
                    className="hover:text-pink-500 cursor-pointer"
                  />
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
