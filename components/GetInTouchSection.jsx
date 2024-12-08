"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/hooks/use-toast"
// import axios from "axios";

export default function Getintouch() {
const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    const { name, email, subject, message } = formData;
    if (!name || !email || !message) {
        toast({
            description: "All fields are required",
          })
      return false;
    }
    // Check if the email is valid
    if (!validateEmail(email)) {
        toast({
            description: "Enter a Valid Email Address 😁",
          })
      return false;
    }
    
    // Check the message length (minimum 20 and maximum 500 characters)
    if (message.length < 20) {
        toast({
            description:"Message must be at Least 20 Characters Long 🥲",
          })
      return false;
    }

    if (message.length > 200) {
        toast({
            description:"Message cannot Exceed 200 Characters 🤗",
          })      
          return false;
    }

    return true;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!validateForm()) return;
  //   setStatus("Wait Tightly ! Your Message is being Sent😃");

  //   try {
  //     const response = await axios.post("/api/getintouch", formData);

  //     if (response.status === 201) {
  //       setStatus("You Message has been sent successfully!🙂");
  //       setFormData({ name: "", email: "", message: "" });
  //     }
  //   } catch (error) {
  //     setStatus("Failed to send message.🙂‍↕️");
  //     setFormData({ name: "", email: "", message: "" });
  //   } finally {
  //     setFormData({ name: "", email: "", message: "" });
  //     setTimeout(() => {
  //       setStatus("");
  //     }, 1500);
  //   }
  // };

  return (
    <div>
      <section id="contact" className=" py-20">
        <Card className="max-w-lg mx-auto selection:bg-transparent">
          <CardHeader>
            <CardTitle className="text-4xl mb-4">Get in Touch</CardTitle>
            <CardDescription className="text-gray-600 text-l">
              Send me a message and I&apos;ll get back to you as soon as
              possible.
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-5">
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Input
                    id="name"
                    className="h-14 selection:text-pink-700"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Input
                    id="email"
                    className="h-14 selection:text-pink-700"
                    placeholder="Your Email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Textarea
                    className="h-20 selection:text-pink-700"
                    id="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Button type="submit" className="w-full h-full">
                    <Send className="mr-2 h-8 w-4" /> Send Message
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

