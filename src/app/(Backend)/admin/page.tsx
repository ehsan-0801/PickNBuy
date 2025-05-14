import RecentOrdersTable from "@/components/admin/RecentOrdersTable";
import StatCard from "@/components/admin/StatCard";
import TopSellingProducts from "@/components/admin/TopSellingProducts";
import VendorApprovalList from "@/components/admin/VendorApprovalList";
import Link from "next/link";
import React from "react";

export default function AdminDashboard() {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
        <p className="text-gray-600">
          Welcome back, Admin! Here's what's happening with your store today.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Sales"
          value="$24,780"
          change="+12.5%"
          isPositive={true}
          icon="dollar"
          color="bg-blue-500"
        />
        <StatCard
          title="Total Orders"
          value="1,243"
          change="+8.3%"
          isPositive={true}
          icon="shopping-bag"
          color="bg-purple-500"
        />
        <StatCard
          title="Total Users"
          value="5,678"
          change="+15.2%"
          isPositive={true}
          icon="users"
          color="bg-green-500"
        />
        <StatCard
          title="Pending Approvals"
          value="12"
          change="-2.5%"
          isPositive={false}
          icon="clock"
          color="bg-amber-500"
        />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-800">
                Recent Orders
              </h2>
              <Link
                href="/admin/orders"
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
                href="/admin/products"
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
              Pending Vendor Approvals
            </h2>
            <Link
              href="/admin/vendors"
              className="text-sm font-medium text-blue-600 hover:text-blue-800"
            >
              View All Vendors
            </Link>
          </div>
          <VendorApprovalList />
        </div>
      </div>
    </>
  );
}
