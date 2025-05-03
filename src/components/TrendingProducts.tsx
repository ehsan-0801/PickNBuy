"use client"
import React, { useState } from "react";
import Link from "next/link";
import { Eye, Heart, ShoppingCart, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample product data
const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 249.99,
    discountPrice: 199.99,
    rating: 4.8,
    reviews: 426,
    vendorName: "AudioTech Pro",
    vendorId: "vendor1",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000",
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 199.99,
    discountPrice: 149.99,
    rating: 4.6,
    reviews: 358,
    vendorName: "FitGadgets",
    vendorId: "vendor2",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000",
    badge: "New"
  },
  {
    id: 3,
    name: "Designer Leather Bag",
    price: 299.99,
    discountPrice: null,
    rating: 4.9,
    reviews: 213,
    vendorName: "LuxuryDesigns",
    vendorId: "vendor3",
    image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?q=80&w=1000",
    badge: "Premium"
  },
  {
    id: 4,
    name: "Ultra HD Smart TV 55\"",
    price: 899.99,
    discountPrice: 749.99,
    rating: 4.7,
    reviews: 192,
    vendorName: "ElectronicsPro",
    vendorId: "vendor4",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=1000",
    badge: "Top Rated"
  },
  {
    id: 5,
    name: "Professional DSLR Camera",
    price: 1299.99,
    discountPrice: 1099.99,
    rating: 4.9,
    reviews: 427,
    vendorName: "PhotoGear",
    vendorId: "vendor5",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000",
    badge: "Featured"
  },
  {
    id: 6,
    name: "Organic Skincare Set",
    price: 89.99,
    discountPrice: 69.99,
    rating: 4.7,
    reviews: 186,
    vendorName: "NaturalBeauty",
    vendorId: "vendor6",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=1000",
    badge: "Organic"
  }
];

const TrendingProducts = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 4;
  const totalPages = Math.ceil(products.length / productsPerPage);
  
  const displayedProducts = products.slice(
    currentPage * productsPerPage,
    (currentPage + 1) * productsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <div className="inline-block rounded-full bg-brand-50 dark:bg-brand-900/20 px-3 py-1 text-sm font-medium text-brand-700 dark:text-brand-300 mb-4">
              Hot Products
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Trending & Best-Selling</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Discover what customers love the most right now
            </p>
          </div>
          
          <div className="flex space-x-3 mt-6 md:mt-0">
            <button 
              onClick={prevPage}
              className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-white dark:hover:bg-black/60 transition-colors"
              aria-label="Previous page"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextPage}
              className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-white dark:hover:bg-black/60 transition-colors"
              aria-label="Next page"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white dark:bg-black rounded-2xl overflow-hidden product-card-shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
            >
              {/* Product Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Product Badge */}
                {product.badge && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-brand-500 text-white">
                      {product.badge}
                    </span>
                  </div>
                )}
                
                {/* Quick Action Buttons - Appear on Hover */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <Button 
                    size="sm" 
                    variant="secondary"
                    className="rounded-full w-10 h-10 p-0 flex items-center justify-center"
                    aria-label="Quick view"
                  >
                    <Eye size={18} />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="secondary"
                    className="rounded-full w-10 h-10 p-0 flex items-center justify-center"
                    aria-label="Add to wishlist"
                  >
                    <Heart size={18} />
                  </Button>
                  <Button 
                    size="sm"
                    className="rounded-full w-10 h-10 p-0 flex items-center justify-center"
                    aria-label="Add to cart"
                  >
                    <ShoppingCart size={18} />
                  </Button>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-5">
                <Link 
                  href={`/vendor/${product.vendorId}`}
                  className="text-xs text-brand-600 dark:text-brand-400 font-medium hover:underline"
                >
                  {product.vendorName}
                </Link>
                
                <Link href={`/product/${product.id}`} className="block mt-2">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                    {product.name}
                  </h3>
                </Link>
                
                {/* Rating */}
                <div className="flex items-center mt-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={`${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                    ({product.reviews})
                  </span>
                </div>
                
                {/* Price */}
                <div className="mt-3 flex items-center">
                  {product.discountPrice ? (
                    <>
                      <span className="text-lg font-bold text-gray-900 dark:text-white">
                        ${product.discountPrice.toFixed(2)}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 line-through ml-2">
                        ${product.price.toFixed(2)}
                      </span>
                    </>
                  ) : (
                    <span className="text-lg font-bold text-gray-900 dark:text-white">
                      ${product.price.toFixed(2)}
                    </span>
                  )}
                </div>
                
                {/* Add to Cart Button - Mobile Friendly, Always Visible */}
                <Button 
                  className="w-full mt-4 rounded-full"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Link 
            href="/products" 
            className="inline-flex items-center py-3 px-6 rounded-full border border-brand-600 dark:border-brand-400 text-brand-600 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-colors font-medium"
          >
            View All Products
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
