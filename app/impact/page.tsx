import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Recycle, Leaf, Droplet, TreePine, Factory, Users } from "lucide-react"

export default function ImpactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Environmental Impact
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Discover how our recycling efforts are making a measurable difference for our planet and communities.
                </p>
              </div>
            </div>
            <div className="mx-auto lg:mx-0">
              <Image
                src="/images/community-cleanup.png"
                width={600}
                height={400}
                alt="Environmental impact visualization"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Impact By The Numbers</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Measurable results from our collective recycling efforts
              </p>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardHeader className="pb-2">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <Recycle className="h-6 w-6 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-primary">5M+</div>
                <p className="mt-2 text-sm text-muted-foreground">Pounds of waste recycled annually</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader className="pb-2">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <TreePine className="h-6 w-6 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-primary">10K+</div>
                <p className="mt-2 text-sm text-muted-foreground">Trees saved through paper recycling</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader className="pb-2">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <Factory className="h-6 w-6 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-primary">3K+</div>
                <p className="mt-2 text-sm text-muted-foreground">Tons of CO2 emissions prevented</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader className="pb-2">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <Users className="h-6 w-6 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-primary">15K+</div>
                <p className="mt-2 text-sm text-muted-foreground">Happy customers served</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Categories */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Environmental Benefits</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                How our recycling efforts benefit different aspects of the environment
              </p>
            </div>
          </div>
          <Tabs defaultValue="resources" className="mt-12">
            <div className="flex justify-center">
              <TabsList>
                <TabsTrigger value="resources">Resource Conservation</TabsTrigger>
                <TabsTrigger value="emissions">Emissions Reduction</TabsTrigger>
                <TabsTrigger value="water">Water Conservation</TabsTrigger>
                <TabsTrigger value="community">Community Impact</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="resources" className="mt-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div>
                  <Image
                    src="/images/paper-recycling.png"
                    width={600}
                    height={400}
                    alt="Resource conservation"
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Conserving Natural Resources</h3>
                  <p className="text-muted-foreground">
                    By recycling materials instead of extracting and processing new raw materials, we significantly
                    reduce the demand for natural resources. This conservation effort helps preserve forests, mineral
                    deposits, and other valuable ecosystems.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Leaf className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Each ton of paper recycled saves approximately 17 trees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Leaf className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Recycling aluminum uses 95% less energy than producing it from raw materials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Leaf className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Plastic recycling reduces petroleum consumption and mining for raw materials</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="emissions" className="mt-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div>
                  <Image
                    src="/images/plastic-recycling.png"
                    width={600}
                    height={400}
                    alt="Emissions reduction"
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Reducing Carbon Emissions</h3>
                  <p className="text-muted-foreground">
                    Recycling requires less energy than producing new products from raw materials, resulting in fewer
                    greenhouse gas emissions. By diverting waste from landfills, we also reduce methane emissions, a
                    potent greenhouse gas.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Factory className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Our recycling operations prevented over 3,000 tons of CO2 emissions last year</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Factory className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Recycling one ton of plastic saves approximately 5,774 kWh of energy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Factory className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Diverting organic waste from landfills reduces methane emissions by 60-80%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="water" className="mt-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div>
                  <Image
                    src="/images/metal-recycling.png"
                    width={600}
                    height={400}
                    alt="Water conservation"
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Protecting Water Resources</h3>
                  <p className="text-muted-foreground">
                    Recycling helps reduce water pollution by decreasing the need for manufacturing processes that can
                    contaminate water sources. It also significantly reduces water consumption compared to producing
                    goods from virgin materials.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Droplet className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Recycling paper uses 40% less water than making it from fresh pulp</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Droplet className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Proper e-waste recycling prevents toxic materials from leaching into groundwater</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Droplet className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Our operations saved approximately 15 million gallons of water last year</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="community" className="mt-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div>
                  <Image
                    src="/images/community-cleanup.png"
                    width={600}
                    height={400}
                    alt="Community impact"
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Strengthening Communities</h3>
                  <p className="text-muted-foreground">
                    Our recycling initiatives create local jobs, support community education programs, and foster a
                    culture of environmental responsibility. By working together, we're building more sustainable and
                    resilient communities.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Users className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Created over 50 local jobs in recycling operations and education</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Users className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Conducted environmental education programs in 25 local schools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Users className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Partnered with 30+ local businesses to implement recycling programs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Success Stories</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Real-world examples of our environmental impact
              </p>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Green Office Initiative</CardTitle>
                <CardDescription>Corporate Partnership</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/images/office-recycling.png"
                    width={300}
                    height={200}
                    alt="Office recycling program"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Our partnership with TechCorp resulted in a comprehensive office recycling program that diverted 95%
                  of their waste from landfills. The initiative saved 120 trees and reduced their carbon footprint by
                  30% in the first year.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Community Cleanup</CardTitle>
                <CardDescription>Local Environmental Project</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/images/community-cleanup.png"
                    width={300}
                    height={200}
                    alt="Community cleanup event"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Our annual river cleanup event brought together 200 volunteers who collected and properly recycled
                  over 2 tons of waste. This effort significantly improved water quality and restored natural habitats
                  for local wildlife.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>School Recycling Program</CardTitle>
                <CardDescription>Educational Initiative</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/images/school-program.png"
                    width={300}
                    height={200}
                    alt="School recycling program"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Our educational program in local schools has taught over 5,000 students about recycling and
                  sustainability. Participating schools have reduced their waste by 60% and inspired many families to
                  start recycling at home.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sustainability Goals */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Sustainability Goals</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Looking ahead to create an even greater positive impact
              </p>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                    1
                  </div>
                  <CardTitle>Expand Recycling Capacity</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  By 2025, we aim to increase our recycling capacity by 50%, allowing us to process an additional 2.5
                  million pounds of recyclable materials annually.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                    2
                  </div>
                  <CardTitle>Carbon Neutral Operations</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We're committed to achieving carbon-neutral operations by 2027 through renewable energy investments,
                  fleet electrification, and carbon offset programs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                    3
                  </div>
                  <CardTitle>Zero Waste Certification</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We're working toward Zero Waste certification for our facilities, diverting at least 90% of waste from
                  landfills through recycling, composting, and reuse.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                    4
                  </div>
                  <CardTitle>Community Education</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our goal is to reach 10,000 students annually through our educational programs, fostering a new
                  generation of environmentally conscious citizens.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                    5
                  </div>
                  <CardTitle>Innovative Recycling Solutions</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We're investing in research and development to find innovative solutions for hard-to-recycle
                  materials, aiming to add at least three new material types to our recycling program by 2026.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                    6
                  </div>
                  <CardTitle>Water Conservation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We plan to reduce water usage in our operations by 30% through water recycling systems and process
                  improvements, saving millions of gallons annually.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Join Our Mission</h2>
              <p className="max-w-[700px] md:text-xl">
                Be part of the solution and help us create a more sustainable future
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link href="/schedule">Schedule Pickup</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
