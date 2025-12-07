"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Award, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ChefDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  // Mock data - in a real app, this would be fetched based on the ID
  const chef = {
    id: id,
    name: "Phoenix Satcheup",
    specialty: "Pizza",
    location: "Jakarta, Indonesia",
    experience: "12 Years",
    restaurant: "Pearl Dolphin",
    restaurantId: 1,
    image: "/assets/images/thumbnails/chef-1.png",
    bio: "Chef Phoenix Satcheup is a master of Italian cuisine with over 12 years of experience perfecting the art of pizza making. Trained in Naples, Italy, Phoenix brings authentic techniques and innovative flavors to every dish.",
    achievements: [
      "Best Pizza Chef Award 2023",
      "Michelin Star Recognition",
      "Italian Culinary Excellence Award",
      "Featured in Top Chef Indonesia",
    ],
    signature: [
      "Truffle Mushroom Pizza",
      "Margherita Classica",
      "Quattro Formaggi",
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
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-[500px] md:h-[700px] rounded-3xl overflow-hidden">
              <Image
                src={chef.image}
                alt={chef.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <div>
                <span className="text-base font-semibold text-secondary uppercase">
                  {chef.specialty} Specialist
                </span>
                <h1 className="text-[42px] leading-[56px] font-semibold mt-2">
                  {chef.name}
                </h1>
              </div>

              <p className="text-lg text-muted leading-relaxed">{chef.bio}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-secondary" />
                  <div>
                    <p className="text-sm text-muted">Experience</p>
                    <p className="font-semibold">{chef.experience}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-secondary" />
                  <div>
                    <p className="text-sm text-muted">Location</p>
                    <p className="font-semibold">{chef.location}</p>
                  </div>
                </div>
              </div>

              <Card className="p-6 bg-primary/5 border-primary/20">
                <div className="space-y-2">
                  <p className="text-sm text-muted">Currently Chef at</p>
                  <h3 className="text-[22px] leading-[33px] font-semibold">
                    {chef.restaurant}
                  </h3>
                  <Button asChild variant="outline" className="mt-4">
                    <Link href={`/restaurant/${chef.restaurantId}`}>
                      Visit Restaurant
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-6">
            <h2 className="text-[32px] leading-[48px] font-semibold">
              Awards & Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {chef.achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <Award className="h-8 w-8 text-primary shrink-0" />
                      <div>
                        <h3 className="font-semibold text-lg">{achievement}</h3>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Signature Dishes */}
          <div className="space-y-6">
            <h2 className="text-[32px] leading-[48px] font-semibold">
              Signature Dishes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {chef.signature.map((dish, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 text-center">
                    <Star className="h-8 w-8 text-star mx-auto mb-3" />
                    <h3 className="font-semibold text-lg">{dish}</h3>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
