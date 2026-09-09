import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Globe,
  Send,
  Facebook,
  Instagram,
  MessageSquare,
} from "lucide-react";

import Headline from "@/components/shared/Headline";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending message:", formData);
    alert("Message sent successfully!");
  };

  const contactInfo = [
    {
      icon: <Mail />,
      label: "Email Address",
      value: "amolmahor50@gmail.com",
      color: "text-primary",
    },
    {
      icon: <MapPin />,
      label: "Location",
      value: "Maharashtra, India",
      color: "text-secondary",
    },
    {
      icon: <Phone />,
      label: "Contact Number",
      value: "+91 9673170912",
      color: "text-accent",
    },
    {
      icon: <Globe />,
      label: "Digital Presence",
      value: "@amolmahor",
      color: "text-sky-500",
    },
  ];

  const socialLinks = [
    {
      icon: <Github />,
      path: "https://github.com/amolmahor50",
    },
    {
      icon: <Linkedin size={20} />,
      path: "https://linkedin.com/in/amol-mahor-a57a87202",
    },
    {
      icon: <Facebook size={20} />,
      path: "https://www.facebook.com/share/1DnAsPP1Nj",
    },
    {
      icon: <Instagram size={20} />,
      path: "https://instagram.com/_aesthetic.amol",
    },
    { icon: <Mail size={20} />, path: "mailto:amolmahor50@gmail.com" },
  ];

  return (
    <>
      <div className="md:pt-14 md:space-y-20 space-y-10 relative">
        {/* Header Section */}
        <Headline
          title="Let's Start a"
          highlight="Creative Journey"
          breakLine
          subtitle="Whether you have a specific project in mind or just want to explore possibilities, I'm always open to discussing new opportunities."
        />

        {/* Main Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-8">
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900">
                Connection Details
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((item, i) => (
                  <div
                    key={i}
                    className="group p-6 bg-white border border-gray-200/90 rounded-none shadow-xs hover:border-primary/40 hover:shadow-md transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div
                      className={`p-2.5 bg-primary/10 w-max mb-4 ${item.color} rounded-none border border-primary/20 transition-colors`}
                    >
                      {item.icon}
                    </div>

                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                      {item.label}
                    </p>

                    <p className="text-sm md:text-base font-bold text-gray-900">{item.value}</p>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <p className="text-base font-semibold tracking-tight text-gray-700 mb-4 flex items-center gap-2">
                  <MessageSquare size={16} className="text-primary" />
                  Follow me natively
                </p>

                <div className="flex gap-3">
                  {socialLinks.map((social, i) => (
                    <a
                      key={i}
                      href={social.path}
                      target="_blank"
                      rel="noreferrer"
                      className="w-11 h-11 bg-white border border-gray-200/90 rounded-none flex items-center justify-center text-gray-500 hover:text-primary hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-xs border border-gray-200/90 rounded-none h-full relative overflow-hidden">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 md:p-10 p-7 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[60px] rounded-full pointer-events-none group-hover:bg-primary/20 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 blur-[60px] rounded-full pointer-events-none" />

              <h2 className="mb-6 text-xl md:text-2xl font-bold tracking-tight text-gray-900">
                Send a Message
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group/field">
                  <input
                    className={inputStyles}
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="relative group/field">
                  <input
                    className={inputStyles}
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="relative group/field">
                <textarea
                  className={`${inputStyles} min-h-40 md:min-h-48 resize-none`}
                  name="message"
                  placeholder="Start typing your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full py-3.5 text-sm md:text-base font-semibold"
              >
                <span>Send Message Now</span>
                <Send size={18} />
              </button>

              <p className="text-center text-gray-500 text-sm font-normal">
                I'll get back to you within 24 hours.
              </p>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;

const inputStyles =
  "w-full px-4 py-3 text-sm md:text-base bg-gray-50/50 border border-gray-200 text-gray-900 focus:outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all duration-300 placeholder:text-gray-400 font-normal rounded-none";
