import { createOpenAI } from "@ai-sdk/openai";


const openrouter = createOpenAI({

  apiKey: process.env.OPENROUTER_API_KEY,

  baseURL:
    "https://openrouter.ai/api/v1",

});


export const model = openrouter(
  "openrouter/free"
);


export const systemPrompt = `
You are a helpful AI assistant.

Always answer clearly.
`;