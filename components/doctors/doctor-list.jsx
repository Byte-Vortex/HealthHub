"use client"

import { Doctor } from "@/lib/types"
import { DoctorCard } from "./doctor-card"
import { useEffect, useState } from "react"
import { getDoctors } from "@/lib/api/doctors"
import { Skeleton } from "../ui/skeleton"

export function DoctorList() {
  const [doctors, setDoctors] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchDoctors = async () => {
      const data = await getDoctors()
      setDoctors(data)
      setLoading(false)
    }
    fetchDoctors()
  }, [])

  if (loading) {
    return <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
      <div className=" flex flex-col items-center space-y-4">
      <Skeleton className="h-40 w-full " />
      <Skeleton className="h-12 w-full" />    
      <Skeleton className="h-11 w-full" />  
      <Skeleton className="h-10 w-full" />  
      </div>
      <div className=" flex flex-col items-center space-y-4">
      <Skeleton className="h-40 w-full " />
      <Skeleton className="h-12 w-full" />    
      <Skeleton className="h-11 w-full" />  
      <Skeleton className="h-10 w-full" />    
      </div>
      <div className=" flex flex-col items-center space-y-4">
      <Skeleton className="h-40 w-full " />
      <Skeleton className="h-12 w-full" />    
      <Skeleton className="h-11 w-full" />  
      <Skeleton className="h-10 w-full" />  
      </div>
      <div className="hidden lg:hidden md:hidden sm:flex flex-col items-center space-y-4">
      <Skeleton className="h-40 w-full " />
      <Skeleton className="h-12 w-full" />    
      <Skeleton className="h-11 w-full" />  
      <Skeleton className="h-10 w-full" />  
      </div>
    
  </div>
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  )
}