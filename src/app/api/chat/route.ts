import { streamText, convertToModelMessages } from "ai";
import { model, systemPrompt } from "@/lib/ai/model";


export async function POST(req: Request) {

  const { messages } = await req.json();

  const modelMessages = await convertToModelMessages(messages);


  const result = streamText({

    model,

    system: systemPrompt,

    messages: modelMessages,

  });


  return result.toUIMessageStreamResponse();

}