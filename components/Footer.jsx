"use client"
import { HeartPulse,Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

export default function Footer() {
  const LinkStyle = cva("text-base hover:underline ");

  return (
    <>
      
        <footer className="font-comfortaa bg-gradient-to-l from-primary/50 to-primary/10">
          <div className="container mx-auto px-8 py-6">
            <div className="grid-cols-1 md:flex md:justify-between gap-3">
              <div>
                <Link href="/" className="flex gap-2 items-center py-4">
                <HeartPulse className="w-10 h-10 -mt-1 text-primary" />
                  <h2 className="text-4xl font-semibold">HealthHub</h2>
                </Link>

                <p className="text-lg justify-center">
                  Empowering You to Take Charge of Your Health
                </p>
              </div>
              <div className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about" className={cn(LinkStyle())}>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className={cn(LinkStyle())}>
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className={cn(LinkStyle())}>
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className={cn(LinkStyle())}>
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="pt-6">
                <h2 className="text-2xl font-semibold mb-4 ">
                  Connect With Us
                </h2>
                <p className="text-base">
                  Follow us on social media for health tips and updates.
                </p>
                <div className="flex pl-3 space-x-16 py-6">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-6 w-6 hover:text-primary" />
                  </a>
                  <a
                    href="https://linkedin.com/in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-6 w-6 hover:text-primary" />
                  </a>
                  <a
                    href="https://x.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="h-6 w-6 hover:text-primary" />
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-6 flex justify-center items-center selection:bg-transparent ">
              <h3 className="text-base">
                Copyright &copy; 2024 HealthHub. All rights reserved.
              </h3>
            </div>
          </div>
        </footer>
    </>
  );
}
