This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

---

## Tool: scoreLead

A server-side AI SDK tool that scores a sales lead 0–100 based on company info. Defined in `lib/tools/score-lead.ts` and wired into the chat route at `app/api/chat/route.ts`.

**Schema:**
- `companyName` (string, required) — Name of the company
- `industry` (string, required) — Industry vertical, e.g. SaaS, retail, fintech
- `companySize` (number, optional) — Employee count, if known

**Returns:**