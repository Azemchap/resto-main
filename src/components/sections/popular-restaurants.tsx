"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const restaurants = [
  {
    id: 1,
    name: "Bind Balorant",
    rating: 5.0,
    reviews: "7.6K+",
    location: "Jakarta, Indonesia",
    image: "/assets/images/thumbnails/resto-1.png",
  },
  {
    id: 2,
    name: "Green Garden",
    rating: 4.8,
    reviews: "5.2K+",
    location: "Bandung, Indonesia",
    image: "/assets/images/thumbnails/resto-2.png",
  },
  {
    id: 3,
    name: "Sundanese Delight",
    rating: 4.9,
    reviews: "6.8K+",
    location: "Sunda, Indonesia",
    image: "/assets/images/thumbnails/resto-3.png",
  },
];

export function PopularRestaurants() {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <section className="flex justify-center px-4">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[85px] w-full max-w-[1320px] my-[60px]">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-[367px]"
        >
          <div className="flex flex-col gap-1.5">
            <span className="text-base leading-6 font-semibold text-secondary uppercase">
              Top 3 Featured Restaurant
            </span>
            <h2 className="w-full text-[28px] leading-[42px] font-semibold">
              Most Popular Restaurants
            </h2>
          </div>
          <p className="mt-5 w-full max-w-[360px] text-base leading-6 text-muted">
            The best restaurant in our opinion is how much customers like it in
            terms of place, price, comfort and of course the taste of the food
            itself.
          </p>
          <Button asChild className="mt-14 w-full lg:w-[238px]">
            <Link href="/restaurants">
              View All Restaurant
              <Image
                src="/assets/images/icons/arrow_right.svg"
                alt=""
                width={24}
                height={24}
              />
            </Link>
          </Button>
        </motion.div>

        <div className="flex gap-5 overflow-x-auto lg:overflow-visible w-full lg:w-auto pb-4 lg:pb-0">
          {restaurants.map((restaurant, index) => (
            <motion.div
              key={restaurant.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setActiveCard(index)}
              className={`group relative rounded-3xl overflow-hidden shrink-0 transition-all duration-300 cursor-pointer ${
                activeCard === index
                  ? "h-[475px] w-[400px]"
                  : "h-[475px] w-[214px]"
              }`}
            >
              <Image
                src={restaurant.image}
                alt={restaurant.name}
                fill
                className="object-cover"
              />

              <AnimatePresence>
                {activeCard === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-6 bottom-6 right-6 bg-white rounded-3xl p-6 flex gap-2 items-center"
                  >
                    <div className="flex flex-col gap-1 w-[260px]">
                      <div className="flex items-center">
                        <Star className="h-[18px] w-[18px] fill-star text-star mr-1" />
                        <p className="text-base leading-6 font-semibold text-star mr-1">
                          {restaurant.rating}
                        </p>
                        <p className="text-base leading-6 text-muted">
                          ({restaurant.reviews})
                        </p>
                      </div>
                      <h3 className="text-lg leading-[27px] font-semibold">
                        {restaurant.name}
                      </h3>
                      <div className="flex gap-1.5 items-center">
                        <MapPin className="h-6 w-6 text-muted" />
                        <p className="text-base leading-6 text-muted">
                          {restaurant.location}
                        </p>
                      </div>
                    </div>
                    <Link
                      href={`/restaurant/${restaurant.id}`}
                      className="flex items-center justify-center h-9 w-9 rounded-xl bg-primary shrink-0 transition-all duration-300 hover:shadow-primary"
                    >
                      <Image
                        src="/assets/images/icons/sign_right.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
