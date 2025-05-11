"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Filter, X } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import Pagination from "@/components/pagination";

// Mock product data
const mockProducts = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199.99,
    image: "/api/placeholder/400/400",
    category: "Electronics",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    image: "/api/placeholder/400/400",
    category: "Clothing",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Smart Fitness Watch",
    price: 149.99,
    image: "/api/placeholder/400/400",
    category: "Electronics",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Leather Wallet",
    price: 49.99,
    image: "/api/placeholder/400/400",
    category: "Accessories",
    rating: 4.6,
  },
  {
    id: 5,
    name: "Ceramic Coffee Mug",
    price: 19.99,
    image: "/api/placeholder/400/400",
    category: "Home",
    rating: 4.3,
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    price: 89.99,
    image: "/api/placeholder/400/400",
    category: "Electronics",
    rating: 4.4,
  },
  {
    id: 7,
    name: "Yoga Mat",
    price: 39.99,
    image: "/api/placeholder/400/400",
    category: "Sports",
    rating: 4.2,
  },
  {
    id: 8,
    name: "Stainless Steel Water Bottle",
    price: 24.99,
    image: "/api/placeholder/400/400",
    category: "Home",
    rating: 4.5,
  },
  {
    id: 9,
    name: "Wireless Earbuds",
    price: 129.99,
    image: "/api/placeholder/400/400",
    category: "Electronics",
    rating: 4.6,
  },
  {
    id: 10,
    name: "Canvas Backpack",
    price: 59.99,
    image: "/api/placeholder/400/400",
    category: "Accessories",
    rating: 4.4,
  },
  {
    id: 11,
    name: "Smart Home Hub",
    price: 179.99,
    image: "/api/placeholder/400/400",
    category: "Electronics",
    rating: 4.7,
  },
  {
    id: 12,
    name: "Running Shoes",
    price: 119.99,
    image: "/api/placeholder/400/400",
    category: "Sports",
    rating: 4.8,
  },
];

// Extract unique categories
const categories = Array.from(
  new Set(mockProducts.map((product) => product.category))
);

export default function ProductsPage() {
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const productsPerPage = 8;

  // Apply filters
  useEffect(() => {
    let result = [...mockProducts];

    // Filter by category
    if (selectedCategory !== "All") {
      result = result.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Sort by price
    if (sortOrder === "low-to-high") {
      result = result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "high-to-low") {
      result = result.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [selectedCategory, sortOrder]);

  // Get current products for pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Change page
  interface PageChangeHandler {
    (pageNumber: number): void;
  }

  const handlePageChange: PageChangeHandler = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>

      {/* Mobile filter button */}
      <div className="block md:hidden mb-4">
        <button
          onClick={() => setMobileFiltersOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-md"
        >
          <Filter size={18} />
          <span>Filters</span>
        </button>
      </div>

      {/* Mobile filter sidebar */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden">
          <div className="fixed inset-y-0 right-0 w-3/4 bg-background p-6 shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <div className="space-y-6">
              {/* Category filter */}
              <div>
                <h3 className="font-medium mb-3">Category</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="mobile-all"
                      name="mobile-category"
                      checked={selectedCategory === "All"}
                      onChange={() => setSelectedCategory("All")}
                      className="mr-2"
                    />
                    <label htmlFor="mobile-all">All</label>
                  </div>
                  {categories.map((category) => (
                    <div key={category} className="flex items-center">
                      <input
                        type="radio"
                        id={`mobile-${category}`}
                        name="mobile-category"
                        checked={selectedCategory === category}
                        onChange={() => setSelectedCategory(category)}
                        className="mr-2"
                      />
                      <label htmlFor={`mobile-${category}`}>{category}</label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price sorting */}
              <div>
                <h3 className="font-medium mb-3">Sort by Price</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="mobile-default"
                      name="mobile-sort"
                      checked={sortOrder === ""}
                      onChange={() => setSortOrder("")}
                      className="mr-2"
                    />
                    <label htmlFor="mobile-default">Default</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="mobile-low-to-high"
                      name="mobile-sort"
                      checked={sortOrder === "low-to-high"}
                      onChange={() => setSortOrder("low-to-high")}
                      className="mr-2"
                    />
                    <label htmlFor="mobile-low-to-high">
                      Price: Low to High
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="mobile-high-to-low"
                      name="mobile-sort"
                      checked={sortOrder === "high-to-low"}
                      onChange={() => setSortOrder("high-to-low")}
                      className="mr-2"
                    />
                    <label htmlFor="mobile-high-to-low">
                      Price: High to Low
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-8 w-full bg-primary text-primary-foreground py-2 rounded-md"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-8">
        {/* Desktop sidebar */}
        <div className="hidden md:block w-64 space-y-8">
          {/* Category filter */}
          <div>
            <h3 className="text-lg font-medium mb-4">Categories</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="all"
                  name="category"
                  checked={selectedCategory === "All"}
                  onChange={() => setSelectedCategory("All")}
                  className="mr-2"
                />
                <label htmlFor="all">All</label>
              </div>
              {categories.map((category) => (
                <div key={category} className="flex items-center">
                  <input
                    type="radio"
                    id={category}
                    name="category"
                    checked={selectedCategory === category}
                    onChange={() => setSelectedCategory(category)}
                    className="mr-2"
                  />
                  <label htmlFor={category}>{category}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Price filter */}
          <div>
            <h3 className="text-lg font-medium mb-4">Sort by Price</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="default"
                  name="sort"
                  checked={sortOrder === ""}
                  onChange={() => setSortOrder("")}
                  className="mr-2"
                />
                <label htmlFor="default">Default</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="low-to-high"
                  name="sort"
                  checked={sortOrder === "low-to-high"}
                  onChange={() => setSortOrder("low-to-high")}
                  className="mr-2"
                />
                <label htmlFor="low-to-high">Price: Low to High</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="high-to-low"
                  name="sort"
                  checked={sortOrder === "high-to-low"}
                  onChange={() => setSortOrder("high-to-low")}
                  className="mr-2"
                />
                <label htmlFor="high-to-low">Price: High to Low</label>
              </div>
            </div>
          </div>
        </div>

        {/* Product grid */}
        <div className="flex-1">
          {/* Sort dropdown for mobile/tablet */}
          <div className="md:hidden mb-4">
            <div className="relative">
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="w-full p-2 border rounded-md appearance-none pr-10"
              >
                <option value="">Sort by: Default</option>
                <option value="low-to-high">Price: Low to High</option>
                <option value="high-to-low">Price: High to Low</option>
              </select>
              <ChevronDown className="absolute right-3 top-2.5" size={18} />
            </div>
          </div>

          {/* Results summary */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing {indexOfFirstProduct + 1}-
              {Math.min(indexOfLastProduct, filteredProducts.length)} of{" "}
              {filteredProducts.length} products
            </p>
          </div>

          {/* Products */}
          {currentProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl">
                No products found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSortOrder("");
                }}
                className="mt-4 underline text-primary"
              >
                Clear filters
              </button>
            </div>
          )}

          {/* Pagination */}
          {filteredProducts.length > productsPerPage && (
            <div className="mt-12">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
