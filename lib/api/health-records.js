import { HealthRecord } from "@/lib/types"

const mockRecords = [
  {
    id: "1",
    patientId: "1",
    type: "prescription",
    date: "2024-04-01T10:00:00Z",
    title: "Antibiotic Prescription",
    content: "Amoxicillin 500mg - Take 1 capsule 3 times daily for 7 days",
    doctorId: "1"
  },
  {
    id: "2",
    patientId: "1",
    type: "lab-result",
    date: "2024-03-28T15:30:00Z",
    title: "Blood Test Results",
    content: "Complete Blood Count (CBC) - All values within normal range",
    doctorId: "2"
  },
  {
    id: "3",
    patientId: "1",
    type: "medical-history",
    date: "2024-03-15T09:00:00Z",
    title: "Annual Physical Examination",
    content: "Regular checkup - Blood pressure: 120/80, Heart rate: 72 bpm",
    doctorId: "1"
  }
]

export async function getHealthRecords(type){
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  if (type) {
    return mockRecords.filter(record => record.type === type)
  }
  
  return mockRecords
}

export async function createHealthRecord(record) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  const newRecord = {
    ...record,
    id: Math.random().toString(36).substr(2, 9),
    patientId: "1" // In production, this would come from the authenticated user
  }
  
  mockRecords.push(newRecord)
  return newRecord
}