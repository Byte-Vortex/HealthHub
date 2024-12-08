"use client"

import { useEffect, useState } from "react"
import { HealthRecord } from "@/lib/types"
import { getHealthRecords } from "@/lib/api/health-records"
import { RecordCard } from "./record-card"

interface HealthRecordsListProps {
  type?: HealthRecord["type"]
}

export function HealthRecordsList({ type }: HealthRecordsListProps) {
  const [records, setRecords] = useState<HealthRecord[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRecords = async () => {
      const data = await getHealthRecords(type)
      setRecords(data)
      setLoading(false)
    }
    fetchRecords()
  }, [type])

  if (loading) {
    return <div className="text-center py-8">Loading records...</div>
  }

  if (records.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        No health records found.
      </div>
    )
  }

  return (
    <div className="grid gap-4 mt-6">
      {records.map((record) => (
        <RecordCard key={record.id} record={record} />
      ))}
    </div>
  )
}