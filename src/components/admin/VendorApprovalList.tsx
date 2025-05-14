import Image from "next/image";

export default function VendorApprovalList() {
  const pendingVendors = [
    {
      id: 1,
      name: "GadgetWorld",
      email: "contact@gadgetworld.com",
      category: "Electronics",
      date: "May 9, 2025",
      logo: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "FashionHub",
      email: "info@fashionhub.com",
      category: "Fashion",
      date: "May 8, 2025",
      logo: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "HomeDecor",
      email: "support@homedecor.com",
      category: "Home & Kitchen",
      date: "May 7, 2025",
      logo: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      name: "SportsGear",
      email: "hello@sportsgear.com",
      category: "Sports & Outdoors",
      date: "May 6, 2025",
      logo: "/placeholder.svg?height=40&width=40",
    },
  ];

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
              Applied On
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
          {pendingVendors.map((vendor) => (
            <tr key={vendor.id} className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 flex-shrink-0">
                    <Image
                      src={vendor.logo || "/placeholder.svg"}
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
                <div className="text-sm text-gray-500">{vendor.date}</div>
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                <button className="mr-2 rounded-md bg-green-600 px-3 py-1 text-xs font-medium text-white hover:bg-green-700">
                  Approve
                </button>
                <button className="rounded-md bg-red-600 px-3 py-1 text-xs font-medium text-white hover:bg-red-700">
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
