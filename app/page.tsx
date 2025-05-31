import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Recycle, Leaf, Truck, BarChart, Users, Award } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
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
            <div className="flex flex-col justify-center space-y-8 text-white">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                  Transform Waste Into a Greener Future
                </h1>
                <p className="max-w-[600px] md:text-xl text-gray-200">
                  Join Prorecycler in turning Nigeria's waste challenges into
                  sustainable opportunities.
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/schedule">Schedule Pickup</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services">Learn More</Link>
                </Button>
              </div>
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
                Comprehensive recycling solutions tailored for the Nigerian community
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <Card>
              <div className="mb-4 p-6 pb-0 h-60 w-full overflow-hidden rounded-md">
                <Image
                  src="/images/plastic-recycling.png"
                  width={300}
                  height={160}
                  alt="Plastic recycling"
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
              <CardHeader className="py-0 mb-2">
                <CardTitle className="text-lg font-semibold">Plastic Recycling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Collection and processing of plastic waste to reduce pollution in Nigerian communities.
                </p>
              </CardContent>
            </Card>
            <Card>
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
                <CardTitle className="text-lg font-semibold">Cardboard Recycling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Efficient cardboard recycling to preserve Nigeria's natural resources and forests.
                </p>
              </CardContent>
            </Card>
            <Card>
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
                <CardTitle className="text-lg font-semibold">Can Recycling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Recovery and processing of of soda cans and food cans for sustainable reuse.
                </p>
              </CardContent>
            </Card>
            {/* <Card>
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
                  Safe disposal and recycling of electronic waste to protect our environment.
                </p>
              </CardContent>
            </Card> */}
          </div>
          <div className="flex justify-center mt-8">
            <Button asChild variant="default">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-primary/10 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Environmental Impact</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Making a measurable difference in Badagry and across Nigeria
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background shadow-sm">
              <div className="text-4xl font-bold text-primary">2M+</div>
              <p className="text-sm text-center text-muted-foreground">Kilograms of waste recycled annually</p>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background shadow-sm">
              <div className="text-4xl font-bold text-primary">500+</div>
              <p className="text-sm text-center text-muted-foreground">Trees saved through paper recycling</p>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background shadow-sm">
              <div className="text-4xl font-bold text-primary">1.5K+</div>
              <p className="text-sm text-center text-muted-foreground">Tons of CO2 emissions prevented</p>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background shadow-sm">
              <div className="text-4xl font-bold text-primary">5K+</div>
              <p className="text-sm text-center text-muted-foreground">Community members served</p>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Button asChild variant="default">
              <Link href="/impact">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Community Says</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Hear from businesses and individuals in Badagry who have partnered with us
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
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback className="bg-primary/20">AO</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          "Prorecycler has revolutionized our waste management. Their reliable service and commitment to
                          sustainability perfectly align with our company's environmental goals."
                        </p>
                        <p className="mt-2 font-semibold">Adebayo Ogundimu</p>
                        <p className="text-xs text-muted-foreground">Badagry Manufacturing Ltd</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback className="bg-primary/20">FI</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          "As a hotel business, we generate significant waste. Prorecycler's comprehensive recycling
                          program has helped us reduce our environmental footprint significantly."
                        </p>
                        <p className="mt-2 font-semibold">Fatima Ibrahim</p>
                        <p className="text-xs text-muted-foreground">Seaside Resort Badagry</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback className="bg-primary/20">CO</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          "The detailed reporting and community education provided by Prorecycler have been invaluable
                          for our corporate social responsibility initiatives."
                        </p>
                        <p className="mt-2 font-semibold">Chinedu Okoro</p>
                        <p className="text-xs text-muted-foreground">Lagos West Trading Company</p>
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
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback className="bg-primary/20">BA</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          "The doorstep pickup service is incredibly convenient! I'm proud to contribute to a cleaner
                          Badagry through proper recycling."
                        </p>
                        <p className="mt-2 font-semibold">Mrs. Blessing Adeyemi</p>
                        <p className="text-xs text-muted-foreground">Badagry Resident</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback className="bg-primary/20">TF</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          "I needed to dispose of old electronics responsibly. Prorecycler made the process easy and
                          gave me confidence about data security."
                        </p>
                        <p className="mt-2 font-semibold">Tunde Fashola</p>
                        <p className="text-xs text-muted-foreground">IT Professional</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback className="bg-primary/20">OK</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          "The educational resources from Prorecycler have helped our family become more conscious about
                          waste reduction and proper recycling practices."
                        </p>
                        <p className="mt-2 font-semibold">Mr. & Mrs. Okafor</p>
                        <p className="text-xs text-muted-foreground">Family of Five</p>
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
                Join thousands of environmentally conscious Nigerians in our mission for a cleaner, waste-free future.
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
                Trusted by leading Nigerian environmental organizations and businesses
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="flex flex-col items-center space-y-2">
              <Award className="h-12 w-12 text-muted-foreground" />
              <span className="text-sm font-medium">NESREA Certified</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Award className="h-12 w-12 text-muted-foreground" />
              <span className="text-sm font-medium">ISO 14001 Certified</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Award className="h-12 w-12 text-muted-foreground" />
              <span className="text-sm font-medium">Lagos State Approved</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Award className="h-12 w-12 text-muted-foreground" />
              <span className="text-sm font-medium">Green Nigeria Initiative</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
