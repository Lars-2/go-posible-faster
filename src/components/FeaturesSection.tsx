import { Card } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: "💰",
      title: "Cash Flow Forecasting",
      description: "Predict cash crunches 2-4 weeks ahead and get actionable recommendations to avoid them."
    },
    {
      icon: "🎯",
      title: "Promotion Timing",
      description: "Know exactly when to run promotions based on seasonality, inventory, and customer behavior."
    },
    {
      icon: "📊",
      title: "Discount Optimization",
      description: "Find the sweet spot between sales volume and profit margins for maximum revenue."
    },
    {
      icon: "👥",
      title: "Staffing Intelligence",
      description: "Get alerts about optimal staffing levels based on forecasted demand and labor costs."
    },
    {
      icon: "📦",
      title: "Inventory Insights",
      description: "Never run out of top sellers or overstock slow movers with predictive inventory alerts."
    },
    {
      icon: "❤️",
      title: "Customer Behavior",
      description: "Understand what makes your customers tick and when they're most likely to buy."
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Intelligence That Actually
            <span className="block text-primary">Moves Your Business</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Posible connects to your existing tools and delivers insights that help you 
            make smarter decisions faster.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 text-center shadow-subtle border-border/50 hover:shadow-glow transition-all duration-300 group">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Integrates with Stripe, Shopify, QuickBooks, G-Suite, and more
          </p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl font-bold">Stripe</div>
            <div className="text-2xl font-bold">Shopify</div>
            <div className="text-2xl font-bold">QuickBooks</div>
            <div className="text-2xl font-bold">G-Suite</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;