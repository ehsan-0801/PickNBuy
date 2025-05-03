import React from "react";
import Link from "next/link";
import { Brain, Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample recommended products
const recommendedProducts = [
  {
    id: 1,
    name: "Ergonomic Office Chair",
    price: 249.99,
    discountPrice: 199.99,
    rating: 4.7,
    reviews: 324,
    vendorName: "HomeEssentials",
    vendorId: "vendor3",
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=1000",
    badge: "For You"
  },
  {
    id: 2,
    name: "Bluetooth Noise-Cancelling Headphones",
    price: 199.99,
    discountPrice: 159.99,
    rating: 4.8,
    reviews: 567,
    vendorName: "TechGadgetry",
    vendorId: "vendor1",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000",
    badge: "For You"
  },
  {
    id: 3,
    name: "Stainless Steel Water Bottle",
    price: 29.99,
    discountPrice: null,
    rating: 4.6,
    reviews: 256,
    vendorName: "EcoFriendly",
    vendorId: "vendor5",
    image: "https://images.unsplash.com/photo-1570366583862-f91883984fde?q=80&w=1000",
    badge: "For You"
  },
  {
    id: 4,
    name: "Smart Home Security Camera",
    price: 149.99,
    discountPrice: 129.99,
    rating: 4.5,
    reviews: 198,
    vendorName: "SmartLiving",
    vendorId: "vendor6",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=1000",
    badge: "For You"
  }
];

const RecommendedProducts = () => {
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <div className="inline-flex items-center rounded-full bg-brand-50 dark:bg-brand-900/20 px-3 py-1 text-sm font-medium text-brand-700 dark:text-brand-300 mb-4">
              <Brain size={16} className="mr-2" />
              AI-Powered
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Recommended For You</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Personalized suggestions based on your browsing history and preferences
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendedProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white dark:bg-black rounded-2xl overflow-hidden product-card-shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group border border-gray-200 dark:border-gray-800"
            >
              {/* Product Image Container */}
              <div className="relative h-56 overflow-hidden">
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
                
                {/* Add to Cart Button */}
                <Button 
                  className="w-full mt-4 rounded-full flex items-center justify-center"
                >
                  <ShoppingCart size={16} className="mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Link 
            href="/recommendations" 
            className="inline-flex items-center py-3 px-6 rounded-full border border-brand-600 dark:border-brand-400 text-brand-600 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-colors font-medium"
          >
            See More Recommendations
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecommendedProducts;
