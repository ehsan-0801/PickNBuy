"use client";
import "../../globals.css";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { SessionProvider } from "next-auth/react";
import { type ReactNode, useState, useEffect } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Handle responsive sidebar behavior and body scroll
  useEffect(() => {
    const handleResize = () => {
      // On desktop (>= 1024px), we ignore the sidebarOpen state as it's always visible
      if (window.innerWidth >= 1024) {
        document.body.style.overflow = "";
      } else {
        // On mobile, we update the body overflow based on the sidebar state
        document.body.style.overflow = sidebarOpen ? "hidden" : "";
      }
    };

    handleResize(); // Call initially
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  const toggleSidebar = () => {
    console.log("Sidebar toggled");
    setSidebarOpen((prev) => !prev);
  };

  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <div className="min-h-screen bg-gray-50">
            <AdminSidebar
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />

            {/* Main content */}
            <div className="flex flex-1 flex-col lg:pl-64">
              <AdminHeader toggleSidebar={toggleSidebar} />
              <main className="flex-1 p-6">{children}</main>
            </div>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
