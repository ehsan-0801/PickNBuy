import React from "react";
import Link from "next/link";
import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample vendor data
const vendors = [
  {
    id: "vendor1",
    name: "TechGadgetry",
    logo: "https://i.pravatar.cc/150?img=1",
    rating: 4.9,
    reviews: 2456,
    description: "Premium tech accessories and gadgets for every need.",
    products: 356,
    category: "Electronics",
    featuredProducts: [
      {
        id: 1,
        name: "Wireless Earbuds",
        image: "https://images.unsplash.com/photo-1590658268037-7968b9eb582a?q=80&w=1000",
      },
      {
        id: 2,
        name: "Smart Watch",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000",
      },
      {
        id: 3,
        name: "Bluetooth Speaker",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1000",
      }
    ]
  },
  {
    id: "vendor2",
    name: "FashionForward",
    logo: "https://i.pravatar.cc/150?img=2",
    rating: 4.8,
    reviews: 1872,
    description: "Trendsetting apparel and accessories for the fashion-conscious.",
    products: 523,
    category: "Fashion",
    featuredProducts: [
      {
        id: 4,
        name: "Designer Handbag",
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000",
      },
      {
        id: 5,
        name: "Leather Watch",
        image: "https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?q=80&w=1000",
      },
      {
        id: 6,
        name: "Sunglasses",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1000",
      }
    ]
  },
  {
    id: "vendor3",
    name: "HomeEssentials",
    logo: "https://i.pravatar.cc/150?img=3",
    rating: 4.7,
    reviews: 1245,
    description: "Quality home goods designed for modern living.",
    products: 287,
    category: "Home & Kitchen",
    featuredProducts: [
      {
        id: 7,
        name: "Coffee Maker",
        image: "https://images.unsplash.com/photo-1545665225-b23b99e4d45e?q=80&w=1000",
      },
      {
        id: 8,
        name: "Bedding Set",
        image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1000",
      },
      {
        id: 9,
        name: "Wall Art",
        image: "https://images.unsplash.com/photo-1582039923969-49329e5b63ef?q=80&w=1000",
      }
    ]
  }
];

const TopVendors = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block rounded-full bg-brand-50 dark:bg-brand-900/20 px-3 py-1 text-sm font-medium text-brand-700 dark:text-brand-300 mb-4">
            Featured Sellers
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Top Vendors</h2>
          <p className="text-gray-600 dark:text-gray-400">
            These highly-rated sellers consistently deliver exceptional products and customer experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {vendors.map((vendor) => (
            <div
              key={vendor.id}
              className="bg-white dark:bg-black rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="p-6 border-b border-gray-100 dark:border-gray-800">
                <div className="flex items-center">
                  <img
                    src={vendor.logo}
                    alt={vendor.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-brand-100 dark:border-brand-800"
                  />
                  <div>
                    <h3 className="text-xl font-bold">{vendor.name}</h3>
                    <div className="flex items-center mt-1">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={`${
                              i < Math.floor(vendor.rating)
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300 dark:text-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                        ({vendor.reviews})
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {vendor.products} products
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  {vendor.description}
                </p>
              </div>
              
              <div className="px-6 py-4">
                <h4 className="font-medium mb-3">Featured Products</h4>
                <div className="flex space-x-3">
                  {vendor.featuredProducts.map((product) => (
                    <Link 
                      key={product.id} 
                      href={`/product/${product.id}`}
                      className="block relative group"
                    >
                      <div className="w-20 h-20 rounded-lg overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs">View</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="px-6 pb-6">
                <Link href={`/vendor/${vendor.id}`}>
                  <Button 
                    variant="outline" 
                    className="w-full flex items-center justify-center"
                  >
                    Visit Store
                    <ExternalLink size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/vendors" 
            className="inline-flex items-center py-3 px-6 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-white dark:hover:bg-black/60 transition-colors"
          >
            Explore All Vendors
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopVendors;
