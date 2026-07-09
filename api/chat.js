export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: "Missing API key" });
    }

    const { messages = [] } = req.body || {};

    // Separate system message from conversation messages
    const systemMsg = messages.find(m => m.role === "system");
    const conversationMsgs = messages.filter(m => m.role !== "system");

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 500,
        system: systemMsg ? systemMsg.content : "You are a helpful AI assistant.",
        messages: conversationMsgs,
      }),
    });

    const data = await response.json();
    const reply = data?.content?.[0]?.text || "Sorry, I could not generate a response.";
    return res.status(200).json({ response: reply });
  } catch (err) {
    console.error("API error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
