import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HowItWorks } from "@/components/how-it-works";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero/>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Services Overview */}
      <Services />

      {/* Impact Stats */}
      <section className="bg-primary/10 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Our Environmental Impact
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Making a measurable difference in Badagry and across Nigeria
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background shadow-sm">
              <div className="text-4xl font-bold text-primary">2M+</div>
              <p className="text-sm text-center text-muted-foreground">
                Kilograms of waste recycled annually
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background shadow-sm">
              <div className="text-4xl font-bold text-primary">500+</div>
              <p className="text-sm text-center text-muted-foreground">
                Trees saved through paper recycling
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background shadow-sm">
              <div className="text-4xl font-bold text-primary">1.5K+</div>
              <p className="text-sm text-center text-muted-foreground">
                Tons of CO2 emissions prevented
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background shadow-sm">
              <div className="text-4xl font-bold text-primary">5K+</div>
              <p className="text-sm text-center text-muted-foreground">
                Community members served
              </p>
            </div>
          </div>
          {/* <div className="flex justify-center mt-8">
            <Button asChild variant="default">
              <Link href="/impact">Learn More</Link>
            </Button>
          </div> */}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                What Our Community Says
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Hear from businesses and individuals in Badagry who have
                partnered with us
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
                        <AvatarFallback className="bg-primary/20">
                          AO
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          "Prorecyclers has revolutionized our waste management.
                          Their reliable service and commitment to
                          sustainability perfectly align with our company's
                          environmental goals."
                        </p>
                        <p className="mt-2 font-semibold">Adebayo Ogundimu</p>
                        <p className="text-xs text-muted-foreground">
                          Badagry Manufacturing Ltd
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback className="bg-primary/20">
                          FI
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          "As a hotel business, we generate significant waste.
                          Prorecyclers's comprehensive recycling program has
                          helped us reduce our environmental footprint
                          significantly."
                        </p>
                        <p className="mt-2 font-semibold">Fatima Ibrahim</p>
                        <p className="text-xs text-muted-foreground">
                          Seaside Resort Badagry
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback className="bg-primary/20">
                          CO
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          "The detailed reporting and community education
                          provided by Prorecyclers have been invaluable for our
                          corporate social responsibility initiatives."
                        </p>
                        <p className="mt-2 font-semibold">Chinedu Okoro</p>
                        <p className="text-xs text-muted-foreground">
                          Lagos West Trading Company
                        </p>
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
                        <AvatarFallback className="bg-primary/20">
                          BA
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          "The doorstep pickup service is incredibly convenient!
                          I'm proud to contribute to a cleaner Badagry through
                          proper recycling."
                        </p>
                        <p className="mt-2 font-semibold">
                          Mrs. Blessing Adeyemi
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Badagry Resident
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback className="bg-primary/20">
                          TF
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          "I needed to dispose of old electronics responsibly.
                          Prorecyclers made the process easy and gave me
                          confidence about data security."
                        </p>
                        <p className="mt-2 font-semibold">Tunde Fashola</p>
                        <p className="text-xs text-muted-foreground">
                          IT Professional
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback className="bg-primary/20">
                          OK
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          "The educational resources from Prorecyclers have
                          helped our family become more conscious about waste
                          reduction and proper recycling practices."
                        </p>
                        <p className="mt-2 font-semibold">Mr. & Mrs. Okafor</p>
                        <p className="text-xs text-muted-foreground">
                          Family of Five
                        </p>
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
      <CTA/>
    </div>
  );
}
