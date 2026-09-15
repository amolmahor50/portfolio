import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    Layout,
    Server,
    Database,
    Cloud,
    Code,
    Terminal,
    Layers,
    Monitor,
    Cpu,
    Search,
    Sparkles,
    Radio,
    Gauge,
    LayoutDashboard,
    ArrowRight,
} from "lucide-react";

import Headline from "@/components/shared/Headline";
import { Button } from "@/components/ui/button";
import { useSkills } from "@/hooks/useSkills";

const CATEGORIES = [
    { id: "all", label: "All Arsenal" },
    { id: "frontend", label: "Frontend & UI" },
    { id: "backend", label: "Backend & DB" },
    { id: "architecture", label: "Architecture & Real-Time" },
    { id: "tools", label: "DevOps & Tools" },
];

const Skills = () => {
    const { skills, loading, error } = useSkills();
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills =
        activeCategory === "all" ? skills : skills.filter((s) => s.category === activeCategory);

    const toolSkills = skills.filter((s) => s.category === "tools");

    return (
        <div className="md:pt-14 pt-3 space-y-16 md:space-y-24">
            {/* Header */}
            <Headline
                title="Technical"
                highlight="Arsenal"
                subtitle="A deep, battle-tested stack honed across commercial admin portals, scalable backends, real-time engines, and high-performance interfaces."
                glow
            />

            {/* Filterable Skills Grid */}
            <section className="space-y-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-primary">
                            Full Spectrum
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mt-1">
                            Frameworks, Languages &amp; Databases
                        </h2>
                    </div>

                    {/* Category Filter Tabs */}
                    <div className="flex flex-wrap gap-2">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-3.5 py-1.5 cursor-pointer text-xs md:text-sm font-semibold transition-all duration-200 rounded-none border ${
                                    activeCategory === cat.id
                                        ? "bg-primary text-white border-primary shadow-xs"
                                        : "bg-white text-gray-600 border-gray-200 hover:border-primary/40 hover:text-primary"
                                }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Loading Skeleton */}
                {loading && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div
                                key={i}
                                className="bg-white border border-gray-200/90 rounded-none p-6 shadow-xs animate-pulse space-y-4"
                            >
                                <div className="flex justify-between items-center">
                                    <div className="h-3 bg-gray-200 w-20 rounded-xs" />
                                    <div className="h-4 bg-gray-200 w-16 rounded-xs" />
                                </div>
                                <div className="h-5 bg-gray-200 w-1/2 rounded-xs" />
                                <div className="h-4 bg-gray-100 w-full rounded-xs" />
                                <div className="h-4 bg-gray-100 w-4/5 rounded-xs" />
                                <div className="h-1.5 bg-gray-200 w-full rounded-xs" />
                            </div>
                        ))}
                    </div>
                )}

                {/* Error message */}
                {!loading && error && (
                    <div className="p-8 text-center bg-red-50 border border-red-200 text-red-700">
                        <p className="font-semibold">Unable to load skills at this time.</p>
                        <p className="text-sm mt-1">{error.message}</p>
                    </div>
                )}

                {/* Skill Cards Grid */}
                {!loading && !error && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredSkills.map((skill) => {
                            const levelBadge =
                                skill.level === "Expert"
                                    ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                    : "bg-primary/10 text-primary border-primary/20";

                            return (
                                <div
                                    key={skill.id}
                                    className="bg-white border border-gray-200/90 rounded-none p-6 shadow-xs hover:shadow-xl hover:border-primary/40 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between space-y-4"
                                >
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between gap-2">
                                            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                                {skill.category
                                                    ? skill.category.replace("-", " ")
                                                    : "Skill"}
                                            </span>
                                            {skill.level && (
                                                <span
                                                    className={`text-[10px] font-bold uppercase px-2 py-0.5 border rounded-none ${levelBadge}`}
                                                >
                                                    {skill.level}
                                                </span>
                                            )}
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                                                {skill.name}
                                            </h3>
                                            {skill.percentage && (
                                                <span className="font-mono text-sm font-bold text-gray-500">
                                                    {skill.percentage}%
                                                </span>
                                            )}
                                        </div>

                                        <p className="text-base text-gray-500 leading-relaxed">
                                            {skill.desc}
                                        </p>
                                    </div>

                                    <div className="space-y-3 pt-2 border-t border-gray-100">
                                        {/* Progress Indicator */}
                                        {skill.percentage && (
                                            <div className="h-1.5 w-full bg-gray-100 rounded-none overflow-hidden border border-gray-200/50">
                                                <div
                                                    className="h-full bg-linear-to-r from-primary to-secondary transition-all duration-700 group-hover:brightness-110"
                                                    style={{ width: `${skill.percentage}%` }}
                                                />
                                            </div>
                                        )}

                                        {/* Project Tag */}
                                        {skill.project && (
                                            <div className="flex items-center gap-1.5 text-sm text-gray-600">
                                                <span className="text-gray-500">Applied in:</span>
                                                <span className="text-primary truncate">
                                                    {skill.project}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </section>

            {/* Tools Grid */}
            {toolSkills && toolSkills.length > 0 && activeCategory === "all" && (
                <section className="space-y-8">
                    <Headline
                        titleAs="h2"
                        title="DevOps &"
                        highlight="Tooling Spotlight"
                        subtitle="Production tooling for continuous deployment, rigorous API testing, and agile collaboration."
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {toolSkills.map((tool, i) => (
                            <div
                                key={tool.id || i}
                                className="p-6 bg-white border border-gray-200/90 rounded-none flex flex-col items-start text-left shadow-xs hover:shadow-xl hover:border-primary/40 transition-all duration-300 group relative overflow-hidden space-y-3"
                            >
                                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="flex items-center justify-between w-full">
                                    <div className="p-2.5 text-primary rounded-none bg-primary/10 border border-primary/20 group-hover:scale-110 transition-transform">
                                        <Terminal size={22} />
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5">
                                        {tool.level || "Expert"}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary transition-colors tracking-tight">
                                        {tool.name}
                                    </h3>
                                    {tool.project && (
                                        <p className="text-xs text-primary font-medium mt-0.5">
                                            Applied in: {tool.project}
                                        </p>
                                    )}
                                </div>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    {tool.desc ||
                                        "Battle-tested in high-traffic production environments."}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Bottom CTA */}
            <section className="pt-6 text-center">
                <div className="p-8 md:p-12 bg-white border border-gray-200/90 shadow-xs flex flex-col items-center space-y-4 max-w-3xl mx-auto relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-primary via-secondary to-accent" />
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                        Looking for these skills on your next project?
                    </h3>
                    <p className="text-base text-gray-500 max-w-xl">
                        Whether you need an enterprise admin panel, custom full-stack application,
                        or real-time feature, let's discuss your requirements.
                    </p>
                    <Button asChild size="lg" className="mt-2 md:w-fit w-full">
                        <Link to="/contact">
                            <span>Discuss Your Project</span>
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default Skills;
