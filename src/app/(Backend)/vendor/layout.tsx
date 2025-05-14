"use client";

import { type ReactNode, useState } from "react";
import VendorHeader from "@/components/vendor/VendorHeader";
import VendorSidebar from "@/components/vendor/VendorSidebar";
import "../../globals.css";
export default function VendorLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gray-50">
          <VendorSidebar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />

          {/* Main content */}
          <div className="flex flex-1 flex-col lg:pl-64">
            <VendorHeader toggleSidebar={toggleSidebar} />
            <main className="flex-1 p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
