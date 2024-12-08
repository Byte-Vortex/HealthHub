"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Bot, Send, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast"; // Assuming toast is implemented here

export function QuickChat({ closeDialog }) {
  const { toast } = useToast()
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Hello ! How can I assist you Today?" },
      ]);
    }, 500);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  const validateInput = () => {
    if (!input.trim()) {
      toast({
        title: "Hey User !",
        description: "Please Enter your Question . . .",
        duration: 2000, // Duration in milliseconds
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    if (!validateInput()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/ai-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.message },
      ]);
    } catch (error) {
      console.error("Failed to send message:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        duration: 2000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col -mt-6 overflow-hidden font-comfortaa">
      <ScrollArea className="flex-1 py-2 px-1 sm:px-4 h-40 w-full">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                "flex items-start gap-3 text-xs sm:text-sm",
                message.role === "assistant" ? "flex-row" : "flex-row-reverse"
              )}
            >
              <div
                className={cn(
                  "p-2 rounded-full",
                  message.role === "assistant" ? "bg-primary" : "bg-muted"
                )}
              >
                {message.role === "assistant" ? (
                  <Bot className="w-4 h-4 text-primary-foreground" />
                ) : (
                  <User className="w-4 h-4" />
                )}
              </div>
              <div
                className={cn(
                  "rounded-lg px-3 py-2 max-w-[80%]",
                  message.role === "assistant"
                    ? "bg-muted"
                    : "bg-primary text-primary-foreground"
                )}
              >
                {message.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <Bot className="w-4 h-4 animate-spin" />
              Thinking . . .
            </div>
          )}
        </div>
      </ScrollArea>
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex gap-2">
        <Textarea
      value={input}
      onChange={(e) => setInput(e.target.value)}
      className="placeholder:text-xs sm:placeholder:text-sm  min-h-[60px]"
      onKeyDown={(e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault(); // Prevent default form submission behavior
          if (!isLoading) {
            handleSubmit(e); // Only submit if not loading
          }
        }
      }}
      placeholder="Type your Health-Related Question . . ."
    />
          <Button type="submit" disabled={isLoading}>
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </form>
    </div>
  );
}
