"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Home,
  Users,
  Store,
  ShoppingBag,
  Tag,
  Settings,
  X,
} from "lucide-react";

interface AdminSidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export default function AdminSidebar({
  sidebarOpen,
  setSidebarOpen,
}: AdminSidebarProps) {
  const pathname = usePathname();

  const navigation = [
    { name: "Dashboard", href: "/admin", icon: Home },
    { name: "Users", href: "/admin/users", icon: Users },
    { name: "Vendors", href: "/admin/vendors", icon: Store },
    { name: "Orders", href: "/admin/orders", icon: ShoppingBag },
    { name: "Categories", href: "/admin/categories", icon: Tag },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-40 lg:flex lg:w-64 lg:flex-col">
        <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">
          <div className="flex h-16 flex-shrink-0 items-center px-6">
            <Image
              src="/pickandbuy.png"
              alt="Logo"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
            <span className="ml-2 text-xl font-bold text-gray-900">
              PickAndBuy
            </span>
          </div>
          <div className="flex flex-1 flex-col overflow-y-auto">
            <nav className="flex-1 space-y-1 px-4 py-4">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <item.icon
                      className={`mr-3 h-5 w-5 flex-shrink-0 transition-colors ${
                        isActive
                          ? "text-blue-600"
                          : "text-gray-400 group-hover:text-gray-500"
                      }`}
                    />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile sidebar backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-gray-600 transition-opacity duration-300 lg:hidden ${
          sidebarOpen
            ? "opacity-75 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile sidebar panel */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 transform overflow-y-auto bg-white transition-transform duration-300 ease-in-out lg:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 flex-shrink-0 items-center justify-between px-6 border-b border-gray-200">
          <div className="flex items-center">
            <Image
              src="/pickandbuy.png"
              alt="Logo"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
            <span className="ml-2 text-xl font-bold text-gray-900">
              PickAndBuy
            </span>
          </div>
          <button
            type="button"
            className="rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setSidebarOpen(false)}
          >
            <span className="sr-only">Close sidebar</span>
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex-1 space-y-1 px-4 py-4">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                <item.icon
                  className={`mr-3 h-5 w-5 flex-shrink-0 transition-colors ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-400 group-hover:text-gray-500"
                  }`}
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
