import React from "react";

function Skills() {
  const skills = [
    {
      category: "Build with Claude",
      items: [
        "Claude API, Anthropic SDK, Claude Code",
        "MCP (Model Context Protocol), Tool Use, Structured Outputs",
        "Prompt Engineering, Agentic Workflows",
      ],
    },
    {
      category: "Agentic AI & LLMs",
      items: [
        "LangChain, LangGraph, Multi-Agent Systems, Agent Orchestration",
        "Self-Refining Agents, ReAct Pattern, Agent Observability",
        "RAG Pipelines, FAISS, Pinecone, Hugging Face, OpenAI API, Amazon Bedrock",
        "LLM Evaluation, LLM-as-Judge, RAGAS, LangSmith",
      ],
    },
    {
      category: "Languages & Frameworks",
      items: [
        "Python (Advanced, OOP), SQL, JavaScript, Bash",
        "FastAPI, Flask, Pydantic, JSON Schema, REST APIs",
      ],
    },
    {
      category: "ML & Deep Learning",
      items: [
        "PyTorch, TensorFlow, Scikit-learn, XGBoost",
        "CNNs, LSTMs, Transformers, NLP",
        "Fine-Tuning (LoRA), Model Optimization, Hyperparameter Tuning",
      ],
    },
    {
      category: "Cloud & Deployment",
      items: [
        "AWS (Lambda, S3, EC2, API Gateway, Bedrock, SageMaker, EKS), GCP",
        "Docker, Kubernetes, Serverless, Infrastructure-as-Code",
        "CI/CD, GitHub Actions",
      ],
    },
    {
      category: "Data & Eval",
      items: [
        "Pandas, NumPy, PySpark, PostgreSQL, MongoDB",
        "ETL Pipelines, Evaluation Harnesses",
      ],
    },
    {
      category: "Software Engineering",
      items: [
        "OOP, Unit Testing, PyTest, Code Reviews",
        "Git, GitHub, Branching Workflows, Documentation, Security Best Practices",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-black text-white px-6 md:px-10 py-16 border-t border-gray-800"
    >
      <h2 className="text-3xl font-semibold mb-8">🧠 Technical Skills</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((skillGroup, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg hover:shadow-red-600/20 transition-all duration-300 border border-gray-800"
          >
            <h3 className="text-xl font-bold text-red-500 mb-3">
              {skillGroup.category}
            </h3>

            <ul className="list-disc list-inside text-gray-300 space-y-2 leading-relaxed">
              {skillGroup.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

