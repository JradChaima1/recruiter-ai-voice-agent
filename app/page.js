import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-purple-600 to-blue-700 text-white">
      {/* Navigation */}
      <header className="py-4 px-6 backdrop-blur-sm bg-purple-800/30 border-b border-purple-500/20">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-purple-500 rounded-md p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                <line x1="12" x2="12" y1="19" y2="22"></line>
              </svg>
            </div>
            <span className="font-bold text-xl">VoiceRecruit AI</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#features" className="text-sm font-medium text-purple-200 hover:text-white">Features</a>
            <a href="#pricing" className="text-sm font-medium text-purple-200 hover:text-white">Pricing</a>
            <a href="#testimonials" className="text-sm font-medium text-purple-200 hover:text-white">Testimonials</a>
            <a href="#about" className="text-sm font-medium text-purple-200 hover:text-white">About</a>
          </nav>
          <Button variant="outline" size="sm" className="border-purple-400/30 text-purple-100 hover:bg-purple-500/20">
            Try Demo
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  🚀 Revolutionizing Recruitment with AI Voice Technology
                </h1>
                <p className="text-xl text-purple-200">
                  Hire Smarter with AI Voice Agents. Transform your recruitment process with AI-powered voice agents that conduct natural, insightful interviews 24/7. Reduce hiring time by 60% while improving candidate experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                    Try Our AI Voice Agent
                  </Button>
                  <Button variant="outline" size="lg" className="border-purple-400/30 text-purple-100 hover:bg-purple-500/20">
                    Experience a sample interview
                  </Button>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="relative w-full max-w-md aspect-square bg-purple-500/20 backdrop-blur-sm rounded-lg p-8 border border-purple-500/30">
                  <Image 
                    src="/ai-recruiter.png" 
                    alt="AI Voice Technology" 
                    fill 
                    className="object-contain p-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Powerful Features for Modern Recruiting</h2>
              <p className="text-xl text-purple-200 max-w-2xl mx-auto">
                Our AI voice agents are equipped with advanced capabilities to streamline your entire recruitment workflow
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "AI Voice Interviews",
                  description: "Conduct natural, conversational interviews with AI-powered voice agents",
                  icon: "/window.svg"
                },
                {
                  title: "Smart Candidate Matching",
                  description: "Advanced algorithms match candidates to roles based on skills and personality",
                  icon: "/file.svg"
                },
                {
                  title: "Real-time Analytics",
                  description: "Track recruitment metrics and candidate performance in real-time",
                  icon: "/globe.svg"
                },
                {
                  title: "24/7 Availability",
                  description: "AI agents work around the clock to screen and interview candidates",
                  icon: "/vercel.svg"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-purple-800/30 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
                  <div className="mb-4 size-12 flex items-center justify-center bg-purple-500 rounded-md">
                    <Image src={feature.icon} alt={feature.title} width={24} height={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-purple-200">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-6 bg-purple-900/20 backdrop-blur-sm">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Choose Your Plan</h2>
              <p className="text-xl text-purple-200 max-w-2xl mx-auto">
                Scale your recruitment with flexible pricing options
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Starter",
                  price: "$99",
                  period: "per month",
                  features: [
                    "50 AI interviews/month",
                    "Basic analytics",
                    "Email support",
                    "Standard voice quality"
                  ],
                  popular: false
                },
                {
                  name: "Professional",
                  price: "$299",
                  period: "per month",
                  features: [
                    "200 AI interviews/month",
                    "Advanced analytics",
                    "Priority support",
                    "Premium voice quality",
                    "Custom branding"
                  ],
                  popular: true
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  period: "pricing",
                  features: [
                    "Unlimited interviews",
                    "White-label solution",
                    "Dedicated support",
                    "Ultra HD voice",
                    "API access",
                    "Custom integrations"
                  ],
                  popular: false
                }
              ].map((plan, index) => (
                <div key={index} className={`bg-purple-800/30 backdrop-blur-sm rounded-lg p-8 border ${plan.popular ? 'border-purple-400 ring-2 ring-purple-400/20' : 'border-purple-500/20'} relative flex flex-col`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-500 text-white text-xs font-medium py-1 px-3 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-purple-200"> {plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-purple-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant={plan.popular ? "default" : "outline"} 
                    className={`w-full ${plan.popular ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'border-purple-400/30 text-purple-100 hover:bg-purple-500/20'}`}
                  >
                    Get Started
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-xl text-purple-200 max-w-2xl mx-auto">
                Join thousands of companies transforming their hiring process
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote: "VoiceRecruit AI has revolutionized our hiring process. We've reduced time-to-hire by 60% while improving candidate quality.",
                  author: "Sarah Chen",
                  title: "Head of Talent, TechCorp"
                },
                {
                  quote: "The AI voice agents feel incredibly natural. Candidates love the experience, and we get better insights than traditional screening.",
                  author: "Michael Rodriguez",
                  title: "HR Director, StartupXYZ"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-purple-800/30 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20">
                  <div className="mb-4 text-4xl text-purple-400">"</div>
                  <p className="text-lg mb-6 text-purple-100">{testimonial.quote}</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-purple-300">{testimonial.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-purple-900/20 backdrop-blur-sm">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Hiring?</h2>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto mb-8">
              Join the AI recruitment revolution. Start your free trial today and experience the future of hiring.
            </p>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
              Get Started Now
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 py-8 px-6 bg-purple-800/30 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-purple-200">
              © 2023 VoiceRecruit AI. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-purple-300 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-sm text-purple-300 hover:text-white">Terms of Service</a>
              <a href="#" className="text-sm text-purple-300 hover:text-white">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
