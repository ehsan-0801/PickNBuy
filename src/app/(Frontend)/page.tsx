import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import TrendingProducts from "@/components/TrendingProducts";
import FlashSale from "@/components/FlashSale";
import RecommendedProducts from "@/components/RecommendedProducts";
import TopVendors from "@/components/TopVendors";
import VendorBenefits from "@/components/VendorBenefits";
import Testimonials from "@/components/Testimonials";
import TrustBadges from "@/components/TrustBadges";
import Newsletter from "@/components/Newsletter";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <TrendingProducts />
      <FlashSale />
      <RecommendedProducts />
      <TopVendors />
      <VendorBenefits />
      <Testimonials />
      <TrustBadges />
      <Newsletter />
      <Chatbot />
    </>
  );
} 