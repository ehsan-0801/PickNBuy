"use client";

import { useState } from "react";
import { Save, Upload } from "lucide-react";
import Image from "next/image";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Site Settings</h1>
        <p className="text-gray-600">
          Manage your store settings and configurations
        </p>
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
              onClick={() => setActiveTab("appearance")}
              className={`inline-flex min-w-max items-center border-b-2 px-4 py-3 text-sm font-medium ${
                activeTab === "appearance"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              Appearance
            </button>
            <button
              onClick={() => setActiveTab("payment")}
              className={`inline-flex min-w-max items-center border-b-2 px-4 py-3 text-sm font-medium ${
                activeTab === "payment"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              Payment Methods
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
              onClick={() => setActiveTab("email")}
              className={`inline-flex min-w-max items-center border-b-2 px-4 py-3 text-sm font-medium ${
                activeTab === "email"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              Email Templates
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
                      defaultValue="PickAndBuy"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Store Email
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      defaultValue="contact@pickandbuy.com"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      defaultValue="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Currency
                    </label>
                    <select className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
                      <option value="USD">USD ($)</option>
                      <option value="EUR">EUR (€)</option>
                      <option value="GBP">GBP (£)</option>
                      <option value="JPY">JPY (¥)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-lg font-medium text-gray-900">
                  Address Information
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Address
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      defaultValue="123 E-Commerce St."
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      City
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      defaultValue="San Francisco"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      State/Province
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      defaultValue="California"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      defaultValue="94105"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Country
                    </label>
                    <select className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="UK">United Kingdom</option>
                      <option value="AU">Australia</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "appearance" && (
            <div className="space-y-6">
              <div>
                <h3 className="mb-4 text-lg font-medium text-gray-900">
                  Logo & Favicon
                </h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Site Logo
                    </label>
                    <div className="mt-2 flex items-center">
                      <div className="h-16 w-16 overflow-hidden rounded-md border border-gray-300">
                        <Image
                          src="/placeholder.svg?height=64&width=64"
                          alt="Site Logo"
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
                      Recommended size: 250x100px
                    </p>
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Favicon
                    </label>
                    <div className="mt-2 flex items-center">
                      <div className="h-10 w-10 overflow-hidden rounded-md border border-gray-300">
                        <Image
                          src=""
                          alt="Favicon"
                          width={40}
                          height={40}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <button className="ml-4 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        <Upload className="mr-2 inline-block h-4 w-4" />
                        Change Favicon
                      </button>
                    </div>
                    <p className="mt-1 text-xs text-gray-500">
                      Recommended size: 32x32px
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-lg font-medium text-gray-900">
                  Homepage Banner
                </h3>
                <div>
                  <div className="mb-2 h-40 w-full overflow-hidden rounded-md border border-gray-300">
                    <Image
                      src="/placeholder.svg?height=160&width=800"
                      alt="Homepage Banner"
                      width={800}
                      height={160}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <button className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    <Upload className="mr-2 inline-block h-4 w-4" />
                    Change Banner
                  </button>
                  <p className="mt-1 text-xs text-gray-500">
                    Recommended size: 1920x400px
                  </p>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-lg font-medium text-gray-900">
                  Theme Colors
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Primary Color
                    </label>
                    <div className="flex items-center">
                      <input
                        type="color"
                        className="h-10 w-10 rounded-md border border-gray-300"
                        defaultValue="#3B82F6"
                      />
                      <input
                        type="text"
                        className="ml-2 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        defaultValue="#3B82F6"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Secondary Color
                    </label>
                    <div className="flex items-center">
                      <input
                        type="color"
                        className="h-10 w-10 rounded-md border border-gray-300"
                        defaultValue="#10B981"
                      />
                      <input
                        type="text"
                        className="ml-2 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        defaultValue="#10B981"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "payment" && (
            <div className="space-y-6">
              <div>
                <h3 className="mb-4 text-lg font-medium text-gray-900">
                  Payment Gateways
                </h3>
                <div className="space-y-4">
                  <div className="rounded-md border border-gray-200 p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="stripe"
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          defaultChecked
                        />
                        <label
                          htmlFor="stripe"
                          className="ml-2 text-sm font-medium text-gray-700"
                        >
                          Stripe
                        </label>
                      </div>
                      <Image
                        src="/placeholder.svg?height=30&width=60"
                        alt="Stripe"
                        width={60}
                        height={30}
                        className="h-8"
                      />
                    </div>
                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                          API Key
                        </label>
                        <input
                          type="text"
                          className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                          placeholder="pk_test_..."
                        />
                      </div>
                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                          Secret Key
                        </label>
                        <input
                          type="password"
                          className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                          placeholder="sk_test_..."
                        />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-md border border-gray-200 p-4">
                    <div className="flex items-center justify-between">
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
                      <Image
                        src="/placeholder.svg?height=30&width=60"
                        alt="PayPal"
                        width={60}
                        height={30}
                        className="h-8"
                      />
                    </div>
                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                          Client ID
                        </label>
                        <input
                          type="text"
                          className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                          placeholder="Client ID"
                        />
                      </div>
                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                          Secret
                        </label>
                        <input
                          type="password"
                          className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                          placeholder="Secret"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-md border border-gray-200 p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="cod"
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          defaultChecked
                        />
                        <label
                          htmlFor="cod"
                          className="ml-2 text-sm font-medium text-gray-700"
                        >
                          Cash on Delivery
                        </label>
                      </div>
                    </div>
                    <div className="mt-4">
                      <label className="mb-1 block text-sm font-medium text-gray-700">
                        Additional Fee (%)
                      </label>
                      <input
                        type="number"
                        className="w-full max-w-xs rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        defaultValue="0"
                        min="0"
                        step="0.5"
                      />
                    </div>
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
                        id="local-pickup"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        defaultChecked
                      />
                      <label
                        htmlFor="local-pickup"
                        className="ml-2 text-sm font-medium text-gray-700"
                      >
                        Local Pickup
                      </label>
                    </div>
                    <div className="mt-4">
                      <label className="mb-1 block text-sm font-medium text-gray-700">
                        Local Pickup Fee
                      </label>
                      <div className="relative mt-1 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input
                          type="number"
                          className="w-full rounded-md border border-gray-300 pl-7 pr-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                          defaultValue="0"
                          min="0"
                          step="0.01"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "email" && (
            <div className="space-y-6">
              <div>
                <h3 className="mb-4 text-lg font-medium text-gray-900">
                  Email Settings
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      From Email
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      defaultValue="noreply@pickandbuy.com"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      From Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      defaultValue="PickAndBuy"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-lg font-medium text-gray-900">
                  Email Templates
                </h3>
                <div className="space-y-4">
                  <div className="rounded-md border border-gray-200 p-4">
                    <h4 className="text-md font-medium text-gray-900">
                      Order Confirmation
                    </h4>
                    <p className="text-sm text-gray-500">
                      Sent to customers when they place an order
                    </p>
                    <div className="mt-4">
                      <label className="mb-1 block text-sm font-medium text-gray-700">
                        Subject
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        defaultValue="Your PickAndBuy Order Confirmation - Order #{{order_number}}"
                      />
                    </div>
                    <div className="mt-4">
                      <label className="mb-1 block text-sm font-medium text-gray-700">
                        Email Content
                      </label>
                      <textarea
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        rows={5}
                        defaultValue="Dear {{customer_name}},

Thank you for your order! We're pleased to confirm that your order #{{order_number}} has been received and is being processed.

Order Details:
{{order_details}}

Shipping Address:
{{shipping_address}}

Payment Method:
{{payment_method}}

If you have any questions, please contact our customer service.

Best regards,
The PickAndBuy Team"
                      ></textarea>
                    </div>
                  </div>

                  <div className="rounded-md border border-gray-200 p-4">
                    <h4 className="text-md font-medium text-gray-900">
                      Shipping Confirmation
                    </h4>
                    <p className="text-sm text-gray-500">
                      Sent to customers when their order ships
                    </p>
                    <div className="mt-4">
                      <label className="mb-1 block text-sm font-medium text-gray-700">
                        Subject
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        defaultValue="Your PickAndBuy Order #{{order_number}} Has Shipped!"
                      />
                    </div>
                    <div className="mt-4">
                      <label className="mb-1 block text-sm font-medium text-gray-700">
                        Email Content
                      </label>
                      <textarea
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        rows={5}
                        defaultValue="Dear {{customer_name}},

Great news! Your order #{{order_number}} has been shipped.

Tracking Information:
{{tracking_number}}
{{tracking_url}}

Estimated Delivery Date:
{{estimated_delivery_date}}

If you have any questions, please contact our customer service.

Best regards,
The PickAndBuy Team"
                      ></textarea>
                    </div>
                  </div>
                </div>
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
