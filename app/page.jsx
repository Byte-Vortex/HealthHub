import * as React from "react";
import BookingSection from "@/components/BookingSection";
import OurFeaturesSection from "@/components/OurFeaturesSection";
import { TestimonialCarousel } from "@/components/TestimonialsCarousel";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FloatingBotButton } from "@/components/chat/floating-bot-button";

export default function HealthHub() {
  return (
    <div className="-mt-3 h-auto bg-background text-foreground ">
      
        <section className="selection:bg-transparent">
        <div className="relative h-[calc(90vh)] w-full overflow-hidden">
          
          <Image
            src="/hero.jpg"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
            alt="Healthcare Hero"
            priority
            className="object-cover  brightness-50"
          />
          
          <div className="absolute px-2 flex items-center justify-start ml-10 md:ml-28 mx-auto pointer-events-none overflow-hidden">
          <div className="absolute inset-0 z-10 text-white">
            <h1 className="text-5xl font-bold mb-4">
              Your Health, Our Priority
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Access world-class healthcare services, book consultations with
              expert doctors, and manage your health records securely - all in
              one place.
            </p>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href="/book-consultation">Book Consultation</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="/ai-chat">Chat with AI Assistant</Link>
              </Button>
            </div>
          </div>
          </div>
          
        </div>
        <FloatingBotButton/>
        </section>
        <BookingSection />
        <OurFeaturesSection />
        <TestimonialCarousel />
      
    </div>
  );
}
