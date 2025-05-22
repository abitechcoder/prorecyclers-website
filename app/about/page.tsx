import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Recycle, Shield, Users, Award, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  About EcoCycle Solutions
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Our journey, mission, and commitment to creating a sustainable future through innovative recycling
                  solutions.
                </p>
              </div>
            </div>
            <div className="mx-auto lg:mx-0">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="EcoCycle Solutions team"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="EcoCycle Solutions founding"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
                <p className="text-muted-foreground">
                  Founded in 2010, EcoCycle Solutions began with a simple mission: to make recycling accessible,
                  efficient, and impactful. What started as a small operation with just three employees has grown into a
                  leading recycling company serving thousands of businesses and individuals across the region.
                </p>
                <p className="text-muted-foreground">
                  Our founders, environmental scientists with a passion for sustainability, recognized the growing waste
                  crisis and decided to take action. They built EcoCycle Solutions on the principle that proper
                  recycling is not just an environmental responsibility but an opportunity to create a circular economy
                  that benefits everyone.
                </p>
                <p className="text-muted-foreground">
                  Today, we continue to innovate and expand our services, always staying true to our core values and
                  commitment to environmental stewardship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Mission & Vision</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-12 mt-12">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Leaf className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To provide innovative, efficient, and accessible recycling solutions that reduce waste, conserve
                    natural resources, and create a more sustainable future for generations to come.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Recycle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Our Vision</h3>
                  <p className="text-muted-foreground">
                    A world where waste is minimized, resources are conserved, and recycling is an integral part of
                    every community, business, and household, contributing to a cleaner, healthier planet.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Core Values</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                The principles that guide everything we do
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Environmental Stewardship</h3>
                  <p className="text-muted-foreground">
                    We are committed to protecting and preserving our natural environment through responsible recycling
                    practices and continuous innovation.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Community Focus</h3>
                  <p className="text-muted-foreground">
                    We believe in building strong relationships with the communities we serve, providing education and
                    resources to promote sustainable practices.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Excellence</h3>
                  <p className="text-muted-foreground">
                    We strive for excellence in all aspects of our operations, from customer service to processing
                    efficiency and environmental impact.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Integrity</h3>
                  <p className="text-muted-foreground">
                    We conduct our business with honesty, transparency, and accountability, building trust with our
                    customers, partners, and communities.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Recycle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Innovation</h3>
                  <p className="text-muted-foreground">
                    We continuously seek new and better ways to recycle materials, reduce waste, and improve our
                    services to meet evolving environmental challenges.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Collaboration</h3>
                  <p className="text-muted-foreground">
                    We believe in the power of partnerships and work closely with businesses, communities, and
                    organizations to achieve greater environmental impact.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Leadership Team</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Meet the passionate individuals driving our mission forward
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  width={160}
                  height={160}
                  alt="CEO portrait"
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">Dr. Emily Chen</h3>
                <p className="text-sm text-muted-foreground">CEO & Co-Founder</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Environmental scientist with 15+ years of experience in waste management and sustainability.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="relative h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  width={160}
                  height={160}
                  alt="COO portrait"
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">Marcus Johnson</h3>
                <p className="text-sm text-muted-foreground">COO & Co-Founder</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Operations expert with a background in logistics and supply chain management.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="relative h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  width={160}
                  height={160}
                  alt="CTO portrait"
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">Dr. James Rodriguez</h3>
                <p className="text-sm text-muted-foreground">CTO</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Materials scientist specializing in recycling technologies and process optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Join Our Mission</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Partner with us to create a more sustainable future for our planet
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/schedule">Schedule Pickup</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
