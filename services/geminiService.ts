import { GoogleGenAI } from "@google/genai";

let ai: GoogleGenAI | null = null;

const getAIClient = () => {
  if (!ai) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return ai;
};

export const getStylistAdvice = async (userQuery: string): Promise<string> => {
  try {
    const client = getAIClient();
    const systemInstruction = `
      You are 'Lumi', the premier AI Jewelry Stylist for Lustree. 
      Lustree is a high-end luxury jewelry brand known for timeless elegance, gold, diamonds, and rare gemstones.
      
      Your Goal: Provide sophisticated, warm, and helpful advice to customers looking for jewelry.
      
      Guidelines:
      1. Tone: Elegant, professional, yet inviting and personal. Avoid slang.
      2. Recommendations: Suggest types of jewelry (Rings, Necklaces, Earrings) based on the occasion or style described.
      3. Brand: Always refer to the quality of materials (18k Gold, Platinum, ethically sourced gems).
      4. Brevity: Keep responses concise (under 100 words) but impactful.
      
      If the user asks about prices, mention that our collection ranges from accessible luxury ($500) to high jewelry ($10,000+).
    `;

    const response = await client.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userQuery,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "I apologize, I am currently polishing the silver. Please ask again in a moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am having trouble connecting to the styling archives. Please try again later.";
  }
};