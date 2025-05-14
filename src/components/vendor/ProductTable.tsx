import Link from "next/link"
import Image from "next/image"
import { Edit, Trash2, Eye, MoreHorizontal } from "lucide-react"

export default function ProductTable() {
  const products = [
    {
      id: 1,
      name: "Wireless Noise-Cancelling Headphones",
      price: 149.99,
      stock: 24,
      category: "Electronics",
      status: "active",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 89.99,
      stock: 18,
      category: "Electronics",
      status: "active",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Portable Bluetooth Speaker",
      price: 59.99,
      stock: 32,
      category: "Electronics",
      status: "active",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      name: "Wireless Charging Pad",
      price: 29.99,
      stock: 45,
      category: "Electronics",
      status: "active",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 5,
      name: "Smart LED Light Bulb",
      price: 19.99,
      stock: 0,
      category: "Electronics",
      status: "out_of_stock",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 6,
      name: "Bluetooth Earbuds",
      price: 79.99,
      stock: 12,
      category: "Electronics",
      status: "active",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 7,
      name: "Smartphone Gimbal",
      price: 119.99,
      stock: 0,
      category: "Electronics",
      status: "draft",
      image: "/placeholder.svg?height=40&width=40",
    },
  ]

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "draft":
        return "bg-gray-100 text-gray-800"
      case "out_of_stock":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case "active":
        return "Active"
      case "draft":
        return "Draft"
      case "out_of_stock":
        return "Out of Stock"
      default:
        return "Unknown"
    }
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Product
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Category
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Price
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Stock
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
          {products.map((product) => (
            <tr key={product.id} className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{product.name}</div>
                    <div className="text-xs text-gray-500">ID: {product.id}</div>
                  </div>
                </div>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <div className="text-sm text-gray-900">{product.category}</div>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <div className="text-sm font-medium text-gray-900">${product.price.toFixed(2)}</div>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <div className="text-sm text-gray-900">{product.stock}</div>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <span
                  className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusBadgeClass(
                    product.status,
                  )}`}
                >
                  {getStatusText(product.status)}
                </span>
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                <div className="flex justify-end space-x-2">
                  <Link href={`/vendor/products/${product.id}`} className="text-blue-600 hover:text-blue-900">
                    <Eye className="h-4 w-4" />
                    <span className="sr-only">View</span>
                  </Link>
                  <button className="text-blue-600 hover:text-blue-900">
                    <Edit className="h-4 w-4" />
                    <span className="sr-only">Edit</span>
                  </button>
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
  )
}
