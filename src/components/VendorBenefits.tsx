import React from "react";
import Link from "next/link";
import { 
  DollarSign, 
  BarChart2, 
  Shield, 
  Zap, 
  Globe,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: DollarSign,
    title: "No Setup Fees",
    description: "Start selling without any upfront costs. We only earn when you do."
  },
  {
    icon: Zap,
    title: "Get Paid Instantly",
    description: "Receive payments directly to your account with minimal waiting time."
  },
  {
    icon: BarChart2,
    title: "Advanced Analytics",
    description: "Track performance with real-time data and actionable insights."
  },
  {
    icon: Shield,
    title: "Seller Protection",
    description: "We safeguard your store with our comprehensive security measures."
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Access millions of potential customers from around the world."
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Our seller success team is available 24/7 to support your business."
  }
];

const VendorBenefits = () => {
  return (
    <section className="py-20 bg-white dark:bg-black overflow-hidden relative">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute -top-48 right-0 w-96 h-96 bg-brand-100 dark:bg-brand-900/20 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-100 dark:bg-brand-900/20 rounded-full blur-3xl opacity-60"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block rounded-full bg-brand-50 dark:bg-brand-900/20 px-3 py-1 text-sm font-medium text-brand-700 dark:text-brand-300 mb-4">
            For Vendors
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Sell With Us?</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Join thousands of sellers who trust our platform to grow their business. We provide all the tools you need to succeed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-black rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 mb-5">
                <benefit.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-brand-50 to-purple-50 dark:from-brand-900/20 dark:to-purple-900/20 rounded-3xl p-8 max-w-3xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Selling?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Join over 10,000 vendors who've increased their revenue by an average of 35% on our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full">
                Start Selling Today
              </Button>
              <Link href="/vendor/success-stories">
                <Button size="lg" variant="outline" className="rounded-full">
                  See Success Stories
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorBenefits;
