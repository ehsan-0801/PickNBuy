"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart, ShoppingCart, Star } from "lucide-react"

interface ProductCardProps {
  id: string
  name: string
  price: number
  originalPrice?: number
  rating: number
  reviewCount: number
  imageSrc: string
  vendor: string
  isNew?: boolean
}

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  rating,
  reviewCount,
  imageSrc,
  vendor,
  isNew = false,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const discountPercentage = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0

  return (
    <div
      className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden">
        <Link href={`/customer/products/${id}`}>
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {isNew && (
          <div className="absolute left-2 top-2 rounded-full bg-blue-600 px-2 py-1 text-xs font-medium text-white">
            New
          </div>
        )}

        {originalPrice && (
          <div className="absolute right-2 top-2 rounded-full bg-red-600 px-2 py-1 text-xs font-medium text-white">
            -{discountPercentage}%
          </div>
        )}

        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute right-2 top-10 rounded-full bg-white p-1.5 text-gray-400 shadow-md transition-colors hover:text-red-500"
        >
          <Heart className={`h-4 w-4 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
        </button>

        <div
          className={`absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-2 transition-transform duration-300 ${
            isHovered ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <button className="flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="p-4">
        <Link href={`/customer/products/${id}`} className="hover:text-blue-600">
          <h3 className="text-sm font-medium text-gray-900 line-clamp-2">{name}</h3>
        </Link>
        <p className="mt-1 text-xs text-gray-500">Sold by {vendor}</p>
        <div className="mt-2 flex items-center">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
              />
            ))}
          </div>
          <span className="ml-1 text-xs text-gray-500">({reviewCount})</span>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-base font-bold text-gray-900">${price.toFixed(2)}</span>
          {originalPrice && <span className="text-sm text-gray-500 line-through">${originalPrice.toFixed(2)}</span>}
        </div>
      </div>
    </div>
  )
}
