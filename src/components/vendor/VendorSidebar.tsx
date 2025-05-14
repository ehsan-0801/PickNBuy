"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Home, Package, ShoppingBag, BarChart2, Settings, X } from "lucide-react"

interface VendorSidebarProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}

export default function VendorSidebar({ sidebarOpen, setSidebarOpen }: VendorSidebarProps) {
  const pathname = usePathname()

  const navigation = [
    { name: "Dashboard", href: "/vendor", icon: Home },
    { name: "Products", href: "/vendor/products", icon: Package },
    { name: "Orders", href: "/vendor/orders", icon: ShoppingBag },
    { name: "Analytics", href: "/vendor/analytics", icon: BarChart2 },
    { name: "Settings", href: "/vendor/settings", icon: Settings },
  ]

  return (
    <>
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-40 lg:hidden ${sidebarOpen ? "block" : "hidden"}`} role="dialog">
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)}></div>
        <div className="fixed inset-y-0 left-0 flex w-full max-w-xs flex-col bg-white transform transition-transform duration-300 ease-in-out">
          <div className="flex h-16 flex-shrink-0 items-center justify-between border-b border-gray-200 px-6">
            <div className="flex items-center">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="Logo"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="ml-2 text-xl font-bold text-gray-900">TechElite</span>
            </div>
            <button
              type="button"
              className="rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-4">
            <nav className="flex flex-col space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center rounded-md px-3 py-2 text-sm font-medium ${
                      isActive ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <item.icon
                      className={`mr-3 h-5 w-5 flex-shrink-0 ${
                        isActive ? "text-blue-600" : "text-gray-400 group-hover:text-gray-500"
                      }`}
                    />
                    {item.name}
                  </Link>
                )
              })}
            </nav>
          </div>
          <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Vendor"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">TechElite</p>
                <p className="text-xs text-gray-500">vendor@techelite.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">
          <div className="flex h-16 flex-shrink-0 items-center border-b border-gray-200 px-6">
            <Image src="/placeholder.svg?height=32&width=32" alt="Logo" width={32} height={32} className="h-8 w-auto" />
            <span className="ml-2 text-xl font-bold text-gray-900">TechElite</span>
          </div>
          <div className="flex flex-1 flex-col overflow-y-auto px-4 py-4">
            <nav className="flex-1 space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center rounded-md px-3 py-2 text-sm font-medium ${
                      isActive ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <item.icon
                      className={`mr-3 h-5 w-5 flex-shrink-0 ${
                        isActive ? "text-blue-600" : "text-gray-400 group-hover:text-gray-500"
                      }`}
                    />
                    {item.name}
                  </Link>
                )
              })}
            </nav>
          </div>
          <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Vendor"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">TechElite</p>
                <p className="text-xs text-gray-500">vendor@techelite.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
