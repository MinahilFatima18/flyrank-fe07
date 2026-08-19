'use client';

import { useChat } from '@ai-sdk/react';
import { useState } from 'react';
import { ChatMessage } from '@/components/ChatMessage';

export default function Chat() {
  const { messages, sendMessage } = useChat();
  const [input, setInput] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage({ text: input });
    setInput('');
  };

  return (
    <div className="mx-auto max-w-2xl p-6">
      <h1 className="mb-4 text-xl font-bold">Lead Scoring Assistant</h1>

      <div className="mb-4 space-y-2">
        {messages.map((m) => (
          <ChatMessage key={m.id} message={m} />
        ))}
      </div>

      <form onSubmit={onSubmit} className="flex gap-2">
        <input
          className="flex-1 rounded-lg border p-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g. Score this lead: Acme, SaaS, 250 employees"
        />
        <button className="rounded-lg bg-black px-4 py-2 text-white" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}