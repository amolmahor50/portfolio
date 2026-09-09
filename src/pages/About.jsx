import React from "react";
import { Link } from "react-router-dom";
import {
  Award,
  Briefcase,
  GraduationCap,
  CheckCircle,
  Rocket,
  LayoutDashboard,
  Palette,
  Server,
  Radio,
  Gauge,
  ArrowRight,
} from "lucide-react";

import Headline from "@/components/shared/Headline";

import {
  experiencesData,
  educationData,
  certificationsData,
  aboutTraits,
  servicesData,
} from "@/utils/data";

const About = () => {
  return (
    <>
      <div className="md:pt-10 space-y-10 md:space-y-32">
        {/* Profile Section */}
        <div className="flex justify-between md:flex-row flex-col gap-16 items-center">
          <div className="space-y-4">
            <h1 className="scroll-m-20 md:text-4xl sm:text-3xl text-2xl font-bold tracking-tight">
              Amol{" "}
              <span className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Mahor
              </span>
            </h1>

            <p className="leading-relaxed text-base text-gray-600">
              I am a results-driven Full Stack Developer with 2+ years of production experience
              engineering scalable web applications and enterprise platforms. Currently at{" "}
              <strong className="text-gray-900 font-semibold">Strelema</strong>, I develop
              mission-critical platforms including{" "}
              <strong className="text-gray-900 font-semibold">SuperLeader</strong>, enterprise HRMS
              dashboards, and data-driven polling engines like{" "}
              <strong className="text-gray-900 font-semibold">PollPandit</strong>.
            </p>
            <p className="leading-relaxed text-base text-gray-600">
              Specializing in React.js, Node.js, PostgreSQL, Express.js, and Socket.io, I architect
              resilient backends, implement granular role-based access control (RBAC), and deliver
              pixel-perfect user interfaces built for high performance and security.
            </p>

            <div className="pt-6 grid grid-cols-2 gap-4">
              {aboutTraits.map((item) => (
                <div key={item} className="flex items-center space-x-2 text-foreground font-medium">
                  <CheckCircle className="text-primary" size={18} />
                  <span className="md:text-base text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group ml-auto">
            <img
              src="/amol-mahor.png"
              alt="Profile"
              className="md:w-full md:h-full w-[80%] mx-auto rounded-full object-cover grayscale-30% group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

        {/* Experience Timeline */}
        <Headline
          titleAs="h2"
          title="Professional"
          highlight="Journey"
          subtitle="My career path through various roles, shaping my expertise in building world-class platforms."
          className="mb-16"
        />

        {/* Professional Journey Timeline */}
        <div className="relative border-l-2 border-primary/20 md:ml-8 space-y-10 md:space-y-12 pb-8">
          {experiencesData.map((exp, i) => (
            <div key={i} className="relative pl-6 md:pl-12 group">
              {/* Node Marker */}
              <span className="absolute -left-2.25 top-6 w-4 h-4 bg-white border-2 border-primary shadow-[0_0_12px_rgba(124,110,230,0.6)] rotate-45 z-10 transition-transform duration-300 group-hover:scale-125 group-hover:bg-primary" />

              {/* Card Content */}
              <div className="bg-white border border-gray-200/90 rounded-none p-6 md:p-8 shadow-xs hover:shadow-xl hover:border-primary/40 transition-all duration-300 relative overflow-hidden">
                {/* Top Accent Glow Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-3.5 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase rounded-none inline-flex items-center gap-1.5">
                    <Briefcase size={14} />
                    {exp.period}
                  </span>
                  <span className="text-base text-gray-400 tracking-widest">Role #{i + 1}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 group-hover:text-primary transition-colors mb-1">
                  {exp.role}
                </h3>

                <p className="text-base font-semibold text-primary mb-4 flex items-center gap-1.5">
                  <span>{exp.company}</span>
                </p>

                <p className="text-gray-500 text-base leading-relaxed max-w-3xl">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Services & Core Capabilities */}
        <div className="space-y-8 pt-4">
          <Headline
            titleAs="h2"
            title="Services &"
            highlight="What I Offer"
            subtitle="Leveraging my real-world engineering background to deliver scalable digital products for clients and companies."
            className="mb-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service) => {
              const icons = {
                Rocket,
                LayoutDashboard,
                Palette,
                Server,
                Radio,
                Gauge,
              };
              const Icon = icons[service.icon] || Rocket;
              return (
                <Link
                  key={service.id}
                  to={`/services#${service.id}`}
                  className="bg-white border border-gray-200/90 rounded-none p-6 shadow-xs hover:shadow-xl hover:border-primary/40 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between space-y-4 block"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 bg-primary/10 border border-primary/20 text-primary rounded-none">
                        <Icon size={22} />
                      </div>
                      {service.badge && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-2 py-0.5">
                          {service.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-base text-gray-500 line-clamp-3 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-sm font-semibold text-primary">
                    <span>{service.techStack.slice(0, 3).join(" • ")}</span>
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="flex justify-center pt-4">
            <Link
              to="/services"
              className="btn-primary px-6 py-2.5 text-sm font-semibold rounded-none inline-flex items-center gap-2"
            >
              <span>Explore All Services & Deliverables</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="flex flex-col space-y-16">
          {/* Education Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3.5 border-b border-gray-200/80 pb-4">
              <div className="p-2.5 bg-primary/10 border border-primary/20 text-primary rounded-none">
                <GraduationCap size={24} />
              </div>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900">
                Education
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {educationData.map((edu, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200/90 rounded-none p-6 shadow-xs hover:shadow-lg hover:border-primary/40 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between space-y-4"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase rounded-none">
                        {edu.year}
                      </span>
                      <span className="text-xs font-bold text-gray-700 px-2 py-0.5 bg-gray-100 border border-gray-200 rounded-none">
                        Grade: {edu.percentage}
                      </span>
                    </div>

                    <h3 className="text-base md:text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                  </div>

                  <p className="text-base text-gray-500 pt-2 border-t border-gray-100">
                    {edu.institute}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3.5 border-b border-gray-200/80 pb-4">
              <div className="p-2.5 bg-primary/10 border border-primary/20 text-primary rounded-none">
                <Award size={24} />
              </div>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900">
                Certifications
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {certificationsData.map((cert, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200/90 rounded-none p-6 shadow-xs hover:shadow-lg hover:border-primary/40 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between space-y-4"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase rounded-none">
                        {cert.year}
                      </span>
                      <span className="text-xs font-bold text-emerald-700 px-2 py-0.5 bg-emerald-50 border border-emerald-200 rounded-none">
                        Verified
                      </span>
                    </div>

                    <h3 className="text-base md:text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                  </div>

                  <p className="text-base text-gray-500 pt-2 border-t border-gray-100">
                    {cert.org}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
