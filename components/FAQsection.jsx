"use client"
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function FAQsection() {
  const sectionControls = useAnimation();
  const [sectionRef, sectionInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  useEffect(() => {
    if (sectionInView) sectionControls.start("visible");
  }, [sectionControls, sectionInView]);
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <div className="text-foreground ">
      {/* FAQ Section */}
      <section className="py-10 px-7">
        <motion.div
          ref={sectionRef}
          variants={sectionVariants}
          initial="hidden"
          animate={sectionControls}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <Accordion
              type="single"
              collapsible
              className="w-full max-w-2xl mx-auto"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What types of events do you cater to?
                </AccordionTrigger>
                <AccordionContent>
                  We cater to a wide range of events, including but not limited
                  to weddings, corporate events, birthday parties, anniversary
                  events, festivals, and private gatherings. Our services can be
                  customized to suit any type of events.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  How far in advance should I book your services?
                </AccordionTrigger>
                <AccordionContent>
                  We recommend booking our services at least 2-3 weeks in
                  advance, especially for peak seasons. However, we also
                  accommodate last-minute bookings when possible. The earlier
                  you book, the better we can ensure availability and prepare
                  for your event.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Are your tattoo artists and their equipment safe?
                </AccordionTrigger>
                <AccordionContent>
                  Absolutely. All our tattoo artists are expert professionals
                  who adhere to strict health and safety standards. We use only
                  fabric paint, sterile, single-use equipment for temporary
                  tattoos, ensuring the highest level of hygiene and safety for
                  all our clients.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Can I customize the services for my event?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we offer customization options for our interactive
                  services. We can tailor the activities to fit your event
                  theme, incorporate your company branding, or create custom
                  challenges. Discuss your ideas with our event planners, and
                  we&apos;ll work to make your vision a reality.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
