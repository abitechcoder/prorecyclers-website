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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Prorecycler</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Transforming Nigeria's waste challenges into sustainable opportunities through innovative recycling
                  solutions.
                </p>
              </div>
            </div>
            <div className="mx-auto lg:mx-0">
              <Image
                src="/images/team-working.png"
                width={600}
                height={400}
                alt="Prorecycler team"
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
                src="/images/recycling-facility.png"
                width={600}
                height={400}
                alt="Prorecycler facility"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
                <p className="text-muted-foreground">
                  Prorecycler is a Badagry-based recycling and waste management company dedicated to transforming
                  Nigeria's waste challenges into sustainable opportunities. We specialize in the collection, sorting,
                  and processing of plastics, paper, metals, and electronic waste, offering practical and scalable
                  solutions that reduce pollution and promote environmental responsibility.
                </p>
                <p className="text-muted-foreground">
                  At Prorecycler, we believe that sustainability starts with action. Through our innovative recycling
                  programs and strong community engagement, we empower individuals, schools, and businesses to
                  participate in the circular economy. From doorstep pickups to bulk corporate recycling, we tailor our
                  services to meet the diverse needs of the Badagry community and beyond.
                </p>
                <p className="text-muted-foreground">
                  Our team is passionate about reducing environmental impact, creating green jobs, and educating the
                  public on responsible waste practices.
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
                    To provide efficient, eco-friendly recycling solutions while empowering communities through
                    education, innovation, and accessible services.
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
                  <p className="text-muted-foreground">To lead the transition to a cleaner, waste-free Nigeria.</p>
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
                    We are committed to protecting Nigeria's natural environment through responsible recycling practices
                    and continuous innovation.
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
                    resources to promote sustainable practices across Nigeria.
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
                    services to meet Nigeria's evolving environmental challenges.
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
                    organizations to achieve greater environmental impact across Nigeria.
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
                  src="/images/team-member-1.png"
                  width={160}
                  height={160}
                  alt="CEO portrait"
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">Adunni Ogundimu</h3>
                <p className="text-sm text-muted-foreground">CEO & Founder</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Environmental engineer with 10+ years of experience in waste management and sustainability in Nigeria.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="relative h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src="/images/team-member-2.png"
                  width={160}
                  height={160}
                  alt="COO portrait"
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">Emeka Nwosu</h3>
                <p className="text-sm text-muted-foreground">COO & Co-Founder</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Operations expert with extensive background in logistics and supply chain management across West
                  Africa.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="relative h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src="/images/team-member-3.png"
                  width={160}
                  height={160}
                  alt="CTO portrait"
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">Dr. Kemi Adebayo</h3>
                <p className="text-sm text-muted-foreground">Head of Innovation</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Materials scientist specializing in recycling technologies and sustainable waste processing solutions.
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
                Partner with us to create a cleaner, waste-free Nigeria
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
