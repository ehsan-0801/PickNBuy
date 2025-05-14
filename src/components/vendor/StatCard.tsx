import { DollarSign, ShoppingBag, Package, Clock, TrendingUp, TrendingDown } from "lucide-react"

interface StatCardProps {
  title: string
  value: string
  change: string
  isPositive: boolean
  icon: string
  color: string
}

export default function StatCard({ title, value, change, isPositive, icon, color }: StatCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "dollar":
        return <DollarSign className="h-6 w-6 text-white" />
      case "shopping-bag":
        return <ShoppingBag className="h-6 w-6 text-white" />
      case "package":
        return <Package className="h-6 w-6 text-white" />
      case "clock":
        return <Clock className="h-6 w-6 text-white" />
      default:
        return <DollarSign className="h-6 w-6 text-white" />
    }
  }

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-center">
        <div className={`mr-4 flex h-12 w-12 items-center justify-center rounded-lg ${color}`}>{getIcon()}</div>
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
        </div>
      </div>
      <div className="mt-4 flex items-center">
        {isPositive ? (
          <TrendingUp className="mr-1 h-4 w-4 text-green-500" />
        ) : (
          <TrendingDown className="mr-1 h-4 w-4 text-red-500" />
        )}
        <span className={`text-sm font-medium ${isPositive ? "text-green-500" : "text-red-500"}`}>{change}</span>
        <span className="ml-1 text-sm text-gray-500">from yesterday</span>
      </div>
    </div>
  )
}
