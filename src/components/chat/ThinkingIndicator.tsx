"use client";

import { Bot } from "lucide-react";


export default function ThinkingIndicator() {

  return (

    <div
      className="flex items-center gap-3"
      aria-live="polite"
      aria-label="Assistant is thinking"
    >

      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">

        <Bot className="h-5 w-5" />

      </div>



      <div className="flex items-center gap-1 rounded-2xl bg-muted px-4 py-3">

        <span className="h-2 w-2 animate-bounce rounded-full bg-foreground" />

        <span className="h-2 w-2 animate-bounce rounded-full bg-foreground [animation-delay:150ms]" />

        <span className="h-2 w-2 animate-bounce rounded-full bg-foreground [animation-delay:300ms]" />

      </div>

    </div>

  );
}