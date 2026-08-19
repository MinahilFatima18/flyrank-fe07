import { streamText, convertToModelMessages } from 'ai';
import { google } from '@ai-sdk/google';
import { scoreLead } from '@/lib/tools/score-lead';

export async function POST(req: Request) {
  const body = await req.json();
  const messages = body.messages ?? [];

  const modelMessages = await convertToModelMessages(messages);

  const result = streamText({
    model: google('gemini-3.6-flash'),
    messages: modelMessages,
    tools: { scoreLead },
  });

  return result.toUIMessageStreamResponse();
}