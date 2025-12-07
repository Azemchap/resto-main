"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Users, Target, Heart, Award } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Customer First",
    description: "We prioritize your dining experience above all else, ensuring every reservation meets your expectations.",
  },
  {
    icon: Target,
    title: "Quality Assurance",
    description: "We partner only with top-rated restaurants that meet our strict quality and service standards.",
  },
  {
    icon: Heart,
    title: "Passion for Food",
    description: "Our love for culinary excellence drives us to connect you with the best dining experiences.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every aspect of our service, from booking to dining.",
  },
];

const stats = [
  { number: "500+", label: "Partner Restaurants" },
  { number: "100K+", label: "Happy Customers" },
  { number: "50+", label: "Cities Covered" },
  { number: "4.9", label: "Average Rating" },
];

export default function AboutPage() {
  return (
    <main className="px-4 md:px-[60px] py-[60px]">
      <div className="max-w-[1320px] mx-auto space-y-[80px]">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6 text-center"
        >
          <span className="text-base leading-6 font-semibold text-secondary uppercase">
            About Us
          </span>
          <h1 className="text-[42px] md:text-[56px] leading-[56px] md:leading-[70px] font-semibold">
            Your Gateway to Exceptional
            <br />
            Dining Experiences
          </h1>
          <p className="text-lg text-muted max-w-3xl mx-auto mt-2">
            Resto is Indonesia's premier restaurant reservation platform, connecting food lovers with the finest dining establishments across the archipelago. We make it easy to discover, book, and enjoy memorable meals at top-rated restaurants.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center space-y-2"
            >
              <h3 className="text-[42px] md:text-[56px] font-bold text-primary">
                {stat.number}
              </h3>
              <p className="text-base md:text-lg text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden">
            <Image
              src="/assets/images/thumbnails/ads-1.png"
              alt="Our Mission"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-[32px] md:text-[42px] leading-[48px] md:leading-[56px] font-semibold">
              Our Mission
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              We believe that great food brings people together. Our mission is to make exceptional dining accessible to everyone by simplifying the reservation process and partnering with Indonesia's finest restaurants.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              Whether you're planning a romantic dinner, a family celebration, or a business lunch, Resto helps you find the perfect spot and secure your table with just a few clicks.
            </p>
          </div>
        </motion.div>

        {/* Values Section */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-4"
          >
            <span className="text-base leading-6 font-semibold text-secondary uppercase">
              Our Values
            </span>
            <h2 className="text-[32px] md:text-[42px] leading-[48px] md:leading-[56px] font-semibold">
              What We Stand For
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full">
                  <div className="space-y-4">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/15">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-[22px] leading-[33px] font-semibold">
                      {value.title}
                    </h3>
                    <p className="text-base text-muted leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
