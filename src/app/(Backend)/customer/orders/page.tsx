"use client";

import { useState } from "react";
import OrdersTable from "@/components/customer/OrdersTable";
import { Search, Filter } from "lucide-react";

export default function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">My Orders</h1>
        <p className="text-gray-600">View and track all your orders</p>
      </div>

      <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="border-b border-gray-200 p-4 sm:flex sm:items-center sm:justify-between">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
            <input
              type="text"
              placeholder="Search orders by ID, product..."
              className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="mt-3 flex items-center sm:mt-0">
            <Filter className="mr-2 h-4 w-4 text-gray-400" />
            <select
              className="rounded-md border border-gray-300 py-2 pl-3 pr-8 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="processing">Processing</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>
        <OrdersTable />
      </div>
    </div>
  );
}
