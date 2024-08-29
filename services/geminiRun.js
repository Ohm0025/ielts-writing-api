const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const geminiRun = async (promt) => {
  const genAI = new GoogleGenerativeAI(process.env.API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(promt);
  const response = result.response;
  const text = response.text();
  return text;
};

module.exports = geminiRun;
