import Image from "next/image";
import { MoreHorizontal, Edit, Trash2, UserX, CheckCircle } from "lucide-react";

export default function VendorTable() {
  const vendors = [
    {
      id: 1,
      name: "TechElite",
      email: "contact@techelite.com",
      category: "Electronics",
      status: "active",
      products: 156,
      avatar: "/placeholder.svg?height=40&width=40",
      joinDate: "Dec 10, 2024",
    },
    {
      id: 2,
      name: "EcoFashion",
      email: "info@ecofashion.com",
      category: "Fashion",
      status: "active",
      products: 89,
      avatar: "/placeholder.svg?height=40&width=40",
      joinDate: "Nov 5, 2024",
    },
    {
      id: 3,
      name: "ChefChoice",
      email: "support@chefchoice.com",
      category: "Home & Kitchen",
      status: "active",
      products: 64,
      avatar: "/placeholder.svg?height=40&width=40",
      joinDate: "Jan 15, 2025",
    },
    {
      id: 4,
      name: "FitGear",
      email: "hello@fitgear.com",
      category: "Sports & Outdoors",
      status: "active",
      products: 42,
      avatar: "/placeholder.svg?height=40&width=40",
      joinDate: "Feb 3, 2025",
    },
    {
      id: 5,
      name: "GadgetWorld",
      email: "contact@gadgetworld.com",
      category: "Electronics",
      status: "pending",
      products: 0,
      avatar: "/placeholder.svg?height=40&width=40",
      joinDate: "May 9, 2025",
    },
    {
      id: 6,
      name: "FashionHub",
      email: "info@fashionhub.com",
      category: "Fashion",
      status: "pending",
      products: 0,
      avatar: "/placeholder.svg?height=40&width=40",
      joinDate: "May 8, 2025",
    },
    {
      id: 7,
      name: "TechGadgets",
      email: "info@techgadgets.com",
      category: "Electronics",
      status: "suspended",
      products: 28,
      avatar: "/placeholder.svg?height=40&width=40",
      joinDate: "Oct 12, 2024",
    },
  ];

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-amber-100 text-amber-800";
      case "suspended":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Vendor
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Category
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Status
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Products
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Joined
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {vendors.map((vendor) => (
            <tr key={vendor.id} className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 flex-shrink-0">
                    <Image
                      src={vendor.avatar || "/placeholder.svg"}
                      alt={vendor.name}
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {vendor.name}
                    </div>
                    <div className="text-sm text-gray-500">{vendor.email}</div>
                  </div>
                </div>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <div className="text-sm text-gray-900">{vendor.category}</div>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <span
                  className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusBadgeClass(
                    vendor.status
                  )}`}
                >
                  {vendor.status.charAt(0).toUpperCase() +
                    vendor.status.slice(1)}
                </span>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <div className="text-sm text-gray-900">{vendor.products}</div>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <div className="text-sm text-gray-500">{vendor.joinDate}</div>
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                <div className="flex justify-end space-x-2">
                  {vendor.status === "pending" ? (
                    <>
                      <button className="text-green-600 hover:text-green-900">
                        <CheckCircle className="h-4 w-4" />
                        <span className="sr-only">Approve</span>
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Reject</span>
                      </button>
                    </>
                  ) : (
                    <>
                      <button className="text-blue-600 hover:text-blue-900">
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </button>
                      {vendor.status === "active" ? (
                        <button className="text-amber-600 hover:text-amber-900">
                          <UserX className="h-4 w-4" />
                          <span className="sr-only">Suspend</span>
                        </button>
                      ) : (
                        <button className="text-green-600 hover:text-green-900">
                          <CheckCircle className="h-4 w-4" />
                          <span className="sr-only">Activate</span>
                        </button>
                      )}
                      <button className="text-red-600 hover:text-red-900">
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </button>
                      <button className="text-gray-400 hover:text-gray-500">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">More</span>
                      </button>
                    </>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
