import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.API_KEY,
  // defaultHeaders: {
  //   "HTTP-Referer": "...", // Optional. Site URL for rankings on openrouter.ai.
  //   "X-Title": "...", // Optional. Site title for rankings on openrouter.ai.
  // },
});

export async function complete({
  prompt,
  temperature,
  max_tokens,
}: {
  prompt: string;
  temperature: number;
  max_tokens: number;
}) {
  const completion = await openai.chat.completions.create({
    model: "deepseek/deepseek-r1-distill-llama-70b:free",
    messages: [
      {
        role: "user",
        content: prompt,
        //   "Write a story about a lost dragon who finds its way home., do not include reasoning",
      },
    ],
    temperature,
    max_tokens,
  });
  return completion.choices[0].message.content;
}
