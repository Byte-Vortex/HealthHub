"use client";

import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Icons } from "../ui/Icons";
import { useSession } from "next-auth/react";
import Link from "next/link";

export function RegisterForm() {
  const { data: session } = useSession();
  const { toast } = useToast();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [oauthLoading, setOauthLoading] = useState(false);

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session, router]);

  async function onSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        toast({
          title: `Welcome ${name} !`,
          description:"Please Sign In to Continue!"
        });
        setTimeout(()=>{
          router.push("/signin"); // Redirect to the login page after successful registration
        },1500)
         
      } else {
        const errorData = await response.json();
        console.log(errorData.error )
        toast({
          title: "Registration Failed",
          description: errorData.error || "Please try again.",
        });
      }
    } catch (error) {
      toast({
        title: "Something Went Wrong",
        description: "Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  async function handleGoogleRegister() {
    setOauthLoading(true);
    try {
      const result = await signIn("google", { redirect: true, callbackUrl: "/" });

      if (result?.error) {
        toast({
          title: "Google sign-in failed",
        });
      } else {
        router.push("/"); // Redirect to the homepage or desired location
        router.refresh();
      }
    } catch (error) {
      toast({
        title: "Something Went Wrong",
        description: "Please try again later.",
      });
    } finally {
      setOauthLoading(false);
    }
  }

  return (
    <Card className="p-6 max-w-md mx-auto">
      <form onSubmit={onSubmit} className="space-y-3">
        <div className="space-y-1">
          <Label htmlFor="name" className="sm:text-sm text-xs">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your Name"
            className="sm:placeholder:text-sm placeholder:text-xs"
            required
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="email" className="sm:text-sm text-xs">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your Email"
            className="sm:placeholder:text-sm placeholder:text-xs"
            required
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="password" className="sm:text-sm text-xs">
            Password
          </Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your Password"
            className="sm:placeholder:text-sm placeholder:text-xs"
            required
          />
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Registering..." : "Register"}
        </Button>
      </form>
      <div className="mt-3 flex flex-col justify-center">
        <Button
          variant="outline"
          className="w-full"
          onClick={handleGoogleRegister}
          disabled={oauthLoading}
        >
          {oauthLoading ? (
            <>
              Signing Up with...
              <Icons.google className="ml-2 h-4 w-4" />
            </>
          ) : (
            <>
              <Icons.google className="mr-2 h-4 w-4" />
              Sign Up with Google
            </>
          )}
        </Button>
        <div className="mt-3 px-2 space-x-2 text-sm">
          <Label className="text-[13px]">Already Have a Account !</Label>
        <Link href="/signin" className="text-primary">Sign In</Link>
        </div>
        
      </div>
    </Card>
  );
}
