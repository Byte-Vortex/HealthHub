import { AIChatInterface } from "@/components/ai-chat/chat-interface"

export default function AIChatPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-2">AI Health Assistant</h1>
      <p className="text-muted-foreground mb-8">
        Get instant answers to your health-related questions
      </p>
      <AIChatInterface />
    </div>
  )
}