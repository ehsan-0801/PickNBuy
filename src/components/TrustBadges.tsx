import React from "react";
import { Shield, Truck, RotateCcw, CreditCard, Lock } from "lucide-react";

const TrustBadges = () => {
  return (
    <section className="py-14 bg-white dark:bg-black border-t border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">Shop With Confidence</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-brand-50 dark:bg-brand-900/20 flex items-center justify-center text-brand-500 mb-3">
              <Shield size={24} />
            </div>
            <h3 className="text-lg font-medium mb-2">100% Secure</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              All transactions are protected and encrypted
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-brand-50 dark:bg-brand-900/20 flex items-center justify-center text-brand-500 mb-3">
              <Truck size={24} />
            </div>
            <h3 className="text-lg font-medium mb-2">Fast Shipping</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Free delivery on orders over $50
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-brand-50 dark:bg-brand-900/20 flex items-center justify-center text-brand-500 mb-3">
              <RotateCcw size={24} />
            </div>
            <h3 className="text-lg font-medium mb-2">Easy Returns</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              30-day money-back guarantee
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-brand-50 dark:bg-brand-900/20 flex items-center justify-center text-brand-500 mb-3">
              <CreditCard size={24} />
            </div>
            <h3 className="text-lg font-medium mb-2">Secure Payment</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Multiple payment methods accepted
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-brand-50 dark:bg-brand-900/20 flex items-center justify-center text-brand-500 mb-3">
              <Lock size={24} />
            </div>
            <h3 className="text-lg font-medium mb-2">Buyer Protection</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              We've got you covered from click to delivery
            </p>
          </div>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center items-center gap-6 md:gap-10">
          <img src="https://cdn.cdnlogo.com/logos/v/69/visa.svg" alt="Visa" className="h-8 md:h-10 opacity-60 hover:opacity-100 transition-opacity" />
          <img src="https://cdn.cdnlogo.com/logos/m/33/mastercard.svg" alt="Mastercard" className="h-8 md:h-10 opacity-60 hover:opacity-100 transition-opacity" />
          <img src="https://cdn.cdnlogo.com/logos/p/20/paypal.svg" alt="PayPal" className="h-8 md:h-10 opacity-60 hover:opacity-100 transition-opacity" />
          <img src="https://cdn.cdnlogo.com/logos/a/3/apple-pay.svg" alt="Apple Pay" className="h-8 md:h-10 opacity-60 hover:opacity-100 transition-opacity" />
          <img src="https://cdn.cdnlogo.com/logos/g/35/google-pay.svg" alt="Google Pay" className="h-8 md:h-10 opacity-60 hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
