import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const OptIn = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic phone number validation
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneNumber || phoneNumber.length < 10) {
      toast.error("Please enter a valid phone number");
      return;
    }
    
    if (!phoneRegex.test(phoneNumber)) {
      toast.error("Please enter a valid phone number");
      return;
    }

    setIsLoading(true);
    
    // Simulate SMS send (in production, this would call your backend)
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Check your phone! We've sent you a text to confirm your opt-in.");
      setPhoneNumber("");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-2xl mx-auto">
            {/* Main Opt-In Form */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get Started with Posible
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Enter your phone number to start receiving proactive intelligence about your business
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 md:p-12 shadow-lg mb-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="phone" className="text-lg mb-3 block">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="text-lg h-14"
                    disabled={isLoading}
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    We'll send you a text message to confirm your opt-in
                  </p>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-lg h-14"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Get Started"}
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  By submitting, you'll receive an SMS asking you to reply with "Y" to confirm. 
                  Message and data rates may apply. View our{" "}
                  <a href="/privacy" className="text-primary hover:underline">
                    Privacy Policy and SMS Terms
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* Alternative Method */}
            <div className="bg-muted/30 border border-border rounded-lg p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">
                Prefer to Text?
              </h2>
              <p className="text-muted-foreground mb-6">
                Text <span className="font-bold text-foreground">"Get Started"</span> to
              </p>
              <div className="text-3xl font-bold text-primary mb-6">
                1-888-888-8888
              </div>
              <p className="text-sm text-muted-foreground">
                You'll receive a welcome message and can confirm your opt-in by replying with "Y"
              </p>
            </div>

            {/* How It Works */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-8 text-center">
                How It Works
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Enter Your Phone Number</h3>
                    <p className="text-muted-foreground">
                      Submit your phone number using the form above
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Receive Welcome Text</h3>
                    <p className="text-muted-foreground">
                      You'll get an SMS saying: "Welcome to Posible! Reply with Y to really get this party started."
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Confirm with "Y"</h3>
                    <p className="text-muted-foreground">
                      Simply reply with the letter "Y" to confirm your opt-in
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">You're All Set!</h3>
                    <p className="text-muted-foreground">
                      Get a confirmation: "Awesome, you're in! Let's make magic happen."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Toll-Free Verification Script */}
            <div className="mt-16 bg-muted/30 border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Toll-Free Verification Script
              </h2>
              
              {/* Sales Rep Script */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  Sales Rep Script – Verbal Consent Flow
                </h3>
                <div className="space-y-4 bg-card p-6 rounded-lg border border-border">
                  <div>
                    <p className="font-semibold mb-2">Rep:</p>
                    <p className="text-muted-foreground">
                      Hi, this is [Rep Name] with Posible, your business intelligence partner. With your permission, we'd like to send you real-time updates and insights for your business by text message. Standard message and data rates may apply. You can reply STOP anytime to unsubscribe, or HELP for assistance. Do I have your consent to enroll you?
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Customer:</p>
                    <p className="text-muted-foreground">Yes, you have my consent.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Rep:</p>
                    <p className="text-muted-foreground">
                      Great! To confirm, you're opting in to receive text messages from Posible at this number. You can always reply STOP to cancel or HELP for support. Let's run through an example:
                    </p>
                  </div>
                </div>
              </div>

              {/* Example Dialog – Opt-In */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  Example Dialog – Opt-In
                </h3>
                <div className="space-y-4 bg-card p-6 rounded-lg border border-border">
                  <div>
                    <p className="font-semibold mb-2">Rep (system simulation):</p>
                    <p className="text-muted-foreground">
                      Thanks for joining Posible Alerts! You'll now receive updates and insights for your business. Reply HELP for help, STOP to cancel. Msg & data rates may apply.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Customer:</p>
                    <p className="text-muted-foreground">Sounds good.</p>
                  </div>
                </div>
              </div>

              {/* Example Dialog – HELP Request */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  Example Dialog – HELP Request
                </h3>
                <div className="space-y-4 bg-card p-6 rounded-lg border border-border">
                  <div>
                    <p className="font-semibold mb-2">Customer:</p>
                    <p className="text-muted-foreground">HELP</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">System Reply:</p>
                    <p className="text-muted-foreground">
                      Posible Alerts: You're subscribed to receive business updates and insights. Reply STOP to cancel. For further support, visit posible.ai/support or call [support phone].
                    </p>
                  </div>
                </div>
              </div>

              {/* Example Dialog – Opt-Out */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  Example Dialog – Opt-Out
                </h3>
                <div className="space-y-4 bg-card p-6 rounded-lg border border-border">
                  <div>
                    <p className="font-semibold mb-2">Customer:</p>
                    <p className="text-muted-foreground">STOP</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">System Reply:</p>
                    <p className="text-muted-foreground">
                      Posible Alerts: You have successfully unsubscribed and will no longer receive messages. Reply START to rejoin.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OptIn;
