import { tool } from 'ai';
import { z } from 'zod';

export const scoreLead = tool({
  description: 'Scores a sales lead 0-100 based on company info',
  inputSchema: z.object({
    companyName: z.string().describe('Name of the company'),
    industry: z.string().describe('Industry vertical, e.g. SaaS, retail, fintech'),
    companySize: z.number().optional().describe('Employee count if known'),
  }),
  execute: async ({ companyName, industry, companySize }) => {
    if (!companyName || companyName.trim().length === 0) {
      throw new Error('Company name is required to score a lead.');
    }

    let score = 50;
    if (['SaaS', 'fintech', 'AI'].includes(industry)) score += 20;
    if (companySize && companySize > 200) score += 15;
    if (!companySize) score -= 5;
    score = Math.max(0, Math.min(100, score));

    return {
      companyName,
      score,
      factors: [
        `Industry: ${industry}`,
        companySize ? `Size: ${companySize} employees` : 'Size unknown',
      ],
    };
  },
});