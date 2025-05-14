"use client";

import { useState } from "react";
import ProductCard from "@/components/customer/ProductCard";
import { Search, SlidersHorizontal } from "lucide-react";

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedRating, setSelectedRating] = useState(0);

  return (
    <div>
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Browse Products</h1>
          <p className="text-gray-600">Discover our wide range of products</p>
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 md:hidden"
        >
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        <div className={`${showFilters ? "block" : "hidden"} md:block`}>
          <div className="sticky top-20 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-gray-800">
              Filters
            </h2>

            <div className="mb-4">
              <h3 className="mb-2 text-sm font-medium text-gray-700">
                Categories
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="all"
                    name="category"
                    value="all"
                    checked={filterCategory === "all"}
                    onChange={() => setFilterCategory("all")}
                    className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="all" className="ml-2 text-sm text-gray-700">
                    All Categories
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="electronics"
                    name="category"
                    value="electronics"
                    checked={filterCategory === "electronics"}
                    onChange={() => setFilterCategory("electronics")}
                    className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label
                    htmlFor="electronics"
                    className="ml-2 text-sm text-gray-700"
                  >
                    Electronics
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="fashion"
                    name="category"
                    value="fashion"
                    checked={filterCategory === "fashion"}
                    onChange={() => setFilterCategory("fashion")}
                    className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label
                    htmlFor="fashion"
                    className="ml-2 text-sm text-gray-700"
                  >
                    Fashion
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="home"
                    name="category"
                    value="home"
                    checked={filterCategory === "home"}
                    onChange={() => setFilterCategory("home")}
                    className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="home" className="ml-2 text-sm text-gray-700">
                    Home & Kitchen
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="sports"
                    name="category"
                    value="sports"
                    checked={filterCategory === "sports"}
                    onChange={() => setFilterCategory("sports")}
                    className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label
                    htmlFor="sports"
                    className="ml-2 text-sm text-gray-700"
                  >
                    Sports & Outdoors
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h3 className="mb-2 text-sm font-medium text-gray-700">
                Price Range
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-xs text-gray-600">
                    ${priceRange[0]}
                  </span>
                  <span className="text-xs text-gray-600">
                    ${priceRange[1]}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange[0]}
                  onChange={(e) =>
                    setPriceRange([
                      Number.parseInt(e.target.value),
                      priceRange[1],
                    ])
                  }
                  className="w-full"
                />
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([
                      priceRange[0],
                      Number.parseInt(e.target.value),
                    ])
                  }
                  className="w-full"
                />
              </div>
            </div>

            <div className="mb-4">
              <h3 className="mb-2 text-sm font-medium text-gray-700">Rating</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="rating-all"
                    name="rating"
                    value="0"
                    checked={selectedRating === 0}
                    onChange={() => setSelectedRating(0)}
                    className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label
                    htmlFor="rating-all"
                    className="ml-2 text-sm text-gray-700"
                  >
                    All Ratings
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="rating-4"
                    name="rating"
                    value="4"
                    checked={selectedRating === 4}
                    onChange={() => setSelectedRating(4)}
                    className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label
                    htmlFor="rating-4"
                    className="ml-2 flex items-center text-sm text-gray-700"
                  >
                    <span>4+ </span>
                    <div className="ml-1 flex">
                      {[...Array(4)].map((_, i) => (
                        <svg
                          key={i}
                          className="h-4 w-4 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-1">& up</span>
                    </div>
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="rating-3"
                    name="rating"
                    value="3"
                    checked={selectedRating === 3}
                    onChange={() => setSelectedRating(3)}
                    className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label
                    htmlFor="rating-3"
                    className="ml-2 flex items-center text-sm text-gray-700"
                  >
                    <span>3+ </span>
                    <div className="ml-1 flex">
                      {[...Array(3)].map((_, i) => (
                        <svg
                          key={i}
                          className="h-4 w-4 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-1">& up</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-sm font-medium text-gray-700">
                Vendors
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="vendor-techelite"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label
                    htmlFor="vendor-techelite"
                    className="ml-2 text-sm text-gray-700"
                  >
                    TechElite
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="vendor-ecofashion"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label
                    htmlFor="vendor-ecofashion"
                    className="ml-2 text-sm text-gray-700"
                  >
                    EcoFashion
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="vendor-chefchoice"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label
                    htmlFor="vendor-chefchoice"
                    className="ml-2 text-sm text-gray-700"
                  >
                    ChefChoice
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="vendor-fitgear"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label
                    htmlFor="vendor-fitgear"
                    className="ml-2 text-sm text-gray-700"
                  >
                    FitGear
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Apply Filters
              </button>
              <button className="mt-2 w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Reset Filters
              </button>
            </div>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="mb-6 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex w-full items-center sm:w-auto">
                <label
                  htmlFor="sort"
                  className="mr-2 text-sm font-medium text-gray-700"
                >
                  Sort by:
                </label>
                <select
                  id="sort"
                  className="rounded-md border border-gray-300 py-2 pl-3 pr-8 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option value="popularity">Popularity</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest Arrivals</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProductCard
              id="1"
              name="Wireless Noise-Cancelling Headphones"
              price={149.99}
              originalPrice={199.99}
              rating={4.8}
              reviewCount={124}
              imageSrc="/placeholder.svg?height=300&width=300"
              vendor="TechElite"
              isNew={true}
            />
            <ProductCard
              id="2"
              name="Smart Fitness Watch"
              price={89.99}
              originalPrice={119.99}
              rating={4.6}
              reviewCount={98}
              imageSrc="/placeholder.svg?height=300&width=300"
              vendor="FitGear"
              isNew={false}
            />
            <ProductCard
              id="3"
              name="Organic Cotton T-Shirt"
              price={29.99}
              originalPrice={39.99}
              rating={4.5}
              reviewCount={76}
              imageSrc="/placeholder.svg?height=300&width=300"
              vendor="EcoFashion"
              isNew={false}
            />
            <ProductCard
              id="4"
              name="Professional Kitchen Knife Set"
              price={79.99}
              originalPrice={129.99}
              rating={4.9}
              reviewCount={215}
              imageSrc="/placeholder.svg?height=300&width=300"
              vendor="ChefChoice"
              isNew={true}
            />
            <ProductCard
              id="5"
              name="Portable Bluetooth Speaker"
              price={59.99}
              originalPrice={79.99}
              rating={4.7}
              reviewCount={86}
              imageSrc="/placeholder.svg?height=300&width=300"
              vendor="TechElite"
              isNew={false}
            />
            <ProductCard
              id="6"
              name="Stainless Steel Water Bottle"
              price={24.99}
              originalPrice={34.99}
              rating={4.8}
              reviewCount={152}
              imageSrc="/placeholder.svg?height=300&width=300"
              vendor="EcoLiving"
              isNew={false}
            />
            <ProductCard
              id="7"
              name="Wireless Charging Pad"
              price={29.99}
              originalPrice={39.99}
              rating={4.5}
              reviewCount={64}
              imageSrc="/placeholder.svg?height=300&width=300"
              vendor="TechElite"
              isNew={true}
            />
            <ProductCard
              id="8"
              name="Yoga Mat"
              price={39.99}
              originalPrice={49.99}
              rating={4.6}
              reviewCount={92}
              imageSrc="/placeholder.svg?height=300&width=300"
              vendor="FitGear"
              isNew={false}
            />
            <ProductCard
              id="9"
              name="Smart LED Light Bulb"
              price={19.99}
              originalPrice={29.99}
              rating={4.4}
              reviewCount={58}
              imageSrc="/placeholder.svg?height=300&width=300"
              vendor="TechElite"
              isNew={false}
            />
          </div>

          <div className="mt-8 flex justify-center">
            <nav className="flex items-center">
              <button className="rounded-l-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">
                Previous
              </button>
              <button className="border-t border-b border-gray-300 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
                1
              </button>
              <button className="border-t border-b border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">
                2
              </button>
              <button className="border-t border-b border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">
                3
              </button>
              <button className="rounded-r-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">
                Next
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
