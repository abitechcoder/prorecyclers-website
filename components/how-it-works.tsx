"use client";
import React from "react";
import { Clock, Trash2, CircleDollarSign } from "lucide-react";
import { motion } from "motion/react";
import { gridContainerVariants, gridItemVariants } from "@/lib/motion-variants";

export const HowItWorks = () => {
  return (
    <section className="bg-primary/5 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <motion.h2
              initial={{ opacity: 0, y: -200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl font-bold tracking-tighter md:text-4xl"
            >
              How It Works
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: "-100%" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="max-w-[700px] text-muted-foreground md:text-xl"
            >
              A simple process to recycle your waste and earn rewards.
            </motion.p>
          </div>
        </div>
        <motion.div
          variants={gridContainerVariants}
          initial={"hidden"}
          whileInView={"show"}
          className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          <motion.div
            variants={gridItemVariants}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
              <Clock className="h-8 w-8" />
            </div>
            <h3 className="mt-4 text-xl font-bold">1. Schedule a Pickup</h3>
            <p className="mt-2 text-muted-foreground">
              Book a pickup online or by phone. Choose a date and time that
              works for you.
            </p>
          </motion.div>
          <motion.div
            variants={gridItemVariants}
            transition={{
              delay: 0.5,
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
              <Trash2 className="h-8 w-8" />
            </div>
            <h3 className="mt-4 text-xl font-bold">2. We Collect</h3>
            <p className="mt-2 text-muted-foreground">
              Our team will arrive at your location to collect and weigh your
              recyclables.
            </p>
          </motion.div>
          <motion.div
            variants={gridItemVariants}
            transition={{
              delay: 1,
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
              <CircleDollarSign className="h-8 w-8" />
            </div>
            <h3 className="mt-4 text-xl font-bold">3. Get Paid</h3>
            <p className="mt-2 text-muted-foreground">
              Recieve instant cash or credits for the value of your collected
              recyclables
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
