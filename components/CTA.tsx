"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "motion/react";

const CTA = () => {
  return (
    <section className="bg-gradient-to-b from-[#004526] to-primary text-primary-foreground py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <motion.h2
              initial={{ opacity: 0, y: -200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl font-bold tracking-tighter md:text-4xl"
            >
              Exchange your Trash to Cash
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: "-100%" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="max-w-[700px] md:text-xl"
            >
              Schedule a pickup today and join thousands of Nigerians earning by recycling their trash.
            </motion.p>
          </div>
          <motion.div initial={{opacity: 0, y: 200}} whileInView={{opacity: 1, y: 0}} transition={{ duration: 0.5, ease: "easeOut"}} className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button asChild size="lg" variant="secondary">
              <Link
                href="https://wa.me/2349040020889?text=Hi%20Prorecycler,%20I'd%20like%20to%20schedule%20a%20recycling%20pickup."
                target="_blank"
              >
                Schedule Pickup
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-secondary"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
