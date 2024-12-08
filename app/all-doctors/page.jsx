import { DoctorList } from "@/components/doctors/doctor-list"
import { DoctorSearch } from "@/components/doctors/doctor-search"
import { FloatingBotButton } from "@/components/chat/floating-bot-button"
import { Separator } from "@/components/ui/separator"

export default function DoctorsPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-2">Find a Doctor</h1>
      <p className="text-muted-foreground mb-8">
        Book an appointment with our experienced healthcare professionals
      </p>
      <DoctorSearch />
      <Separator className="my-6" />
      <DoctorList />
    </div>
    <FloatingBotButton/>
    </div>
    
  )
}