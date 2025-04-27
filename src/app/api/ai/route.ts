import { generateCaseFile } from "@/utils/prompts";
import { complete } from "@/utils/AIApi";

export async function GET(req: Request) {
  try {
    // const body = req.json()
    const prompt = generateCaseFile({})
    const content = await complete({prompt, temperature: 1, max_tokens: 2000});
    return Response.json(content, { status: 200 });
  } catch (error) {
    return Response.json({ error: error }, { status: 500 });
  }
}
