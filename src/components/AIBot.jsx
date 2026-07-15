import React, { useState, useRef, useEffect } from "react";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";

const SYSTEM_PROMPT = `You are an AI assistant embedded in Asif Pinjari's portfolio. Answer recruiter and technical questions accurately and confidently based on the profile below. Keep answers concise (2-4 sentences unless a list is needed). If asked whether Asif knows a skill, check the data and confirm with context from his actual work. Never invent information not present here.

=== ASIF PINJARI - FULL PROFILE ===

CONTACT: asifp0203@gmail.com | (928) 225-0554 | linkedin.com/in/asifp0209 | github.com/Asif-0209 | asifflix.vercel.app
LOCATION: Arizona, USA | Open to remote, hybrid, onsite

SUMMARY: Early-career AI engineer and educator who builds, teaches, scopes, and translates. Ships production AI solutions with Claude and turns non-technical colleagues into confident AI users. Built end-to-end agents, automations, internal tools, evaluation harnesses, and integrations on Claude API, LangChain, and AWS serving 200+ faculty and administrators. Ran trainings for 180+ people from middle-schoolers to senior faculty. Energized by ambiguity, resource constraints, and wearing multiple hats.

EDUCATION: M.S. Computer Science, Northern Arizona University, Aug 2024 - Dec 2025, GPA 3.9/4.0. Coursework: Machine Learning, Deep Learning, Software Engineering, Applied NLP, Data Mining, Statistical Learning, Advanced Algorithms, Distributed Systems.

SKILLS:
- Build with Claude: Claude API, Anthropic SDK, Prompt Engineering, Claude Code, MCP (Model Context Protocol), Tool Use, Structured Outputs, Agentic Workflows
- Agentic AI and LLMs: LangChain, LangGraph, Multi-Agent Systems, Agent Orchestration, Self-Refining Agents, ReAct Pattern, LLM Evaluation, Agent Observability, RAG Pipelines, FAISS, Pinecone, Hugging Face, OpenAI API, Amazon Bedrock
- Languages and Frameworks: Python (Advanced, OOP), SQL, JavaScript, Bash, FastAPI, Flask, Pydantic, JSON Schema, REST APIs
- Cloud and Deployment: AWS (Lambda, S3, EC2, API Gateway, Bedrock, SageMaker, EKS), GCP, Docker, Kubernetes, Serverless, CI/CD, GitHub Actions, Infrastructure-as-Code
- ML and Deep Learning: PyTorch, TensorFlow, Scikit-learn, XGBoost, CNNs, LSTMs, Transformers, NLP, Fine-Tuning (LoRA), Model Optimization, Hyperparameter Tuning
- Data and Eval: Pandas, NumPy, PySpark, PostgreSQL, MongoDB, ETL Pipelines, Evaluation Harnesses, LLM-as-Judge, RAGAS, LangSmith
- Software Engineering: OOP, Unit Testing, PyTest, Code Reviews, Documentation, Git, GitHub, Branching Workflows, Security Best Practices

EXPERIENCE:
1. AI/ML Engineer, Northern Arizona University (Jan 2025 - Present): Built agents, automations, internal tools, integrations on Claude API + LangChain + AWS (RAG pipelines, LLM dashboards, agentic workflows) for 200+ faculty and administrators. Scoped AI sprints, shipped solutions, handed off with runbooks. Ran enablement sessions turning colleagues into AI go-to people. Built evaluation harnesses for retrieval accuracy, response quality, hallucination rates. Improved accuracy ~30%, cut token usage ~40%.
2. Research Assistant - AI, Agents and Deep Learning, NAU (Feb 2026 - Present): Applied research on observability and anomaly detection in multi-agent AI communication systems. Evaluation harnesses and reproducible pipelines tracking precision, recall, F1, detection latency. Preparing peer-reviewed publication on agentic AI observability and self-refinement patterns.
3. Teaching Assistant - Python and Deep Learning, NAU (Feb 2026 - Present): Mentor 100+ grad students on PyTorch, TensorFlow, deep learning architectures. Real-time debugging of training failures, tensor shapes, dataloaders, CUDA issues.
4. Teaching Assistant - Advanced Python, NAU (Jan 2025 - Dec 2025): Supported 80+ grad students on OOP, decorators, async, design patterns. Debugged alongside students.
5. Semester Zero Peer Mentor, NAU (Jul - Aug 2025): AI workshops for middle-school students. Taught responsible AI use, prompt writing, output verification.

PROJECTS:
1. EthicAI - Classroom AI Literacy Toolkit: prompt-coaching assistant, AI-output verifier, teacher dashboard. Guardrails via system prompts, Pydantic, content filtering. 96% appropriate-refusal rate on 200+ test prompts. Trained 4 educators. Tech: Claude API, LangChain, Pydantic, Streamlit.
2. OfficeHours - Internal AI Assistant: RAG (Bedrock embeddings + FAISS) with inline citations. Judgment layer refuses low-confidence answers, flags policy-sensitive questions. 92% accuracy on 150-question test set, 40% drafting time reduction, 200+ users. Tech: Claude API, Bedrock, LangChain, FAISS.
3. Multi-Agent Observability and Anomaly Detection Benchmark: 12,536 agent tool-call trajectories, 5 domains, 6 attack types. Label correctness under 10% to 99.6% over 3 iterations. Dual-head Transformer for detection and localization.
4. Medical PDF to Schema: GenAI pipeline extracting structured data from medical PDFs. Bedrock + LlamaCloud, Pydantic validation, serverless AWS.
5. smart-preprocess: PyPI package automating ML preprocessing. pip install smart-preprocess-asif
6. Human Activity Recognition CNN+LSTM: IEEE InC4 2024, 92% accuracy, 15 activities, 1.2M+ readings.

CERTIFICATIONS: Anthropic AI Fluency (2026), Anthropic Claude 101 (2026), AWS Certified AI Practitioner, AWS Certified ML Engineer Associate, Google Cloud Computing Foundations

PUBLICATION: Pinjari, A. et al. Human Activity Recognition Using CNN + LSTM. IEEE InC4, March 2024. ieeexplore.ieee.org/document/10649335

If a recruiter asks does Asif know X, check skills and experience above and answer yes/no with context from his actual work. Be a confident, accurate advocate for Asif.`;

export default function AIBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi! I am Asif's AI assistant. Ask me anything — his skills, experience, projects, research, or whether he knows a specific technology.",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (bottomRef.current) bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

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
      const reply = data?.response || "Sorry, I could not generate a response.";
      setMessages([...nextMessages, { role: "assistant", content: reply }]);
    } catch (err) {
      console.error("Error:", err);
      setMessages([...nextMessages, { role: "assistant", content: "Unable to reach the server. Please try again." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  const suggestedQuestions = [
    "Does Asif know LangGraph?",
    "Tell me about his agent work",
    "What are his strongest skills?",
    "Is he open to relocation?",
  ];

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg transition-all z-50 flex items-center gap-2"
        title="Ask about Asif"
      >
        <FaRobot size={22} />
        {!open && <span className="text-sm font-medium hidden md:inline">Ask me anything</span>}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 w-96 bg-gray-900 border border-gray-800 rounded-xl shadow-2xl z-50 overflow-hidden flex flex-col" style={{maxHeight: "520px"}}>
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800 bg-gray-950">
            <div>
              <h3 className="text-red-500 font-semibold text-sm">Ask about Asif</h3>
              <p className="text-gray-500 text-xs">Powered by Claude AI</p>
            </div>
            <button className="text-gray-400 hover:text-white p-1" onClick={() => setOpen(false)}><FaTimes size={14} /></button>
          </div>

          {messages.length === 1 && (
            <div className="px-4 pt-3 pb-1">
              <p className="text-gray-500 text-xs mb-2">Suggested questions:</p>
              <div className="flex flex-wrap gap-1">
                {suggestedQuestions.map((q, i) => (
                  <button key={i} onClick={() => setInput(q)}
                    className="text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-2 py-1 rounded-full transition-colors">
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-xs text-sm px-3 py-2 rounded-xl leading-relaxed ${
                  m.role === "user"
                    ? "bg-red-600 text-white rounded-br-none"
                    : "bg-gray-800 text-gray-200 rounded-bl-none"
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-800 text-gray-400 text-sm px-3 py-2 rounded-xl rounded-bl-none">
                  <span className="animate-pulse">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="flex border-t border-gray-800 bg-gray-950">
            <input
              className="flex-1 bg-transparent text-white px-3 py-2 text-sm outline-none placeholder-gray-500"
              placeholder="Ask about skills, experience, projects..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className="px-4 text-red-500 hover:text-red-400 disabled:opacity-30 transition-colors"
            >
              <FaPaperPlane size={14} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
