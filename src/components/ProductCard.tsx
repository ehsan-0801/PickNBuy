import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { id, name, price, image, category, rating } = product;

  return (
    <div className="group rounded-lg border border-border overflow-hidden bg-card hover:shadow-md transition-shadow duration-300">
      <Link href={`/products/${id}`} className="block relative">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-0 left-0 bg-primary text-primary-foreground text-xs px-2 py-1">
            {category}
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-medium text-card-foreground line-clamp-2 h-12">
            {name}
          </h3>

          <div className="flex items-center mt-2">
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="ml-1 text-sm">{rating}</span>
            </div>
          </div>

          <div className="flex justify-between items-center mt-3">
            <p className="font-bold text-lg">${price.toFixed(2)}</p>
            <button
              className="rounded-full bg-primary p-2 text-primary-foreground hover:bg-primary/90 transition-colors"
              aria-label="Add to cart"
            >
              <ShoppingCart className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
