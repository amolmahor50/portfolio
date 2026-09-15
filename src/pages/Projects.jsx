import React from "react";
import { Link } from "react-router-dom";

// icons
import { ExternalLink, Github, MoveRight, Layers } from "lucide-react";

import Headline from "@/components/shared/Headline";
import { useProjects } from "@/hooks/useProjects";

const Projects = () => {
    const { projects, loading, error } = useProjects();

    return (
        <div className="pt-6 md:pt-14 space-y-12 md:space-y-24">
            {/* Header */}
            <Headline
                title="Digital"
                highlight="Experiences"
                subtitle="Explore a curated selection of projects where I've transformed complex problems into elegant, scalable, and fully responsive user interfaces."
            />

            {/* Loading State */}
            {loading && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div
                            key={i}
                            className="bg-card rounded-none p-6 md:p-8 border border-gray-200/90 shadow-sm animate-pulse space-y-4"
                        >
                            <div className="h-6 bg-gray-200 w-3/4 rounded-xs" />
                            <div className="h-4 bg-gray-100 w-full rounded-xs" />
                            <div className="h-4 bg-gray-100 w-5/6 rounded-xs" />
                            <div className="h-4 bg-gray-100 w-1/2 rounded-xs" />
                            <div className="pt-4 border-t border-border/50 flex justify-between items-center">
                                <div className="h-4 bg-gray-200 w-24 rounded-xs" />
                                <div className="h-6 bg-gray-200 w-16 rounded-xs" />
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Error State */}
            {!loading && error && (
                <div className="p-8 text-center bg-red-50 border border-red-200 text-red-700">
                    <p className="font-semibold">Unable to load projects at this time.</p>
                    <p className="text-sm mt-1">{error.message}</p>
                </div>
            )}

            {/* Project Grid */}
            {!loading && !error && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative bg-card text-card-foreground rounded-none p-6 md:p-8 border border-gray-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                {project.type && (
                                    <div className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 w-fit mb-2">
                                        {project.type}
                                    </div>
                                )}
                                <h3 className="md:text-xl text-lg font-semibold tracking-tight mb-2 text-foreground group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-500 text-base line-clamp-3 mb-3">
                                    {project.description}
                                </p>

                                {project.tags && project.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-1.5 mb-4">
                                        {project.tags.slice(0, 4).map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-none font-medium"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                <div className="flex justify-between items-center border-t border-border/50 pt-3">
                                    <span className="inline-flex items-center text-sm font-semibold text-primary">
                                        {project.actionText || "Project Overview"}
                                    </span>

                                    <div className="flex space-x-2 text-muted-foreground">
                                        {project.github && project.github !== "#" && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="p-2 hover:bg-muted hover:text-foreground transition-colors"
                                                title="View GitHub Repository"
                                            >
                                                <Github size={18} />
                                            </a>
                                        )}
                                        {project.live && project.live !== "#" && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="p-2 hover:bg-muted hover:text-primary transition-colors"
                                                title="Open Live Preview"
                                            >
                                                <ExternalLink size={18} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Projects;
