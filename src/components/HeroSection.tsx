import { Button } from "@/components/ui/button";
import heroAbstract from "@/assets/hero-abstract.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-primary overflow-hidden">
      {/* Abstract background image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroAbstract} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Curved line decoration */}
      <div className="absolute top-1/3 right-0 w-96 h-96 opacity-10">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <path
            d="M 50 200 Q 200 50 350 200 Q 200 350 50 200"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-foreground"
          />
        </svg>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Your Virtual COO
            <span className="block text-primary">in Your Pocket</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            The only business intelligence tool that works like a Chief Operating Officer. 
            Get real-time, actionable insights via text—no dashboards, no guesswork.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="hero">
              Join the Waitlist
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
              See How It Works
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6">
            Join 500+ business owners getting early access
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;