"use client"
import Link from "next/link";
import { HeartPulsePulse, Github, Linkedin, Twitter } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { ModeToggle } from "./Theme-btn";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react"
import { HeartPulse } from "lucide-react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

export default function Navbar() {
  const router = useRouter();
  const { toast } = useToast
  const pathname = usePathname()
  const { data: session } = useSession()

  const LinkStyle = cva(
    "block font-semibold text-1xl py-2 px-4 cursor-pointer"
  );

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/all-doctors", label: "All Doctors" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="top-0 sticky backdrop-blur selection:bg-transparent z-50 font-comfortaa ">
      <div className="mx-auto px-2 py-2 flex justify-between items-center">
        <Link href="/" className="hidden md:flex lg:ml-24 gap-1 text-3xl font-bold ">
          <HeartPulse className="w-8 h-8 text-primary" />
          HealthHub
        </Link>
        <Link href="/" className="md:hidden flex gap-1 text-3xl font-bold">
          <HeartPulse className="w-8 h-8 text-primary" />
          HealthHub
        </Link>
        <div className="hidden md:flex items-center gap-4 ">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors ${pathname === item.href ? "text-primary transition-transform duration-150" : "transition-transform duration-150 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-primary after:transition-[width]   after:duration-500 group-hover:after:w-full hover:after:w-full after:mx-auto after:right-auto"
                }flex text-base font-extrabold text-foreground`}
            >
              {item.label}
            </Link>

          ))}
        </div>
        <div className="hidden md:flex justify-baseline items-center lg:mr-2 md:mr-2 -mr-1">

          {session ? (
            <>
              <span className="text-sm lg:pr-4  px-1 text-muted-foreground">
                {session.user.name}
              </span>
              <Button variant="outline"
                onClick={() => {
                  signOut();
                  // router.push("/")
                  toast({
                    title: "Logout Successful",
                  });
                }}>
                Sign Out
              </Button>
              <ModeToggle></ModeToggle>
            </>
          ) : (
            <>
              <div className="space-x-2">
                <ModeToggle></ModeToggle>
                <Button asChild>
                  <Link href="/signin">Get Started</Link>
                </Button>
              </div>

            </>
          )}
        </div>

        <div className="md:hidden flex items-center gap-3 ">
          {session ? (
            <>

            </>
          ) : (
            <>
              <Button className="p-2" asChild>
                <Link href="/signin">Get Started</Link>
              </Button>
            </>
          )}
          <Sheet className="">
            <SheetTrigger>
              <svg
                className="-mt-2 w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </SheetTrigger>
            <SheetContent className="backdrop-blur-2xl selection:bg-transparent ">
              <SheetHeader className="flex justify-center mt-10 items-center text-3xl">
                <SheetTitle>
                  <SheetClose asChild>
                    <Link
                      href="/"
                      className="flex font-bold text-3xl font-comfortaa gap-2"
                    >
                      <HeartPulse className="w-9 h-9 -mt-1 text-primary" />
                      HealthHub
                    </Link>
                  </SheetClose>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col font-comfortaa justify-center mt-6 items-center">
                <SheetClose asChild>
                  <Link href="/home" className={cn(LinkStyle())}>Home</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/about" className={cn(LinkStyle())}>About</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/all-doctors" className={cn(LinkStyle())}>All Doctors</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/contact" className={cn(LinkStyle())}>Contact Us</Link>
                </SheetClose>
                <ModeToggle></ModeToggle>
                {session ? (
                  <>
                    <SheetClose asChild>
                      <Button
                        variant="outline"
                        className="mt-4"
                        onClick={() => {
                          signOut();
                          router.push("/")
                          toast({
                            title: "Logout Successful",
                          });
                        }}
                      >
                        Sign Out
                      </Button>
                    </SheetClose>

                  </>
                ) : (
                  <>

                  </>
                )}
              </div>
              <SheetFooter>
                <div className="mx-auto font-comfortaa mt-28 py-4 justify-center items-center">
                  <p className="text-sm justify-center text-center">
                    Copyright &copy; 2024 HealthHub.
                    <br /> All rights reserved.
                  </p>
                  <div className="flex items-center justify-center space-x-8 py-8">
                    <a
                      href="https://github.com/Byte-Vortex"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-6 w-6" />
                    </a>
                    <a
                      href="https://linkedin.com/in/bytevortex/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a
                      href="https://x.com/Byte_Vortex"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
