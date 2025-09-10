import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white">
        <div className="container mx-auto grid gap-10 py-16 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-black/10 mb-4">
              <span className="h-2 w-2 rounded-full bg-teal-500" />
              <span className="text-xs font-medium text-foreground/70">
                Gentle, modern dental care
              </span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl leading-tight">
              Brighten Your Smile Every Day
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl">
              Dentica provides comprehensive dental care with friendly staff and
              the latest technology to keep your smile healthy.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button className="rounded-full bg-teal-500 hover:bg-teal-600 px-6 py-6 text-base">
                Book Appointment
              </Button>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sky-700 hover:underline"
              >
                Explore Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Emergency care",
                "Cosmetic dentistry",
                "Restorative dentistry",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-white px-4 py-2 text-sm shadow-sm ring-1 ring-black/5"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="relative mx-auto aspect-[4/5] max-w-md rounded-[2.5rem] bg-sky-100">
              <img
                src="https://images.unsplash.com/photo-1598257003969-88b563f3e8f7?q=80&w=1080&auto=format&fit=crop"
                alt="Happy patient"
                className="h-full w-full rounded-[2.5rem] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 hidden h-24 w-24 rounded-3xl bg-teal-200/50 md:block" />
            <div className="absolute -top-8 -right-8 hidden h-24 w-24 rounded-3xl bg-purple-200/50 md:block" />
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="container mx-auto py-16">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Why You Should Choose Our Dental Service?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          From routine cleanings to cosmetic procedures, our experienced
          dentists use modern technology to deliver the best results.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Professional Team",
              text: "Experienced dentists and hygienists focused on your comfort and safety.",
            },
            {
              title: "Latest Technology",
              text: "Digital x-rays and modern tools for accurate diagnosis and treatment.",
            },
            {
              title: "Satisfactory Service",
              text: "We listen carefully and create personalized treatment plans.",
            },
          ].map(({ title, text }) => (
            <Card
              key={title}
              className="rounded-2xl border-0 bg-white p-6 shadow-sm ring-1 ring-black/5"
            >
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-10 w-10 rounded-xl bg-sky-100" />
                  <div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{text}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="container mx-auto py-8">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-3xl font-bold md:text-4xl">
            Keep Your Smile Clean & Shine
          </h2>
          <Link className="text-sky-700 hover:underline" to="/services">
            All Services
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            [
              "Teeth Checkup",
              "https://images.unsplash.com/photo-1588771930297-620c366b6c16?q=80&w=1080&auto=format&fit=crop",
            ],
            [
              "Teeth Whitening",
              "https://images.unsplash.com/photo-1622206151225-20cc4b00a0ff?q=80&w=1080&auto=format&fit=crop",
            ],
            [
              "Dental Braces",
              "https://images.unsplash.com/photo-1588773846626-2f9b6fac1b0d?q=80&w=1080&auto=format&fit=crop",
            ],
            [
              "Teeth Implants",
              "https://images.unsplash.com/photo-1588776814546-1ffcf47267a8?q=80&w=1080&auto=format&fit=crop",
            ],
            [
              "Dental Filling",
              "https://images.unsplash.com/photo-1588774069260-9b0b2e6a2f1a?q=80&w=1080&auto=format&fit=crop",
            ],
            [
              "Cosmetic",
              "https://images.unsplash.com/photo-1581594693700-8900b9f4247f?q=80&w=1080&auto=format&fit=crop",
            ],
          ].map(([title, src]) => (
            <div
              key={title as string}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={src as string}
                  alt={title as string}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{title as string}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Comprehensive care tailored to you using the latest techniques
                  and gentle approach.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ and CTA */}
      <section className="container mx-auto grid gap-10 py-16 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">
            Got a question? Your doctor is just a click away
          </h2>
          <p className="mt-2 text-muted-foreground">
            Quick answers to our most common dental questions.
          </p>
          <Accordion
            type="single"
            collapsible
            className="mt-6 divide-y rounded-2xl border"
          >
            {[
              [
                "What dental services does your clinic offer?",
                "Cleanings, fillings, crowns, orthodontics, bridges, implants and more.",
              ],
              [
                "How often should I visit the dentist?",
                "We recommend every 6 months, or as advised for your oral health.",
              ],
              [
                "Do you accept dental insurance?",
                "Yes, we accept many providers and help with claims.",
              ],
              [
                "Are dental procedures painful?",
                "We use modern anesthesia and gentle techniques to reduce discomfort.",
              ],
            ].map(([q, a], i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left">{q}</AccordionTrigger>
                <AccordionContent>{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="relative">
          <div className="mx-auto max-w-md overflow-hidden rounded-[2rem] bg-muted/50">
            <img
              src="https://images.unsplash.com/photo-1559599101-f09722fb4948?q=80&w=1080&auto=format&fit=crop"
              alt="Ask doctor online"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 hidden h-24 w-24 rounded-3xl bg-sky-200/60 md:block" />
        </div>
      </section>

      {/* Testimonial */}
      <section className="relative bg-teal-50">
        <div className="container mx-auto grid gap-10 py-16 md:grid-cols-3 md:items-center">
          <div className="md:col-span-1">
            <div className="mx-auto aspect-[3/4] max-w-xs overflow-hidden rounded-[2rem]">
              <img
                src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?q=80&w=1200&auto=format&fit=crop"
                alt="Happy client"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5">
              <p className="text-xl md:text-2xl font-semibold leading-relaxed">
                Best dental clinic I've been to. Friendly staff, knowledgeable
                dentists, and the latest technology. Highly recommend!
              </p>
              <div className="mt-6 font-medium">Jessica William</div>
              <div className="text-sm text-muted-foreground">
                Award-winning best actress
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team preview */}
      <section className="container mx-auto py-16">
        <h2 className="text-center text-3xl font-bold">Our Expert Team</h2>
        <p className="mt-2 text-center text-muted-foreground">
          Our experienced team is dedicated to providing high-quality service.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Reza Mahendra", "Dentist"],
            ["Merliana Sari", "Dentist"],
            ["Daniel Thompson", "Dentist"],
            ["James Brown", "Dentist"],
          ].map(([name, role], i) => (
            <div
              key={i}
              className="flex flex-col items-center rounded-3xl bg-sky-50 p-6 text-center ring-1 ring-black/5"
            >
              <div className="mb-4 h-24 w-24 overflow-hidden rounded-full bg-white">
                <img
                  src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? "men" : "women"}/${20 + i}.jpg`}
                  alt={name as string}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="font-semibold">{name}</div>
              <div className="text-sm text-muted-foreground">{role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-purple-900 py-8">
        <div className="container mx-auto grid gap-4 text-white md:grid-cols-3">
          {[
            ["EMERGENCY CALL", "331-870-6671"],
            ["MAKE AN APPOINTMENT", "331-870-6672"],
            ["SERVICE AREA", "331-870-6673"],
          ].map(([label, phone]) => (
            <div
              key={label}
              className="flex items-center justify-between rounded-2xl bg-purple-800/70 px-6 py-4"
            >
              <div className="font-medium">{label}</div>
              <div className="text-lg font-semibold">{phone}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
