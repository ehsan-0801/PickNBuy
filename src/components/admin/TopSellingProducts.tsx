import Image from "next/image";

export default function TopSellingProducts() {
  const products = [
    {
      id: 1,
      name: "Wireless Noise-Cancelling Headphones",
      sales: 156,
      revenue: 23400,
      image: "/placeholder.svg?height=40&width=40",
      vendor: "TechElite",
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      sales: 142,
      revenue: 12780,
      image: "/placeholder.svg?height=40&width=40",
      vendor: "FitGear",
    },
    {
      id: 3,
      name: "Professional Kitchen Knife Set",
      sales: 98,
      revenue: 7840,
      image: "/placeholder.svg?height=40&width=40",
      vendor: "ChefChoice",
    },
    {
      id: 4,
      name: "Organic Cotton T-Shirt",
      sales: 87,
      revenue: 2610,
      image: "/placeholder.svg?height=40&width=40",
      vendor: "EcoFashion",
    },
  ];

  return (
    <div className="space-y-4">
      {products.map((product) => (
        <div key={product.id} className="flex items-center space-x-4">
          <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={40}
              height={40}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              {product.name}
            </p>
            <p className="text-xs text-gray-500">Vendor: {product.vendor}</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-gray-900">
              {product.sales} sold
            </p>
            <p className="text-xs text-gray-500">
              ${(product.revenue / 100).toFixed(2)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
