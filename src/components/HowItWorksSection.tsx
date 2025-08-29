const HowItWorksSection = () => {
  const steps = [
    {
      step: "01",
      title: "Connect Your Tools",
      description: "Link your existing business tools like Stripe, Shopify, QuickBooks, and more. Takes less than 5 minutes."
    },
    {
      step: "02", 
      title: "Get Insights by Text",
      description: "Receive proactive insights, alerts, and recommendations via SMS or iMessage throughout your day."
    },
    {
      step: "03",
      title: "Run Smarter",
      description: "Make faster, better decisions with intelligence that comes to you—no dashboards required."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get up and running in minutes, not months. No complex setup or training required.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-8 mb-16 last:mb-0">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-gradient-hero text-white flex items-center justify-center text-xl font-bold shadow-glow">
                  {step.step}
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
                <p className="text-lg text-muted-foreground">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block">
                  <svg className="w-12 h-6 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;