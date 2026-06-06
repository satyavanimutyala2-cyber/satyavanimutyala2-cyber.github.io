export function SkillsSection() {
  const categories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Zustand", "Framer Motion", "HTML/CSS"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "REST APIs", "GraphQL", "WebSockets"]
    },
    {
      title: "Database & Cloud",
      skills: ["PostgreSQL", "MongoDB", "Redis", "AWS", "Docker", "Vercel"]
    },
    {
      title: "Tools & Methods",
      skills: ["Git", "CI/CD", "Jest", "Agile", "Figma"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-background relative border-y-2 border-foreground">
      {/* Decorative repeating text background */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none flex flex-col justify-between whitespace-nowrap z-0">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`text-[10vw] font-black tracking-tighter ${i % 2 === 0 ? 'translate-x-12' : '-translate-x-12'}`}>
            CODE BUILD SHIP REPEAT
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 md:flex justify-between items-end border-b-2 border-foreground pb-8">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-foreground mb-4 md:mb-0">
            Tech <span className="text-primary">Stack</span>
          </h2>
          <p className="font-mono text-muted-foreground uppercase tracking-widest font-bold">
            Tools of the trade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {categories.map((category, index) => (
            <div key={index} className="group">
              <h3 className="text-2xl font-bold font-mono uppercase tracking-widest border-l-4 border-primary pl-4 mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 border-2 border-foreground bg-background font-mono text-sm font-bold uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
