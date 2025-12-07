"use client";

import { motion } from "framer-motion";
import { RestaurantCard } from "@/components/restaurant-card";

const drinkRestaurants = [
  {
    id: 7,
    name: "Brew Haven",
    rating: 4.9,
    reviews: "4.2K+",
    priceRange: "IDR 25.000 - IDR 150.000",
    location: "Jakarta, Indonesia",
    image: "/assets/images/thumbnails/resto-1.png",
  },
  {
    id: 8,
    name: "The Coffee Lab",
    rating: 4.8,
    reviews: "3.8K+",
    priceRange: "IDR 30.000 - IDR 120.000",
    location: "Bandung, Indonesia",
    image: "/assets/images/thumbnails/resto-2.png",
  },
  {
    id: 9,
    name: "Tropical Sips",
    rating: 4.7,
    reviews: "2.9K+",
    priceRange: "IDR 20.000 - IDR 100.000",
    location: "Bali, Indonesia",
    image: "/assets/images/thumbnails/resto-3.png",
  },
  {
    id: 10,
    name: "Tea Garden Lounge",
    rating: 4.9,
    reviews: "5.1K+",
    priceRange: "IDR 35.000 - IDR 180.000",
    location: "Sunda, Indonesia",
    image: "/assets/images/thumbnails/near-1.png",
  },
  {
    id: 11,
    name: "Juice Bar Express",
    rating: 4.6,
    reviews: "3.2K+",
    priceRange: "IDR 15.000 - IDR 80.000",
    location: "Jakarta, Indonesia",
    image: "/assets/images/thumbnails/near-2.png",
  },
  {
    id: 12,
    name: "Smoothie Paradise",
    rating: 4.8,
    reviews: "4.5K+",
    priceRange: "IDR 28.000 - IDR 95.000",
    location: "Jember, Indonesia",
    image: "/assets/images/thumbnails/near-3.png",
  },
];

export default function DrinksPage() {
  return (
    <main className="px-4 md:px-[60px] py-[60px]">
      <div className="max-w-[1320px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-1.5 mb-[60px]"
        >
          <span className="text-base leading-6 font-semibold text-secondary uppercase">
            Drinks Category
          </span>
          <h1 className="text-[42px] leading-[56px] font-semibold">
            Premium Beverage Spots
          </h1>
          <p className="text-lg text-muted max-w-2xl mt-2">
            Quench your thirst at the best drink establishments. From artisanal coffee to refreshing juices, explore a world of flavors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {drinkRestaurants.map((restaurant, index) => (
            <RestaurantCard
              key={restaurant.id}
              {...restaurant}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
