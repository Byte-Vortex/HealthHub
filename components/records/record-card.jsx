"use client"

import { HealthRecord } from "@/lib/types"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, Flask, History } from "lucide-react"
import { format } from "date-fns"

interface RecordCardProps {
  record: HealthRecord
}

export function RecordCard({ record }: RecordCardProps) {
  const getIcon = () => {
    switch (record.type) {
      case "prescription":
        return <FileText className="w-5 h-5" />
      case "lab-result":
        return <Flask className="w-5 h-5" />
      case "medical-history":
        return <History className="w-5 h-5" />
    }
  }

  const getTypeLabel = () => {
    switch (record.type) {
      case "prescription":
        return "Prescription"
      case "lab-result":
        return "Lab Result"
      case "medical-history":
        return "Medical History"
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="p-2 bg-primary/10 rounded-full">
          {getIcon()}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold">{record.title}</h3>
          <p className="text-sm text-muted-foreground">
            {format(new Date(record.date), "PPP")}
          </p>
        </div>
        <Button variant="outline" size="icon">
          <Download className="w-4 h-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="text-sm">
          <span className="inline-block px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
            {getTypeLabel()}
          </span>
          <p className="mt-2">{record.content}</p>
        </div>
      </CardContent>
    </Card>
  )
}