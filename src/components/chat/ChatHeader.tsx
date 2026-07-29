"use client";

import { Bot, Sparkles } from "lucide-react";

export default function ChatHeader() {
  return (
    <header className="sticky top-0 z-20 border-b bg-background/90 backdrop-blur">
      <div className="flex h-16 items-center justify-between px-6">

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow">

            <Bot className="h-5 w-5" />

          </div>

          <div>

            <h1 className="font-semibold text-lg">

              AI Assistant

            </h1>

            <p className="text-sm text-muted-foreground">

              Streaming Chat Interface

            </p>

          </div>

        </div>

        <div className="flex items-center gap-2 rounded-full border px-3 py-1 text-xs">

          <Sparkles className="h-4 w-4 text-yellow-500" />

          Gemini Ready

        </div>

      </div>
    </header>
  );
}