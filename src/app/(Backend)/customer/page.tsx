"use client";
import Link from "next/link";
import Image from "next/image";
import {
  ShoppingBag,
  Heart,
  Clock,
  ChevronRight,
  Gift,
  Truck,
  Tag,
  Star,
  Home,
  Dumbbell,
} from "lucide-react";

export default function CustomerDashboard() {
  // Sample data for recommended products
  const recommendedProducts = [
    {
      id: "1",
      name: "Wireless Noise-Cancelling Headphones",
      price: 149.99,
      originalPrice: 199.99,
      rating: 4.8,
      reviewCount: 124,
      imageSrc: "/placeholder.svg?height=200&width=200",
      vendor: "TechElite",
    },
    {
      id: "2",
      name: "Smart Fitness Watch",
      price: 89.99,
      originalPrice: 119.99,
      rating: 4.6,
      reviewCount: 98,
      imageSrc: "/placeholder.svg?height=200&width=200",
      vendor: "FitGear",
    },
    {
      id: "3",
      name: "Organic Cotton T-Shirt",
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.5,
      reviewCount: 76,
      imageSrc: "/placeholder.svg?height=200&width=200",
      vendor: "EcoFashion",
    },
    {
      id: "4",
      name: "Professional Kitchen Knife Set",
      price: 79.99,
      originalPrice: 129.99,
      rating: 4.9,
      reviewCount: 215,
      imageSrc: "/placeholder.svg?height=200&width=200",
      vendor: "ChefChoice",
    },
  ];

  // Sample data for recent orders
  const recentOrders = [
    {
      id: "ORD-12345",
      date: "May 10, 2025",
      status: "delivered",
      items: [
        {
          name: "Wireless Noise-Cancelling Headphones",
          quantity: 1,
          price: 149.99,
          image: "/placeholder.svg?height=60&width=60",
        },
        {
          name: "Smart Fitness Watch",
          quantity: 1,
          price: 89.99,
          image: "/placeholder.svg?height=60&width=60",
        },
      ],
      total: 239.98,
    },
    {
      id: "ORD-12344",
      date: "May 5, 2025",
      status: "shipped",
      items: [
        {
          name: "Portable Bluetooth Speaker",
          quantity: 1,
          price: 59.99,
          image: "/placeholder.svg?height=60&width=60",
        },
      ],
      total: 59.99,
    },
  ];

  // Sample data for flash deals
  const flashDeals = [
    {
      id: "5",
      name: "Smart LED Light Bulb",
      price: 19.99,
      originalPrice: 29.99,
      discount: 33,
      imageSrc: "/placeholder.svg?height=150&width=150",
      endsIn: "5h 23m",
    },
    {
      id: "6",
      name: "Stainless Steel Water Bottle",
      price: 24.99,
      originalPrice: 34.99,
      discount: 29,
      imageSrc: "/placeholder.svg?height=150&width=150",
      endsIn: "8h 15m",
    },
    {
      id: "7",
      name: "Wireless Charging Pad",
      price: 29.99,
      originalPrice: 39.99,
      discount: 25,
      imageSrc: "/placeholder.svg?height=150&width=150",
      endsIn: "3h 45m",
    },
  ];

  // Sample data for categories
  const categories = [
    {
      name: "Electronics",
      icon: "smartphone",
      count: 245,
      href: "/customer/products?category=electronics",
    },
    {
      name: "Fashion",
      icon: "shirt",
      count: 189,
      href: "/customer/products?category=fashion",
    },
    {
      name: "Home & Kitchen",
      icon: "home",
      count: 156,
      href: "/customer/products?category=home",
    },
    {
      name: "Sports & Outdoors",
      icon: "dumbbell",
      count: 112,
      href: "/customer/products?category=sports",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "text-green-600";
      case "shipped":
        return "text-blue-600";
      case "processing":
        return "text-amber-600";
      case "cancelled":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  interface CategoryIconProps {
    icon: string;
  }

  const getCategoryIcon = (icon: CategoryIconProps["icon"]) => {
    switch (icon) {
      case "smartphone":
        return (
          <div className="rounded-full bg-blue-100 p-3 text-blue-600">
            <ShoppingBag className="h-6 w-6" />
          </div>
        );
      case "shirt":
        return (
          <div className="rounded-full bg-purple-100 p-3 text-purple-600">
            <Tag className="h-6 w-6" />
          </div>
        );
      case "home":
        return (
          <div className="rounded-full bg-amber-100 p-3 text-amber-600">
            <Home className="h-6 w-6" />
          </div>
        );
      case "dumbbell":
        return (
          <div className="rounded-full bg-green-100 p-3 text-green-600">
            <Dumbbell className="h-6 w-6" />
          </div>
        );
      default:
        return (
          <div className="rounded-full bg-gray-100 p-3 text-gray-600">
            <ShoppingBag className="h-6 w-6" />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Welcome back, John!
              </h1>
              <p className="mt-4 max-w-xl text-lg text-blue-100">
                Discover today's special deals and find products tailored just
                for you.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/customer/products"
                  className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-base font-medium text-blue-700 hover:bg-blue-50"
                >
                  Browse Products
                </Link>
                <Link
                  href="/customer/orders"
                  className="inline-flex items-center justify-center rounded-md border border-transparent border-white bg-transparent px-5 py-3 text-base font-medium text-white hover:bg-blue-800"
                >
                  View Orders
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative h-64 w-full">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Shopping illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <div className="flex items-center">
              <div className="rounded-full bg-blue-100 p-3 text-blue-600">
                <ShoppingBag className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Orders</p>
                <p className="text-xl font-semibold text-gray-900">12</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <div className="flex items-center">
              <div className="rounded-full bg-purple-100 p-3 text-purple-600">
                <Heart className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Wishlist</p>
                <p className="text-xl font-semibold text-gray-900">5</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <div className="flex items-center">
              <div className="rounded-full bg-amber-100 p-3 text-amber-600">
                <Gift className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Rewards</p>
                <p className="text-xl font-semibold text-gray-900">250 pts</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <div className="flex items-center">
              <div className="rounded-full bg-green-100 p-3 text-green-600">
                <Truck className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Shipping</p>
                <p className="text-xl font-semibold text-gray-900">Free</p>
              </div>
            </div>
          </div>
        </div>

        {/* Flash Deals */}
        <div className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <h2 className="text-xl font-bold text-gray-900">Flash Deals</h2>
              <div className="ml-2 rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-800">
                Limited Time
              </div>
            </div>
            <Link
              href="/customer/products?deals=flash"
              className="text-sm font-medium text-blue-600 hover:text-blue-800"
            >
              View All <ChevronRight className="ml-1 inline h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {flashDeals.map((deal) => (
              <div
                key={deal.id}
                className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
              >
                <div className="relative p-4">
                  <div className="absolute right-4 top-4 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                    -{deal.discount}%
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src={deal.imageSrc || "/placeholder.svg"}
                      alt={deal.name}
                      width={150}
                      height={150}
                      className="h-32 w-32 object-contain"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-sm font-medium text-gray-900">
                      {deal.name}
                    </h3>
                    <div className="mt-1 flex items-center justify-center">
                      <p className="text-lg font-bold text-gray-900">
                        ${deal.price.toFixed(2)}
                      </p>
                      <p className="ml-2 text-sm text-gray-500 line-through">
                        ${deal.originalPrice.toFixed(2)}
                      </p>
                    </div>
                    <div className="mt-2 flex items-center justify-center text-xs font-medium text-red-600">
                      <Clock className="mr-1 h-3 w-3" />
                      Ends in {deal.endsIn}
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 bg-gray-50 p-2">
                  <button className="w-full rounded-md bg-blue-600 py-2 text-sm font-medium text-white hover:bg-blue-700">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Orders */}
        <div className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Recent Orders</h2>
            <Link
              href="/customer/orders"
              className="text-sm font-medium text-blue-600 hover:text-blue-800"
            >
              View All Orders <ChevronRight className="ml-1 inline h-4 w-4" />
            </Link>
          </div>
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div
                key={order.id}
                className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
              >
                <div className="border-b border-gray-200 bg-gray-50 px-4 py-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <p className="text-sm font-medium text-gray-900">
                        Order #{order.id}
                      </p>
                      <p className="ml-4 text-sm text-gray-500">{order.date}</p>
                    </div>
                    <div
                      className={`text-sm font-medium ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {order.status.charAt(0).toUpperCase() +
                        order.status.slice(1)}
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3">
                  <div className="space-y-3">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex items-center">
                        <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            width={60}
                            height={60}
                            className="h-full w-full object-contain"
                          />
                        </div>
                        <div className="ml-4 flex-1">
                          <p className="text-sm font-medium text-gray-900">
                            {item.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            Qty: {item.quantity} × ${item.price.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-t border-gray-200 bg-gray-50 px-4 py-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">
                      Total: ${order.total.toFixed(2)}
                    </p>
                    <div className="flex space-x-2">
                      <Link
                        href={`/customer/orders/${order.id}`}
                        className="rounded-md bg-white px-3 py-1 text-xs font-medium text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      >
                        Order Details
                      </Link>
                      {order.status === "delivered" && (
                        <button className="rounded-md bg-blue-600 px-3 py-1 text-xs font-medium text-white hover:bg-blue-700">
                          Buy Again
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">
              Shop by Category
            </h2>
            <Link
              href="/customer/products"
              className="text-sm font-medium text-blue-600 hover:text-blue-800"
            >
              View All Categories{" "}
              <ChevronRight className="ml-1 inline h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="flex flex-col items-center rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md"
              >
                {getCategoryIcon(category.icon)}
                <h3 className="mt-3 text-sm font-medium text-gray-900">
                  {category.name}
                </h3>
                <p className="text-xs text-gray-500">
                  {category.count} products
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Recommended Products */}
        <div className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">
              Recommended for You
            </h2>
            <Link
              href="/customer/products?recommended=true"
              className="text-sm font-medium text-blue-600 hover:text-blue-800"
            >
              View All <ChevronRight className="ml-1 inline h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {recommendedProducts.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Link href={`/customer/products/${product.id}`}>
                    <Image
                      src={product.imageSrc || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </Link>
                  {product.originalPrice && (
                    <div className="absolute right-2 top-2 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                      -
                      {Math.round(
                        ((product.originalPrice - product.price) /
                          product.originalPrice) *
                          100
                      )}
                      %
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <Link
                    href={`/customer/products/${product.id}`}
                    className="hover:text-blue-600"
                  >
                    <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="mt-1 text-xs text-gray-500">
                    Sold by {product.vendor}
                  </p>
                  <div className="mt-2 flex items-center">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-1 text-xs text-gray-500">
                      ({product.reviewCount})
                    </span>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-base font-bold text-gray-900">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <button className="mt-3 w-full rounded-md bg-blue-600 py-2 text-sm font-medium text-white hover:bg-blue-700">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
