"use client";
import RecentOrdersTable from "@/components/admin/RecentOrdersTable";
import StatCard from "@/components/admin/StatCard";
import TopSellingProducts from "@/components/admin/TopSellingProducts";
import SalesChart from "@/components/vendor/SalesChart";
import Link from "next/link";

export default function VendorDashboard() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Vendor Dashboard</h1>
        <p className="text-gray-600">
          Welcome back, TechElite! Here's what's happening with your store
          today.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Today's Sales"
          value="$1,240"
          change="+12.5%"
          isPositive={true}
          icon="dollar"
          color="bg-blue-500"
        />
        <StatCard
          title="Today's Orders"
          value="24"
          change="+8.3%"
          isPositive={true}
          icon="shopping-bag"
          color="bg-purple-500"
        />
        <StatCard
          title="Total Products"
          value="156"
          change="+3.2%"
          isPositive={true}
          icon="package"
          color="bg-green-500"
        />
        <StatCard
          title="Pending Orders"
          value="8"
          change="-2.5%"
          isPositive={false}
          icon="clock"
          color="bg-amber-500"
        />
      </div>

      <div className="mt-8">
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800">
              Sales Overview
            </h2>
            <select className="rounded-md border border-gray-300 py-1 pl-3 pr-8 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
              <option value="7days">Last 7 Days</option>
              <option value="30days">Last 30 Days</option>
              <option value="90days">Last 90 Days</option>
              <option value="year">This Year</option>
            </select>
          </div>
          <SalesChart />
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-800">
                Recent Orders
              </h2>
              <Link
                href="/vendor/orders"
                className="text-sm font-medium text-blue-600 hover:text-blue-800"
              >
                View All
              </Link>
            </div>
            <RecentOrdersTable />
          </div>
        </div>
        <div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-800">
                Top Selling Products
              </h2>
              <Link
                href="/vendor/products"
                className="text-sm font-medium text-blue-600 hover:text-blue-800"
              >
                View All
              </Link>
            </div>
            <TopSellingProducts />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800">
              Store Performance
            </h2>
            <div className="flex items-center">
              <div className="flex items-center mr-4">
                <div className="h-3 w-3 rounded-full bg-blue-500 mr-1"></div>
                <span className="text-xs text-gray-600">This Month</span>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-gray-300 mr-1"></div>
                <span className="text-xs text-gray-600">Last Month</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <p className="text-sm font-medium text-gray-500">
                Conversion Rate
              </p>
              <p className="mt-1 text-2xl font-semibold text-gray-900">3.6%</p>
              <div className="mt-1 flex items-center">
                <span className="text-xs font-medium text-green-600">
                  +0.8%
                </span>
                <span className="ml-1 text-xs text-gray-500">
                  vs last month
                </span>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <p className="text-sm font-medium text-gray-500">
                Avg. Order Value
              </p>
              <p className="mt-1 text-2xl font-semibold text-gray-900">
                $86.40
              </p>
              <div className="mt-1 flex items-center">
                <span className="text-xs font-medium text-green-600">
                  +$4.20
                </span>
                <span className="ml-1 text-xs text-gray-500">
                  vs last month
                </span>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <p className="text-sm font-medium text-gray-500">
                Customer Reviews
              </p>
              <p className="mt-1 text-2xl font-semibold text-gray-900">4.8/5</p>
              <div className="mt-1 flex items-center">
                <span className="text-xs font-medium text-green-600">+0.2</span>
                <span className="ml-1 text-xs text-gray-500">
                  vs last month
                </span>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <p className="text-sm font-medium text-gray-500">Return Rate</p>
              <p className="mt-1 text-2xl font-semibold text-gray-900">2.1%</p>
              <div className="mt-1 flex items-center">
                <span className="text-xs font-medium text-red-600">+0.3%</span>
                <span className="ml-1 text-xs text-gray-500">
                  vs last month
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
