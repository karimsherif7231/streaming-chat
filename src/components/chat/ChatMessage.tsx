"use client";

import { Bot, User } from "lucide-react";


interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
}


export default function ChatMessage({
  role,
  content,
}: ChatMessageProps) {

  const isUser = role === "user";


  return (

    <div
      className={`flex gap-3 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >

      {!isUser && (

        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">

          <Bot className="h-5 w-5" />

        </div>

      )}



      <div
        className={`
          max-w-[85%]
          rounded-2xl
          px-4
          py-3
          text-sm
          leading-relaxed
          whitespace-pre-wrap
          shadow-sm

          ${
            isUser
              ? "rounded-br-md bg-primary text-primary-foreground"
              : "rounded-bl-md bg-muted"
          }
        `}
      >

        {content}

      </div>




      {isUser && (

        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-background">

          <User className="h-5 w-5" />

        </div>

      )}

    </div>

  );
}