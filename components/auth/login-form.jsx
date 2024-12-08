"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { Icons } from "../ui/Icons";
import Link from "next/link";
import { Title } from "@radix-ui/react-dialog";
import { title } from "process";

export function LoginForm() {
  const { data: session } = useSession();
  const { toast } = useToast();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [oauthloading, setOauthloading] = useState(false);

  useEffect(() => {
    if (session) {
      router.push("/")
    }
  }, [session,router]);

  async function onSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

  //   try {
  //     const response = await fetch("/api/auth/signin", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ email, password }),
  //     });

  //     if (response.ok) {
  //       toast({
  //         title: "Sign In Successfull !",
  //       });
  //       router.push("/"); // Redirect to the login page after successful registration
  //     } else {
  //       const errorData = await response.json();
  //       console.log(errorData.error )
  //       toast({
  //         title: "Sign In Failed",
  //         description: errorData.error || "Please try again.",
  //       });
  //     }
  //   } catch (error) {
  //     toast({
  //       title: "Something Went Wrong",
  //       description: "Please try again later.",
  //     });
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }
  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false
    })
    if(result?.ok){
      toast({
        title:"Login Successfull"
      })
      router.push("/")
    }

    if (result?.error) {
      toast({
        title:"Invalid credentials"
      })
    } else {
      router.push("/")
      router.refresh()
    }
  } catch (error) {
    toast({
      title: "Something Went Wrong",
      description: "Please try again later.",
    })
  } finally {
    setIsLoading(false)
  }
}

  async function handleGoogleSignIn() {
    setOauthloading(true);
    try {
      const result = await signIn("google", {
        // redirect: true,
        // callbackUrl: "/",
      });
  
      if (result?.error) {
        toast({
          title: "Google sign-in failed",
        });
      }
    } catch (error) {
      toast({
        title: "Something went wrong. Please try again.",
      });
    } finally {
      setOauthloading(false);
    }
  }
  

  return (
    <Card className="p-6 max-w-md mx-auto">
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="space-y-2">
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
        <div className="space-y-2">
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
          {isLoading ? "Signing in..." : "Sign In"}
        </Button>
      </form>
      <div className="mt-4 flex flex-col justify-center">
        <Button
          variant="outline"
          className="w-full"
          onClick={handleGoogleSignIn}
          disabled={oauthloading}
        >
          {oauthloading ? (
            <>
            Signing In with . . .<Icons.google className="mr-2 h-4 w-4" />
          </>
          ) : (
            <>
              <Icons.google className="mr-2 h-4 w-4" />
              Sign In with Google
            </>
          )}

        </Button>
        <div className="mt-4 px-2 space-x-2 text-sm">
          <Label className="text-[13px]">Don&apos;t Have a Account !</Label>
        <Link href="/signup" className="text-primary">Sign Up</Link>
        </div>
      </div>
    </Card>
  );
}
