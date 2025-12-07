"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    id: 1,
    icon: "/assets/images/icons/discount.svg",
    title: "Extra Discounts",
    description: "Get your special discount by using our reservation",
  },
  {
    id: 2,
    icon: "/assets/images/icons/eat.svg",
    title: "Come and Eat",
    description: "Get your own table quickly & without waiting in line",
  },
  {
    id: 3,
    icon: "/assets/images/icons/cost.svg",
    title: "No Extra Fee",
    description: "Get tax free if you want to order food and make a reservation",
  },
  {
    id: 4,
    icon: "/assets/images/icons/sparkle.svg",
    title: "Guaranteed Cleanliness",
    description: "We ensure the cleanliness of the place as well as the food",
  },
];

export function WhyUs() {
  return (
    <section className="flex justify-center px-4">
      <div className="w-full max-w-[1320px] my-[60px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex w-fit mx-auto flex-col gap-1.5 text-center mb-[41px]"
        >
          <span className="text-base leading-6 font-semibold text-secondary uppercase">
            Special Benefit For You
          </span>
          <h2 className="text-[28px] leading-[42px] font-semibold">
            Why Should Choose Us?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="flex flex-col gap-[54px] h-fit pt-6 min-h-[347px] w-full">
                <div className="flex flex-col gap-6">
                  <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-primary/15">
                    <Image
                      src={benefit.icon}
                      alt={benefit.title}
                      width={58}
                      height={58}
                    />
                  </div>
                  <h3 className="text-lg leading-[27px] font-semibold text-center">
                    {benefit.title}
                  </h3>
                  <p className="w-full max-w-[267px] mx-auto -mt-3 px-6 text-base leading-6 text-muted text-center">
                    {benefit.description}
                  </p>
                </div>
                <Link
                  href="/services"
                  className="w-full mt-auto h-[72px] flex items-center justify-center text-base leading-6 font-semibold rounded-t-xl rounded-b-3xl transition-all duration-300 hover:bg-primary"
                >
                  <span>View Details</span>
                  <Image
                    src="/assets/images/icons/arrow_right.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
