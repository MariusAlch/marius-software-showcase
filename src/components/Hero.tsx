
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground">
            Marius Software
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Professional web development services specializing in React, TypeScript, and fintech solutions
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
            <span>Led by Senior Web Engineer</span>
            <span className="hidden md:block">•</span>
            <span>8+ Years Experience</span>
            <span className="hidden md:block">•</span>
            <span>Fintech Specialist</span>
          </div>
          
          <Button 
            size="lg" 
            className="hover-scale"
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Experience
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="pt-8 text-xs text-muted-foreground">
          <p>Company ID: 306965772 | Marius Software, MB</p>
          <p>Fabriko g. 33C, LT-25135 Vilnius, Lithuania</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
