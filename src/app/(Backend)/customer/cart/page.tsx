"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Wireless Noise-Cancelling Headphones",
      price: 149.99,
      quantity: 1,
      image: "/placeholder.svg?height=80&width=80",
      vendor: "TechElite",
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 89.99,
      quantity: 1,
      image: "/placeholder.svg?height=80&width=80",
      vendor: "FitGear",
    },
    {
      id: 3,
      name: "Organic Cotton T-Shirt",
      price: 29.99,
      quantity: 2,
      image: "/placeholder.svg?height=80&width=80",
      vendor: "EcoFashion",
    },
  ]);

  interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
    vendor: string;
  }

  const updateQuantity = (id: number, newQuantity: number): void => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item: CartItem) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Shopping Cart</h1>
        <p className="text-gray-600">
          Review and modify your items before checkout
        </p>
      </div>

      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="border-b border-gray-200 p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  Cart Items (
                  {cartItems.reduce((total, item) => total + item.quantity, 0)})
                </h2>
              </div>
              <ul className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <li key={item.id} className="p-4">
                    <div className="flex items-center">
                      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="ml-4 flex-1">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="text-base font-medium text-gray-900">
                              <Link
                                href={`/customer/products/${item.id}`}
                                className="hover:text-blue-600"
                              >
                                {item.name}
                              </Link>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                              Vendor: {item.vendor}
                            </p>
                          </div>
                          <p className="text-base font-medium text-gray-900">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                        <div className="mt-2 flex items-center justify-between">
                          <div className="flex items-center border rounded-md">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="p-2 text-gray-600 hover:text-blue-600"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="px-2 text-gray-900">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="p-2 text-gray-600 hover:text-blue-600"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-sm font-medium text-red-600 hover:text-red-800"
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Remove</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="border-t border-gray-200 p-4">
                <Link
                  href="/customer/products"
                  className="text-sm font-medium text-blue-600 hover:text-blue-800"
                >
                  ← Continue Shopping
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800">
                Order Summary
              </h2>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between">
                  <p className="text-sm text-gray-600">Subtotal</p>
                  <p className="text-sm font-medium text-gray-900">
                    ${subtotal.toFixed(2)}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm text-gray-600">Shipping</p>
                  <p className="text-sm font-medium text-gray-900">
                    ${shipping.toFixed(2)}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm text-gray-600">Tax</p>
                  <p className="text-sm font-medium text-gray-900">
                    ${tax.toFixed(2)}
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-2">
                  <div className="flex justify-between">
                    <p className="text-base font-medium text-gray-900">Total</p>
                    <p className="text-base font-medium text-gray-900">
                      ${total.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="/customer/checkout"
                  className="flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Proceed to Checkout
                </Link>
              </div>
            </div>
            <div className="mt-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
              <h3 className="text-sm font-medium text-gray-900">We Accept</h3>
              <div className="mt-2 flex space-x-2">
                <div className="h-8 w-12 rounded border border-gray-200 bg-gray-100"></div>
                <div className="h-8 w-12 rounded border border-gray-200 bg-gray-100"></div>
                <div className="h-8 w-12 rounded border border-gray-200 bg-gray-100"></div>
                <div className="h-8 w-12 rounded border border-gray-200 bg-gray-100"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
            <ShoppingBag className="h-8 w-8 text-gray-400" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">
            Your cart is empty
          </h2>
          <p className="mt-2 text-gray-600">
            Looks like you haven't added any items to your cart yet.
          </p>
          <div className="mt-6">
            <Link
              href="/customer/products"
              className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Start Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
