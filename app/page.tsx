import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Recycle, Leaf, Truck, BarChart, Users, Award } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-pattern py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Sustainable Recycling for a Greener Tomorrow
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Join EcoCycle Solutions in our mission to create a cleaner, more sustainable world through innovative
                  recycling solutions.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/schedule">Schedule Pickup</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto lg:mx-0 relative">
              <Image
                src="/images/hero-recycling.png"
                width={550}
                height={550}
                alt="Recycling process illustration"
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Recycling Services</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Comprehensive recycling solutions for all your waste management needs
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">Plastic Recycling</CardTitle>
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Recycle className="h-5 w-5 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4 h-40 w-full overflow-hidden rounded-md">
                  <Image
                    src="/images/plastic-recycling.png"
                    width={300}
                    height={160}
                    alt="Plastic recycling"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Responsible collection and processing of all types of plastic waste.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">Paper Recycling</CardTitle>
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Leaf className="h-5 w-5 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4 h-40 w-full overflow-hidden rounded-md">
                  <Image
                    src="/images/paper-recycling.png"
                    width={300}
                    height={160}
                    alt="Paper recycling"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Efficient recycling of paper products to reduce deforestation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">Metal Recycling</CardTitle>
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Truck className="h-5 w-5 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4 h-40 w-full overflow-hidden rounded-md">
                  <Image
                    src="/images/metal-recycling.png"
                    width={300}
                    height={160}
                    alt="Metal recycling"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Collection and processing of various metal materials for reuse.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">E-Waste Recycling</CardTitle>
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <BarChart className="h-5 w-5 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4 h-40 w-full overflow-hidden rounded-md">
                  <Image
                    src="/images/ewaste-recycling.png"
                    width={300}
                    height={160}
                    alt="E-waste recycling"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Safe disposal and recycling of electronic waste and components.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center mt-8">
            <Button asChild variant="outline">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Environmental Impact</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Making a measurable difference in our community and planet
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
              <div className="text-4xl font-bold text-primary">5M+</div>
              <p className="text-sm text-center text-muted-foreground">Pounds of waste recycled annually</p>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
              <div className="text-4xl font-bold text-primary">10K+</div>
              <p className="text-sm text-center text-muted-foreground">Trees saved through paper recycling</p>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
              <div className="text-4xl font-bold text-primary">3K+</div>
              <p className="text-sm text-center text-muted-foreground">Tons of CO2 emissions prevented</p>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
              <div className="text-4xl font-bold text-primary">15K+</div>
              <p className="text-sm text-center text-muted-foreground">Happy customers served</p>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Button asChild variant="outline">
              <Link href="/impact">Learn More About Our Impact</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Customers Say</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Hear from businesses and individuals who have partnered with us
              </p>
            </div>
          </div>
          <Tabs defaultValue="businesses" className="mt-12">
            <div className="flex justify-center">
              <TabsList>
                <TabsTrigger value="businesses">Businesses</TabsTrigger>
                <TabsTrigger value="individuals">Individuals</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="businesses" className="mt-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          "EcoCycle Solutions has transformed our company's waste management process. Their efficient
                          service and commitment to sustainability align perfectly with our corporate values."
                        </p>
                        <p className="mt-2 font-semibold">Sarah Johnson</p>
                        <p className="text-xs text-muted-foreground">Green Office Solutions</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          "As a restaurant chain, we generate significant waste. EcoCycle's comprehensive recycling
                          program has helped us reduce our environmental footprint substantially."
                        </p>
                        <p className="mt-2 font-semibold">Michael Chen</p>
                        <p className="text-xs text-muted-foreground">Fresh Eats Restaurant Group</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          "The detailed reporting and analytics provided by EcoCycle Solutions have been invaluable for
                          our sustainability reporting and corporate social responsibility initiatives."
                        </p>
                        <p className="mt-2 font-semibold">Amanda Rodriguez</p>
                        <p className="text-xs text-muted-foreground">Eco Retail Stores</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="individuals" className="mt-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          "The scheduled pickup service is so convenient! I love knowing that my recyclables are being
                          properly processed and not ending up in a landfill."
                        </p>
                        <p className="mt-2 font-semibold">David Thompson</p>
                        <p className="text-xs text-muted-foreground">Homeowner</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          "I was looking for a responsible way to dispose of my old electronics. EcoCycle made the
                          process easy and gave me peace of mind about data security."
                        </p>
                        <p className="mt-2 font-semibold">Emily Wilson</p>
                        <p className="text-xs text-muted-foreground">Tech Professional</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          "The educational resources provided by EcoCycle have helped our family become more conscious
                          about waste reduction and proper recycling practices."
                        </p>
                        <p className="mt-2 font-semibold">Robert & Lisa Garcia</p>
                        <p className="text-xs text-muted-foreground">Family of Four</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Make a Difference?</h2>
              <p className="max-w-[700px] md:text-xl">
                Join thousands of environmentally conscious individuals and businesses in our mission for a greener
                planet.
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

      {/* Partners/Certifications */}
      <section className="py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Our Certifications & Partners</h2>
              <p className="max-w-[700px] text-muted-foreground">
                Trusted by leading environmental organizations and businesses
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="flex flex-col items-center space-y-2">
              <Award className="h-12 w-12 text-muted-foreground" />
              <span className="text-sm font-medium">Green Business Certified</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Award className="h-12 w-12 text-muted-foreground" />
              <span className="text-sm font-medium">ISO 14001 Certified</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Award className="h-12 w-12 text-muted-foreground" />
              <span className="text-sm font-medium">EPA Recognized</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Award className="h-12 w-12 text-muted-foreground" />
              <span className="text-sm font-medium">Sustainable Business Alliance</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
