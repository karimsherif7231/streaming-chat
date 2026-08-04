"use client";

import { useChat } from "@ai-sdk/react";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

export default function Chat() {
  const {
    messages,
    sendMessage,
    status,
    stop,
    error,
  } = useChat();

  return (
    <main className="flex h-screen bg-muted/40">
      <div className="mx-auto flex h-full w-full max-w-5xl flex-col bg-background shadow-xl">
        <ChatHeader />

        {error && (
          <div className="mx-4 mt-4 rounded-xl border border-red-300 bg-red-50 p-4">
            <h3 className="font-semibold text-red-700">
              Something went wrong
            </h3>

            <p className="mt-1 text-sm text-red-600">
              Failed to generate a response. Please try again.
            </p>

            <button
              onClick={() => window.location.reload()}
              className="mt-3 rounded-lg bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
            >
              Retry
            </button>
          </div>
        )}

        {messages.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <h2 className="text-2xl font-semibold">
              No conversation yet
            </h2>

            <p className="max-w-md text-muted-foreground">
              Start a conversation or try one of the examples below.
            </p>

            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() =>
                  sendMessage({
                    text: "Explain React Hooks",
                  })
                }
                className="rounded-lg border px-4 py-2 hover:bg-muted"
              >
                Explain React Hooks
              </button>

              <button
                onClick={() =>
                  sendMessage({
                    text: "Build a Todo App",
                  })
                }
                className="rounded-lg border px-4 py-2 hover:bg-muted"
              >
                Build a Todo App
              </button>
            </div>
          </div>
        ) : (
          <ChatMessages messages={messages} />
        )}

        <ChatInput
          sendMessage={sendMessage}
          status={status}
          stop={stop}
        />
      </div>
    </main>
  );
}