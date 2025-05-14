"use client";

import { useState } from "react";
import Image from "next/image";
import { Save, Upload } from "lucide-react";

export default function StoreSettingsPage() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Store Settings</h1>
        <p className="text-gray-600">Manage your store profile and settings</p>
      </div>

      <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="border-b border-gray-200">
          <nav className="flex overflow-x-auto">
            <button
              onClick={() => setActiveTab("general")}
              className={`inline-flex min-w-max items-center border-b-2 px-4 py-3 text-sm font-medium ${
                activeTab === "general"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              General
            </button>
            <button
              onClick={() => setActiveTab("shipping")}
              className={`inline-flex min-w-max items-center border-b-2 px-4 py-3 text-sm font-medium ${
                activeTab === "shipping"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              Shipping
            </button>
            <button
              onClick={() => setActiveTab("payment")}
              className={`inline-flex min-w-max items-center border-b-2 px-4 py-3 text-sm font-medium ${
                activeTab === "payment"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              Payment
            </button>
            <button
              onClick={() => setActiveTab("policy")}
              className={`inline-flex min-w-max items-center border-b-2 px-4 py-3 text-sm font-medium ${
                activeTab === "policy"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              Store Policies
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === "general" && (
            <div className="space-y-6">
              <div>
                <h3 className="mb-4 text-lg font-medium text-gray-900">
                  Store Information
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Store Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      defaultValue="TechElite"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Store Email
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      defaultValue="contact@techelite.com"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      defaultValue="+1 (555) 987-6543"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Store Category
                    </label>
                    <select className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
                      <option value="electronics">Electronics</option>
                      <option value="fashion">Fashion</option>
                      <option value="home">Home & Kitchen</option>
                      <option value="sports">Sports & Outdoors</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-lg font-medium text-gray-900">
                  Store Logo & Banner
                </h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Store Logo
                    </label>
                    <div className="mt-2 flex items-center">
                      <div className="h-16 w-16 overflow-hidden rounded-md border border-gray-300">
                        <Image
                          src="/placeholder.svg?height=64&width=64"
                          alt="Store Logo"
                          width={64}
                          height={64}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <button className="ml-4 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        <Upload className="mr-2 inline-block h-4 w-4" />
                        Change Logo
                      </button>
                    </div>
                    <p className="mt-1 text-xs text-gray-500">
                      Recommended size: 250x250px
                    </p>
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Store Banner
                    </label>
                    <div className="mt-2">
                      <div className="mb-2 h-32 w-full overflow-hidden rounded-md border border-gray-300">
                        <Image
                          src="/placeholder.svg?height=128&width=600"
                          alt="Store Banner"
                          width={600}
                          height={128}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <button className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        <Upload className="mr-2 inline-block h-4 w-4" />
                        Change Banner
                      </button>
                    </div>
                    <p className="mt-1 text-xs text-gray-500">
                      Recommended size: 1200x300px
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-lg font-medium text-gray-900">
                  Store Description
                </h3>
                <textarea
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  rows={4}
                  defaultValue="TechElite is your premier destination for high-quality electronics and tech accessories. We offer the latest gadgets, smartphones, laptops, and more at competitive prices with excellent customer service."
                ></textarea>
              </div>

              <div>
                <h3 className="mb-4 text-lg font-medium text-gray-900">
                  Social Media Links
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Facebook
                    </label>
                    <input
                      type="url"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="https://facebook.com/yourstorename"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Instagram
                    </label>
                    <input
                      type="url"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="https://instagram.com/yourstorename"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Twitter
                    </label>
                    <input
                      type="url"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="https://twitter.com/yourstorename"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Website
                    </label>
                    <input
                      type="url"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="https://yourstorewebsite.com"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "shipping" && (
            <div className="space-y-6">
              <div>
                <h3 className="mb-4 text-lg font-medium text-gray-900">
                  Shipping Methods
                </h3>
                <div className="space-y-4">
                  <div className="rounded-md border border-gray-200 p-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="free-shipping"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        defaultChecked
                      />
                      <label
                        htmlFor="free-shipping"
                        className="ml-2 text-sm font-medium text-gray-700"
                      >
                        Free Shipping
                      </label>
                    </div>
                    <div className="mt-4">
                      <label className="mb-1 block text-sm font-medium text-gray-700">
                        Minimum Order Amount for Free Shipping
                      </label>
                      <div className="relative mt-1 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input
                          type="number"
                          className="w-full rounded-md border border-gray-300 pl-7 pr-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                          defaultValue="50"
                          min="0"
                          step="0.01"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-md border border-gray-200 p-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="flat-rate"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        defaultChecked
                      />
                      <label
                        htmlFor="flat-rate"
                        className="ml-2 text-sm font-medium text-gray-700"
                      >
                        Flat Rate
                      </label>
                    </div>
                    <div className="mt-4">
                      <label className="mb-1 block text-sm font-medium text-gray-700">
                        Flat Rate Amount
                      </label>
                      <div className="relative mt-1 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input
                          type="number"
                          className="w-full rounded-md border border-gray-300 pl-7 pr-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                          defaultValue="5.99"
                          min="0"
                          step="0.01"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-md border border-gray-200 p-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="expedited"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <label
                        htmlFor="expedited"
                        className="ml-2 text-sm font-medium text-gray-700"
                      >
                        Expedited Shipping
                      </label>
                    </div>
                    <div className="mt-4">
                      <label className="mb-1 block text-sm font-medium text-gray-700">
                        Expedited Shipping Rate
                      </label>
                      <div className="relative mt-1 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input
                          type="number"
                          className="w-full rounded-md border border-gray-300 pl-7 pr-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                          defaultValue="15.99"
                          min="0"
                          step="0.01"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-lg font-medium text-gray-900">
                  Shipping Locations
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Shipping Countries
                    </label>
                    <select
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      multiple
                      size={4}
                    >
                      <option value="US" selected>
                        United States
                      </option>
                      <option value="CA" selected>
                        Canada
                      </option>
                      <option value="UK">United Kingdom</option>
                      <option value="AU">Australia</option>
                      <option value="DE">Germany</option>
                      <option value="FR">France</option>
                      <option value="JP">Japan</option>
                    </select>
                    <p className="mt-1 text-xs text-gray-500">
                      Hold Ctrl/Cmd to select multiple countries
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "payment" && (
            <div className="space-y-6">
              <div>
                <h3 className="mb-4 text-lg font-medium text-gray-900">
                  Payment Methods
                </h3>
                <div className="space-y-4">
                  <div className="rounded-md border border-gray-200 p-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="credit-card"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        defaultChecked
                      />
                      <label
                        htmlFor="credit-card"
                        className="ml-2 text-sm font-medium text-gray-700"
                      >
                        Credit/Debit Card
                      </label>
                    </div>
                  </div>

                  <div className="rounded-md border border-gray-200 p-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="paypal"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        defaultChecked
                      />
                      <label
                        htmlFor="paypal"
                        className="ml-2 text-sm font-medium text-gray-700"
                      >
                        PayPal
                      </label>
                    </div>
                  </div>

                  <div className="rounded-md border border-gray-200 p-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="apple-pay"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <label
                        htmlFor="apple-pay"
                        className="ml-2 text-sm font-medium text-gray-700"
                      >
                        Apple Pay
                      </label>
                    </div>
                  </div>

                  <div className="rounded-md border border-gray-200 p-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="google-pay"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <label
                        htmlFor="google-pay"
                        className="ml-2 text-sm font-medium text-gray-700"
                      >
                        Google Pay
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-lg font-medium text-gray-900">
                  Bank Account Information
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Account Holder Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="Enter account holder name"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Bank Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="Enter bank name"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Account Number
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="Enter account number"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Routing Number
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="Enter routing number"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "policy" && (
            <div className="space-y-6">
              <div>
                <h3 className="mb-4 text-lg font-medium text-gray-900">
                  Return Policy
                </h3>
                <textarea
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  rows={5}
                  defaultValue="We offer a 30-day return policy for all products. Items must be returned in their original packaging and in the same condition as when you received them. Shipping costs for returns are the responsibility of the customer unless the item is defective or was shipped incorrectly."
                ></textarea>
              </div>

              <div>
                <h3 className="mb-4 text-lg font-medium text-gray-900">
                  Shipping Policy
                </h3>
                <textarea
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  rows={5}
                  defaultValue="Orders are typically processed within 1-2 business days. Standard shipping takes 3-5 business days for delivery. Expedited shipping options are available at checkout. Free shipping is available for orders over $50 within the continental United States."
                ></textarea>
              </div>

              <div>
                <h3 className="mb-4 text-lg font-medium text-gray-900">
                  Privacy Policy
                </h3>
                <textarea
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  rows={5}
                  defaultValue="We collect personal information solely for the purpose of processing orders and improving your shopping experience. We do not sell or share your information with third parties except as necessary to fulfill your order. You may opt out of marketing communications at any time."
                ></textarea>
              </div>

              <div>
                <h3 className="mb-4 text-lg font-medium text-gray-900">
                  Terms of Service
                </h3>
                <textarea
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  rows={5}
                  defaultValue="By placing an order with our store, you agree to these terms of service. We reserve the right to refuse service to anyone for any reason. We are not responsible for any damages that may result from the use of products purchased from our store. Prices are subject to change without notice."
                ></textarea>
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-gray-200 px-6 py-4">
          <div className="flex justify-end">
            <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              <Save className="mr-2 inline-block h-4 w-4" />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
