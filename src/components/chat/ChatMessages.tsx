"use client";

import { useEffect, useRef, useState } from "react";
import ChatMessage from "./ChatMessage";
import ThinkingIndicator from "./ThinkingIndicator";


interface Props {
  messages: any[];
}


export default function ChatMessages({
  messages,
}: Props) {

  const scrollRef = useRef<HTMLDivElement>(null);

  const [isAtBottom, setIsAtBottom] = useState(true);


  const handleScroll = () => {

    const element = scrollRef.current;

    if (!element) return;


    const atBottom =
      element.scrollHeight - element.scrollTop <=
      element.clientHeight + 80;


    setIsAtBottom(atBottom);
  };


  const scrollToBottom = () => {

    const element = scrollRef.current;

    if (!element) return;


    element.scrollTo({
      top: element.scrollHeight,
      behavior: "smooth",
    });

  };


  useEffect(() => {

    if (isAtBottom) {
      scrollToBottom();
    }

  }, [messages, isAtBottom]);



  const isThinking =
    messages.length > 0 &&
    messages[messages.length - 1].role === "user";



  return (

    <section
      ref={scrollRef}
      onScroll={handleScroll}
      className="relative flex-1 overflow-y-auto px-6 py-8"
    >

      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">


        {messages.map((message) => (

          <ChatMessage
            key={message.id}
            role={message.role}
            content={
              message.parts
                ?.filter(
                  (part:any)=>part.type==="text"
                )
                .map(
                  (part:any)=>part.text
                )
                .join("") ?? ""
            }
          />

        ))}



        {isThinking && (
          <ThinkingIndicator />
        )}


      </div>



      {!isAtBottom && (

        <button
          onClick={scrollToBottom}
          className="
            fixed
            bottom-24
            left-1/2
            -translate-x-1/2
            rounded-full
            bg-primary
            px-4
            py-2
            text-sm
            text-primary-foreground
            shadow-lg
            hover:opacity-90
          "
        >
          Jump to latest
        </button>

      )}



    </section>

  );
}