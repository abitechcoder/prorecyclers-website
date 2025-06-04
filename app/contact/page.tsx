"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Mail, Phone, MapPin, CheckCircle, Clock } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  subject: z.string().min(1, {
    message: "Please select a subject.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    setIsSubmitted(true)
    // In a real application, you would send this data to your backend
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary/5 relative py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image src={"/images/contact-us-image.jpg"} fill alt="image of a customer support" className="object-cover object-center" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative z-10 container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-300">Contact Us</h1>
              <p className="max-w-[700px] text-white md:text-xl">
                Have questions or need more information? We're here to help you with your recycling needs in Badagry and
                beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="shadow-primary shadow-sm border-t-primary border-l-primary border-r-primary">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Phone</CardTitle>
                  <CardDescription className="flex flex-col gap-2">
                    <a href="tel:+2349040020889" className="text-muted-foreground hover:underline">
                      +234 904 0020 889
                    </a>
                    <a href="tel:+2348109891479" className="text-muted-foreground hover:underline">
                      +234 810 9891 479
                    </a>
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-primary shadow-sm border-t-primary border-l-primary border-r-primary">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Email</CardTitle>
                  <CardDescription>
                    <a href="mailto:info@prorecycler.ng" className="text-muted-foreground hover:underline">
                      prorecyclersng@gmail.com
                    </a>
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-primary shadow-sm border-t-primary border-l-primary border-r-primary">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Address</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    25, Opa Farm Street, Off Agelasho Ajara Vetho, Badagry, Lagos State.
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-primary shadow-sm border-t-primary border-l-primary border-r-primary">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Hours</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Monday - Saturday
                    <br />
                    9:00 AM - 5:00 PM
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Find Us</h2>
              <p className="max-w-[700px] text-muted-foreground">
                Visit our facility in Badagry to learn more about our recycling process
              </p>
            </div>
          </div>
          <div className="aspect-video w-full h-[300px] lg:h-[350px] overflow-hidden rounded-lg border">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.613496174295!2d2.8945649151025603!3d6.443647906091379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b63aae5960b1b%3A0x87c549469e91737a!2sOpa%20Farm%20Rd%2C%20Isalu%20103242%2C%20Lagos!5e0!3m2!1sen!2sng!4v1748686965326!5m2!1sen!2sng" className="w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 md:py-16 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl">
            {isSubmitted ? (
              <Card>
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-center text-2xl">Message Sent Successfully!</CardTitle>
                  <CardDescription className="text-center">Thank you for contacting Prorecyclers.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert>
                    <AlertTitle>Confirmation</AlertTitle>
                    <AlertDescription>
                      We have received your message and will get back to you as soon as possible.
                    </AlertDescription>
                  </Alert>
                  <div className="flex justify-center">
                    <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid gap-4 md:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your full name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid gap-4 md:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone (Optional)</FormLabel>
                              <FormControl>
                                <Input placeholder="Phone number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Subject</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a subject" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="general">General Inquiry</SelectItem>
                                  <SelectItem value="services">Recycling Services</SelectItem>
                                  <SelectItem value="pickup">Schedule Pickup</SelectItem>
                                  <SelectItem value="feedback">Feedback</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="How can we help you?"
                                className="min-h-32 resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
