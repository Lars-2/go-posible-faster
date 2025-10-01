import { useState } from "react";
import { Button } from "@/components/ui/button";
import aiBrainHero from "@/assets/ai-brain-hero.jpg";
import WaitlistDialog from "@/components/WaitlistDialog";

const HeroSection = () => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-primary overflow-hidden">
      {/* Abstract background image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={aiBrainHero} 
          alt="AI brain neural network visualization" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Dotted circle decoration inspired by logo */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <svg width="800" height="800" viewBox="0 0 800 800" className="text-primary">
            <defs>
              <pattern id="dots" patternUnits="userSpaceOnUse" width="20" height="20">
                <circle cx="10" cy="10" r="2" fill="currentColor" />
              </pattern>
            </defs>
            <circle cx="400" cy="400" r="300" fill="none" stroke="url(#dots)" strokeWidth="60" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Your Virtual</span>
            <span className="block text-primary">COO in Your Pocket</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            The only business intelligence tool that works like a Chief Operating Officer. 
            Get real-time, actionable insights via text—no dashboards, no guesswork.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="hero" onClick={() => setWaitlistOpen(true)}>
              Join the Waitlist
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg"
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See How It Works
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6">
            Join 500+ business owners getting early access
          </p>
        </div>
      </div>
      
      <WaitlistDialog open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </section>
  );
};

export default HeroSection;