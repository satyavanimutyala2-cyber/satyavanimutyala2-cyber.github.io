import { ArrowRight, Github, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="min-h-[100dvh] pt-24 pb-12 flex flex-col justify-center relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-10 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4xKSIvPjwvc3ZnPg==')] [mask-image:linear-gradient(to_bottom,white,transparent)] -z-10 pointer-events-none opacity-50 dark:opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 border-2 border-foreground bg-background font-mono text-sm font-bold uppercase tracking-widest shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Available for new opportunities
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter mb-6 uppercase text-foreground">
            Hi, I'm Satya.<br />
            <span className="text-primary inline-block transform hover:-rotate-2 transition-transform duration-300">Full-Stack</span><br />
            Developer.
          </h1>
          
          <p className="text-xl md:text-2xl font-mono text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            I engineer robust digital experiences with obsessive attention to detail, scalable architectures, and bold interfaces.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <Button 
              size="lg"
              onClick={() => scrollTo("projects")}
              className="text-lg font-mono uppercase font-bold tracking-wider px-8 py-6 rounded-none border-2 border-foreground hover:translate-x-1 hover:-translate-y-1 hover:shadow-md transition-all bg-foreground text-background hover:bg-foreground"
            >
              View Work <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => scrollTo("contact")}
              className="text-lg font-mono uppercase font-bold tracking-wider px-8 py-6 rounded-none border-2 border-foreground hover:translate-x-1 hover:-translate-y-1 hover:shadow-md transition-all bg-background text-foreground"
            >
              Get in touch
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-6 md:left-1/2 md:-translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
        <span className="font-mono text-xs uppercase font-bold tracking-widest rotate-90 mb-6">Scroll</span>
        <div className="w-0.5 h-12 bg-foreground"></div>
      </div>
    </section>
  );
}
