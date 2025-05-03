import React from "react";
import Link from "next/link";
import {
  Smartphone,
  Shirt,
  Home,
  Dumbbell, 
  Laptop, 
  BookOpen, 
  Baby, 
  Car, 
  Utensils,
  Watch 
} from "lucide-react";

const categories = [
  { name: "Electronics", icon: Smartphone, color: "bg-amber-50 dark:bg-amber-900/20", textColor: "text-amber-500", borderColor: "border-amber-200 dark:border-amber-800", path: "/category/electronics" },
  { name: "Fashion", icon: Shirt, color: "bg-blue-50 dark:bg-blue-900/20", textColor: "text-blue-500", borderColor: "border-blue-200 dark:border-blue-800", path: "/category/fashion" },
  { name: "Home & Kitchen", icon: Home, color: "bg-indigo-50 dark:bg-indigo-900/20", textColor: "text-indigo-500", borderColor: "border-indigo-200 dark:border-indigo-800", path: "/category/home-kitchen" },
  { name: "Sports & Outdoors", icon: Dumbbell, color: "bg-green-50 dark:bg-green-900/20", textColor: "text-green-500", borderColor: "border-green-200 dark:border-green-800", path: "/category/sports-outdoors" },
  { name: "Computers", icon: Laptop, color: "bg-purple-50 dark:bg-purple-900/20", textColor: "text-purple-500", borderColor: "border-purple-200 dark:border-purple-800", path: "/category/computers" },
  { name: "Books", icon: BookOpen, color: "bg-red-50 dark:bg-red-900/20", textColor: "text-red-500", borderColor: "border-red-200 dark:border-red-800", path: "/category/books" },
  { name: "Baby Products", icon: Baby, color: "bg-pink-50 dark:bg-pink-900/20", textColor: "text-pink-500", borderColor: "border-pink-200 dark:border-pink-800", path: "/category/baby-products" },
  { name: "Automotive", icon: Car, color: "bg-gray-50 dark:bg-black/20", textColor: "text-gray-500", borderColor: "border-gray-200 dark:border-gray-800", path: "/category/automotive" },
  { name: "Grocery", icon: Utensils, color: "bg-yellow-50 dark:bg-yellow-900/20", textColor: "text-yellow-500", borderColor: "border-yellow-200 dark:border-yellow-800", path: "/category/grocery" },
  { name: "Watches", icon: Watch, color: "bg-teal-50 dark:bg-teal-900/20", textColor: "text-teal-500", borderColor: "border-teal-200 dark:border-teal-800", path: "/category/watches" },
];

const Categories = () => {
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block rounded-full bg-brand-50 dark:bg-brand-900/20 px-3 py-1 text-sm font-medium text-brand-700 dark:text-brand-300 mb-4">
            Explore
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Categories</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our wide range of categories to find exactly what you're looking for.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.path}
              className={`group flex flex-col items-center justify-center p-6 rounded-2xl border ${category.borderColor} ${category.color} transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 ${category.textColor}`}>
                <category.icon size={32} />
              </div>
              <h3 className={`font-medium ${category.textColor}`}>{category.name}</h3>
            </Link>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Link 
            href="/categories" 
            className="inline-flex items-center text-brand-600 dark:text-brand-400 hover:underline font-medium"
          >
            View All Categories 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;
