"use client";

import { type ReactNode, useState } from "react";
import CustomerSidebar from "@/components/customer/CustomerSidebar";
import CustomerHeader from "@/components/customer/CustomerHeader";
import "../../globals.css";
import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "@/app/context/AuthContext";
import ProtectedLayout from "@/app/context/ProtectedLayout";
export default function CustomerLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <SessionProvider>
          <AuthProvider>
            <ProtectedLayout requiredRole="customer">
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
            </ProtectedLayout>
          </AuthProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
