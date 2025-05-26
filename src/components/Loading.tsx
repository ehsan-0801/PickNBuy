"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const PickBuyLoader = () => {
  const [visibleLetters, setVisibleLetters] = useState(0);
  const letters = ["P", "i", "c", "k", "&", "B", "u", "y"];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLetters((prev) => {
        if (prev >= letters.length) {
          return 1; // Reset to show only first letter
        }
        return prev + 1;
      });
    }, 400);

    return () => clearInterval(interval);
  }, [letters.length]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex items-start animate-pulse">
        <Image
          src="/pickandbuy.png"
          alt="PickAndBuy Logo"
          width={500}
          height={500}
          className="h-72 w-72"
        />
      </div>
    </div>
  );
};

export default PickBuyLoader;
