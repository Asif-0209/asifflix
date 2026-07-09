import React, { useState, useRef, useEffect } from "react";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";

const SYSTEM_PROMPT = `You are an AI assistant embedded in Asif Pinjari's portfolio. You know everything about Asif from his master resume below. Answer recruiter and technical questions accurately and confidently. Keep answers concise (2-4 sentences max unless a detailed list is needed). If asked whether Asif knows a skill or technology, check the data below and confirm with context. Never make up information not in the data.

=== ASIF PINJARI — FULL PROFILE ===

CONTACT: asifp0203@gmail.com | (928) 225-0554 | linkedin.com/in/asifp0209 | github.com/Asif-0209 | asifflix.vercel.app
LOCATION: Arizona, USA | OPT (requires H1B sponsorship) | Willing to relocate anywhere in US | Open to remote, hybrid, or onsite

TARGET ROLES: AI/ML Engineer, AI Engineer, Agentic AI Engineer, Generative AI Engineer, LLM Engineer, Applied Research Engineer, Deep Learning Engineer, MLOps Engineer, NLP Engineer

EDUCATION: M.S. Computer Science, Northern Arizona University, Aug 2024 — Dec 2025, GPA 3.9/4.0

SKILLS:
- GenAI & LLMs: LangChain, LangGraph, LlamaIndex, LiteLLM, Amazon Bedrock, Claude API, OpenAI API, Hugging Face, Prompt Engineering, LLM Fine-Tuning (LoRA/QLoRA/PEFT), RAG Pipelines, Vector Databases (FAISS, ChromaDB), Semantic Search, Embeddings, Semantic Caching, Automatic Fallbacks, Structured Output (Pydantic), LangSmith, LLM Evaluation, LLM-as-Judge
- Agentic AI: Multi-Agent Orchestration, ReAct Agents, Deep Agents, Sub-agents, Stateful Graph Workflows, Model Context Protocol (MCP), Human-in-the-Loop, Tool Use, Agent Observability, AI Safety & Guardrails, Prompt Injection Detection, PII Redaction, n8n, Zapier
- ML & Deep Learning: PyTorch, TensorFlow, Scikit-learn, XGBoost, CNNs, RNNs, LSTMs, Transformers, NLP, Computer Vision, Anomaly Detection, Feature Engineering, Model Optimization
- Cloud & MLOps: AWS (Lambda, S3, EC2, Bedrock, SageMaker, API Gateway), GCP, Vertex AI, Docker, Kubernetes, CI/CD (GitHub Actions), MLflow, Terraform, Serverless, TensorFlow Lite
- Data & Languages: Python, TypeScript, JavaScript, SQL, React, Pandas, NumPy, Apache Spark, PostgreSQL, MySQL, MongoDB, ETL Pipelines, FastAPI, Flask, JSON Schema, REST APIs, Git, Jupyter, Linux, Bash

EXPERIENCE:
1. AI/ML Engineer, Northern Arizona University (Jul 2025 — Present)
   - Architected production LLM apps using LangChain and LangGraph on AWS Bedrock with multi-agent orchestration, RAG pipelines, reducing manual data-gathering 40% for 3 departments
   - Fine-tuned LLMs using LoRA/QLoRA/PEFT on domain-specific datasets, improving task accuracy and reducing inference cost
   - Built end-to-end ML pipelines (ingestion, feature engineering, training, validation, deployment) improving model accuracy 30%
   - Deployed containerized FastAPI inference services on AWS and GCP with Docker, CI/CD via GitHub Actions
   - Integrated LLM analytics dashboards for 200+ faculty and administrators
   - Authored technical docs and onboarding guides enabling non-technical stakeholders to operate LLM tools

2. Software Engineer — Machine Learning, Vincon Reality Pvt. Ltd. (Sep 2022 — May 2024, India)
   - Shipped production Python systems integrating ML inference with IoT device control, improving automation efficiency 40%
   - Optimized inference with quantization and pruning to sub-50ms latency across 10+ products
   - Built SQL/Python data pipelines for scheduled retraining from high-volume telemetry
   - Introduced CI with automated regression tests cutting defects 30%

RESEARCH (Northern Arizona University, Feb 2026 — Present):
- Built first benchmark of 12,536 LLM-agent tool-call trajectories with step-level prompt-injection labels (5 agent domains, 6 attack types)
- Automated data generation pipeline on NAU HPC cluster using Llama-3.3-70B with parallel SLURM jobs
- Drove label correctness from under 10% to 99.6% across 3 iterations (validated against 1,200+ manual reviews)
- Architected dual-head Transformer encoder for trajectory-level injection detection and step-level localization
- Evaluation designed around 1,500 hard negatives; working toward peer-reviewed publication

OPEN SOURCE:
- smart-preprocess: pip install smart-preprocess-asif | https://pypi.org/project/smart-preprocess-asif/
  PyPI package automating ML data preprocessing — cleaning, encoding, normalization, missing values. CI-driven versioned releases.

PUBLICATION:
- IEEE InC4 2024: "Combining Deep Learning Techniques for Enhanced Human Activity Recognition: A Hybrid CNN-LSTM Fusion Approach"
  92% accuracy on 15-class problem, 1.2M+ sensor readings, PyTorch, GPU training
  URL: https://ieeexplore.ieee.org/document/10649335

CREDENTIALS: AWS Certified AI Practitioner, AWS Certified ML Engineer Associate, Google Cloud Computing Foundations (12 badges), PyPI Author, IEEE Published Author

KEY METRICS: 40% reduction in data-gathering time, 30% model accuracy improvement, 200+ enterprise users, sub-50ms edge inference, 99.6% label accuracy on 12,536-sample benchmark, 92% classification accuracy (IEEE published)

PROJECTS ON PORTFOLIO:
1. Agent Security Benchmark — prompt injection detection using dual-head Transformer, HPC-generated dataset
2. Medical PDF Schema Extraction — LangChain + Amazon Bedrock + LlamaCloud + AWS Lambda pipeline
3. smart-preprocess — PyPI open-source ML preprocessing library
4. Human Activity Recognition — CNN+LSTM, IEEE published, 92% accuracy

If a recruiter asks "does Asif know X?" — check the skills and experience above and answer with yes/no plus relevant context from his actual work. Be a confident, accurate advocate for Asif.`;

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
