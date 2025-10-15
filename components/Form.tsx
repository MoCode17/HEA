import React, { useState } from "react";
import {
  Send,
  User,
  Mail,
  Phone,
  Briefcase,
  MessageSquare,
} from "lucide-react";

const ModernContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [focused, setFocused] = useState("");

  const handleSubmit = () => {
    if (
      formData.name &&
      formData.email &&
      formData.phone &&
      formData.service &&
      formData.message
    ) {
      alert("Thank you! We'll contact you soon.");
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="w-full max-w-2xl">
      {/* Header */}

      {/* Form Card */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <div className="space-y-6">
          {/* Name Field */}
          <div className="relative">
            <label className="block text-sm font-semibold text-slate-700 mb-2 ml-1">
              Full Name
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                <User className="w-5 h-5" />
              </div>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused("")}
                className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl outline-none transition-all duration-300 text-slate-700 placeholder-slate-400 ${
                  focused === "name"
                    ? "border-blue-500 shadow-lg shadow-blue-100"
                    : "border-slate-200 hover:border-slate-300"
                }`}
                placeholder="Name"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="relative">
            <label className="block text-sm font-semibold text-slate-700 mb-2 ml-1">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                <Mail className="w-5 h-5" />
              </div>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused("")}
                className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl outline-none transition-all duration-300 text-slate-700 placeholder-slate-400 ${
                  focused === "email"
                    ? "border-blue-500 shadow-lg shadow-blue-100"
                    : "border-slate-200 hover:border-slate-300"
                }`}
                placeholder="john@example.com"
              />
            </div>
          </div>

          {/* Phone Field */}
          <div className="relative">
            <label className="block text-sm font-semibold text-slate-700 mb-2 ml-1">
              Phone Number
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                <Phone className="w-5 h-5" />
              </div>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                onFocus={() => setFocused("phone")}
                onBlur={() => setFocused("")}
                className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl outline-none transition-all duration-300 text-slate-700 placeholder-slate-400  ${
                  focused === "phone"
                    ? "border-blue-500 shadow-lg shadow-blue-100"
                    : "border-slate-200 hover:border-slate-300"
                }`}
                placeholder="0412345678"
              />
            </div>
          </div>

          {/* Service Select */}
          <div className="relative">
            <label className="block text-sm font-semibold text-slate-700 mb-2 ml-1">
              Service Interested In
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                <Briefcase className="w-5 h-5" />
              </div>
              <select
                value={formData.service}
                onChange={(e) =>
                  setFormData({ ...formData, service: e.target.value })
                }
                onFocus={() => setFocused("service")}
                onBlur={() => setFocused("")}
                className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl outline-none transition-all duration-300 appearance-none cursor-pointer ${
                  focused === "service"
                    ? "border-blue-500 shadow-lg shadow-blue-100"
                    : "border-slate-200 hover:border-slate-300"
                } ${!formData.service ? "text-slate-400" : "text-slate-900"}`}
              >
                <option value="">Select a service</option>
                <option value="smart-home">Smart Home Automation</option>
                <option value="solar">Solar Installation</option>
                <option value="electrical">General Electrical</option>
                <option value="commercial">EV Charger</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-5 h-5 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Message Field */}
          <div className="relative">
            <label className="block text-sm font-semibold text-slate-700 mb-2 ml-1">
              Your Message
            </label>
            <div className="relative">
              <div className="absolute left-4 top-4 text-slate-400">
                <MessageSquare className="w-5 h-5" />
              </div>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused("")}
                rows={5}
                className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl outline-none transition-all duration-300 resize-none text-slate-700 placeholder-slate-400 ${
                  focused === "message"
                    ? "border-blue-500 shadow-lg shadow-blue-100"
                    : "border-slate-200 hover:border-slate-300"
                }`}
                placeholder="Tell us about your project..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white py-4 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-2xl hover:shadow-blue-200 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 group"
          >
            <span>Send Message</span>
            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Privacy Notice */}
          <p className="text-center text-sm text-slate-500 mt-4">
            We'll get back to you within 24 hours. Your information is secure
            and private.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModernContactForm;
