"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const Services = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <motion.h2
              initial={{ opacity: 0, y: -200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl font-bold tracking-tighter md:text-4xl"
            >
              Our Recycling Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: "-100%" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="max-w-[700px] text-muted-foreground md:text-xl"
            >
              Comprehensive recycling solutions tailored for the Nigerian
              community
            </motion.p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          <Card className="bg-primary/10">
            <div className="mb-4 p-6 pb-0 h-60 w-full overflow-hidden rounded-md">
              <Image
                src="/images/plastic-recycling.jpeg"
                width={300}
                height={160}
                alt="Plastic recycling"
                className="h-full w-full object-cover rounded-md"
              />
            </div>
            <CardHeader className="py-0 mb-2">
              <CardTitle className="text-lg font-semibold text-primary">
                Plastic Recycling
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Collection and processing of plastic waste to reduce pollution
                in Nigerian communities.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-primary/10">
            <div className="mb-4 p-6 pb-0 h-60 w-full overflow-hidden rounded-md">
              <Image
                src="/images/carton-recycling.jpg"
                width={300}
                height={160}
                alt="Carboard recycling"
                className="h-full w-full object-cover rounded-md"
              />
            </div>
            <CardHeader className="py-0 mb-2">
              <CardTitle className="text-lg font-semibold text-primary">
                Cardboard Recycling
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Efficient cardboard recycling to preserve Nigeria's natural
                resources and forests.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-primary/10">
            <div className="mb-4 p-6 pb-0 h-60 w-full overflow-hidden rounded-md">
              <Image
                src="/images/can-recycling.jpg"
                width={300}
                height={160}
                alt="Can recycling"
                className="h-full w-full object-cover rounded-md"
              />
            </div>
            <CardHeader className="py-0 mb-2">
              <CardTitle className="text-lg font-semibold text-primary">
                Can Recycling
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Recovery and processing of of soda cans and food cans for
                sustainable reuse.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center mt-8">
          <Button asChild variant="default">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
