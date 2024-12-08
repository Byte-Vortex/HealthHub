"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function DoctorSearch() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <div className="space-y-2">
        <Label htmlFor="search">Search by name</Label>
        <Input
          id="search"
          placeholder="Enter doctor's name"
          type="search"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="specialization">Specialization</Label>
        <Select>
          <SelectTrigger id="specialization">
            <SelectValue placeholder="Select specialization" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="cardiology">Cardiology</SelectItem>
            <SelectItem value="dermatology">Dermatology</SelectItem>
            <SelectItem value="neurology">Neurology</SelectItem>
            <SelectItem value="orthopedics">Orthopedics</SelectItem>
            <SelectItem value="pediatrics">Pediatrics</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="availability">Availability</Label>
        <Select>
          <SelectTrigger id="availability">
            <SelectValue placeholder="Select availability" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="tomorrow">Tomorrow</SelectItem>
            <SelectItem value="this-week">This Week</SelectItem>
            <SelectItem value="next-week">Next Week</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}