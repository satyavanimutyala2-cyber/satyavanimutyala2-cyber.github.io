import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-2 border-transparent ${
        isScrolled ? "bg-background/90 backdrop-blur-md border-foreground shadow-md" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div 
          className="text-2xl font-black tracking-tighter cursor-pointer hover:text-primary transition-colors"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          SATYA.
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="font-mono text-sm uppercase font-bold tracking-widest hover:text-primary transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </button>
          ))}
          <Button 
            onClick={() => scrollTo("contact")}
            className="font-mono uppercase font-bold tracking-widest border-2 border-foreground hover:translate-x-1 hover:-translate-y-1 hover:shadow-md transition-all rounded-none"
          >
            Hire Me
          </Button>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b-2 border-foreground shadow-lg flex flex-col items-center py-6 gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="font-mono text-lg uppercase font-bold tracking-widest hover:text-primary transition-colors w-full text-center"
            >
              {item.label}
            </button>
          ))}
          <Button 
            onClick={() => scrollTo("contact")}
            className="font-mono uppercase font-bold tracking-widest border-2 border-foreground rounded-none mt-2"
          >
            Hire Me
          </Button>
        </div>
      )}
    </nav>
  );
}
