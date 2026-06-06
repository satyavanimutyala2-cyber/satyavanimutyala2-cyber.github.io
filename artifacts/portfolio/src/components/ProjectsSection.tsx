import { useListProjects } from "@workspace/api-client-react";
import { Github, ExternalLink, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export function ProjectsSection() {
  const { data: projects, isLoading, isError } = useListProjects();

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-foreground mb-4">
            Selected <span className="text-primary">Works</span>
          </h2>
          <div className="w-24 h-2 bg-primary mb-8"></div>
          <p className="font-mono text-muted-foreground max-w-2xl text-lg">
            A curated selection of my recent engineering projects. Each demonstrates a unique technical challenge solved with robust architecture and clean code.
          </p>
        </div>

        {isLoading ? (
          <div className="grid gap-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col md:flex-row gap-8 border-2 border-foreground p-4">
                <Skeleton className="w-full md:w-1/2 aspect-video rounded-none" />
                <div className="w-full md:w-1/2 space-y-4">
                  <Skeleton className="h-8 w-3/4 rounded-none" />
                  <Skeleton className="h-24 w-full rounded-none" />
                  <div className="flex gap-2">
                    <Skeleton className="h-8 w-16 rounded-none" />
                    <Skeleton className="h-8 w-16 rounded-none" />
                    <Skeleton className="h-8 w-16 rounded-none" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : isError ? (
          <div className="p-8 border-2 border-destructive bg-destructive/10 text-destructive font-mono font-bold uppercase">
            Failed to load projects. Please try again later.
          </div>
        ) : projects && projects.length > 0 ? (
          <div className="grid gap-16">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 lg:gap-16 items-center group`}
              >
                <div className="w-full md:w-1/2 relative">
                  {/* Decorative background shadow for image */}
                  <div className="absolute top-4 left-4 w-full h-full bg-primary -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                  <div className="aspect-video border-2 border-foreground bg-muted overflow-hidden relative z-10">
                    {project.imageUrl ? (
                      <img 
                        src={project.imageUrl} 
                        alt={project.title}
                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-foreground text-background font-black text-4xl uppercase tracking-tighter opacity-10">
                        {project.title}
                      </div>
                    )}
                  </div>
                </div>

                <div className="w-full md:w-1/2">
                  <div className="font-mono text-sm font-bold text-primary mb-4 uppercase tracking-widest">
                    Project {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter mb-6">
                    {project.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 border border-foreground/30 font-mono text-xs font-bold uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    {project.githubUrl && (
                      <Button asChild variant="outline" className="rounded-none border-2 border-foreground font-mono uppercase font-bold tracking-wider hover:bg-foreground hover:text-background transition-colors">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" /> Code
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button asChild className="rounded-none border-2 border-foreground bg-primary text-primary-foreground hover:bg-primary/90 font-mono uppercase font-bold tracking-wider">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-12 border-2 border-foreground border-dashed text-center font-mono text-muted-foreground uppercase">
            No projects available at the moment.
          </div>
        )}
      </div>
    </section>
  );
}
