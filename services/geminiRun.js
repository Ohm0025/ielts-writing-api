const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");

dotenv.config();

const api_key = process.env.API_KEY;

const genAI = new GoogleGenerativeAI(api_key);

const geminiRun = async (promt) => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(promt);
  const response = result.response;
  const text = response.text();
  return text;
};

module.exports = geminiRun;
