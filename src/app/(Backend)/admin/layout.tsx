"use client";
import "../../globals.css";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { SessionProvider } from "next-auth/react";
import { type ReactNode, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ProtectedLayout from "@/app/context/ProtectedLayout";
import { AuthProvider } from "@/app/context/AuthContext";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  // Redirect if not authenticated

  // Handle responsive sidebar behavior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        document.body.style.overflow = "";
      } else {
        document.body.style.overflow = sidebarOpen ? "hidden" : "";
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <SessionProvider>
          <AuthProvider>
            <ProtectedLayout requiredRole="admin">
              <div className="min-h-screen bg-gray-50">
                <AdminSidebar
                  sidebarOpen={sidebarOpen}
                  setSidebarOpen={setSidebarOpen}
                />
                <div className="flex flex-1 flex-col lg:pl-64">
                  <AdminHeader toggleSidebar={toggleSidebar} />
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
