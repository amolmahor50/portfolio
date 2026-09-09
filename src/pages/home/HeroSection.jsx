import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Amol Mahor Resume.pdf";
    link.download = "Amol Mahor Resume.pdf";
    link.click();
  };

  return (
    <section className="relative flex items-center overflow-hidden w-full py-4 md:py-20">
      {/* AMBIENT BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-112.5 bg-linear-to-b from-primary/20 via-secondary/10 to-transparent blur-[120px] rounded-full" />
        <div className="absolute top-1/3 -left-10 w-96 h-96 bg-primary/15 blur-[130px] rounded-full" />
        <div className="absolute top-1/3 -right-10 w-96 h-96 bg-secondary/15 blur-[140px] rounded-full" />
      </div>

      <div className="w-full max-w-4xl mx-auto px-4 md:px-8 text-center flex flex-col items-center space-y-6 md:space-y-8">
        {/* HERO TITLE */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 max-w-3xl leading-[1.15]">
          Building Scalable{" "}
          <span className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Full-Stack Platforms
          </span>{" "}
          &amp; Modern Web Experiences
        </h1>

        {/* HERO SUBTITLE */}
        <p className="text-base md:text-lg text-gray-600 leading-relaxed font-normal max-w-2xl mx-auto">
          Full Stack Developer with 3+ years of production experience building enterprise platforms
          like SuperLeader, PollPandit, and HRMS dashboards with React.js, Node.js, and modern cloud
          stacks.
        </p>

        {/* ACTION BUTTONS */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 pt-2">
          <Button
            size="lg"
            className="md:w-fit w-full"
            onClick={() =>
              document.getElementById("featured-projects").scrollIntoView({ behavior: "smooth" })
            }
          >
            <span>View Featured Work</span>
            <ArrowRight size={18} />
          </Button>

          <Button size="lg" className="md:w-fit w-full" variant="outline" onClick={downloadCV}>
            <Download size={18} />
            <span>Download Resume</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
