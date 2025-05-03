"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    content:
      "PickAndBuy transformed my shopping experience. I found unique products at great prices, with easy ordering and fast delivery. The personalized recommendations are spot on!",
    author: "Sarah Johnson",
    role: "Customer",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 5,
  },
  {
    id: 2,
    content:
      "As a vendor, PickAndBuy has been a game-changer for my business. Their seller tools and analytics helped me optimize my store, and my sales have increased by 45% in just three months!",
    author: "Michael Chen",
    role: "Vendor - TechGadgetry",
    avatar: "https://i.pravatar.cc/150?img=8",
    rating: 5,
  },
  {
    id: 3,
    content:
      "The customer service here is exceptional. When I had an issue with an order, they resolved it immediately and even offered a discount on my next purchase. Highly recommend!",
    author: "Emma Rodriguez",
    role: "Customer",
    avatar: "https://i.pravatar.cc/150?img=9",
    rating: 4,
  },
  {
    id: 4,
    content:
      "I've been selling on various platforms for years, and PickAndBuy offers the best commission rates and seller support by far. Their instant payment system is a huge advantage.",
    author: "David Kim",
    role: "Vendor - FashionForward",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 5,
  },
  {
    id: 5,
    content:
      "The variety of products available is amazing. I can find everything from everyday essentials to unique gift items all in one place. It's become my go-to shopping destination.",
    author: "Olivia Williams",
    role: "Customer",
    avatar: "https://i.pravatar.cc/150?img=20",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1); // Default to mobile view

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(
        window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1
      );
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + slidesToShow >= testimonials.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(0, testimonials.length - slidesToShow)
        : prevIndex - 1
    );
  };

  // Determine which testimonials to show
  const displayedTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + slidesToShow
  );

  return (
    <section className="py-20 bg-white dark:bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block rounded-full bg-brand-50 dark:bg-brand-900/20 px-3 py-1 text-sm font-medium text-brand-700 dark:text-brand-300 mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Community Says
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Read authentic reviews from our buyers and sellers about their
            experiences on our platform.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-6 z-10">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white dark:bg-black shadow-lg hover:bg-gray-100 dark:hover:bg-black/60 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
          </div>

          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-6 z-10">
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white dark:bg-black shadow-lg hover:bg-gray-100 dark:hover:bg-black/60 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-6">
            {displayedTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white dark:bg-black rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 h-full flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="text-brand-500 mb-4">
                    <Quote size={32} />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    {testimonial.content}
                  </p>
                </div>

                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="font-medium">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-4 w-4 ${
                            i < testimonial.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300 dark:text-gray-600"
                          }`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(testimonials.length / slidesToShow) }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * slidesToShow)}
                className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${
                  currentIndex === index * slidesToShow
                    ? "bg-brand-500"
                    : "bg-gray-300 dark:bg-black/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
