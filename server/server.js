import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = 5050;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.post("/api/chat", async (req, res) => {
  console.log("✅ Received request at /api/chat");
  console.log("🔹 Messages:", req.body.messages);
  console.log("🔑 API Key exists?", !!process.env.OPENAI_API_KEY);

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: req.body.messages,
      }),
    });

    const data = await response.json();
    console.log("🧠 OpenAI Response:", data);
    res.json(data);
  } catch (error) {
    console.error("❌ Error contacting OpenAI:", error);
    res.status(500).json({ error: "OpenAI request failed" });
  }
});

app.listen(PORT, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
