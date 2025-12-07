"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Star, Clock, DollarSign, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function RestaurantDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  // Mock data - in a real app, this would be fetched based on the ID
  const restaurant = {
    id: id,
    name: "Bind Balorant",
    rating: 5.0,
    reviews: "7.6K+",
    priceRange: "IDR 50.000 - IDR 500.000",
    location: "Jakarta, Indonesia",
    address: "Jl. Sudirman No. 123, Jakarta Pusat",
    phone: "+62 21 1234 5678",
    website: "www.bindbalorant.com",
    hours: "10:00 AM - 10:00 PM",
    image: "/assets/images/thumbnails/resto-1.png",
    description:
      "Experience fine dining at its best with our carefully curated menu featuring both traditional Indonesian cuisine and international favorites. Our expert chefs use only the finest ingredients to create unforgettable dishes.",
    features: [
      "Air Conditioned",
      "WiFi Available",
      "Parking Space",
      "Live Music",
      "Outdoor Seating",
      "Private Dining",
    ],
  };

  return (
    <main className="px-4 md:px-[60px] py-[60px]">
      <div className="max-w-[1320px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Hero Image */}
          <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden">
            <Image
              src={restaurant.image}
              alt={restaurant.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Restaurant Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-6 w-6 fill-star text-star" />
                  <span className="text-xl font-semibold text-star">
                    {restaurant.rating}
                  </span>
                  <span className="text-muted">({restaurant.reviews} reviews)</span>
                </div>
                <h1 className="text-[42px] leading-[56px] font-semibold">
                  {restaurant.name}
                </h1>
              </div>

              <p className="text-lg text-muted leading-relaxed">
                {restaurant.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-secondary" />
                  <div>
                    <p className="text-sm text-muted">Location</p>
                    <p className="font-medium">{restaurant.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-secondary" />
                  <div>
                    <p className="text-sm text-muted">Opening Hours</p>
                    <p className="font-medium">{restaurant.hours}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign className="h-6 w-6 text-secondary" />
                  <div>
                    <p className="text-sm text-muted">Price Range</p>
                    <p className="font-medium">{restaurant.priceRange}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-6 w-6 text-secondary" />
                  <div>
                    <p className="text-sm text-muted">Phone</p>
                    <p className="font-medium">{restaurant.phone}</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-[28px] leading-[42px] font-semibold mb-4">
                  Features & Amenities
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {restaurant.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-3 bg-primary/10 rounded-xl"
                    >
                      <div className="h-2 w-2 rounded-full bg-primary shrink-0" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Reservation Card */}
            <div className="lg:col-span-1">
              <Card className="p-8 sticky top-8">
                <div className="space-y-6">
                  <h3 className="text-[22px] leading-[33px] font-semibold">
                    Make a Reservation
                  </h3>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Date</label>
                      <div className="flex gap-2.5 py-4 px-7 bg-input rounded-xl">
                        <input
                          type="date"
                          className="w-full bg-transparent outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Time</label>
                      <div className="flex gap-2.5 py-4 px-7 bg-input rounded-xl">
                        <input
                          type="time"
                          className="w-full bg-transparent outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Guests</label>
                      <div className="flex gap-2.5 py-4 px-7 bg-input rounded-xl">
                        <select className="w-full bg-transparent outline-none">
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                            <option key={num} value={num}>
                              {num} {num === 1 ? "Guest" : "Guests"}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <Button asChild className="w-full">
                    <Link href="/reservation">Book Now</Link>
                  </Button>

                  <div className="flex items-center gap-2 text-sm text-muted">
                    <Globe className="h-5 w-5" />
                    <a
                      href={`https://${restaurant.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-secondary transition-colors"
                    >
                      {restaurant.website}
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
