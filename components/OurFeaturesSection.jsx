"use client";
import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { cva } from "class-variance-authority";
import { Calendar, Clock, MessageSquare, Shield } from "lucide-react"

// Card Data Array
const cardData = [
  {
    icon: <Calendar className="w-12 h-12 text-primary mb-4" />,
    title: "Easy Scheduling",
    content:
      "Book appointments with doctors at your convenience.",
    animationVariant: {
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    },
    link: "/",
  },
  {
    icon: <MessageSquare className="w-12 h-12 text-primary mb-4" />,
    title: "AI Health Assistant",
    content:
      "Get instant answers to your medical Queries !",
    animationVariant: {
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    },
    link: "/",
  },
  {
    icon: <Shield className="w-12 h-12 text-primary mb-4" />,
    title: "Secure Records",
    content:
      "Your medical records are safe and accessible.",
    animationVariant: {
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    },
    link: "/",
  },
  {
    icon: <Clock className="w-12 h-12 text-primary mb-4" />,
    title: "24/7 Support",
    content:
      "Round-the-clock assistance for your needs.",
    animationVariant: {
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    },
    link: "/",
  }
];

const TitleStyle = cva("flex items-center text-2xl ");
const DescriptionStyle = cva("text-center text-base ");

// AnimatedCard Component
const AnimatedCard = ({ card }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
    delay: 0.5,
  });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      variants={card.animationVariant}
      initial="hidden"
      animate={controls}
    >
      <Card className="h-auto justify-center items-center">
        <CardHeader>
          {card.icon}
          <CardTitle className={cn(TitleStyle())}><Link href={card.link}>{card.title}</Link></CardTitle>
          <CardDescription className={cn(DescriptionStyle())}>
            {card.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{card.content}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function OurFeaturesSection() {
  // Section Animation
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.8, triggerOnce: true });
  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const TitleControls = useAnimation();
  const [titleref, titleinView] = useInView({ threshold: 0.2, triggerOnce: true });
  useEffect(() => {
    if (titleinView) TitleControls.start("visible");
  }, [TitleControls, titleinView]);

  return (
    <div>
      {/* Our Features Section */}
      <section className="py-20 w-full">
        <div className="container mx-auto w-full md:px-2 px-6">
          <motion.div
            ref={titleref}
            variants={titleVariants}
            initial="hidden"
            animate={TitleControls}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">
              Our Services            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cardData.map((card, index) => (
              <AnimatedCard key={index} card={card} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
