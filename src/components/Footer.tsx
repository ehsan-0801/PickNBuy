import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-black pt-16 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Company Information */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                Pick<span className="text-brand-600">And</span>Buy
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              The ultimate multi-vendor marketplace connecting buyers with trusted sellers. Shop from thousands of products across all categories and discover great deals every day.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/category/electronics" className="text-gray-600 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400">
                  Electronics
                </Link>
              </li>
              <li>
                <Link href="/category/fashion" className="text-gray-600 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400">
                  Fashion
                </Link>
              </li>
              <li>
                <Link href="/category/home-kitchen" className="text-gray-600 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400">
                  Home & Kitchen
                </Link>
              </li>
              <li>
                <Link href="/category/sports-outdoors" className="text-gray-600 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400">
                  Sports & Outdoors
                </Link>
              </li>
              <li>
                <Link href="/category/beauty" className="text-gray-600 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400">
                  Beauty & Personal Care
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-brand-600 dark:text-brand-400 font-medium">
                  View All Categories
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help-center" className="text-gray-600 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="text-gray-600 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400">
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-600 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-600 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Vendor Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">For Vendors</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/vendor/register" className="text-gray-600 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400">
                  Become a Seller
                </Link>
              </li>
              <li>
                <Link href="/vendor/login" className="text-gray-600 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400">
                  Seller Login
                </Link>
              </li>
              <li>
                <Link href="/vendor/dashboard" className="text-gray-600 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400">
                  Seller Dashboard
                </Link>
              </li>
              <li>
                <Link href="/vendor/payouts" className="text-gray-600 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400">
                  Payouts
                </Link>
              </li>
              <li>
                <Link href="/vendor/policies" className="text-gray-600 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400">
                  Seller Policies
                </Link>
              </li>
              <li>
                <Link href="/vendor/help" className="text-gray-600 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400">
                  Seller Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap gap-x-8 gap-y-4 mb-6 md:mb-0">
              <Link href="/about" className="text-gray-600 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400">
                About Us
              </Link>
              <Link href="/privacy-policy" className="text-gray-600 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400">
                Terms & Conditions
              </Link>
              <Link href="/careers" className="text-gray-600 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400">
                Careers
              </Link>
              <Link href="/blogs" className="text-gray-600 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400">
                Blog
              </Link>
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              <a href="mailto:info@pickandbuy.com" className="flex items-center text-gray-600 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400">
                <Mail size={16} className="mr-2" />
                info@pickandbuy.com
              </a>
              <a href="tel:+1234567890" className="flex items-center text-gray-600 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400">
                <Phone size={16} className="mr-2" />
                +1 (234) 567-890
              </a>
            </div>
          </div>
          
          <div className="mt-8 py-6 border-t border-gray-200 dark:border-gray-800 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} PickAndBuy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
