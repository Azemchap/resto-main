"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Star } from "lucide-react";

interface RestaurantCardProps {
  id: number;
  name: string;
  rating: number;
  reviews: string;
  priceRange?: string;
  location: string;
  image: string;
  delay?: number;
}

export function RestaurantCard({
  id,
  name,
  rating,
  reviews,
  priceRange,
  location,
  image,
  delay = 0,
}: RestaurantCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative h-[415px] w-full rounded-3xl overflow-hidden group cursor-pointer"
    >
      <Link href={`/restaurant/${id}`}>
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute left-6 bottom-6 right-6 bg-white rounded-3xl p-6 flex gap-4 items-center">
          <div className="flex flex-col gap-1 flex-1">
            <div className="flex items-center">
              <Star className="h-[18px] w-[18px] fill-star text-star mr-1" />
              <p className="text-base leading-6 font-semibold text-star mr-1">
                {rating}
              </p>
              <p className="text-base leading-6 text-muted">({reviews})</p>
            </div>
            <h3 className="text-lg leading-[27px] font-semibold">{name}</h3>
            {priceRange && (
              <p className="text-base font-semibold leading-6 text-muted">
                {priceRange}
              </p>
            )}
            <div className="flex gap-1.5 items-center">
              <MapPin className="h-5 w-5 text-muted" />
              <p className="text-sm leading-6 text-muted">{location}</p>
            </div>
          </div>
          <div className="flex items-center justify-center h-9 w-9 rounded-xl bg-primary shrink-0 transition-all duration-300 group-hover:shadow-primary">
            <Image
              src="/assets/images/icons/sign_right.svg"
              alt=""
              width={20}
              height={20}
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
