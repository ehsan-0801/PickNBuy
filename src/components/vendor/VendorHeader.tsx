"use client"

import { Menu, Bell, Search } from "lucide-react"

interface VendorHeaderProps {
  toggleSidebar: () => void
}

export default function VendorHeader({ toggleSidebar }: VendorHeaderProps) {
  return (
    <header className="sticky top-0 z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white">
      <div className="flex flex-1 justify-between px-4 md:px-6">
        <div className="flex flex-1">
          <button
            type="button"
            className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 lg:hidden"
            onClick={toggleSidebar}
          >
            <span className="sr-only">Open sidebar</span>
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex w-full items-center px-4 lg:px-6">
            <div className="relative w-full max-w-md">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                placeholder="Search products..."
              />
            </div>
          </div>
        </div>
        <div className="ml-4 flex items-center md:ml-6">
          <button
            type="button"
            className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <span className="sr-only">View notifications</span>
            <Bell className="h-6 w-6" />
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">
              5
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}
