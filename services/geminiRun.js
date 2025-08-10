const { GoogleGenAI } = require("@google/genai");
const dotenv = require("dotenv");

dotenv.config();

const api_key = process.env.API_KEY;

const genAI = new GoogleGenAI(api_key);

const geminiRun = async (promt) => {
  const result = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: promt,
  });
  const response = result.response;
  const text = response.text();
  return text;
};

module.exports = geminiRun;
