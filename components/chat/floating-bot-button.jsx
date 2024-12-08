"use client"

import { Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription
} from "@/components/ui/dialog"
import { QuickChat } from "./quick-chat"
import { useState } from "react"

export function FloatingBotButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-24 right-8 z-50">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
  <DialogTrigger asChild>
    <Button
      size="icon"
      className="h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
    >
      <Bot className="h-8 w-8" />
    </Button>
  </DialogTrigger>
  <DialogContent variant="right" aria-describedby="custom-description">
    <DialogHeader>
      <DialogTitle className="text-center font-comfortaa text-xs sm:text-xl">
        HealthHub AI Health Assistant
      </DialogTitle>
      <DialogDescription className="text-sm text-gray-500">
        
      </DialogDescription>
    </DialogHeader>
    <QuickChat closeDialog={() => setIsOpen(false)} />
  </DialogContent>
</Dialog>

    </div>
  )
}