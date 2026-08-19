'use client';

import { ToolSkeleton, ToolRunning, ScoreCard, ToolError } from './ToolParts';

export function ChatMessage({ message }: { message: any }) {
  return (
    <div className="mb-4">
      <strong className="block text-sm text-gray-400">
        {message.role === 'user' ? 'You' : 'AI'}
      </strong>

      {message.parts?.map((part: any, i: number) => {
        if (part.type === 'text') {
          return <p key={i}>{part.text}</p>;
        }

        if (part.type === 'tool-scoreLead') {
          if (part.state === 'input-streaming') {
            return <ToolSkeleton key={i} label="Reading lead details..." />;
          }
          if (part.state === 'input-available') {
            return (
              <ToolRunning
                key={i}
                label={`Scoring ${part.input?.companyName ?? '...'}`}
              />
            );
          }
          if (part.state === 'output-available') {
            return <ScoreCard key={i} result={part.output} />;
          }
          if (part.state === 'output-error') {
            return <ToolError key={i} message={part.errorText ?? 'Tool failed'} />;
          }
        }

        return null;
      })}
    </div>
  );
}