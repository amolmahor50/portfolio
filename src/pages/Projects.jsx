import { Link } from "react-router-dom";

// icons
import { ExternalLink, Github, MoveRight } from "lucide-react";

import Headline from "@/components/shared/Headline";
import { projectsData } from "@/utils/data";

const Projects = () => {
    return (
        <>
            <div className="pt-6 md:pt-14 space-y-12 md:space-y-24">
                {/* Header */}

                <Headline
                    title="Digital"
                    highlight="Experiences"
                    subtitle="Explore a curated selection of projects where I've transformed complex problems into elegant, scalable, and fully responsive user interfaces."
                />

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project) => (
                        <div
                            key={project.id}
                            className="group relative bg-card text-card-foreground rounded-none p-6 md:p-8 border border-gray-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <h3 className="md:text-xl text-lg font-semibold tracking-tight mb-2 text-foreground group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-500 text-base line-clamp-3 mb-3">
                                    {project.description}
                                </p>

                                <div className="flex justify-between items-center border-t border-border/50 pt-2">
                                    <Link
                                        to={`/projects/${project.id}`}
                                        className="inline-flex items-center text-base text-primary group-hover:underline"
                                    >
                                        Case Study <MoveRight className="ml-2 h-4 w-4" />
                                    </Link>

                                    <div className="flex space-x-3 text-muted-foreground">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="p-2 hover:bg-muted hover:text-foreground transition-colors"
                                        >
                                            <Github size={18} />
                                        </a>
                                        {project.live !== "#" && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="p-2 hover:bg-muted hover:text-primary transition-colors"
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
            </div>
        </>
    );
};

export default Projects;
