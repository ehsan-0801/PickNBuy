import Link from "next/link"
import { Clock, CheckCircle, Truck, Package, XCircle } from "lucide-react"

export default function RecentOrdersTable() {
  const orders = [
    {
      id: "ORD-12345",
      customer: "John Doe",
      date: "May 10, 2025",
      total: 249.97,
      status: "delivered",
      items: 3,
    },
    {
      id: "ORD-12344",
      customer: "Sarah Johnson",
      date: "May 10, 2025",
      total: 89.99,
      status: "shipped",
      items: 1,
    },
    {
      id: "ORD-12343",
      customer: "Michael Brown",
      date: "May 9, 2025",
      total: 129.99,
      status: "processing",
      items: 2,
    },
    {
      id: "ORD-12342",
      customer: "Emily Wilson",
      date: "May 9, 2025",
      total: 59.99,
      status: "pending",
      items: 1,
    },
  ]

  const getStatusIcon = (status) => {
    switch (status) {
      case "pending":
        return <Clock className="h-5 w-5 text-gray-500" />
      case "processing":
        return <Clock className="h-5 w-5 text-amber-500" />
      case "shipped":
        return <Truck className="h-5 w-5 text-blue-500" />
      case "delivered":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "cancelled":
        return <XCircle className="h-5 w-5 text-red-500" />
      default:
        return <Package className="h-5 w-5 text-gray-500" />
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case "pending":
        return "Pending"
      case "processing":
        return "Processing"
      case "shipped":
        return "Shipped"
      case "delivered":
        return "Delivered"
      case "cancelled":
        return "Cancelled"
      default:
        return "Unknown"
    }
  }

  const getStatusClass = (status) => {
    switch (status) {
      case "pending":
        return "bg-gray-100 text-gray-800"
      case "processing":
        return "bg-amber-100 text-amber-800"
      case "shipped":
        return "bg-blue-100 text-blue-800"
      case "delivered":
        return "bg-green-100 text-green-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Order ID
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Customer
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Date
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Total
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Status
            </th>
            <th scope="col" className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {orders.map((order) => (
            <tr key={order.id} className="hover:bg-gray-50">
              <td className="whitespace-nowrap px-6 py-4">
                <div className="text-sm font-medium text-gray-900">{order.id}</div>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <div className="text-sm text-gray-900">{order.customer}</div>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <div className="text-sm text-gray-500">{order.date}</div>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <div className="text-sm font-medium text-gray-900">${order.total.toFixed(2)}</div>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <div className="flex items-center">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusClass(
                      order.status,
                    )}`}
                  >
                    {getStatusIcon(order.status)}
                    <span className="ml-1">{getStatusText(order.status)}</span>
                  </span>
                </div>
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                <Link href={`/vendor/orders/${order.id}`} className="text-blue-600 hover:text-blue-900">
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
