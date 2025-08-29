import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import abstractSpheres from "@/assets/abstract-spheres.jpg";

const SolutionSection = () => {
  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <img 
          src={abstractSpheres} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Intelligence That
              <span className="block text-primary">Comes to You</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Posible doesn't just show you data—it thinks for you. Get proactive insights, 
              alerts, and recommendations delivered straight to your phone when they matter most.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Zero Learning Curve</h3>
                  <p className="text-muted-foreground">Works via SMS and iMessage—no apps to download or dashboards to learn.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Proactive Insights</h3>
                  <p className="text-muted-foreground">Get nudged about opportunities and risks before they impact your business.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Real-Time Intelligence</h3>
                  <p className="text-muted-foreground">Instant analysis of your cash flow, sales, and operations—all in plain English.</p>
                </div>
              </div>
            </div>
            
            <Button variant="hero">
              See It in Action
            </Button>
          </div>
          
          <div className="relative">
            <Card className="p-6 bg-background/50 backdrop-blur-sm border-border/50 shadow-glow">
              <div className="space-y-4">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">📱 Posible Alert • Today 9:42 AM</p>
                  <p className="text-foreground font-medium">
                    "Cash flow looking tight by Friday. Consider pushing the Johnson payment or delaying inventory order by 3 days. Want me to draft the email?"
                  </p>
                </div>
                
                <div className="bg-accent/20 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">📈 Weekly Insight • Monday 8:00 AM</p>
                  <p className="text-foreground font-medium">
                    "Last week's promotion drove 23% more sales but margin dropped 8%. Try reducing discount to 15% next time for optimal profit."
                  </p>
                </div>
                
                <div className="bg-secondary/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">⚠️ Heads Up • 2 hours ago</p>
                  <p className="text-foreground font-medium">
                    "Rainy weather predicted this weekend. Historical data shows 30% drop in foot traffic. Consider weekend staff adjustment."
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;