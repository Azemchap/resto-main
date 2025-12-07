"use client";

import { motion } from "framer-motion";
import { RestaurantCard } from "@/components/restaurant-card";

const allRestaurants = [
  {
    id: 1,
    name: "Bind Balorant",
    rating: 5.0,
    reviews: "7.6K+",
    priceRange: "IDR 50.000 - IDR 500.000",
    location: "Jakarta, Indonesia",
    image: "/assets/images/thumbnails/resto-1.png",
  },
  {
    id: 2,
    name: "Green Garden",
    rating: 4.8,
    reviews: "5.2K+",
    priceRange: "IDR 60.000 - IDR 450.000",
    location: "Bandung, Indonesia",
    image: "/assets/images/thumbnails/resto-2.png",
  },
  {
    id: 3,
    name: "Sundanese Delight",
    rating: 4.9,
    reviews: "6.8K+",
    priceRange: "IDR 35.000 - IDR 300.000",
    location: "Sunda, Indonesia",
    image: "/assets/images/thumbnails/resto-3.png",
  },
  {
    id: 4,
    name: "Batavia Restaurant",
    rating: 5.0,
    reviews: "6.6K+",
    priceRange: "IDR 29.000 - IDR 259.999",
    location: "Jakarta, Indonesia",
    image: "/assets/images/thumbnails/near-1.png",
  },
  {
    id: 5,
    name: "Split Ascent Restaurant",
    rating: 5.0,
    reviews: "3.6K+",
    priceRange: "IDR 49.999 - IDR 560.000",
    location: "Jakarta, Indonesia",
    image: "/assets/images/thumbnails/near-2.png",
  },
  {
    id: 6,
    name: "Daza Fracture Restaurant",
    rating: 5.0,
    reviews: "11K+",
    priceRange: "IDR 29.999 - IDR 560.000",
    location: "Jakarta, Indonesia",
    image: "/assets/images/thumbnails/near-3.png",
  },
  {
    id: 7,
    name: "Padang Restaurant",
    rating: 5.0,
    reviews: "5.2K+",
    priceRange: "IDR 49.999 - IDR 560.000",
    location: "Padang, Indonesia",
    image: "/assets/images/thumbnails/ads-1.png",
  },
  {
    id: 8,
    name: "Jember Restaurant",
    rating: 5.0,
    reviews: "5.2K+",
    priceRange: "IDR 39.999 - IDR 460.000",
    location: "Jember, Indonesia",
    image: "/assets/images/thumbnails/ads-2.png",
  },
];

export default function RestaurantsPage() {
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
            All Restaurants
          </span>
          <h1 className="text-[42px] leading-[56px] font-semibold">
            Discover Amazing Restaurants
          </h1>
          <p className="text-lg text-muted max-w-2xl mt-2">
            Browse through our extensive collection of partner restaurants across Indonesia. Find the perfect dining spot for any occasion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {allRestaurants.map((restaurant, index) => (
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
