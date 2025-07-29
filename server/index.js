const express = require("express");
const cors = require("cors");
require("dotenv").config();

const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("NxtUp Movie Recommendation is active.");
});

app.post("/api/recommend", async (req, res) => {
  const { answers } = req.body;

  // Log incoming answers
  console.log(`📥 [${new Date().toISOString()}] New movie recommendation request:`);
  answers.forEach((answer, index) => {
    console.log(`  Q${index + 1}: ${answer}`);
  });

  try {
    const prompt = `Based on these preferences, recommend a movie:\n\n${answers
      .map((a, i) => `Q${i + 1}: ${a}`)
      .join("\n")}\n\nGive a short, tailored recommendation.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    const result = completion.choices[0].message.content;

    console.log("✅ Recommendation generated successfully.");
    res.json({ result });
  } catch (err) {
    console.error("❌ Error generating recommendation:", err);
    res.status(500).json({ error: "AI recommendation failed." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on https://nxtup.onrender.com`);
});
