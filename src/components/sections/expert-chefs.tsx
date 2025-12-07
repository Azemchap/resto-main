"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const chefs = [
  {
    id: 1,
    name: "Phoenix Satcheup",
    specialty: "Pizza",
    location: "Jakarta, Indonesia",
    experience: "12 Years",
    restaurant: "Pearl Dolphin",
    image: "/assets/images/thumbnails/chef-1.png",
    restaurantImage: "/assets/images/thumbnails/resto-4.png",
  },
  {
    id: 2,
    name: "Chamber Botfrag",
    specialty: "Vegan",
    location: "Bandung, Indonesia",
    experience: "10 Years",
    restaurant: "Green Garden",
    image: "/assets/images/thumbnails/chef-1.png",
    restaurantImage: "/assets/images/thumbnails/resto-4.png",
  },
  {
    id: 3,
    name: "Asep Vandal",
    specialty: "Roast Chicken",
    location: "Sunda, Indonesia",
    experience: "15 Years",
    restaurant: "Sundanese Delight",
    image: "/assets/images/thumbnails/chef-1.png",
    restaurantImage: "/assets/images/thumbnails/resto-4.png",
  },
  {
    id: 4,
    name: "I Made Invoker",
    specialty: "Beef Steak",
    location: "Bali, Indonesia",
    experience: "8 Years",
    restaurant: "Bali Steakhouse",
    image: "/assets/images/thumbnails/chef-1.png",
    restaurantImage: "/assets/images/thumbnails/resto-4.png",
  },
];

export function ExpertChefs() {
  const [activeChef, setActiveChef] = useState(0);

  return (
    <section className="mt-[60px] mb-[123px] flex justify-center px-4">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[64px] w-full max-w-[1321px]">
        {/* Tab content - Chef image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative h-[600px] lg:h-[848px] w-full lg:w-[660px] order-2 lg:order-1"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeChef}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="absolute left-0 lg:left-[60px] right-0 lg:right-10 h-full rounded-3xl overflow-hidden"
            >
              <Image
                src={chefs[activeChef].image}
                alt={chefs[activeChef].name}
                fill
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Experience Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute top-10 right-0 px-[46px] py-[30px] flex flex-col items-center h-[203px] w-[179px] bg-white rounded-3xl drop-shadow-custom"
          >
            <div className="mb-3 flex items-center justify-center h-20 w-20 bg-[#FFF7ED] rounded-full">
              <Shield className="h-[50px] w-[50px] text-primary" />
            </div>
            <div className="w-[87px] text-center">
              <p className="text-lg leading-[27px] font-semibold">
                {chefs[activeChef].experience}
              </p>
              <p className="text-base leading-6 text-muted">Experience</p>
            </div>
          </motion.div>

          {/* Restaurant Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="p-6 absolute left-0 bottom-10 flex items-center gap-3 h-auto w-full max-w-[330px] rounded-3xl bg-white drop-shadow-custom2"
          >
            <div className="h-[132px] w-[96px] rounded-xl overflow-hidden shrink-0 relative">
              <Image
                src={chefs[activeChef].restaurantImage}
                alt={chefs[activeChef].restaurant}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <span className="text-base leading-6 text-muted">
                    Chef at restaurant:
                  </span>
                  <p className="text-lg leading-[27px] font-semibold">
                    {chefs[activeChef].restaurant}
                  </p>
                </div>
                <Link
                  href={`/chef/${chefs[activeChef].id}`}
                  className="flex text-base leading-6 font-semibold text-primary hover:underline"
                >
                  View Details
                  <Image
                    src="/assets/images/icons/arrow_right.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="filter-primary"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Tab menu */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-8 w-full lg:w-[596px] order-1 lg:order-2"
        >
          <div className="flex flex-col gap-1">
            <span className="text-lg leading-6 font-semibold text-secondary uppercase">
              Top 4 Expert Chefs
            </span>
            <h2 className="text-[32px] leading-[48px] font-semibold">
              Expert Chefs In Fuddy
            </h2>
          </div>

          <div className="flex flex-col gap-5">
            {chefs.map((chef, index) => (
              <motion.div
                key={chef.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveChef(index)}
                className={`cursor-pointer p-6 flex flex-col gap-1.5 h-[141px] w-full rounded-3xl group transition-all duration-300 ${
                  activeChef === index ? "bg-white" : "hover:bg-white/50"
                }`}
              >
                <span className="text-base leading-6 font-medium text-muted uppercase">
                  {chef.specialty}
                </span>
                <div className="w-full flex items-center justify-between">
                  <h2 className="text-[22px] leading-[33px] font-semibold line-clamp-1 mr-2">
                    {chef.name}
                  </h2>
                  <Link
                    href={`/chef/${chef.id}`}
                    className={`flex text-base leading-6 font-medium text-primary shrink-0 transition-opacity duration-300 ${
                      activeChef === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    Profile Details
                    <Image
                      src="/assets/images/icons/arrow_right.svg"
                      alt=""
                      width={24}
                      height={24}
                      className="filter-primary"
                    />
                  </Link>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin
                    className={`h-6 w-6 transition-colors duration-300 ${
                      activeChef === index ? "text-primary" : "text-foreground"
                    }`}
                  />
                  <p className="text-base leading-6 text-muted">
                    {chef.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <Button asChild className="mt-[30px] w-fit">
            <Link href="/chefs">
              View All Chef
              <Image
                src="/assets/images/icons/arrow_right.svg"
                alt=""
                width={24}
                height={24}
              />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
