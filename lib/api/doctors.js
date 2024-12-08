import { Doctor } from "@/lib/types"

// Temporary mock data - replace with actual API calls
const mockDoctors = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    specialization: "Cardiology",
    experience: 12,
    rating: 4.8,
    availableSlots: ["2024-04-10T09:00", "2024-04-10T10:00"],
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    specialization: "Neurology",
    experience: 15,
    rating: 4.9,
    availableSlots: ["2024-04-10T14:00", "2024-04-10T15:00"],
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "3",
    name: "Dr. Emily Martinez",
    specialization: "Pediatrics",
    experience: 8,
    rating: 4.7,
    availableSlots: ["2024-04-11T09:00", "2024-04-11T10:00"],
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=2070&auto=format&fit=crop"
  }
]

export async function getDoctors(){
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  return mockDoctors
}

export async function getDoctor(id){
  return mockDoctors.find(doctor => doctor.id === id)
}