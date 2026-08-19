'use client';

export function ToolSkeleton({ label }: { label: string }) {
  return (
    <div className="animate-pulse rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-400">
      {label}
    </div>
  );
}

export function ToolRunning({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm text-blue-600">
      <span className="h-2 w-2 animate-ping rounded-full bg-blue-500" />
      {label}
    </div>
  );
}

export function ScoreCard({
  result,
}: {
  result: { companyName: string; score: number; factors: string[] };
}) {
  return (
    <div className="rounded-xl border border-green-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-gray-800">{result.companyName}</h4>
        <span className="text-2xl font-bold text-green-600">{result.score}</span>
      </div>
      <ul className="mt-2 space-y-1 text-sm text-gray-500">
        {result.factors.map((f) => (
          <li key={f}>• {f}</li>
        ))}
      </ul>
    </div>
  );
}

export function ToolError({ message }: { message: string }) {
  return (
    <div className="rounded-xl border border-red-300 bg-red-50 p-4 text-red-700">
      <strong className="block text-sm">Couldn't score this lead</strong>
      <p className="mt-1 text-sm">{message}</p>
    </div>
  );
}