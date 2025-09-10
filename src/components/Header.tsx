import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/f0929ada-f36d-4a35-9dc7-5983b2e2987a.png?v=2" 
              alt="Posible Logo" 
              className="h-10 w-auto"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#vision" className="text-muted-foreground hover:text-foreground transition-colors">
              Vision
            </a>
          </div>
          
          <Button variant="hero">
            Join Waitlist
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;