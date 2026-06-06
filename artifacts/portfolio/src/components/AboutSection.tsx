import { Terminal, Database, Server, Layout, Blocks, Braces } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  const features = [
    {
      icon: <Layout className="w-8 h-8 mb-4 text-primary" />,
      title: "Frontend Engineering",
      description: "Crafting pixel-perfect, accessible, and performant user interfaces with React, Next.js, and modern CSS."
    },
    {
      icon: <Server className="w-8 h-8 mb-4 text-primary" />,
      title: "Backend Architecture",
      description: "Designing scalable APIs and robust microservices using Node.js, Express, and strong architectural patterns."
    },
    {
      icon: <Database className="w-8 h-8 mb-4 text-primary" />,
      title: "Database Design",
      description: "Modeling efficient schemas and optimizing queries across relational (PostgreSQL) and NoSQL (MongoDB) databases."
    }
  ];

  return (
    <section id="about" className="py-24 bg-foreground text-background relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/2">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 text-background">
              The <span className="text-primary">Builder</span><br />Mindset.
            </h2>
            <div className="font-mono text-lg space-y-6 text-muted border-l-4 border-primary pl-6">
              <p>
                I don't just write code; I engineer products. With a foundation in computer science and a relentless pursuit of craftsmanship, I bridge the gap between design and technical implementation.
              </p>
              <p>
                My approach is pragmatic but ambitious: build systems that scale gracefully, interfaces that respond instantly, and architectures that other developers love to work with.
              </p>
              <p>
                Whether I'm optimizing database indexes or fine-tuning complex CSS grid layouts, I maintain the same level of obsessive precision.
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="grid gap-6">
              {features.map((feature, i) => (
                <Card key={i} className="rounded-none border-2 border-background/20 bg-background/5 text-background hover:bg-background/10 transition-colors">
                  <CardContent className="p-6">
                    {feature.icon}
                    <h3 className="text-xl font-bold font-mono uppercase tracking-wide mb-2">{feature.title}</h3>
                    <p className="text-muted/80">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
