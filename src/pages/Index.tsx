
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import TrendingProducts from "@/components/TrendingProducts";
import FlashSale from "@/components/FlashSale";
import VendorBenefits from "@/components/VendorBenefits";
import TopVendors from "@/components/TopVendors";
import Testimonials from "@/components/Testimonials";
import RecommendedProducts from "@/components/RecommendedProducts";
import Newsletter from "@/components/Newsletter";
import TrustBadges from "@/components/TrustBadges";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16 md:pt-20">
        {/* Hero Section */}
        <Hero />
        
        {/* Featured Categories */}
        <Categories />
        
        {/* Trending Products */}
        <TrendingProducts />
        
        {/* Flash Sale */}
        <FlashSale />
        
        {/* Vendor Benefits */}
        <VendorBenefits />
        
        {/* Top Vendors */}
        <TopVendors />
        
        {/* Testimonials */}
        <Testimonials />
        
        {/* Recommended Products */}
        <RecommendedProducts />
        
        {/* Newsletter Subscription */}
        <Newsletter />
        
        {/* Trust Badges */}
        <TrustBadges />
      </main>
      
      <Footer />
      
      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

export default Index;
