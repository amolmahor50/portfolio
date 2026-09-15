import React from "react";
import { Link } from "react-router-dom";

// icons
import { ArrowRight, CheckCircle2, Layers, MoveRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import Headline from "@/components/shared/Headline";
import { useServices } from "@/hooks/useServices";
import { getLucideIcon } from "@/utils/iconResolver";

const Services = () => {
    const { services, loading, error } = useServices();

    return (
        <div className="pt-6 md:pt-20 space-y-20 md:space-y-28 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 z-[-1] pointer-events-none overflow-hidden">
                <div className="absolute top-[10%] left-[10%] w-[60vw] h-[60vw] md:w-[30vw] md:h-[30vw] rounded-full bg-primary/20 blur-[120px]" />
                <div className="absolute top-[40%] right-[5%] w-[70vw] h-[70vw] md:w-[40vw] md:h-[40vw] rounded-full bg-accent/20 blur-[140px]" />
            </div>

            <Headline
                title="Services &"
                highlight="Capabilities"
                subtitle="Proven end-to-end technical solutions tailored to modern web standards — based on real-world production experience."
            />

            {/* Loading State */}
            {loading && (
                <div className="space-y-12">
                    {[1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white p-8 border border-gray-200/90 animate-pulse"
                        >
                            <div className="space-y-4">
                                <div className="h-8 bg-gray-200 w-3/4 rounded-xs" />
                                <div className="h-4 bg-gray-100 w-1/2 rounded-xs" />
                                <div className="h-4 bg-gray-100 w-full rounded-xs" />
                                <div className="h-4 bg-gray-100 w-5/6 rounded-xs" />
                            </div>
                            <div className="h-48 bg-gray-100 rounded-none" />
                        </div>
                    ))}
                </div>
            )}

            {/* Error State */}
            {!loading && error && (
                <div className="p-8 text-center bg-red-50 border border-red-200 text-red-700">
                    <p className="font-semibold">Unable to load services at this time.</p>
                    <p className="text-sm mt-1">{error.message}</p>
                </div>
            )}

            {/* SERVICES LIST */}
            {!loading && !error && (
                <section className="space-y-16 md:space-y-24">
                    {services.map((service, index) => {
                        const isEven = index % 2 === 0;
                        const IconComponent = getLucideIcon(service.icon);

                        return (
                            <div
                                key={service.id}
                                id={service.id}
                                className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch scroll-mt-28 md:scroll-mt-32"
                            >
                                {/* LEFT CONTENT */}
                                <div
                                    className={`space-y-6 flex flex-col justify-center ${!isEven ? "lg:order-2" : ""}`}
                                >
                                    <div>
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="p-2.5 bg-primary/10 border border-primary/20 text-primary rounded-none shadow-xs">
                                                <IconComponent size={24} />
                                            </div>
                                            {service.badge && (
                                                <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 inline-block">
                                                    {service.badge}
                                                </span>
                                            )}
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-2">
                                            {service.title}
                                        </h2>
                                        {service.tagline && (
                                            <p className="text-base font-medium text-primary">
                                                {service.tagline}
                                            </p>
                                        )}
                                    </div>

                                    <p className="text-muted-foreground text-base leading-relaxed">
                                        {service.description}
                                    </p>

                                    {service.features && service.features.length > 0 && (
                                        <div className="space-y-2.5 pt-1">
                                            <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                                                Core Capabilities
                                            </p>
                                            <ul className="space-y-2.5">
                                                {service.features.map((feature, i) => (
                                                    <li
                                                        key={i}
                                                        className="flex items-start gap-3 text-base font-medium text-gray-700"
                                                    >
                                                        <CheckCircle2
                                                            size={18}
                                                            className="text-primary shrink-0 mt-0.5"
                                                        />
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                {/* RIGHT DELIVERABLES CARD */}
                                <div className={`flex items-center ${!isEven ? "lg:order-1" : ""}`}>
                                    <div className="w-full bg-white border border-gray-200/90 rounded-none p-6 md:p-8 shadow-xs hover:shadow-xl hover:border-primary/40 transition-all duration-300 relative overflow-hidden flex flex-col justify-between space-y-4">
                                        {/* Top Accent Line */}
                                        <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-primary via-secondary to-accent" />

                                        {/* Card Header */}
                                        <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                                            <div className="flex items-center gap-2 text-gray-900 font-bold text-xl">
                                                <IconComponent size={20} className="text-primary" />
                                                <span>Deliverables &amp; Tech Stack</span>
                                            </div>
                                        </div>

                                        {/* Deliverables List */}
                                        <div className="space-y-3">
                                            <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                                                What You Receive
                                            </p>
                                            <ul className="space-y-2">
                                                {service.deliverables &&
                                                service.deliverables.length > 0 ? (
                                                    service.deliverables.map((item, dIdx) => (
                                                        <li
                                                            key={dIdx}
                                                            className="flex items-start gap-2.5 text-base text-gray-600"
                                                        >
                                                            <ArrowRight
                                                                size={14}
                                                                className="text-primary mt-1 shrink-0"
                                                            />
                                                            <span>{item}</span>
                                                        </li>
                                                    ))
                                                ) : (
                                                    <li className="text-sm text-gray-500">
                                                        Customized roadmap and sprint execution
                                                    </li>
                                                )}
                                            </ul>
                                        </div>

                                        {/* Tech Stack Pills */}
                                        {service.techStack && service.techStack.length > 0 && (
                                            <div className="space-y-2.5 pt-2 border-t border-gray-100">
                                                <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                                                    Technologies Used
                                                </p>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {service.techStack.map((tech, tIdx) => (
                                                        <span
                                                            key={tIdx}
                                                            className="text-xs font-semibold px-2.5 py-1 bg-gray-100 text-gray-700 border border-gray-200"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Card CTA */}
                                        <div className="pt-2">
                                            <Button asChild size="lg" className="md:w-fit w-full">
                                                <Link
                                                    to="/contact"
                                                    className="flex items-center gap-3"
                                                >
                                                    <span>Inquire About This Service</span>
                                                    <ArrowRight size={16} />
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </section>
            )}

            {/* WORKFLOW */}
            <section className="mt-12">
                <div className="text-center mb-14">
                    <h2 className="text-2xl md:text-3xl font-semibold">Delivery Workflow</h2>

                    <p className="text-muted-foreground text-base max-w-xl mx-auto mt-3">
                        A transparent, iterative process ensuring alignment, speed, and
                        uncompromising quality.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            title: "Discovery",
                            desc: "Requirements gathering and architecture planning.",
                        },
                        {
                            title: "Design",
                            desc: "Wireframing UI/UX and finalizing the design system.",
                        },
                        {
                            title: "Development",
                            desc: "Agile sprints with regular milestone demos.",
                        },
                        {
                            title: "Deployment",
                            desc: "Performance audits, SEO checks, and launch.",
                        },
                    ].map((step, i) => (
                        <div key={i}>
                            <div className="relative p-6 md:p-8 bg-card border shadow-sm">
                                <div className="text-5xl font-black text-muted/20 absolute top-3 right-4">
                                    0{i + 1}
                                </div>

                                <h4 className="text-lg md:text-xl font-semibold tracking-tight mb-3">
                                    {step.title}
                                </h4>

                                <p className="text-muted-foreground text-base">{step.desc}</p>

                                {i < 3 && (
                                    <MoveRight
                                        className="hidden lg:block absolute -right-7 top-1/2 -translate-y-1/2 text-muted-foreground"
                                        size={24}
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center flex mt-8 justify-center">
                    <Button asChild size="lg" className="w-full md:w-fit">
                        <Link to="/contact" className="flex items-center gap-3">
                            <span>Ready to Collaborate</span>
                            <ArrowRight size={18} />
                        </Link>
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default Services;
