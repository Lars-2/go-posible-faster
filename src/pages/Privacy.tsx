import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-16 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Posible — Privacy Policy, Terms of Service & SMS Terms</h1>
          <div className="mb-12 space-y-2">
            <p className="text-lg text-muted-foreground">
              <strong>Effective Date:</strong> 6/25/2025
            </p>
            <p className="text-lg text-muted-foreground">
              <strong>Last Updated:</strong> 9/01/2025
            </p>
          </div>

          <div className="mb-12 p-6 bg-muted rounded-lg">
            <p className="text-sm">
              <strong>Important Notice:</strong> This document is a comprehensive draft intended to help Posible publish website terms that are clear to users and protective of the company. It is not legal advice. Before publishing, review with licensed counsel and fill in bracketed items.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            {/* Terms of Service */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 border-b pb-4">1) Terms of Service (TOS)</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">1.1. Agreement to Terms</h3>
                <p className="mb-4">
                  By accessing or using Posible's websites, products, or services (the <strong>Services</strong>), you agree to be bound by these Terms of Service (the <strong>Terms</strong>). If you do not agree, do not use the Services. If you are using the Services on behalf of a company, you represent and warrant that you have authority to bind that company, in which case <strong>"you"</strong> or <strong>"Customer"</strong> means that company.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">1.2. Services; Eligibility</h3>
                <p className="mb-4">
                  Posible provides a virtual intelligence/co-pilot service for brick‑and‑mortar businesses and franchisees, delivering insights via SMS/iMessage and other channels. You must be at least 18 years old and capable of entering into a binding contract to use the Services.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">1.3. Accounts and Security</h3>
                <p className="mb-4">
                  You are responsible for safeguarding your account credentials and for all activity under your account. Notify us immediately of any unauthorized use. Posible is not liable for losses resulting from compromised credentials caused by your acts or omissions.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">1.4. Acceptable Use</h3>
                <p className="mb-4">
                  You will not (and will not permit others to): (a) reverse engineer, decompile, or attempt to derive source code from the Services; (b) use the Services to violate law or third‑party rights; (c) use the Services to transmit malware, spam, or infringing, obscene, or unlawful content; (d) interfere with or disrupt the Services; (e) resell or provide the Services to unauthorized third parties; (f) access the Services to build a competing product; (g) submit personal data that you lack lawful rights or consents to process.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">1.5. Customer Data & Integrations</h3>
                <p className="mb-4">
                  <strong>Customer Data</strong> means data you submit to the Services, including data from integrations (e.g., Stripe, Shopify, QuickBooks, G‑Suite, marketing tools, calendars, weather, and local events). You retain all rights in Customer Data. You grant Posible a worldwide, non‑exclusive license to host, process, analyze, transmit, and display Customer Data solely to provide and improve the Services, to ensure security, and as otherwise permitted in the Privacy Policy and these Terms. You are responsible for obtaining and maintaining all required notices and consents for Customer Data and for your end‑users.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">1.11. Disclaimer of Warranties</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm font-medium">
                    TO THE FULLEST EXTENT PERMITTED BY LAW, THE SERVICES AND ALL CONTENT ARE PROVIDED <strong>"AS IS"</strong> AND <strong>"AS AVAILABLE."</strong> POSIBLE AND ITS AFFILIATES, SUPPLIERS, AND LICENSORS DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON‑INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF COURSE OF DEALING OR USAGE. POSIBLE DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR‑FREE, OR SECURE, OR THAT INSIGHTS OR RECOMMENDATIONS WILL BE ACCURATE OR SUITABLE FOR ANY PARTICULAR PURPOSE.
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">1.13. Limitation of Liability</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm font-medium">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT WILL POSIBLE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR LOSS OF PROFITS, REVENUE, GOODWILL, DATA, OR BUSINESS INTERRUPTION, EVEN IF FORESEEABLE. POSIBLE'S AGGREGATE LIABILITY ARISING OUT OF OR RELATING TO THE SERVICES WILL NOT EXCEED THE GREATER OF (A) AMOUNTS PAID BY YOU TO POSIBLE FOR THE SERVICES DURING THE 12 MONTHS BEFORE THE EVENT GIVING RISE TO LIABILITY OR (B) US$100. THESE LIMITATIONS APPLY TO THE FULLEST EXTENT PERMITTED BY LAW.
                  </p>
                </div>
              </div>
            </section>

            {/* Privacy Policy */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 border-b pb-4">2) Privacy Policy</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">2.1. Scope</h3>
                <p className="mb-4">
                  This Privacy Policy describes how Posible LLC ("Posible," "we," "us") collects, uses, discloses, and protects information in connection with the Services, and explains the choices available to you.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">2.2. Information We Collect</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Account & Contact Information:</strong> Name, email, phone number, business name, role, and settings.</li>
                  <li><strong>Business & Integration Data:</strong> Data you connect from third‑party systems (e.g., transactions, orders, inventory, staffing, marketing metrics). We access only the minimum data needed to provide the Services.</li>
                  <li><strong>Communications:</strong> SMS/iMessage content, support inquiries, and interaction history.</li>
                  <li><strong>Usage & Device Data:</strong> Log files, IP address, device identifiers, browser type, pages viewed, timestamps, clickstream, and diagnostics.</li>
                  <li><strong>Cookies & Similar Technologies:</strong> As described in the Cookie Notice below.</li>
                </ul>
                <p className="mb-4">
                  We <strong>do not</strong> use or sell your customers' phone numbers or contact details for our own marketing. We process Customer Data solely to provide the Services to you.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">2.3. How We Use Information</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Provide, operate, maintain, and improve the Services and features (including AI/ML models that may utilize aggregated, de‑identified data to improve performance).</li>
                  <li>Personalize insights, notifications, and recommendations.</li>
                  <li>Authenticate users; prevent fraud, abuse, and security incidents.</li>
                  <li>Communicate with you about updates, support, and marketing (where permitted by law and your preferences).</li>
                  <li>Comply with legal obligations and enforce our Terms.</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">2.9. Your Rights & Choices</h3>
                <p className="mb-4">
                  Depending on your location, you may have rights to access, correct, delete, or port your personal information; object to or restrict certain processing; and withdraw consent. You may also opt out of marketing communications by following unsubscribe instructions or contacting us. Requests may be submitted to <strong><a href="mailto:erik@posible.com" className="text-primary hover:underline">erik@posible.com</a></strong>.
                </p>
              </div>
            </section>

            {/* SMS Terms */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 border-b pb-4">4) SMS Terms (TCPA/CTIA Compliance)</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">4.1. SMS Program Description</h3>
                <p className="mb-4">
                  By opting in on our website or via text, you agree to receive SMS or MMS messages from Posible relating to account verification, service alerts, and business insights. Message frequency varies.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">4.2. Consent & Opt‑Out</h3>
                <p className="mb-4">
                  Consent is not a condition of purchase. Message and data rates may apply. Reply <strong>STOP</strong> to cancel and <strong>HELP</strong> for help. You can also opt out via email <strong><a href="mailto:erik@posible.com" className="text-primary hover:underline">erik@posible.com</a></strong>. Carriers are not liable for delayed or undelivered messages.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">4.4. Data Use for SMS</h3>
                <p className="mb-4">
                  Phone numbers collected for SMS are used only to send the requested messages and to maintain compliance logs. We do <strong>not</strong> sell or share phone numbers for third‑party marketing.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-8 border-b pb-4">8) Contact, Support & Takedowns</h2>
              <p className="mb-4">
                For privacy requests, SMS help, or legal notices (including DMCA notices), contact:
              </p>
              <div className="mt-4 p-6 bg-muted rounded-lg">
                <p className="font-medium mb-2">Posible LLC</p>
                <p className="mb-2">944 W 2740 N Lehi, Utah 84043</p>
                <p>Email: <strong><a href="mailto:erik@posible.com" className="text-primary hover:underline">erik@posible.com</a></strong></p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;