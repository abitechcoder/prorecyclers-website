"use client"

import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from "next/image";
import {motion} from "motion/react";

const Hero = () => {
  return (
    <section className="relative py-16 md:py-24 lg:py-32">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-cleanup.png"
            alt="Community cleanup effort"
            fill
            className="object-cover object-center"
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgG..."
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-8 text-white bg-black-50">
              <div className="space-y-4">
                <motion.h1 initial={{opacity: 0, y: -100}} whileInView={{opacity: 1, y: 0}} transition={{delay: 0.2, ease: 'easeIn'}} className="text-center lg:text-left text-4xl font-bold tracking-tight sm:text-5xl xl:text-7xl">
                  Exchange your <br/> Trash to Cash
                </motion.h1>
                <motion.p initial={{opacity: 0, y: -100}} whileInView={{opacity: 1, y: 0}} transition={{delay: 0.4, ease: 'easeOut'}} className="max-w-[600px] md:text-xl text-gray-200 text-center lg:text-left">
                  Join Prorecyclers in turning Nigeria's waste challenges into
                  sustainable opportunities.
                </motion.p>
              </div>
              <motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{delay: 0.6, ease: 'easeIn'}} className="flex flex-col gap-4 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link
                    href="https://wa.me/2349040020889?text=Hi%20Prorecycler,%20I'd%20like%20to%20schedule%20a%20recycling%20pickup."
                    target="_blank"
                  >
                    Schedule Pickup
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services">Learn More</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero