"use client"
import React, { useState } from "react";
import { Mail, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email is required",
        description: "Please enter your email address to subscribe.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      toast({
        title: "Successfully subscribed!",
        description: "You'll now receive our newsletters with exclusive deals.",
        variant: "default"
      });
    }, 1500);
  };

  return (
    <section className="py-20 bg-brand-50 dark:bg-black/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block rounded-full bg-white dark:bg-black p-3 mb-6">
            <Mail size={28} className="text-brand-500" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
            Join our mailing list and get <span className="font-bold">10% off</span> your first order. Be the first to know about exclusive deals, new products, and upcoming sales.
          </p>
          
          {isSubscribed ? (
            <div className="p-6 rounded-2xl bg-white dark:bg-black max-w-md mx-auto shadow-sm">
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
                  <Check size={24} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Thank You for Subscribing!</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Your 10% discount code has been sent to your email. Check your inbox!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-500 dark:bg-black"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="rounded-full px-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </Button>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
                By subscribing, you agree to our <a href="/privacy-policy" className="underline hover:text-brand-500">Privacy Policy</a> and <a href="/terms" className="underline hover:text-brand-500">Terms of Service</a>.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
