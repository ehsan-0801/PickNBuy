"use client";

import { type ReactNode, useState } from "react";
import CustomerSidebar from "@/components/customer/CustomerSidebar";
import CustomerHeader from "@/components/customer/CustomerHeader";
import "../../globals.css";
export default function CustomerLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gray-50">
          <CustomerSidebar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />

          {/* Main content */}
          <div className="flex flex-1 flex-col lg:pl-64">
            <CustomerHeader toggleSidebar={toggleSidebar} />
            <main className="flex-1 p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
