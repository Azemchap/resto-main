"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CheckCircle2 } from "lucide-react";

export default function ReservationPage() {
  return (
    <main className="px-4 md:px-[60px] py-[60px]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="text-center space-y-2">
            <span className="text-base leading-6 font-semibold text-secondary uppercase">
              Make a Reservation
            </span>
            <h1 className="text-[42px] leading-[56px] font-semibold">
              Reserve Your Table
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Complete your reservation details and we'll confirm your booking shortly.
            </p>
          </div>

          <Card className="p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name *</label>
                  <div className="flex gap-2.5 py-4 px-7 bg-input rounded-xl transition-all duration-300 focus-within:ring-2 focus-within:ring-secondary">
                    <Input
                      type="text"
                      placeholder="John"
                      className="border-0 p-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name *</label>
                  <div className="flex gap-2.5 py-4 px-7 bg-input rounded-xl transition-all duration-300 focus-within:ring-2 focus-within:ring-secondary">
                    <Input
                      type="text"
                      placeholder="Doe"
                      className="border-0 p-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email *</label>
                <div className="flex gap-2.5 py-4 px-7 bg-input rounded-xl transition-all duration-300 focus-within:ring-2 focus-within:ring-secondary">
                  <Input
                    type="email"
                    placeholder="john.doe@example.com"
                    className="border-0 p-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Phone Number *</label>
                <div className="flex gap-2.5 py-4 px-7 bg-input rounded-xl transition-all duration-300 focus-within:ring-2 focus-within:ring-secondary">
                  <Input
                    type="tel"
                    placeholder="+62 812 3456 7890"
                    className="border-0 p-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Date *</label>
                  <div className="flex gap-2.5 py-4 px-7 bg-input rounded-xl transition-all duration-300 focus-within:ring-2 focus-within:ring-secondary">
                    <input
                      type="date"
                      className="w-full bg-transparent outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Time *</label>
                  <div className="flex gap-2.5 py-4 px-7 bg-input rounded-xl transition-all duration-300 focus-within:ring-2 focus-within:ring-secondary">
                    <input
                      type="time"
                      className="w-full bg-transparent outline-none"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Number of Guests *</label>
                <div className="flex gap-2.5 py-4 px-7 bg-input rounded-xl transition-all duration-300 focus-within:ring-2 focus-within:ring-secondary">
                  <select className="w-full bg-transparent outline-none" required>
                    <option value="">Select number of guests</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Special Requests</label>
                <div className="flex gap-2.5 py-4 px-7 bg-input rounded-xl transition-all duration-300 focus-within:ring-2 focus-within:ring-secondary">
                  <textarea
                    placeholder="Any dietary restrictions or special occasions?"
                    className="w-full h-24 bg-transparent outline-none resize-none"
                  />
                </div>
              </div>

              <div className="pt-4 space-y-4">
                <Card className="p-6 bg-primary/5 border-primary/20">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="font-semibold">No Extra Fees</p>
                      <p className="text-sm text-muted">
                        Your reservation is completely free with no hidden charges.
                      </p>
                    </div>
                  </div>
                </Card>

                <Button type="submit" className="w-full" size="lg">
                  Confirm Reservation
                </Button>
              </div>
            </form>
          </Card>
        </motion.div>
      </div>
    </main>
  );
}
