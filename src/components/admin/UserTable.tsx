import Image from "next/image";
import { MoreHorizontal, Edit, Trash2, UserX } from "lucide-react";

export default function UserTable() {
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "customer",
      status: "active",
      avatar: "/placeholder.svg?height=40&width=40",
      joinDate: "Jan 15, 2025",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      role: "customer",
      status: "active",
      avatar: "/placeholder.svg?height=40&width=40",
      joinDate: "Feb 3, 2025",
    },
    {
      id: 3,
      name: "TechElite",
      email: "contact@techelite.com",
      role: "vendor",
      status: "active",
      avatar: "/placeholder.svg?height=40&width=40",
      joinDate: "Dec 10, 2024",
    },
    {
      id: 4,
      name: "Michael Brown",
      email: "michael.brown@example.com",
      role: "customer",
      status: "inactive",
      avatar: "/placeholder.svg?height=40&width=40",
      joinDate: "Mar 22, 2025",
    },
    {
      id: 5,
      name: "EcoFashion",
      email: "info@ecofashion.com",
      role: "vendor",
      status: "active",
      avatar: "/placeholder.svg?height=40&width=40",
      joinDate: "Nov 5, 2024",
    },
    {
      id: 6,
      name: "Admin User",
      email: "admin@pickandbuy.com",
      role: "admin",
      status: "active",
      avatar: "/placeholder.svg?height=40&width=40",
      joinDate: "Jan 1, 2024",
    },
  ];

  const getRoleBadgeClass = (role: string) => {
    switch (role) {
      case "admin":
        return "bg-purple-100 text-purple-800";
      case "vendor":
        return "bg-blue-100 text-blue-800";
      case "customer":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "inactive":
        return "bg-gray-100 text-gray-800";
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
              User
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Role
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
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 flex-shrink-0">
                    <Image
                      src={user.avatar || "/placeholder.svg"}
                      alt={user.name}
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {user.name}
                    </div>
                    <div className="text-sm text-gray-500">{user.email}</div>
                  </div>
                </div>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <span
                  className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${getRoleBadgeClass(
                    user.role
                  )}`}
                >
                  {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                </span>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <span
                  className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusBadgeClass(
                    user.status
                  )}`}
                >
                  {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                </span>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <div className="text-sm text-gray-500">{user.joinDate}</div>
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                <div className="flex justify-end space-x-2">
                  <button className="text-blue-600 hover:text-blue-900">
                    <Edit className="h-4 w-4" />
                    <span className="sr-only">Edit</span>
                  </button>
                  {user.status === "active" && (
                    <button className="text-amber-600 hover:text-amber-900">
                      <UserX className="h-4 w-4" />
                      <span className="sr-only">Suspend</span>
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
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
