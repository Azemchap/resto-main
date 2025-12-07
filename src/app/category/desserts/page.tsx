"use client";

import { motion } from "framer-motion";
import { RestaurantCard } from "@/components/restaurant-card";

const dessertRestaurants = [
  {
    id: 13,
    name: "Sweet Escape",
    rating: 5.0,
    reviews: "6.3K+",
    priceRange: "IDR 20.000 - IDR 120.000",
    location: "Jakarta, Indonesia",
    image: "/assets/images/thumbnails/resto-1.png",
  },
  {
    id: 14,
    name: "Cake Heaven",
    rating: 4.9,
    reviews: "5.7K+",
    priceRange: "IDR 35.000 - IDR 150.000",
    location: "Bandung, Indonesia",
    image: "/assets/images/thumbnails/resto-2.png",
  },
  {
    id: 15,
    name: "Ice Cream Palace",
    rating: 4.8,
    reviews: "7.2K+",
    priceRange: "IDR 15.000 - IDR 85.000",
    location: "Bali, Indonesia",
    image: "/assets/images/thumbnails/resto-3.png",
  },
  {
    id: 16,
    name: "Pastry Corner",
    rating: 4.9,
    reviews: "4.9K+",
    priceRange: "IDR 25.000 - IDR 130.000",
    location: "Sunda, Indonesia",
    image: "/assets/images/thumbnails/near-1.png",
  },
  {
    id: 17,
    name: "Chocolate Bliss",
    rating: 5.0,
    reviews: "8.1K+",
    priceRange: "IDR 30.000 - IDR 180.000",
    location: "Jakarta, Indonesia",
    image: "/assets/images/thumbnails/near-2.png",
  },
  {
    id: 18,
    name: "Macaron Boutique",
    rating: 4.7,
    reviews: "3.4K+",
    priceRange: "IDR 40.000 - IDR 200.000",
    location: "Padang, Indonesia",
    image: "/assets/images/thumbnails/near-3.png",
  },
];

export default function DessertsPage() {
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
            Desserts Category
          </span>
          <h1 className="text-[42px] leading-[56px] font-semibold">
            Delightful Dessert Destinations
          </h1>
          <p className="text-lg text-muted max-w-2xl mt-2">
            Satisfy your sweet tooth with our handpicked selection of the finest dessert spots. Indulge in cakes, pastries, ice cream, and more.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {dessertRestaurants.map((restaurant, index) => (
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
