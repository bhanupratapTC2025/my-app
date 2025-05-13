"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function EyewearContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    city: "",
    pincode: "",
    message: "",
  });

  const adminPhoneNumber = "9340655665"; // Replace with real number

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const isMobileValid = (number) => /^[6-9]\d{9}$/.test(number);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isMobileValid(formData.mobile)) {
      toast.error("Please enter a valid 10-digit mobile number.");
      return;
    }

    const message = `👓 *Eyewear Inquiry* 👓%0A%0A🔹 Name: ${formData.name}%0A🔹 Mobile: ${formData.mobile}%0A🔹 City: ${formData.city}%0A🔹 Pincode: ${formData.pincode}%0A🔹 Message: ${formData.message}`;
    const url = `https://wa.me/${adminPhoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    toast.success("Opening WhatsApp...");
    setTimeout(() => window.open(url, "_blank"), 400);
  };

  return (
    <div className="w-full py-16 bg-gray-50">
      <Toaster position="top-right" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Description */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 leading-tight font-serif" >
            Want to know more about hearing aid?
          </h2>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 leading-tight font-sans">
            Get In Touch
          </h2>
          <p className="text-gray-600 text-lg mb-4">
            Our customer care executives will get in touch with you
          </p>
        </div>

        {/* Right: Form */}
        <div className="md:w-1/2 w-full bg-gray-50 p-8 rounded-2xl  ">
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                name="pincode"
                placeholder="Pincode"
                value={formData.pincode}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <textarea
              name="message"
              placeholder="How can we assist you?"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="w-full bg-gray-700 hover:bg-black transition text-white py-3 rounded-lg font-semibold text-lg font-sans"
            >
              Send Message on WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
