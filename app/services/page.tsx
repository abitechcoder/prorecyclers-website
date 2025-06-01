import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Recycle, FileText, Smartphone, Truck, Leaf, Droplet, Trash2, HardDrive } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/storage-facility.jpeg"
            fill
            alt="A boy and a girl picking up cans in a park"
            className="object-center object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative z-10 container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-3">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-300">Our Recycling Services</h1>
            <p className="max-w-[600px] md:text-xl text-white">
              Comprehensive recycling solutions for all your waste management needs, from residential to commercial.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24" id="services-overview">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Comprehensive Services</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Explore our range of recycling services designed to meet the needs of individuals, businesses, and
                communities
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card id="plastic" className="flex flex-col">
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
                <CardTitle className="text-lg font-semibold text-primary">Plastic Recycling</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">
                  We accept all types of plastic containers. Our specialized sorting process ensures that each type of plastic is properly processed for maximum recycling efficiency.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Recycle className="h-4 w-4 text-primary" />
                    <span>PET bottles (water, soda)</span>
                  </li>
                  {/* <li className="flex items-center gap-2">
                    <Recycle className="h-4 w-4 text-primary" />
                    <span>HDPE containers (milk, detergent)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Recycle className="h-4 w-4 text-primary" />
                    <span>PP containers (yogurt, margarine)</span>
                  </li> */}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/schedule">Schedule Pickup</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card id="paper" className="flex flex-col">
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
                <CardTitle className="text-lg font-semibold text-primary">Cardboard Recycling</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">
                  Our paper recycling service helps reduce deforestation and conserve natural resources. We accept a
                  wide range of paper products from your home, ensuring they're properly processed and recycled.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-primary" />
                    <span>Newspapers and magazines</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-primary" />
                    <span>Office paper and mail</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-primary" />
                    <span>Cardboard boxes and packaging</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/schedule">Schedule Pickup</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card id="metal" className="flex flex-col">
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
                <CardTitle className="text-lg font-semibold text-primary">Can Recycling</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">
                  Metal recycling is one of the most efficient forms of recycling, with significant energy savings
                  compared to mining new materials. We collect and process various metal items from your home.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Truck className="h-4 w-4 text-primary" />
                    <span>Aluminum cans and foil</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Truck className="h-4 w-4 text-primary" />
                    <span>Steel and tin cans</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Truck className="h-4 w-4 text-primary" />
                    <span>Small metal appliances</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/schedule">Schedule Pickup</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How It Works</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Our simple process makes recycling easy and convenient
              </p>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                1
              </div>
              <h3 className="mt-4 text-xl font-bold">Schedule</h3>
              <p className="mt-2 text-muted-foreground">
                Book a pickup online or by phone. Choose a date and time that works for you.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                2
              </div>
              <h3 className="mt-4 text-xl font-bold">Prepare</h3>
              <p className="mt-2 text-muted-foreground">
                Sort your recyclables according to our guidelines. We'll provide instructions for each material type.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                3
              </div>
              <h3 className="mt-4 text-xl font-bold">Recycle</h3>
              <p className="mt-2 text-muted-foreground">
                Our team will collect your recyclables and ensure they're properly processed and recycled.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Frequently Asked Questions</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Find answers to common questions about our recycling services
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:gap-8">
            <Card>
              <CardHeader>
                <CardTitle>What items do you accept for recycling?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We accept a wide range of recyclable materials, including plastic containers, paper products, metal
                  items, glass containers, electronic waste, and more. Each material type has specific guidelines for
                  preparation, which we provide when you schedule a pickup.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>How often can I schedule pickups?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  For residential customers, we offer on-demand pickups as well as regular scheduled service (weekly,
                  bi-weekly, or monthly). Commercial customers can customize their collection schedule based on their
                  specific needs and volume of recyclables.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Do I need to sort my recyclables?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Basic sorting is required to ensure efficient processing. We ask that you separate paper, plastic,
                  metal, glass, and electronic waste. Detailed sorting instructions will be provided when you schedule
                  your service.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>What happens to my recyclables after collection?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  After collection, your recyclables are transported to our processing facility where they are sorted,
                  cleaned, and prepared for recycling. Materials are then sent to specialized recycling facilities where
                  they are transformed into new products, reducing the need for virgin materials.
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
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Start Recycling?</h2>
              <p className="max-w-[700px] md:text-xl">
                Schedule a pickup today and join our mission for a greener planet
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

{/* <Tabs defaultValue="residential" className="mt-12">
            <div className="flex justify-center">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="residential">Residential</TabsTrigger>
                <TabsTrigger value="commercial">Commercial</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="residential" className="mt-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card id="plastic" className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Recycle className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle>Plastic Recycling</CardTitle>
                    </div>
                    <CardDescription>Collection and processing of household plastic waste</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="mb-4 aspect-video overflow-hidden rounded-md">
                      <Image
                        src="/images/plastic-recycling.jpeg"
                        width={400}
                        height={225}
                        alt="Plastic recycling"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      We accept all types of plastic containers, including bottles, jugs, tubs, and containers. Our
                      specialized sorting process ensures that each type of plastic is properly processed for maximum
                      recycling efficiency.
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Recycle className="h-4 w-4 text-primary" />
                        <span>PET bottles (water, soda)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Recycle className="h-4 w-4 text-primary" />
                        <span>HDPE containers (milk, detergent)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Recycle className="h-4 w-4 text-primary" />
                        <span>PP containers (yogurt, margarine)</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/schedule">Schedule Pickup</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card id="paper" className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle>Paper Recycling</CardTitle>
                    </div>
                    <CardDescription>Collection and processing of paper products</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="mb-4 aspect-video overflow-hidden rounded-md">
                      <Image
                        src="/images/paper-recycling.png"
                        width={400}
                        height={225}
                        alt="Paper recycling"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Our paper recycling service helps reduce deforestation and conserve natural resources. We accept a
                      wide range of paper products from your home, ensuring they're properly processed and recycled.
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-primary" />
                        <span>Newspapers and magazines</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-primary" />
                        <span>Office paper and mail</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-primary" />
                        <span>Cardboard boxes and packaging</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/schedule">Schedule Pickup</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card id="metal" className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Truck className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle>Metal Recycling</CardTitle>
                    </div>
                    <CardDescription>Collection and processing of metal items</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="mb-4 aspect-video overflow-hidden rounded-md">
                      <Image
                        src="/images/metal-recycling.png"
                        width={400}
                        height={225}
                        alt="Metal recycling"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Metal recycling is one of the most efficient forms of recycling, with significant energy savings
                      compared to mining new materials. We collect and process various metal items from your home.
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Truck className="h-4 w-4 text-primary" />
                        <span>Aluminum cans and foil</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Truck className="h-4 w-4 text-primary" />
                        <span>Steel and tin cans</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Truck className="h-4 w-4 text-primary" />
                        <span>Small metal appliances</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/schedule">Schedule Pickup</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card id="ewaste" className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Smartphone className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle>E-Waste Recycling</CardTitle>
                    </div>
                    <CardDescription>Safe disposal of electronic devices</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="mb-4 aspect-video overflow-hidden rounded-md">
                      <Image
                        src="/images/ewaste-recycling.png"
                        width={400}
                        height={225}
                        alt="E-waste recycling"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Electronic waste contains valuable materials that can be recovered, as well as potentially harmful
                      substances that require proper handling. Our e-waste recycling service ensures safe and
                      responsible processing.
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Smartphone className="h-4 w-4 text-primary" />
                        <span>Computers and laptops</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Smartphone className="h-4 w-4 text-primary" />
                        <span>Mobile phones and tablets</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Smartphone className="h-4 w-4 text-primary" />
                        <span>Printers and small electronics</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/schedule">Schedule Pickup</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card id="glass" className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Droplet className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle>Glass Recycling</CardTitle>
                    </div>
                    <CardDescription>Collection and processing of glass containers</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      Glass is 100% recyclable and can be recycled endlessly without loss in quality. Our glass
                      recycling service ensures that your glass containers are properly collected and processed for
                      reuse.
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Droplet className="h-4 w-4 text-primary" />
                        <span>Glass bottles (all colors)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Droplet className="h-4 w-4 text-primary" />
                        <span>Glass jars and containers</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Droplet className="h-4 w-4 text-primary" />
                        <span>Broken glass (safely packaged)</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/schedule">Schedule Pickup</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card id="special" className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Trash2 className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle>Special Waste</CardTitle>
                    </div>
                    <CardDescription>Safe disposal of hazardous household items</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      Some household items require special handling due to their potentially hazardous nature. Our
                      special waste service ensures these items are safely collected and properly disposed of or
                      recycled.
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Trash2 className="h-4 w-4 text-primary" />
                        <span>Batteries (all types)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Trash2 className="h-4 w-4 text-primary" />
                        <span>Light bulbs and fluorescent tubes</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Trash2 className="h-4 w-4 text-primary" />
                        <span>Household chemicals and paints</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/schedule">Schedule Pickup</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="commercial" className="mt-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Truck className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle>Commercial Waste Audit</CardTitle>
                    </div>
                    <CardDescription>Comprehensive waste assessment for businesses</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      Our waste audit service helps businesses identify opportunities to reduce waste, increase
                      recycling, and save on disposal costs. Our experts will analyze your waste stream and provide
                      actionable recommendations.
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Truck className="h-4 w-4 text-primary" />
                        <span>Detailed waste composition analysis</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Truck className="h-4 w-4 text-primary" />
                        <span>Cost-saving opportunities identification</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Truck className="h-4 w-4 text-primary" />
                        <span>Customized recycling program design</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">Request Consultation</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Recycle className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle>Commercial Recycling</CardTitle>
                    </div>
                    <CardDescription>Comprehensive recycling solutions for businesses</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      Our commercial recycling services are designed to meet the unique needs of businesses of all
                      sizes. We provide regular collection schedules, specialized containers, and detailed reporting on
                      your recycling metrics.
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Recycle className="h-4 w-4 text-primary" />
                        <span>Cardboard and paper recycling</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Recycle className="h-4 w-4 text-primary" />
                        <span>Plastic, glass, and metal recycling</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Recycle className="h-4 w-4 text-primary" />
                        <span>Custom collection schedules</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">Request Service</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <HardDrive className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle>IT Asset Disposal</CardTitle>
                    </div>
                    <CardDescription>Secure disposal of electronic equipment</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      Our IT Asset Disposal service provides businesses with secure, compliant, and environmentally
                      responsible solutions for retiring electronic equipment. We ensure data security and proper
                      recycling of all components.
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <HardDrive className="h-4 w-4 text-primary" />
                        <span>Secure data destruction</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <HardDrive className="h-4 w-4 text-primary" />
                        <span>Compliance documentation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <HardDrive className="h-4 w-4 text-primary" />
                        <span>Responsible e-waste recycling</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">Request Service</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Leaf className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle>Sustainability Consulting</CardTitle>
                    </div>
                    <CardDescription>Expert guidance for green business practices</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      Our sustainability consultants work with businesses to develop and implement comprehensive
                      sustainability strategies that reduce environmental impact, engage employees, and enhance brand
                      reputation.
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Leaf className="h-4 w-4 text-primary" />
                        <span>Sustainability assessment</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Leaf className="h-4 w-4 text-primary" />
                        <span>Green certification guidance</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Leaf className="h-4 w-4 text-primary" />
                        <span>Employee engagement programs</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">Request Consultation</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle>Document Destruction</CardTitle>
                    </div>
                    <CardDescription>Secure shredding and recycling of sensitive documents</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      Our document destruction service provides businesses with secure, compliant, and environmentally
                      responsible solutions for disposing of sensitive documents, ensuring both data security and paper
                      recycling.
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-primary" />
                        <span>On-site or off-site shredding</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-primary" />
                        <span>Certificate of destruction</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-primary" />
                        <span>100% recycling of shredded paper</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">Request Service</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Truck className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle>Construction Waste</CardTitle>
                    </div>
                    <CardDescription>Recycling and disposal of construction materials</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      Our construction waste service helps builders and contractors manage and recycle construction and
                      demolition debris, reducing landfill waste and supporting sustainable building practices.
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Truck className="h-4 w-4 text-primary" />
                        <span>Dumpster rental and collection</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Truck className="h-4 w-4 text-primary" />
                        <span>Material sorting and recycling</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Truck className="h-4 w-4 text-primary" />
                        <span>LEED documentation support</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">Request Service</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs> */}