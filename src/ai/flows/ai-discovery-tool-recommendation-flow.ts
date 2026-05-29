
'use server';
/**
 * @fileOverview An AI agent that recommends UniTool utilities based on user's natural language input.
 *
 * - aiDiscoveryToolRecommendation - A function that handles the utility recommendation process.
 * - AIDiscoveryToolRecommendationInput - The input type for the aiDiscoveryToolRecommendation function.
 * - AIDiscoveryToolRecommendationOutput - The return type for the aiDiscoveryToolRecommendation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIDiscoveryToolRecommendationInputSchema = z
  .string()
  .describe('The user\u0027s natural language description of their need or task.');
export type AIDiscoveryToolRecommendationInput = z.infer<
  typeof AIDiscoveryToolRecommendationInputSchema
>;

const AIDiscoveryToolRecommendationOutputSchema = z.object({
  recommendedTool: z
    .enum([
      'Private Media Vault',
      'Status Saver',
      'All Conversion Tools',
      'All Image Tools',
      'Age Calculation',
      'All PDF Tools',
      'All Video Tools',
      'All AI Writer Tools',
      'Ringtone Maker',
      'Play Games',
      'Maths Solver',
      'Background Remover',
      'Student ID Card',
      'Mobile Comparison',
      'Visiting Card Maker',
      'Enhance Images'
    ])
    .describe('The name of the recommended UniTool utility.'),
  explanation: z
    .string()
    .describe('A brief explanation of why this utility is recommended.'),
});
export type AIDiscoveryToolRecommendationOutput = z.infer<
  typeof AIDiscoveryToolRecommendationOutputSchema
>;

export async function aiDiscoveryToolRecommendation(
  input: AIDiscoveryToolRecommendationInput
): Promise<AIDiscoveryToolRecommendationOutput> {
  return aiDiscoveryToolRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'uniToolRecommendationPrompt',
  input: {schema: AIDiscoveryToolRecommendationInputSchema},
  output: {schema: AIDiscoveryToolRecommendationOutputSchema},
  prompt: `You are an AI assistant for UniTool. Your task is to recommend the most relevant utility from the available list based on the user's request.

Available UniTool Utilities:
- Private Media Vault: Securely hide and encrypt photos/videos with AES-256.
- Status Saver: Save and share photos & videos from WhatsApp and Business status.
- All Conversion Tools: Convert files between multiple formats easily (Audio, Video, PDF, etc).
- All Image Tools: Access all image editing, resizing, and design tools.
- Age Calculation: Calculate exact age from date of birth.
- All PDF Tools: PDF editing, compression, merging, and conversion.
- All Video Tools: Video download and editing tools.
- All AI Writer Tools: Generate content using powerful AI writing assistants.
- Ringtone Maker: Create Custom Name Caller Ringtones.
- Play Games: Access a curated collection of free online games for entertainment.
- Maths Solver: Solve math problems step by step using AI.
- Background Remover: Remove image background automatically using AI.
- Student ID Card: Generate demo student ID card images.
- Mobile Comparison: Compare mobile specifications and prices.
- Visiting Card Maker: Create professional Visiting Card designs.
- Enhance Images: Upscale and enhance low quality photos into HD images.

User Request: {{{input}}}

Based on the user's request, recommend the most suitable utility and provide a brief explanation. Ensure the recommendedTool exactly matches one of the provided utility names.
`,
});

const aiDiscoveryToolRecommendationFlow = ai.defineFlow(
  {
    name: 'aiDiscoveryToolRecommendationFlow',
    inputSchema: AIDiscoveryToolRecommendationInputSchema,
    outputSchema: AIDiscoveryToolRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
