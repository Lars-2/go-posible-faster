import { Card } from "@/components/ui/card";

const ProblemSection = () => {
  const problems = [
    {
      title: "Dashboard Overload",
      description: "You're drowning in reports, charts, and analytics that take too much time to digest."
    },
    {
      title: "Reactive Decision Making",
      description: "By the time you see the problem in your data, it's too late to prevent the damage."
    },
    {
      title: "Analysis Paralysis",
      description: "More data doesn't mean better decisions—it often means slower ones."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Running a Business Shouldn't
            <span className="block text-muted-foreground">Feel Like Guesswork</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Most business owners are overwhelmed by data but starving for insights. 
            Sound familiar?
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <Card key={index} className="p-8 text-center shadow-subtle border-border/50 hover:shadow-glow transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-foreground">{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;