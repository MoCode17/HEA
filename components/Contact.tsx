import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
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
    <section id="contact" className="">
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

            <div className="space-y-8">
              <div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">
                      Service Area
                    </div>
                    <div className="text-slate-600">
                      Greater Metropolitan Area
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
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
                    <div className="text-blue-700 font-semibold">
                      24/7 Emergency Service Available
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
