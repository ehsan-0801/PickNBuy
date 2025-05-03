"use client"
import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const backgrounds = [
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070",
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=2070",
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2070"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden">
        {backgrounds.map((bg, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img
              src={bg}
              alt="Hero background"
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-16 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6 inline-block">
            <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium">
              Over 10,000+ products from 1,000+ vendors
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight animate-fadeIn">
            The Ultimate Marketplace for <span className="text-gradient bg-gradient-hero">Everything You Need!</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto animation-delay-500 animate-fadeIn">
            Discover a world where shoppers and sellers connect, offering premium products at competitive prices.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animation-delay-1000 animate-fadeIn">
            <Button size="lg" className="rounded-full bg-white text-gray-900 hover:bg-gray-100 px-8">
              Shop Now <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full border-white text-white hover:bg-white/10 px-8"
            >
              Become a Seller
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="glass p-4 rounded-xl backdrop-blur">
              <p className="text-3xl font-bold">10K+</p>
              <p className="text-sm opacity-80">Products</p>
            </div>
            <div className="glass p-4 rounded-xl backdrop-blur">
              <p className="text-3xl font-bold">1K+</p>
              <p className="text-sm opacity-80">Vendors</p>
            </div>
            <div className="glass p-4 rounded-xl backdrop-blur">
              <p className="text-3xl font-bold">5M+</p>
              <p className="text-sm opacity-80">Customers</p>
            </div>
            <div className="glass p-4 rounded-xl backdrop-blur">
              <p className="text-3xl font-bold">150+</p>
              <p className="text-sm opacity-80">Countries</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full animate-float"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
