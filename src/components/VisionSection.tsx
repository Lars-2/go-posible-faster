import { Button } from "@/components/ui/button";

const VisionSection = () => {
  return (
    <section id="vision" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
            In 5 Years, the Best-Run Businesses 
            <span className="block text-primary">Will Run on Posible</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            We're not just building another dashboard. We're reimagining what it means to run a business. 
            Cut through data overload and empower yourself to run smarter, faster, and freer.
          </p>
          
          <div className="bg-gradient-accent p-8 rounded-2xl shadow-subtle mb-12">
            <blockquote className="text-lg md:text-xl text-foreground font-medium italic">
              "The future of business intelligence isn't about more data—it's about better decisions. 
              Posible gives you a virtual COO in your pocket, so you can focus on what you do best: 
              growing your business."
            </blockquote>
            <cite className="block mt-4 text-muted-foreground">— The Posible Team</cite>
          </div>
          
          <div className="space-y-4 sm:space-y-0 sm:flex sm:gap-4 justify-center">
            <Button size="lg" variant="hero">
              Join the Revolution
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
              Learn More
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-8">
            Be among the first 1,000 businesses to experience the future of business intelligence
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;