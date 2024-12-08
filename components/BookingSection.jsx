"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardHeader,
} from "./ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { motion, useAnimation } from "framer-motion";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { DatePicker } from "./ui/datepicker";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { Label } from "./ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Termsconditions } from "./Terms-conditions";
import Link from "next/link";

export default function BookingSection() {
  const [acceptTerms, setAcceptTerms] = useState(false);
  const router = useRouter();

  const handleAccept = () => {
    setAcceptTerms(true);
  };

  const toasttrigger=()=>{
    if(!acceptTerms) {
    toast({
      description: "Please read and accept the terms and conditions to proceed.",
    });}
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (acceptTerms) {
      // Process payment logic here
      console.log("Processing payment...");
      router.push("/confirmation");
    } else {
      toast({
        description: "Please accept the terms and conditions to proceed.",
        duration: "2000",
      });
    }
  };
  const formControls = useAnimation();
  const [formRef, formInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  useEffect(() => {
    if (formInView) formControls.start("visible");
  }, [formControls, formInView]);
  const formVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div>
      {/* Booking Section */}
      <section className="py-20 bg-muted/50 px-7" id="bookingsection">
        <div className="container mx-auto">
          <motion.div
            ref={formRef}
            variants={formVariants}
            initial="hidden"
            animate={formControls}
          >
            <div className="max-w-2xl mx-auto">
              <Card className="max-w-lg mx-auto bg-background selection:bg-transparent">
                <CardHeader>
                  <CardTitle className="text-4xl mb-4 text-center">
                    Book Your Appointment Now
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-l text-center">
                    Fill out the form below to get started
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-5">
                  <form noValidate onSubmit={handleSubmit}>
                    <div className="grid w-full items-center gap-4">
                      <div className="flex flex-col space-y-1.5">
                        <Input
                          id="name"
                          className="h-14 selection:text-primary"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Input
                          id="email"
                          className="h-14 selection:text-primary"
                          placeholder="Your Email"
                          type="email"
                        />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <DatePicker />
                      </div>

                      <div className="flex flex-col space-y-1.5">
                        <Textarea
                          className="h-20 selection:text-primary"
                          id="message"
                          placeholder="Additional Details"
                        />
                      </div>
                      <div className="flex items-center space-x-2 ">
                        <Checkbox
                          checked={acceptTerms}
                          onClick={toasttrigger}
                          onCheckedChange={() => {
                            setAcceptTerms(false);
                          }} // Disable manual checkbox change
                          required
                        />
                        <Label htmlFor="terms" className="text-sm">
                          I Agree to the
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                id="terms"
                                variant="normal"
                                className="hover:bg-transparent text-primary hover:text-primary px-1"
                              >
                                Terms of Service.
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="w-4/5 rounded-md">
                              <DialogTitle className="text-center font-comfortaa text-lg">
                                Acceptance of Terms
                              </DialogTitle>
                              <ScrollArea className="h-[97%] w-full">
                                <div className="flex flex-col">
                                <Termsconditions />
                                <DialogClose>
                                  <Button
                                    className="justify-center items-center"
                                    onClick={handleAccept}
                                  >
                                    Accept
                                  </Button>
                                </DialogClose>
                                </div>
                                
                              </ScrollArea>
                            </DialogContent>
                          </Dialog>
                        </Label>
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Button type="submit" className="w-full h-12">
                          <Send className="mr-2 h-8 w-4" /> Submit
                        </Button>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
