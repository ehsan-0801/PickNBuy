"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const FlashSale = () => {
  // Setting end time 3 hours from now
  const [timeLeft, setTimeLeft] = useState({
    hours: 3,
    minutes: 0,
    seconds: 0
  });

  // Countdown timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const { hours, minutes, seconds } = prevTime;
        
        if (hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(timer);
          return prevTime;
        }
        
        if (minutes === 0 && seconds === 0) {
          return { hours: hours - 1, minutes: 59, seconds: 59 };
        }
        
        if (seconds === 0) {
          return { hours, minutes: minutes - 1, seconds: 59 };
        }
        
        return { hours, minutes, seconds: seconds - 1 };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Sample flash sale products
  const flashSaleProducts = [
    {
      id: 1,
      name: "Smart 4K TV",
      originalPrice: 899.99,
      salePrice: 449.99,
      discountPercentage: 50,
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=1000",
      sold: 156,
      total: 200
    },
    {
      id: 2,
      name: "Wireless Earbuds",
      originalPrice: 199.99,
      salePrice: 99.99,
      discountPercentage: 50,
      image: "https://images.unsplash.com/photo-1590658268037-7968b9eb582a?q=80&w=1000",
      sold: 87,
      total: 100
    },
    {
      id: 3,
      name: "Coffee Machine",
      originalPrice: 299.99,
      salePrice: 149.99,
      discountPercentage: 50,
      image: "https://images.unsplash.com/photo-1520970519207-2c0fc7adedf5?q=80&w=1000",
      sold: 42,
      total: 50
    },
    {
      id: 4,
      name: "Gaming Laptop",
      originalPrice: 1599.99,
      salePrice: 1199.99,
      discountPercentage: 25,
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1000",
      sold: 29,
      total: 40
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-500/30 dark:bg-brand-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-500/30 dark:bg-brand-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl p-8 md:p-12 mb-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 opacity-20">
            <Zap size={300} />
          </div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Flash Sale</h2>
                <p className="text-white/80 mt-2">Only 3 Hours Left! Get 50% Off on Select Items!</p>
              </div>
              
              <div className="mt-4 md:mt-0 flex items-center">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-xl h-16 w-16 text-white">
                    <div className="text-center">
                      <div className="text-2xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
                      <div className="text-xs">HOURS</div>
                    </div>
                  </div>
                  <div className="text-white text-2xl">:</div>
                  <div className="flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-xl h-16 w-16 text-white">
                    <div className="text-center">
                      <div className="text-2xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                      <div className="text-xs">MINS</div>
                    </div>
                  </div>
                  <div className="text-white text-2xl">:</div>
                  <div className="flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-xl h-16 w-16 text-white">
                    <div className="text-center">
                      <div className="text-2xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                      <div className="text-xs">SECS</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {flashSaleProducts.map((product) => (
            <div 
              key={product.id}
              className="bg-white dark:bg-black rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-0 right-0 bg-red-500 text-white font-bold px-3 py-1 rounded-bl-lg">
                  -{product.discountPercentage}%
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="font-medium text-lg text-gray-900 dark:text-white">{product.name}</h3>
                
                <div className="mt-2 flex items-center">
                  <span className="text-xl font-bold text-red-500">${product.salePrice.toFixed(2)}</span>
                  <span className="ml-2 text-sm text-gray-500 dark:text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
                </div>
                
                <div className="mt-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Sold: {product.sold}/{product.total}
                    </span>
                    <span className="text-xs text-red-500 font-medium">
                      {Math.round((product.sold / product.total) * 100)}% Sold
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-black/50 rounded-full h-2.5">
                    <div 
                      className="bg-red-500 h-2.5 rounded-full" 
                      style={{ width: `${(product.sold / product.total) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <Button className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white">
                  Shop Now
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/flash-sale" 
            className="inline-flex items-center py-3 px-6 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-white dark:hover:bg-black/60 transition-colors"
          >
            View All Flash Deals
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FlashSale;
