"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Info } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";

const restaurants = [
  {
    id: 1,
    name: "Padang Restaurant",
    rating: 5.0,
    reviews: "5.2K+",
    priceRange: "IDR 49.999 - IDR 560.000",
    location: "Padang, Indonesia",
    image: "/assets/images/thumbnails/ads-1.png",
  },
  {
    id: 2,
    name: "Jember Restaurant",
    rating: 5.0,
    reviews: "5.2K+",
    priceRange: "IDR 39.999 - IDR 460.000",
    location: "Jember, Indonesia",
    image: "/assets/images/thumbnails/ads-2.png",
  },
];

export function HeroCarousel() {
  return (
    <section className="relative flex justify-center">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        className="w-full max-w-[1320px] pl-4 md:pl-[140px] pr-4 md:pr-[60px]"
      >
        <CarouselContent className="py-8 md:py-[60px]">
          {restaurants.map((restaurant, index) => (
            <CarouselItem key={restaurant.id} className="basis-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative w-full h-[300px] md:h-[564px] rounded-3xl overflow-hidden"
              >
                <Image
                  src={restaurant.image}
                  alt={restaurant.name}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />

                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute hidden md:flex flex-col gap-1 -left-20 top-[133px] h-[297px] w-[390px] rounded-3xl bg-white pl-6 py-6 pr-[140px] opacity-0 group-hover:opacity-100"
                >
                  <div className="flex items-center h-[27px] w-[210px]">
                    <div className="flex gap-1.5 pr-1">
                      {[...Array(5)].map((_, i) => (
                        <Image
                          key={i}
                          src="/assets/images/icons/star.svg"
                          alt="star"
                          width={18}
                          height={18}
                        />
                      ))}
                    </div>
                    <div className="flex gap-1 items-center ml-2">
                      <p className="text-lg leading-[27px] font-semibold text-star">
                        {restaurant.rating}
                      </p>
                      <p className="text-base text-muted">({restaurant.reviews})</p>
                    </div>
                  </div>
                  <h2 className="text-[22px] font-semibold leading-[33px]">
                    {restaurant.name}
                  </h2>
                  <p className="text-lg font-semibold leading-[27px] text-muted">
                    {restaurant.priceRange}
                  </p>
                  <div className="flex gap-1.5 items-center">
                    <MapPin className="h-6 w-6 text-muted" />
                    <p className="text-base leading-6 text-muted">
                      {restaurant.location}
                    </p>
                  </div>
                  <div className="mt-[30px] flex flex-col gap-3">
                    <Button asChild className="w-[226px]">
                      <Link href="/reservation">
                        Make Reservation
                        <Image
                          src="/assets/images/icons/arrow_right.svg"
                          alt=""
                          width={24}
                          height={24}
                        />
                      </Link>
                    </Button>
                    <div className="flex gap-1.5 items-center">
                      <Info className="h-6 w-6 text-muted" />
                      <p className="text-base leading-6 text-muted">
                        No extra cost
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
