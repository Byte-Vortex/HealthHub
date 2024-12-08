"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const testimonials = [
  {
    name: "- Michael T.",
    content:
      "I love how easy it is to find doctors and book appointments. This platform has simplified my healthcare journey.",
  },
  {
    name: "- Sarah J.",
    content:
      "HealthHub has been a game-changer for managing my health. The AI chatbot is incredibly helpful!",
  },
];

export function TestimonialCarousel() {
  const sectionControls = useAnimation();
  const [sectionRef, sectionInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  useEffect(() => {
    if (sectionInView) sectionControls.start("visible");
  }, [sectionControls, sectionInView]);
  const sectionVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });
  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);
  const testimonialVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-foreground/10 ">
      <div className="py-10 flex-col justify-center items-center">
        <motion.div
          ref={sectionRef}
          variants={sectionVariants}
          initial="hidden"
          animate={sectionControls}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            What Our Users Say
          </h2>
        </motion.div>
        <motion.div
          ref={ref}
          variants={testimonialVariants}
          initial="hidden"
          animate={controls}
        >
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-xl sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto px-4  selection:bg-transparent overflow-x-hidden transition-shadow"
          >
            <CarouselContent className="flex">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="w-full">
                  <div className="p-1">
                    <Card className="bg-background/20 border-none">
                      <CardContent className="flex flex-col items-center justify-center p-6">
                        <p className="text-center mt-4">
                          &ldquo; {testimonial.content} &rdquo;
                        </p>
                        <p className="font-bold font-geistSans pt-3 text-2xl">
                          {testimonial.name}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
        {/* <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="text-center pt-5"
        >
          <Link href="/testimonials">
            <Button className="font-bold text-sm rounded-sm">See More</Button>
          </Link>
        </motion.div> */}
      </div>
    </div>
  );
}
