"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const chefs = [
  {
    id: 1,
    name: "Phoenix Satcheup",
    specialty: "Pizza",
    location: "Jakarta, Indonesia",
    experience: "12 Years",
    restaurant: "Pearl Dolphin",
    image: "/assets/images/thumbnails/chef-1.png",
  },
  {
    id: 2,
    name: "Chamber Botfrag",
    specialty: "Vegan",
    location: "Bandung, Indonesia",
    experience: "10 Years",
    restaurant: "Green Garden",
    image: "/assets/images/thumbnails/chef-1.png",
  },
  {
    id: 3,
    name: "Asep Vandal",
    specialty: "Roast Chicken",
    location: "Sunda, Indonesia",
    experience: "15 Years",
    restaurant: "Sundanese Delight",
    image: "/assets/images/thumbnails/chef-1.png",
  },
  {
    id: 4,
    name: "I Made Invoker",
    specialty: "Beef Steak",
    location: "Bali, Indonesia",
    experience: "8 Years",
    restaurant: "Bali Steakhouse",
    image: "/assets/images/thumbnails/chef-1.png",
  },
];

export default function ChefsPage() {
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
            Our Expert Chefs
          </span>
          <h1 className="text-[42px] leading-[56px] font-semibold">
            Meet Our Culinary Masters
          </h1>
          <p className="text-lg text-muted max-w-2xl mt-2">
            Discover the talented chefs behind Indonesia's finest restaurants. Each brings years of expertise and passion to create exceptional dining experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chefs.map((chef, index) => (
            <motion.div
              key={chef.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/chef/${chef.id}`}>
                <Card className="overflow-hidden group cursor-pointer h-full">
                  <div className="relative h-[400px]">
                    <Image
                      src={chef.image}
                      alt={chef.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <span className="text-sm font-medium text-secondary uppercase">
                      {chef.specialty}
                    </span>
                    <h3 className="text-[22px] leading-[33px] font-semibold">
                      {chef.name}
                    </h3>
                    <p className="text-base text-muted">
                      {chef.experience} Experience
                    </p>
                    <div className="flex items-center gap-1.5 text-muted">
                      <MapPin className="h-5 w-5" />
                      <p className="text-sm">{chef.location}</p>
                    </div>
                    <div className="pt-2">
                      <p className="text-sm text-muted">Chef at</p>
                      <p className="font-semibold">{chef.restaurant}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
