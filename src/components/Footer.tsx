import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        {/* CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Run Your Business Smarter?
          </h2>
          <p className="text-lg text-background/80 mb-8 max-w-2xl mx-auto">
            Join forward-thinking business owners who are ditching dashboards for intelligence that actually works.
          </p>
          <Button size="lg" variant="hero">
            Get Early Access
          </Button>
        </div>
        
        {/* Footer Content */}
        <div className="border-t border-background/20 pt-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-4">Posible</div>
              <p className="text-background/80 mb-6 max-w-md">
                Your Virtual COO in your pocket. Redefining what it means to run a business 
                with proactive intelligence delivered via text.
              </p>
              <div className="flex space-x-4">
                <div className="text-background/60">Follow us:</div>
                <a href="#" className="text-background/80 hover:text-background transition-colors">Twitter</a>
                <a href="#" className="text-background/80 hover:text-background transition-colors">LinkedIn</a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-background/80">
                <li><a href="#features" className="hover:text-background transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-background transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-background/80">
                <li><a href="#vision" className="hover:text-background transition-colors">About</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Contact</a></li>
                <li><a href="/privacy" className="hover:text-background transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60">
            <p>&copy; 2024 Posible. All rights reserved. Made for business owners who want to win.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;