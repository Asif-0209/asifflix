import React, { useState } from "react";
import { FaRobot } from "react-icons/fa";

const SYSTEM_PROMPT = `
You are Asif’s AI portfolio assistant. Be concise and helpful.
You can answer about Asif’s projects, skills, education, experience, and contact info.
If asked something unrelated, politely steer back to the portfolio.
`;

export default function AIBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi 👋 I’m Asif’s AI assistant! Ask me about projects, skills, education, experience, or contact.",
    },
  ]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const nextMessages = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...nextMessages.map(({ role, content }) => ({ role, content })),
          ],
        }),
      });

      if (!res.ok) throw new Error(`Server error: ${res.status}`);
      const data = await res.json();

      console.log("🔹 Server response:", data);

      // ✅ Handle your server's clean format:
      const reply =
        data?.response || // from backend
        data?.choices?.[0]?.message?.content || // fallback for OpenAI raw response
        "⚠️ Sorry, I couldn’t generate a response.";

      setMessages([...nextMessages, { role: "assistant", content: reply }]);
    } catch (err) {
      console.error("❌ Error:", err);
      setMessages([
        ...nextMessages,
        { role: "assistant", content: "⚠️ Unable to reach the server." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <>
      {/* Floating AI Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg transition-all z-50"
        title="Ask Asif"
      >
        <FaRobot size={22} />
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 bg-gray-900 border border-gray-800 rounded-xl shadow-2xl z-50 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
            <h3 className="text-red-500 font-semibold">Ask Asif 🤖</h3>
            <button
              className="text-gray-400 hover:text-white"
              onClick={() => setOpen(false)}
              title="Close"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="h-72 overflow-y-auto px-4 py-3 space-y-2">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`text-sm ${
                  m.role === "user"
                    ? "text-red-300 text-right"
                    : "text-gray-200 text-left"
                }`}
              >
                {m.content}
              </div>
            ))}
            {loading && <div className="text-gray-400 text-sm">Thinking…</div>}
          </div>

          {/* Input */}
          <div className="flex border-t border-gray-800">
            <input
              className="flex-1 bg-gray-800 text-white px-3 py-2 text-sm outline-none"
              placeholder="Ask about projects, skills..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              onClick={sendMessage}
              className="bg-red-600 hover:bg-red-700 px-4 text-sm"
              disabled={loading}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
