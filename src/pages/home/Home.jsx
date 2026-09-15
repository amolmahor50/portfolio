import React from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    ExternalLink,
    Github,
    CheckCircle2,
    Star,
    LayoutDashboard,
    Rocket,
    Palette,
    Server,
    Radio,
    Gauge,
    MoveRight,
    Layers,
    Database,
    Cloud,
    Cpu,
    Monitor,
    Sparkles,
    Terminal,
    Code,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Headline from "@/components/shared/Headline";
import HeroSection from "@/pages/home/HeroSection";

import { useProjects } from "@/hooks/useProjects";
import { useServices } from "@/hooks/useServices";
import { useTestimonials } from "@/hooks/useTestimonials";
import { getLucideIcon } from "@/utils/iconResolver";

const Home = () => {
    const { projects, loading: projectsLoading } = useProjects();
    const { services, loading: servicesLoading } = useServices();
    const { testimonials, loading: testimonialsLoading } = useTestimonials();

    // Featured flagship projects
    const featuredProjects = projects.slice(0, 4);

    // Dynamic services for "What I Can Build For You"
    const displayServices = services.length > 0 ? services : [];

    // Curated top testimonials
    const featuredTestimonials = testimonials.slice(0, 3);

    // Dynamic engineering specialties derived from live services or top highlights
    const engineeringSpecialties = React.useMemo(() => {
        if (services && services.length > 0) {
            const extracted = services.flatMap((s) => s.features || []);
            if (extracted.length >= 6) {
                return extracted.slice(0, 6);
            }
        }
        return [
            "Production MERN & Next.js Architecture",
            "Role-Based Access Control (RBAC)",
            "Socket.io Bi-Directional Real-Time Sync",
            "PostgreSQL & Complex Data Aggregations",
            "Enterprise Admin Dashboards & HRMS",
            "RESTful APIs & Secure JWT Auth",
        ];
    }, [services]);

    return (
        <div className="space-y-16 md:space-y-32">
            {/* HERO SECTION */}
            <HeroSection />

            {/* ABOUT PREVIEW / ENGINEERING PROFILE */}
            <section className="md:space-y-12 space-y-6">
                <Headline
                    title="Engineering"
                    highlight="With Purpose"
                    subtitle="Transforming complex business logic and operational bottlenecks into clean, resilient software."
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Real Profile Photo Card */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative group max-w-sm w-full">
                            <div className="absolute -inset-2 bg-linear-to-r from-primary via-secondary to-accent opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />
                            <div className="relative bg-white border border-gray-200/90 p-4 shadow-xl">
                                <img
                                    src="/amol-mahor.png"
                                    alt="Amol Mahor - Full Stack Developer"
                                    className="w-full h-80 sm:h-92 object-cover grayscale-20% group-hover:grayscale-0 transition-all duration-500"
                                />
                                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                                    <div>
                                        <h4 className="text-base font-semibold text-gray-900">
                                            Amol Mahor
                                        </h4>
                                        <p className="text-sm font-medium text-primary">
                                            Web Developer @ Strelema
                                        </p>
                                    </div>
                                    <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-50 border border-emerald-200 text-emerald-700">
                                        Full-Stack MERN
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Engineering Narrative */}
                    <div className="lg:col-span-7 space-y-6">
                        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 leading-tight">
                            I build platforms that scale effortlessly and deliver exceptional user
                            experiences.
                        </h3>

                        <p className="text-gray-600 text-base leading-relaxed">
                            Currently at <strong className="text-gray-900">Strelema</strong>, I
                            engineer mission-critical admin platforms like{" "}
                            <strong className="text-gray-900">SuperLeader</strong>, enterprise HRMS
                            systems, and data-driven polling engines like{" "}
                            <strong className="text-gray-900">PollPandit</strong>. With a strong
                            background in React.js, Node.js, PostgreSQL, and Socket.io, I architect
                            scalable backends and pixel-perfect frontends built for speed and
                            security.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                            {engineeringSpecialties.map((spec, sIdx) => (
                                <div
                                    key={sIdx}
                                    className="flex items-center gap-2 text-sm font-semibold text-gray-800"
                                >
                                    <CheckCircle2 size={16} className="text-primary shrink-0" />
                                    <span className="truncate">{spec}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-2 flex flex-wrap gap-4">
                            <Button asChild size="lg" className="md:w-fit w-full">
                                <Link to="/about">
                                    <span>Read Full Journey</span>
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="md:w-fit w-full">
                                <Link to="/contact">Get in Touch</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT I CAN BUILD FOR YOU (DYNAMIC SERVICES GRID) */}
            <section className="md:space-y-12 space-y-6">
                <Headline
                    title="What I Can"
                    highlight="Build For You"
                    subtitle="End-to-end technical capabilities tailored for startups, businesses, and engineering teams."
                />

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {servicesLoading &&
                        [1, 2, 3, 4, 5, 6].map((i) => (
                            <div
                                key={i}
                                className="bg-white border border-gray-200/90 p-8 animate-pulse space-y-4"
                            >
                                <div className="h-8 bg-gray-200 w-8 rounded-xs" />
                                <div className="h-6 bg-gray-200 w-3/4 rounded-xs" />
                                <div className="h-4 bg-gray-100 w-1/2 rounded-xs" />
                                <div className="h-4 bg-gray-100 w-full rounded-xs" />
                                <div className="h-4 bg-gray-100 w-2/3 rounded-xs" />
                                <div className="h-8 bg-gray-100 w-full rounded-xs pt-4" />
                            </div>
                        ))}

                    {!servicesLoading &&
                        displayServices.map((service) => {
                            const IconComponent = getLucideIcon(service.icon);
                            return (
                                <Link
                                    key={service.id}
                                    to={`/services#${service.id}`}
                                    className="bg-white border border-gray-200/90 rounded-none p-6 md:p-8 flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-primary/40 transition-all duration-300 group relative overflow-hidden space-y-6 block"
                                >
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div className="p-2.5 bg-primary/10 border border-primary/20 text-primary rounded-none group-hover:scale-110 transition-transform">
                                                <IconComponent size={22} />
                                            </div>
                                            {service.badge && (
                                                <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-2.5 py-1">
                                                    {service.badge}
                                                </span>
                                            )}
                                        </div>

                                        <div>
                                            <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                                                {service.title}
                                            </h3>
                                        </div>

                                        <p className="text-base text-gray-500 leading-relaxed line-clamp-3">
                                            {service.description}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between text-sm font-semibold text-primary pt-3 border-t border-gray-100">
                                        <span>Learn Deliverables</span>
                                        <ArrowRight
                                            size={16}
                                            className="group-hover:translate-x-1.5 transition-transform"
                                        />
                                    </div>
                                </Link>
                            );
                        })}
                </div>

                <div className="text-center">
                    <Button asChild size="lg" className="md:w-fit w-full">
                        <Link to="/services">
                            <span>
                                Explore All{" "}
                                {displayServices.length > 0 ? displayServices.length : ""} Services
                                &amp; Deliverables
                            </span>
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </section>

            {/* FEATURED PROJECTS SHOWCASE */}
            <section id="featured-projects" className="md:space-y-12 space-y-6 scroll-mt-24">
                <Headline
                    title="Featured"
                    highlight="Flagship Work"
                    subtitle="Real-world commercial platforms, complex admin dashboards, and dynamic polling engines."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {projectsLoading &&
                        [1, 2, 3, 4].map((i) => (
                            <div
                                key={i}
                                className="bg-white border border-gray-200/90 p-8 animate-pulse space-y-4"
                            >
                                <div className="h-4 bg-gray-200 w-24 rounded-xs" />
                                <div className="h-6 bg-gray-200 w-3/4 rounded-xs" />
                                <div className="h-4 bg-gray-100 w-full rounded-xs" />
                                <div className="h-4 bg-gray-100 w-4/5 rounded-xs" />
                            </div>
                        ))}

                    {!projectsLoading &&
                        featuredProjects.map((project, idx) => (
                            <div
                                key={project.id}
                                className="bg-white border border-gray-200/90 rounded-none p-6 md:p-8 shadow-xs hover:shadow-xl hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden space-y-6"
                            >
                                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between gap-3">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-2.5 py-1">
                                                Flagship 0{idx + 1}
                                            </span>
                                            <span className="text-[14px] font-medium text-gray-500">
                                                {project.type || "Production Platform"}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-1.5">
                                            {project.github && project.github !== "#" && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="p-1.5 text-gray-400 hover:text-primary hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-all"
                                                    title="View Source Code"
                                                >
                                                    <Github size={16} />
                                                </a>
                                            )}
                                            {project.live && project.live !== "#" && (
                                                <a
                                                    href={project.live}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="p-1.5 text-gray-400 hover:text-primary hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-all"
                                                    title={
                                                        project.type?.includes("Website")
                                                            ? "Open Live Website"
                                                            : "Open Live Platform"
                                                    }
                                                >
                                                    <ExternalLink size={16} />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-base text-gray-600 leading-relaxed line-clamp-3">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex md:items-center justify-between md:flex-row flex-col gap-4">
                                        <Link
                                            to="/projects"
                                            className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1.5"
                                        >
                                            <span>Architecture &amp; Features</span>
                                            <MoveRight size={14} />
                                        </Link>

                                        {project.live && project.live !== "#" ? (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-xs font-bold w-fit text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 inline-flex items-center gap-1.5 hover:bg-emerald-100 transition-colors"
                                            >
                                                <span>
                                                    {project.actionText ||
                                                        (project.type?.includes("Website")
                                                            ? "Visit Website"
                                                            : "Visit Live")}
                                                </span>
                                                <ExternalLink size={13} />
                                            </a>
                                        ) : (
                                            <span className="text-xs text-gray-400 font-medium">
                                                Enterprise Internal
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>

                <div className="text-center">
                    <Button asChild size="lg" className="md:w-fit w-full">
                        <Link to="/projects">
                            <span>View All Archive Projects</span>
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </section>

            {/* TESTIMONIALS / ENDORSEMENTS */}
            <section className="md:space-y-12 space-y-6">
                <Headline
                    title="Client &amp; Partner"
                    highlight="Endorsements"
                    subtitle="Feedback from engineering peers, backend collaborators, and UI/UX design partners."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {testimonialsLoading &&
                        [1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className="bg-white border border-gray-200/90 p-8 animate-pulse space-y-4"
                            >
                                <div className="h-4 bg-gray-200 w-24 rounded-xs" />
                                <div className="h-4 bg-gray-100 w-full rounded-xs" />
                                <div className="h-4 bg-gray-100 w-3/4 rounded-xs" />
                                <div className="flex items-center gap-3 pt-4">
                                    <div className="w-10 h-10 rounded-full bg-gray-200" />
                                    <div className="space-y-1">
                                        <div className="h-4 bg-gray-200 w-20 rounded-xs" />
                                        <div className="h-3 bg-gray-100 w-16 rounded-xs" />
                                    </div>
                                </div>
                            </div>
                        ))}

                    {!testimonialsLoading &&
                        featuredTestimonials.map((testimonial, i) => (
                            <div
                                key={testimonial.id || i}
                                className="bg-white border border-gray-200/90 rounded-none p-6 md:p-8 shadow-xs hover:shadow-xl hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-6 relative overflow-hidden group"
                            >
                                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="space-y-4">
                                    {/* Stars */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex gap-1 text-amber-500">
                                            {[...Array(5)].map((_, sIdx) => (
                                                <Star
                                                    key={sIdx}
                                                    size={16}
                                                    className="fill-amber-500 text-amber-500"
                                                />
                                            ))}
                                        </div>
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5">
                                            Verified Colleague
                                        </span>
                                    </div>

                                    <p className="text-base text-gray-600 leading-relaxed italic">
                                        "{testimonial.text}"
                                    </p>
                                </div>

                                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                                    {testimonial.avatar && (
                                        <img
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            className="w-11 h-11 rounded-full object-cover border border-gray-200 shadow-xs group-hover:border-primary transition-colors"
                                        />
                                    )}
                                    <div>
                                        <h4 className="text-base font-semibold text-gray-900 group-hover:text-primary transition-colors">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-sm text-primary font-semibold">
                                            {testimonial.position}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
