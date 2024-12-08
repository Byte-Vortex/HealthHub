import { NextResponse } from "next/server"
import { createHealthRecord } from "@/lib/api/health-records"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    const data = await req.json()
    const record = await createHealthRecord(data)
    
    return NextResponse.json(record)
  } catch (error) {
    console.error("Health Records API Error:", error)
    return NextResponse.json(
      { error: "Failed to create health record" },
      { status: 500 }
    )
  }
}