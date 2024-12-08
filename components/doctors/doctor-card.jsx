"use client"

import { Doctor } from "@/lib/types"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Star, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function DoctorCard({ doctor }) {
  return (
    <Card>
      <CardHeader className="relative h-48">
        <Image
          src={doctor.image}
          alt={doctor.name}
          fill
          className="object-cover rounded-t-lg"
        />
      </CardHeader>
      <CardContent className="pt-4">
        <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
        <p className="text-muted-foreground mb-2">{doctor.specialization}</p>
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            <span>{doctor.experience} years</span>
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 mr-1 text-yellow-500" />
            <span>{doctor.rating}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/book-consultation/${doctor.id}`}>
            <Calendar className="w-4 h-4 mr-2" />
            Book Appointment
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}