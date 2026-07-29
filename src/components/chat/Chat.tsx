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
  } = useChat();


  return (
    <main className="flex h-screen bg-muted/40">

      <div className="mx-auto flex h-full w-full max-w-5xl flex-col bg-background shadow-xl">

        <ChatHeader />


        <ChatMessages
          messages={messages}
        />


        <ChatInput
          sendMessage={sendMessage}
          status={status}
          stop={stop}
        />


      </div>

    </main>
  );
}