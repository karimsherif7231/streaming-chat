"use client";

import { useState } from "react";
import { Send, Square } from "lucide-react";


interface Props {

  sendMessage: (message: {
    text: string;
  }) => void;

  stop: () => void;

  status: string;

}



export default function ChatInput({

  sendMessage,

  stop,

  status,

}: Props) {


  const [input, setInput] = useState("");


  const isGenerating =
    status === "streaming";



  function submit() {

    if (!input.trim() || isGenerating) return;


    sendMessage({
      text: input.trim(),
    });


    setInput("");

  }



  function handleKeyDown(
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ) {

    if (
      e.key === "Enter" &&
      !e.shiftKey
    ) {

      e.preventDefault();

      submit();

    }

  }



  return (

    <footer className="border-t bg-background p-3 sm:p-4">


      <div
        className="
        mx-auto
        flex
        max-w-3xl
        items-end
        gap-2
        sm:gap-3
        "
      >


        <textarea

          value={input}

          onChange={(e)=>
            setInput(e.target.value)
          }

          onKeyDown={handleKeyDown}

          disabled={isGenerating}

          placeholder="Ask anything..."

          rows={1}

          className="
          min-h-12
          max-h-40
          flex-1
          resize-none
          rounded-xl
          border
          px-3
          py-3
          text-sm
          outline-none
          focus:ring-2
          focus:ring-primary
          disabled:opacity-60
          sm:px-4
          "

        />



        <button

          onClick={
            isGenerating
            ? stop
            : submit
          }

          aria-label={
            isGenerating
            ? "Stop generation"
            : "Send message"
          }

          className="
          flex
          h-12
          w-12
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-primary
          text-primary-foreground
          transition
          hover:opacity-90
          "

        >

          {
            isGenerating

            ?

            <Square className="h-5 w-5"/>

            :

            <Send className="h-5 w-5"/>

          }


        </button>


      </div>


    </footer>

  );

}