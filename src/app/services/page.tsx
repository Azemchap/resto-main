"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const services = [
  {
    id: 1,
    icon: "/assets/images/icons/discount.svg",
    title: "Extra Discounts",
    description: "Get your special discount by using our reservation system. Enjoy up to 20% off on your first booking and recurring discounts for loyal customers.",
    features: [
      "First booking discount up to 20%",
      "Loyalty rewards program",
      "Seasonal special offers",
      "Birthday month discounts",
    ],
  },
  {
    id: 2,
    icon: "/assets/images/icons/eat.svg",
    title: "Come and Eat",
    description: "Skip the waiting lines and secure your table in advance. Our smart reservation system ensures you get seated immediately upon arrival.",
    features: [
      "Instant table confirmation",
      "No waiting time",
      "Priority seating",
      "Real-time availability",
    ],
  },
  {
    id: 3,
    icon: "/assets/images/icons/cost.svg",
    title: "No Extra Fee",
    description: "We believe in transparent pricing. Make reservations and order food without worrying about hidden charges or extra fees.",
    features: [
      "Tax-free reservations",
      "No hidden charges",
      "Transparent pricing",
      "Free cancellation",
    ],
  },
  {
    id: 4,
    icon: "/assets/images/icons/sparkle.svg",
    title: "Guaranteed Cleanliness",
    description: "Your health and safety are our top priority. All our partner restaurants maintain the highest standards of cleanliness and hygiene.",
    features: [
      "Regular health inspections",
      "Certified hygiene standards",
      "Sanitized dining areas",
      "Quality food preparation",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="px-4 md:px-[60px] py-[60px]">
      <div className="max-w-[1320px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-1.5 mb-[60px] text-center"
        >
          <span className="text-base leading-6 font-semibold text-secondary uppercase">
            Our Services
          </span>
          <h1 className="text-[42px] leading-[56px] font-semibold">
            What We Offer
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto mt-2">
            Discover the comprehensive services we provide to enhance your dining experience and make restaurant reservations effortless.
          </p>
        </motion.div>

        <div className="space-y-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary/15 shrink-0">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={58}
                      height={58}
                    />
                  </div>
                  <div className="flex-1 space-y-4">
                    <h2 className="text-[28px] leading-[42px] font-semibold">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary shrink-0" />
                          <span className="text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
