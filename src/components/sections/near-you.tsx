"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Star, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const locations = [
  "Jakarta, Indonesia",
  "Bandung, Indonesia",
  "Bali, Indonesia",
  "Jember, Indonesia",
];

const restaurants = [
  {
    id: 1,
    name: "Batavia Restaurant",
    rating: 5.0,
    reviews: "6.6K+",
    priceRange: "IDR 29.000 - IDR 259.999",
    image: "/assets/images/thumbnails/near-1.png",
  },
  {
    id: 2,
    name: "Split Ascent Restaurant",
    rating: 5.0,
    reviews: "3.6K+",
    priceRange: "IDR 49.999 - IDR 560.000",
    image: "/assets/images/thumbnails/near-2.png",
  },
  {
    id: 3,
    name: "Daza Fracture Restaurant",
    rating: 5.0,
    reviews: "11K+",
    priceRange: "IDR 29.999 - IDR 560.000",
    image: "/assets/images/thumbnails/near-3.png",
  },
];

export function NearYou() {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  return (
    <section className="flex justify-center px-4">
      <div className="flex flex-col gap-[34px] w-full max-w-[1321px] my-[60px]">
        <div className="flex flex-col md:flex-row w-full items-start md:items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-1.5"
          >
            <span className="text-base leading-6 font-semibold text-secondary uppercase">
              Restaurant Based by City
            </span>
            <h2 className="text-[28px] leading-[42px] font-semibold">
              Restaurant Near You
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <DropdownMenu>
              <DropdownMenuTrigger className="flex gap-1.5 px-6 py-5 items-center h-[64px] w-full md:w-[252px] rounded-xl bg-input hover:bg-input/80 transition-colors">
                <MapPin className="h-6 w-6 text-muted" />
                <p className="text-base leading-6 font-medium text-muted flex-1 text-left">
                  {selectedLocation}
                </p>
                <ChevronDown className="h-6 w-6 text-muted" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[252px]">
                {locations.map((location) => (
                  <DropdownMenuItem
                    key={location}
                    onClick={() => setSelectedLocation(location)}
                    className="flex gap-1.5 px-6 py-5 h-[64px]"
                  >
                    <MapPin className="h-6 w-6 text-muted" />
                    <p className="text-base leading-6 font-medium text-muted">
                      {location}
                    </p>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {restaurants.map((restaurant, index) => (
            <motion.div
              key={restaurant.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative h-[415px] w-full rounded-3xl overflow-hidden group"
            >
              <Image
                src={restaurant.image}
                alt={restaurant.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute left-6 bottom-[33px] right-6 bg-white rounded-3xl p-6 flex gap-[35px] items-center">
                <div className="flex flex-col gap-1 w-full">
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
                  <p className="text-lg font-semibold leading-6 text-muted">
                    {restaurant.priceRange}
                  </p>
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
              </div>
            </motion.div>
          ))}
        </div>

        <Button asChild className="mt-[22px] mx-auto w-full md:w-[238px]">
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
      </div>
    </section>
  );
}
