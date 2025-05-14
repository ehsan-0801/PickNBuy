"use client";

import { Edit, Trash2, Plus, ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function CategoryTable() {
  const [expandedCategories, setExpandedCategories] = useState<number[]>([]);

  const categories = [
    {
      id: 1,
      name: "Electronics",
      description: "Electronic devices and accessories",
      products: 245,
      subcategories: [
        {
          id: 11,
          name: "Smartphones",
          description: "Mobile phones and accessories",
          products: 78,
        },
        {
          id: 12,
          name: "Laptops",
          description: "Notebook computers and accessories",
          products: 56,
        },
        {
          id: 13,
          name: "Audio",
          description: "Headphones, speakers, and audio equipment",
          products: 42,
        },
      ],
    },
    {
      id: 2,
      name: "Fashion",
      description: "Clothing, shoes, and accessories",
      products: 189,
      subcategories: [
        {
          id: 21,
          name: "Men's Clothing",
          description: "Shirts, pants, and outerwear for men",
          products: 64,
        },
        {
          id: 22,
          name: "Women's Clothing",
          description: "Dresses, tops, and outerwear for women",
          products: 82,
        },
        {
          id: 23,
          name: "Accessories",
          description: "Bags, jewelry, and other accessories",
          products: 43,
        },
      ],
    },
    {
      id: 3,
      name: "Home & Kitchen",
      description: "Furniture, appliances, and kitchenware",
      products: 156,
      subcategories: [
        {
          id: 31,
          name: "Furniture",
          description: "Sofas, tables, and home furniture",
          products: 48,
        },
        {
          id: 32,
          name: "Kitchenware",
          description: "Cookware, utensils, and kitchen gadgets",
          products: 67,
        },
        {
          id: 33,
          name: "Home Decor",
          description: "Decorative items for the home",
          products: 41,
        },
      ],
    },
    {
      id: 4,
      name: "Sports & Outdoors",
      description: "Sporting goods and outdoor equipment",
      products: 112,
      subcategories: [
        {
          id: 41,
          name: "Fitness",
          description: "Exercise equipment and fitness accessories",
          products: 38,
        },
        {
          id: 42,
          name: "Outdoor Recreation",
          description: "Camping, hiking, and outdoor gear",
          products: 45,
        },
        {
          id: 43,
          name: "Sports Equipment",
          description: "Equipment for various sports",
          products: 29,
        },
      ],
    },
  ];

  const toggleCategory = (categoryId: number) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
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
              Category Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Description
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Products
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
          {categories.map((category) => (
            <>
              <tr key={category.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <button
                      onClick={() => toggleCategory(category.id)}
                      className="mr-2 text-gray-500 hover:text-gray-700"
                    >
                      {expandedCategories.includes(category.id) ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </button>
                    <div className="text-sm font-medium text-gray-900">
                      {category.name}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-500">
                    {category.description}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">
                    {category.products}
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                  <div className="flex justify-end space-x-2">
                    <button className="text-blue-600 hover:text-blue-900">
                      <Edit className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </button>
                    <button className="text-green-600 hover:text-green-900">
                      <Plus className="h-4 w-4" />
                      <span className="sr-only">Add Subcategory</span>
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </button>
                  </div>
                </td>
              </tr>
              {expandedCategories.includes(category.id) &&
                category.subcategories.map((subcategory) => (
                  <tr
                    key={subcategory.id}
                    className="bg-gray-50 hover:bg-gray-100"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="ml-6 text-sm font-medium text-gray-900">
                          {subcategory.name}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-500">
                        {subcategory.description}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {subcategory.products}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <button className="text-blue-600 hover:text-blue-900">
                          <Edit className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}
