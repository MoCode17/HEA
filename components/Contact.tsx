import React, { useState } from "react";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import Form from "./Form";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

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
    <section
      id="contact"
      className="relative -mt-16 z-10 rounded-t-2xl overflow-auto shadow-lg"
    >
      <div className="py-16 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 flex items-center justify-center">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-slate-900 mb-3">
              Get in Touch
            </h2>
            <p className="text-slate-600 text-lg">
              We'd love to hear about your project
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Form />
            </div>

            <div className="flex flex-col space-y-8">
              {/* Additional Info */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center transform hover:scale-105 transition-transform">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1">Call Us</h3>
                  <p className="text-sm text-slate-600">+61481267812</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg text-center transform hover:scale-105 transition-transform">
                  <div className="bg-cyan-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    Email Us
                  </h3>
                  <p className="text-sm text-slate-600">info@company.com</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg text-center transform hover:scale-105 transition-transform">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MessageSquare className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    Live Chat
                  </h3>
                  <p className="text-sm text-slate-600">Available 24/7</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg text-center transform hover:scale-105 transition-transform">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    Service Area
                  </h3>
                  <p className="text-sm text-slate-600">
                    Greater Melbourne Area
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2 text-slate-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-semibold">7:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-semibold">8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-semibold">Emergency Only</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-blue-200">
                    <div className="text-black font-semibold">
                      24/7 Emergency Service Available
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full h-96 md:h-full rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d816386.6928430905!2d143.75234108434302!3d-36.937915880097215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad9dfd0ab47ce21%3A0xdd0878035812aa77!2sGreater%20Bendigo%2C%20VIC!5e0!3m2!1sen!2sau!4v1760161097159!5m2!1sen!2sau"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Google Maps"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
