import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 border-t border-background/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-3xl font-black tracking-tighter">
            SATYA.
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Twitter className="w-6 h-6" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="mailto:hello@satya.dev" className="hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-sm text-muted/60">
          <p>© {new Date().getFullYear()} Satya. All rights reserved.</p>
          <p>Engineered with obsessive attention to detail.</p>
        </div>
      </div>
    </footer>
  );
}
